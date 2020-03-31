//
//  SelectModeVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 1/12/20.
//  Copyright © 2020 Arya Tschand. All rights reserved.
//

import UIKit
import GoogleSignIn

class SelectModeViewController: UIViewController, GIDSignInDelegate {
    
    
    func sign(_ signIn: GIDSignIn!, didSignInFor user: GIDGoogleUser!, withError error: Error!) {
        print("data")
        if let error = error {
          if (error as NSError).code == GIDSignInErrorCode.hasNoAuthInKeychain.rawValue {
            print("The user has not signed in before or they have since signed out.")
          } else {
            print("\(error.localizedDescription)")
          }
          return
        }
        
        self.name = user.profile.name
        self.email = user.profile.email
        self.getStorage(value2: "test")
    }
    
    var name: String = ""
    var email: String = ""
    let appDelegate = UIApplication.shared.delegate as! AppDelegate
    var done = false
    var valid = false
    var givealert = false

    override func viewDidLoad() {
        super.viewDidLoad()
        GIDSignIn.sharedInstance()?.presentingViewController = self
        GIDSignIn.sharedInstance().delegate = self
        // Do any additional setup after loading the view.
    }
    
    
    @IBAction func googlesignin(_ sender: Any) {
        self.givealert = true
        GIDSignIn.sharedInstance()?.signIn()
    }
    
    func segue() {
        self.performSegue(withIdentifier: "sign", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
           if segue.identifier == "sign" {
            var PresentationVC = segue.destination as! PresentationVC
            PresentationVC.email = email
           }
       }
    
    override func viewWillAppear(_ animated: Bool) {
    AppDelegate.AppUtility.lockOrientation(UIInterfaceOrientationMask.portrait, andRotateTo: UIInterfaceOrientation.portrait)
        }
    
    override func viewWillDisappear(_ animated: Bool) {
        AppDelegate.AppUtility.lockOrientation(UIInterfaceOrientationMask.all)

    }
    
    
    
    func getStorage(value2: String) {
           printMessagesForUser(parameters: value2) {
               (returnval, error) in
               if (returnval)!
               {
                DispatchQueue.main.async {
                    if self.givealert == true{
                        let alert = UIAlertController(title: "No Presentation", message: "There is no presentation found for the signed in account.", preferredStyle: .alert)
                        let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
                            self.givealert = false
                        })
                        alert.addAction(confirm)
                        self.present(alert, animated: true, completion: nil)
                    }
                    if self.name != "" && self.valid == true{
                        self.done = true
                        self.performSegue(withIdentifier: "sign", sender: self)
                    }
                    
                }
               } else {
                   print(error)
               }
           }
           DispatchQueue.main.async { // Correct
            
        }
       }
       
    
    @IBAction func HelpBtn(_ sender: Any) {
        if let url = URL(string: "https://www.macrotechsolutions.us/contact-us") {
            UIApplication.shared.open(url)
        }
    }
    
       
       
       func printMessagesForUser(parameters: String, CompletionHandler: @escaping (Bool?, Error?) -> Void){
           let json = [parameters]
           do {
               let jsonData = try JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
               
               
               let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostRemote")!
               let request = NSMutableURLRequest(url: url as URL)
               request.httpMethod = "POST"
               request.addValue("artschand@ctemc.org", forHTTPHeaderField: "email")
               request.addValue("*", forHTTPHeaderField: "Origin")
               
               request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
               let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                   if let returned = String(data: data!, encoding: .utf8) {
                       let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                    var response = dict!["data"] as! String
                    if response == "Valid User"{
                        self.valid = true
                        self.givealert = false
                    } else{
                        self.givealert = true
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
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
