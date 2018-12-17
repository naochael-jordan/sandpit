"use strict";

const launchChrome = require("@serverless-chrome/lambda");
const CDP = require("chrome-remote-interface");
const puppeteer = require("puppeteer-core");

exports.handler = async (event, context, callback) => {
  const HTTP_HEAD_NEED_DR = "x-need-dynamic-render";
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  // クローラーじゃなかったら何もしない
  if (!headers[HTTP_HEAD_NEED_DR]) return callback(null, request);

  // クローラーだったら、ダイナミックレンダリングする
  let slsChrome = null;
  let browser = null;
  let page = null;

  try {
    // Chromeの立ち上げ
    slsChrome = await launchChrome();

    // WebSocketを使ってPuppeteerと繋げる
    browser = await puppeteer.connect({
      browserWSEndpoint: (await CDP.Version()).webSocketDebuggerUrl
    });

    page = await browser.newPage();
    await page.goto("https://d2swlp94c3hcbr.cloudfront.net/", {
      waitUntil: "networkidle0"
    });
    const html = await page.content();

    await browser.close();
    await slsChrome.kill();

    const response = {
      status: "200",
      statusDescription: "OK",
      headers: {
        "cache-control": [
          {
            key: "Cache-Control",
            value: "max-age=100"
          }
        ],
        "content-type": [
          {
            key: "Content-Type",
            value: "text/html"
          }
        ],
        "content-encoding": [
          {
            key: "Content-Encoding",
            value: "UTF-8"
          }
        ]
      },
      body: html.replace("<html", '<html style="background: #ff0;"') // 試しにボットの時だけ背景色を黄色に変えてみる
    };

    return callback(null, response);
  } catch (err) {
    return callback(err);
  }
};
