//
//  ViewController.swift
//  Omikuji
//
//  Created by Naoki Otsu on 2018/11/09.
//  Copyright © 2018年 Naochael. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    @IBAction func myButton(_ sender: Any) {
        let results = ["大吉", "中吉", "大凶"]
        let random = arc4random_uniform(UInt32(results.count))
        self.myLabel.text = results[Int(random)]
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        myLabel.layer.masksToBounds = true
        myLabel.layer.cornerRadius = myLabel.bounds.width / 2
    }


}

