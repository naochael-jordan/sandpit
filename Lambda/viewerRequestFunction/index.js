"use strict";

const crawlers = [
  "Googlebot",
  "facebookexternalhit",
  "Twitterbot",
  "bingbot",
  "msnbot"
];

const excludeSuffixes = [
  "jpg",
  "png",
  "gif",
  "jpeg",
  "svg",
  "css",
  "js",
  "json",
  "txt",
  "ico",
  "map"
];

const HTTP_HEAD_NEED_DR = "x-need-dynamic-render";

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  const suffix =
    request.uri == null || request.uri == "/"
      ? ""
      : request.uri
          .split("?")
          .shift()
          .split(".")
          .pop()
          .toLowerCase();
  const maybeHtml = !excludeSuffixes.some(es => es === suffix);

  const isCrawler = crawlers.some(c => {
    return headers["user-agent"][0].value.includes(c);
  });

  if (isCrawler && maybeHtml) {
    request.headers[HTTP_HEAD_NEED_DR] = [
      {
        key: "X-Need-Dynamic-Render",
        value: "true"
      }
    ];
  }

  callback(null, request);
};
