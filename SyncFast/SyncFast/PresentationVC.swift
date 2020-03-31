//
//  PresentationVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 3/20/20.
//  Copyright © 2020 Arya Tschand. All rights reserved.
//

import UIKit
import FirebaseDatabase

class PresentationVC: UIViewController {
    
    var email: String = ""
    var firebasekey: String = ""
    var imageURL: String = ""
    var newURL: String = ""
    var notes: String = ""
    var slideNumber: String = ""
    var prestitle: String = ""
    var locked: Bool = true
    
    var accesskey: String = ""
    
    var response: String = ""
    
    var ref = DatabaseReference()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        
    }
    
    @IBAction func Lock(_ sender: Any) {
        togglelock(value2: "test")
    }
    
    @IBOutlet weak var LockButton: UIBarButtonItem!
    
    
    @IBOutlet weak var AccessKeyBox: UILabel!
    
    @IBOutlet weak var SlideNum: UILabel!
    
    @IBOutlet weak var Notes: UITextView!
    
    override func viewWillAppear(_ animated: Bool) {
        getStorage(value2: email)
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { timer in
            self.getStorage2(value2: "test")
            DispatchQueue.main.async {
            }
        }
    }
    
    func togglelock(value2: String) {
           lockfunc(parameters: value2) {
               (returnval, error) in
               if (returnval)!
               {
                   DispatchQueue.main.async {
                    self.locked = !self.locked
                    if self.locked == false{
                        self.LockButton.image = UIImage(systemName: "lock.open.fill")

                    } else {
                        self.LockButton.image = UIImage(systemName: "lock.fill")
                    }
                   }
               } else {
                   print(error)
               }
           }
           DispatchQueue.main.async { // Correct
           }
       }
       
       func lockfunc(parameters: String, CompletionHandler: @escaping (Bool?, Error?) -> Void){
           let json = [parameters]
           do {
               let jsonData = try JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
               
               
               let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostLock")!
               let request = NSMutableURLRequest(url: url as URL)
               request.httpMethod = "POST"
               request.setValue(firebasekey, forHTTPHeaderField: "firebasepresentationkey")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
               request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
               
               let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                   if let returned = String(data: data!, encoding: .utf8) {
                       let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                    self.response = dict!["data"] as! String
                    
                    
                       CompletionHandler(true,nil)
                       
                       //self.Severity.text = "hello"
                   } else {
                   }
                   
                   //self.Severity.text = "test"
                   
               }
               task.resume()
           } catch {
               
               print(error)
           }
       }
    
    func getStorage2(value2: String) {
        printMessagesForUser2(parameters: value2) {
            (returnval, error) in
            if (returnval)!
            {
                DispatchQueue.main.async {
                 if self.response == "Valid Access Code"{
                        
                        let wordToRemove = "data:image/png;base64,"
                    
                        if let range = self.imageURL.range(of: wordToRemove) {
                            self.imageURL.removeSubrange(range)
                        }
                        if self.imageURL.count > 1000 && self.imageURL != self.newURL{
                            self.imageURL = self.newURL
                            let decodedData = NSData(base64Encoded: self.imageURL, options: NSData.Base64DecodingOptions(rawValue: 0))
                            var decodedimage = UIImage(data: decodedData as! Data)
                            self.imageview.image = decodedimage as! UIImage
                        } else if self.imageURL != self.newURL{
                            self.imageURL = self.newURL
                            let url = URL(string: self.imageURL)!
                            let dataa = try? Data(contentsOf: url)
                            if let imageData = dataa {
                                let imagee = UIImage(data: imageData)
                                self.imageview?.image = imagee
                            }
                            self.Notes.text = self.notes
                            self.SlideNum.text = "Slide \(self.slideNumber)"
                            self.AccessKeyBox.text = "\(self.prestitle) - \(self.accesskey)"
                            if self.locked == false{
                                self.LockButton.image = UIImage(systemName: "lock.open.fill")

                            } else {
                                self.LockButton.image = UIImage(systemName: "lock.fill")
                            }
                    }
                    } else{
                    /*
                        let alert = UIAlertController(title: "Invalid Code", message: "Access code was changed or the presentation was closed.", preferredStyle: .alert)
                        let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
                        })
                        alert.addAction(confirm)
                        self.present(alert, animated: true, completion: nil)
 */
                    }
                }
            } else {
                print(error)
            }
        }
        DispatchQueue.main.async { // Correct
        }
    }
    
    func printMessagesForUser2(parameters: String, CompletionHandler: @escaping (Bool?, Error?) -> Void){
        let json = [parameters]
        do {
            let jsonData = try JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
            
            
            let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/remoteAuth")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            request.setValue(firebasekey, forHTTPHeaderField: "firebasepresentationkey")
         request.setValue("*", forHTTPHeaderField: "Origin")
         
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                if let returned = String(data: data!, encoding: .utf8) {
                    let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                 self.response = dict!["data"] as! String
                 if self.response == "Valid Access Code" {
                    self.newURL = dict!["slideurl"] as! String
                    self.notes = dict!["notes"] as! String
                    self.slideNumber = dict!["slidenum"] as! String
                    self.prestitle = dict!["presentatontitle"] as! String
                    print(dict)
                    if let _ = dict!["lockstate"] {
                        var temp: String = dict!["lockstate"] as! String
                        if temp == "true"{
                            self.locked = true
                        } else{
                            self.locked = false
                        }
                    } else {
                        self.locked = true
                    }
 
                 }
                 
                 
                    CompletionHandler(true,nil)
                    
                    //self.Severity.text = "hello"
                } else {
                }
                
                //self.Severity.text = "test"
                
            }
            task.resume()
        } catch {
            
            print(error)
        }
    }
    
    
    func getStorage(value2: String) {
        printMessagesForUser(parameters: value2) {
            (returnval, error) in
            if (returnval)!
            {
                DispatchQueue.main.async {
                }
            } else {
                print(error)
            }
        }
        DispatchQueue.main.async { // Correct
        }
    }
    
    @IBOutlet weak var imageview: UIImageView!
    
    @IBAction func next(_ sender: Any) {
        nextslide() {
            (returnval, error) in
        }
    }
    
    @IBAction func previous(_ sender: Any) {
        backslide() {
            (returnval, error) in
        }
    }
    
    
    
    func printMessagesForUser(parameters: String, CompletionHandler: @escaping (Bool?, Error?) -> Void){
        let json = [parameters]
        do {
            let jsonData = try JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
            

            let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostRemote")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            request.setValue(email, forHTTPHeaderField: "email")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                if let returned = String(data: data!, encoding: .utf8) {
                    let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                    self.accesskey = dict!["accesskey"] as! String
                    self.firebasekey = dict!["firebasepresentationkey"] as! String
                    CompletionHandler(true,nil)
                    
                    //self.Severity.text = "hello"
                } else {
                }
                
                //self.Severity.text = "test"
                
            }
            task.resume()
        } catch {
            
            print(error)
        }
    }
    
    func nextslide(CompletionHandler: @escaping (Bool?, Error?) -> Void){
        do {
            
            let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/nextSlide")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            print(firebasekey)
            request.setValue(firebasekey, forHTTPHeaderField: "firebasepresentationkey")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                if let returned = String(data: data!, encoding: .utf8) {
                    CompletionHandler(true,nil)
                    
                    //self.Severity.text = "hello"
                } else {
                }
                
                //self.Severity.text = "test"
                
            }
            task.resume()
        } catch {
            
            print(error)
        }
    }
    
    func backslide(CompletionHandler: @escaping (Bool?, Error?) -> Void){
        do {
            
            let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/previousSlide")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            request.setValue(firebasekey, forHTTPHeaderField: "firebasepresentationkey")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                if let returned = String(data: data!, encoding: .utf8) {
                    CompletionHandler(true,nil)
                    
                    //self.Severity.text = "hello"
                } else {
                }
                
                //self.Severity.text = "test"
                
            }
            task.resume()
        } catch {
            
            print(error)
        }
    }


}

extension String {
    func toJSON() -> Any? {
        guard let data = self.data(using: .utf8, allowLossyConversion: false) else { return nil }
        return try? JSONSerialization.jsonObject(with: data, options: .mutableContainers)
    }
}
