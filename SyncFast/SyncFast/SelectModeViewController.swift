//
//  SelectModeVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 1/12/20.
//  Copyright © 2020 Arya Tschand. All rights reserved.
//

import UIKit
import GoogleSignIn

class SelectModeViewController: UIViewController {
    var name: String = ""
    let appDelegate = UIApplication.shared.delegate as! AppDelegate
    var done = false

    override func viewDidLoad() {
        super.viewDidLoad()
        GIDSignIn.sharedInstance()?.presentingViewController = self
        // Do any additional setup after loading the view.
        Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { timer in
            self.name = self.appDelegate.fullName
            if self.name != "" && self.done == false{
                print(self.name)
                self.done = true
                self.performSegue(withIdentifier: "sign", sender: self)
            }
        }
    }
    
    
    
    @IBAction func googlesignin(_ sender: Any) {
        GIDSignIn.sharedInstance()?.signIn()
    }
    
    func grabData(inputname: String) {
        name = inputname
        print(name)
        let alert = UIAlertController(title: "Hey Coach!", message: "Welcome to Lineupz! Let's start by making a new team.", preferredStyle: .alert)
        let action = UIAlertAction(title: "Let's Do It", style: .default) { (action) in
            //self.teamArray[self.teamArray.count-1].arrayList = self.arraylist
        }
        let cancel = UIAlertAction(title: "Not Yet", style: .cancel) { (action) in
            
        }
        alert.addAction(action)
        alert.addAction(cancel)
        present(alert, animated: true, completion: nil)
    }
    
    func segue() {
        self.performSegue(withIdentifier: "sign", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
           if segue.identifier == "signedIn" {
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
