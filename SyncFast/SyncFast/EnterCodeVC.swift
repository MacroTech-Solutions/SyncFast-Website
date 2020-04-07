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
import AVFoundation

class EnterCodeVC: UIViewController, UITextFieldDelegate, AVCaptureMetadataOutputObjectsDelegate{
    
    var captureSession: AVCaptureSession!
    var previewLayer: AVCaptureVideoPreviewLayer!
    
    
    
    @IBAction func scan(_ sender: Any) {
        view.backgroundColor = UIColor.black
        captureSession = AVCaptureSession()

        guard let videoCaptureDevice = AVCaptureDevice.default(for: .video) else { return }
        let videoInput: AVCaptureDeviceInput

        do {
            videoInput = try AVCaptureDeviceInput(device: videoCaptureDevice)
        } catch {
            return
        }

        if (captureSession.canAddInput(videoInput)) {
            captureSession.addInput(videoInput)
        } else {
            return
        }

        let metadataOutput = AVCaptureMetadataOutput()

        if (captureSession.canAddOutput(metadataOutput)) {
            captureSession.addOutput(metadataOutput)

            metadataOutput.setMetadataObjectsDelegate(self, queue: DispatchQueue.main)
            metadataOutput.metadataObjectTypes = [.qr]
        } else {
            return
        }

        previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
        previewLayer.frame = view.layer.bounds
        previewLayer.videoGravity = .resizeAspectFill
        view.layer.addSublayer(previewLayer)

        captureSession.startRunning()
    }
    
    func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection) {
        captureSession.stopRunning()
        dismiss(animated: true)
        
        if let metadataObject = metadataObjects.first {
            guard let readableObject = metadataObject as? AVMetadataMachineReadableCodeObject else { return }
            guard let stringValue = readableObject.stringValue else { return }
            AudioServicesPlaySystemSound(SystemSoundID(kSystemSoundID_Vibrate))
            if stringValue != nil && stringValue != "" {
                found(code: stringValue)
            } else {
                let alert = UIAlertController(title: "No Presentation", message: "There is no presentation found for scanned QR Code. Please click Back.", preferredStyle: .alert)
                let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
                })
                alert.addAction(confirm)
                self.present(alert, animated: true, completion: nil)
            }
        }
        
        
    }
    
    func verifyUrl (urlString: String?) -> Bool {
        if let urlString = urlString {
            if let url = NSURL(string: urlString) {
                return UIApplication.shared.canOpenURL(url as URL)
            }
        }
        return false
    }

    func found(code: String) {
        print(code)
        if verifyUrl(urlString: code) {
            var dict = URL(string:code)!.params()
            if dict.count == 1 && dict["accessKey"] != nil{
                enteredCode = dict["accessKey"] as! String
                getStorage(value2: "test")
                
            } else {
                let alert = UIAlertController(title: "No Presentation", message: "There is no presentation found for scanned QR Code. Please click Back.", preferredStyle: .alert)
                let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
                })
                alert.addAction(confirm)
                self.present(alert, animated: true, completion: nil)
            }
        } else {
            let alert = UIAlertController(title: "No Presentation", message: "There is no presentation found for scanned QR Code. Please click Back.", preferredStyle: .alert)
            let confirm = UIAlertAction(title: "OK", style: .cancel, handler: { (action) in
            })
            alert.addAction(confirm)
            self.present(alert, animated: true, completion: nil)
        }
        
    }
    
    
    
    var enteredCode = ""
    var correspondingKey = ""
    var PresentationName: String = ""
    var sent = false
    
    @IBOutlet weak var CodeBox: UITextField!
    var ref = DatabaseReference()
    var accessKeys: [String] = []
    var headers: [String] = []
    var names: [String] = []
    var correctHead: String = ""
    var response: String = ""
    
    func textFieldShouldReturn(_ scoreText: UITextField) -> Bool {
        self.view.endEditing(true)
        return true
    }
    
    func getStorage(value2: String) {
           printMessagesForUser(parameters: value2) {
               (returnval, error) in
               if (returnval)!
               {
                   DispatchQueue.main.async {
                    if self.response == "Valid Access Code"{
                           
                           self.performSegue(withIdentifier: "validCode", sender: self)
                       } else{
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
           DispatchQueue.main.async { // Correct
           }
       }
       
       func printMessagesForUser(parameters: String, CompletionHandler: @escaping (Bool?, Error?) -> Void){
           let json = [parameters]
           do {
               let jsonData = try JSONSerialization.data(withJSONObject: json, options: .prettyPrinted)
               
               
               let url = NSURL(string: "https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin")!
               let request = NSMutableURLRequest(url: url as URL)
               request.httpMethod = "POST"
               request.setValue(enteredCode, forHTTPHeaderField: "accessCode")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
               request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
               
               let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                   if let returned = String(data: data!, encoding: .utf8) {
                       let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                       print(dict)
                    self.response = dict!["data"] as! String
                    if self.response == "Valid Access Code" {
                        self.PresentationName = dict!["presentationtitle"] as! String
                        self.correctHead = dict!["firebasepresentationkey"] as! String
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

    
    @IBAction func EnterClick(_ sender: Any) {
        enteredCode = CodeBox.text!
        getStorage(value2: "test")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Automatically sign in the user.
        
        ref = Database.database().reference()
        CodeBox.delegate = self
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        CodeBox.text = ""
        enteredCode = ""
        correspondingKey = ""
        PresentationName = ""
        accessKeys = []
        headers = []
        names = []
        correctHead = ""
        sent = false
        AppDelegate.AppUtility.lockOrientation(UIInterfaceOrientationMask.portrait, andRotateTo: UIInterfaceOrientation.portrait)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        AppDelegate.AppUtility.lockOrientation(UIInterfaceOrientationMask.all)

    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "validCode" {
            let ImageVC = segue.destination as! ImageVC
            ImageVC.header = correctHead
            ImageVC.prestitle = PresentationName
        }
    }

}

extension URL {
  func params() -> [String:Any] {
    var dict = [String:Any]()

    if let components = URLComponents(url: self, resolvingAgainstBaseURL: false) {
      if let queryItems = components.queryItems {
        for item in queryItems {
          dict[item.name] = item.value!
        }
      }
      return dict
    } else {
      return [:]
    }
  }
}
