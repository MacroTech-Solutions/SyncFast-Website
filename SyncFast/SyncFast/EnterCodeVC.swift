//
//  EnterCodeVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 11/2/19.
//  Copyright © 2019 Arya Tschand. All rights reserved.
//

import UIKit
import FirebaseDatabase
import CoreBluetooth
import QuartzCore



class EnterCodeVC: UIViewController, UITextFieldDelegate, BluetoothSerialDelegate {
    
    @IBOutlet weak var Connect: UIBarButtonItem!
    var enteredCode = ""
    var correspondingKey = ""
    var PresentationName: String = ""
    var sent = false
    
    
    @IBAction func Connect(_ sender: Any) {
        if serial.connectedPeripheral == nil {
            performSegue(withIdentifier: "ShowScanner", sender: self)
        } else {
            serial.disconnect()
            reloadView()
        }
    }
    
    @IBOutlet weak var CodeBox: UITextField!
    var ref = DatabaseReference()
    var accessKeys: [String] = []
    var headers: [String] = []
    var names: [String] = []
    var correctHead: String = ""
    
    func textFieldShouldReturn(_ scoreText: UITextField) -> Bool {
        self.view.endEditing(true)
        return true
    }
    
    func getInfo(CompletionHandler: @escaping (Bool?, Error?) -> Void){
        do {
            let url = NSURL(string: "https://h2grow.herokuapp.com/api")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            request.httpBody = try JSONSerialization.data(withJSONObject: [""], options: .prettyPrinted)
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                self.ref.child("presentations").observeSingleEvent(of: .value, with: { (snapshot) in
                    
                    let value = snapshot.value as? NSDictionary
                    
                    for (key,values) in value! {
                        let value2 = values as? NSDictionary
                        var head = key as! String
                        var keyExists = value2?["accessKey"] != nil
                        var presname = ""
                        var access = ""
                        if keyExists {
                            access = value2?["accessKey"] as! String
                        }
                        keyExists = value2?["presentationTitle"] != nil
                        if keyExists {
                            presname = value2?["presentationTitle"] as! String
                        }
                        
                        self.accessKeys.append(access)
                        self.headers.append(head)
                        self.names.append(presname)
                    }
                    CompletionHandler(true,nil)
                    
                })
                
            }
            task.resume()
        } catch {
            print(error)
        }
    }
    
    func correspond(CompletionHandler: @escaping (Bool?, Error?) -> Void){
        do {
            let url = NSURL(string: "https://h2grow.herokuapp.com/api")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            request.httpBody = try JSONSerialization.data(withJSONObject: [""], options: .prettyPrinted)
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                self.ref.child("tags").observeSingleEvent(of: .value, with: { (snapshot) in
                    
                    let values = snapshot.value as? NSDictionary
                    self.enteredCode.remove(at: self.enteredCode.index(before: self.enteredCode.endIndex))
                    let keyExists = values?[self.enteredCode] != nil
                    if keyExists {
                        self.correspondingKey = values?[self.enteredCode] as! String
                    }

                    CompletionHandler(true,nil)
                    
                })
                
            }
            task.resume()
        } catch {
            print(error)
        }
    }
    
    @IBAction func EnterClick(_ sender: Any) {
        getInfo() {
            (returnval, error) in
            if (returnval)!
            {
                DispatchQueue.main.async {
                    var done = false
                    for var x in 0...self.accessKeys.count-1 {
                        if self.CodeBox.text == self.accessKeys[x] {
                            self.correctHead = self.headers[x]
                            if !done {
                                self.performSegue(withIdentifier: "validCode", sender: self)
                            }
                            done = true
                        }
                    }
                    if !done {
                        let alert = UIAlertController(title: "Invalid Code", message: "The code you entered does not correspond to a presentation.", preferredStyle: .alert)
                        let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
                            self.CodeBox.text = ""
                        })
                        alert.addAction(confirm)
                        self.present(alert, animated: true, completion: nil)
                    }
                }
            } else {
                print(error)
            }
        }
        DispatchQueue.main.async {
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ref = Database.database().reference()
        serial = BluetoothSerial(delegate: self)
        CodeBox.delegate = self
        
        NotificationCenter.default.addObserver(self, selector: #selector(EnterCodeVC.reloadView), name: NSNotification.Name(rawValue: "reloadStartViewController"), object: nil)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        CodeBox.text = ""
        reloadView()
        enteredCode = ""
        correspondingKey = ""
        PresentationName = ""
        accessKeys = []
        headers = []
        names = []
        correctHead = ""
        sent = false
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    
    @objc func keyboardWillShow(_ notification: Notification) {
        // animate the text field to stay above the keyboard
        var info = (notification as NSNotification).userInfo!
        let value = info[UIResponder.keyboardFrameEndUserInfoKey] as! NSValue
        let keyboardFrame = value.cgRectValue
        
        //TODO: Not animating properly
        UIView.animate(withDuration: 1, delay: 0, options: UIView.AnimationOptions(), animations: { () -> Void in
        }, completion: { Bool -> Void in
            self.textViewScrollToBottom()
        })
    }
    
    
    @objc func keyboardWillHide(_ notification: Notification) {
        // bring the text field back down..
        UIView.animate(withDuration: 1, delay: 0, options: UIView.AnimationOptions(), animations: { () -> Void in
        }, completion: nil)
        
    }
    
    func textViewScrollToBottom() {
        //let range = NSMakeRange(NSString(string: mainTextView.text).length - 1, 1)
        //mainTextView.scrollRangeToVisible(range)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "validCode" {
            let ImageVC = segue.destination as! ImageVC
            ImageVC.header = correctHead
            ImageVC.prestitle = PresentationName
        }
    }
    
    func serialDidDisconnect(_ peripheral: CBPeripheral, error: NSError?) {
        reloadView()
        let hud = MBProgressHUD.showAdded(to: view, animated: true)
        hud?.mode = MBProgressHUDMode.text
        hud?.labelText = "Disconnected"
        hud?.hide(true, afterDelay: 1.0)
    }
    
    func serialDidChangeState() {
        reloadView()
        if serial.centralManager.state != .poweredOn {
            let hud = MBProgressHUD.showAdded(to: view, animated: true)
            hud?.mode = MBProgressHUDMode.text
            hud?.labelText = "Bluetooth turned off"
            hud?.hide(true, afterDelay: 1.0)
        }
    }
    
    @objc func reloadView() {
        // in case we're the visible view again
        serial.delegate = self
        
        if serial.isReady {
            Connect.title = "Disconnect"
            Connect.tintColor = UIColor.red
            Connect.isEnabled = true
            serial.sendMessageToDevice("initialize")
        } else if serial.centralManager.state == .poweredOn {
            Connect.title = "Connect"
            Connect.tintColor = view.tintColor
            Connect.isEnabled = true
            serial.sendMessageToDevice("DISCONNECT")
        } else {
            Connect.title = "Connect"
            Connect.tintColor = view.tintColor
            Connect.isEnabled = false
            serial.sendMessageToDevice("DISCONNECT")
        }
    }
    
    func sendName(inputtemp2 : String) {
        /*
        var inputtemp = inputtemp2
        if inputtemp == "double" {
            serial.sendMessageToDevice("Duplicate scan")
        } else {
            inputtemp = inputtemp.substring(to: inputtemp.index(before: inputtemp.endIndex))
            var input = inputtemp
            var index: Int = -1
            for var x in 0...data.idArray.count-1 {
                var testStr = String(data.idArray[x])
                if testStr == input {
                    index = x
                    break
                }
            }
            if index != -1 {
                print(data.nameArray[index])
                serial.sendMessageToDevice(data.nameArray[index])
                serial.sendMessageToDevice(",")
                serial.sendMessageToDevice(String(data.priceArray[index]))
                serial.sendMessageToDevice(",")
                serial.sendMessageToDevice("notpurchased")
                serial.sendMessageToDevice(",")
                serial.sendMessageToDevice("noerror")
            } else {
                serial.sendMessageToDevice("Item not found")
            }
        }
 */
        
    }
    
    func serialDidReceiveString(_ message: String) {
        enteredCode = message
        correspond() {
            (returnval, error) in
            if (returnval)!
            {
                DispatchQueue.main.async {
                    self.getInfo() {
                        (returnval, error) in
                        if (returnval)!
                        {
                            DispatchQueue.main.async {
                                var done = false
                                for var x in 0...self.accessKeys.count-1 {
                                    if self.correspondingKey == self.accessKeys[x] {
                                        self.correctHead = self.headers[x]
                                        if self.sent == false {
                                            self.PresentationName = self.names[x]
                                            serial.sendMessageToDevice(self.names[x])
                                            self.sent = true
                                            self.performSegue(withIdentifier: "validCode", sender: self)
                                            done = true
                                        }
                                        
                                    }
                                }
                                if !done {
                                    serial.sendMessageToDevice("Incorrect")
                                }
                            }
                        } else {
                            print(error)
                        }
                    }
                    DispatchQueue.main.async {
                    }
                }
            } else {
                print(error)
            }
        }
        DispatchQueue.main.async {
        }
        
        
        
        
    }

}

