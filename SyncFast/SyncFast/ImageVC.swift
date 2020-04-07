//
//  ImageVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 11/2/19.
//  Copyright © 2019 Arya Tschand. All rights reserved.
//

import UIKit
import WebKit

class ImageVC: UIViewController, UITextFieldDelegate {
    
    @IBOutlet weak var imageView: UIImageView!
    
    @IBAction func scaleImage(_ sender: UIPinchGestureRecognizer) {
        imageView.transform = CGAffineTransform(scaleX: sender.scale, y: sender.scale)
    }
    
    @IBAction func handlePan(_ gesture: UIPanGestureRecognizer) {
      // 1
      let translation = gesture.translation(in: view)

      // 2
      guard let gestureView = gesture.view else {
        return
      }

      gestureView.center = CGPoint(
        x: gestureView.center.x + translation.x,
        y: gestureView.center.y + translation.y
      )

      // 3
      gesture.setTranslation(.zero, in: view)
        
    guard gesture.state == .ended else {
      return
    }

    // 1
    let velocity = gesture.velocity(in: view)
    let magnitude = sqrt((velocity.x * velocity.x) + (velocity.y * velocity.y))
    let slideMultiplier = magnitude / 200

    // 2
    let slideFactor = 0.1 * slideMultiplier
    // 3
    var finalPoint = CGPoint(
      x: gestureView.center.x + (velocity.x * slideFactor),
      y: gestureView.center.y + (velocity.y * slideFactor)
    )

    // 4
    finalPoint.x = min(max(finalPoint.x, 0), view.bounds.width)
    finalPoint.y = min(max(finalPoint.y, 0), view.bounds.height)

    // 5
    UIView.animate(
      withDuration: Double(slideFactor * 2),
      delay: 0,
      // 6
      options: .curveEaseOut,
      animations: {
        gestureView.center = finalPoint
    })
    }
    
    
    
    
    func viewForZooming(in scrollView: UIScrollView) -> UIView? {
        return imageView
    }
    
    var imageURL: String = ""
    var newURL: String = ""
    var sideURL: String = ""
    var header: String = ""
    var prestitle: String = ""
    
    var response: String = ""

    @IBOutlet weak var PresentationTitle: UINavigationItem!
    
    let param = NSMutableURLRequest(url:URL(string: "wss://syncfastserver.macrotechsolutions.us:4211")!)
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    
    
    override func viewWillAppear(_ animated: Bool) {
        PresentationTitle.title = prestitle
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { timer in
            self.getStorage2(value2: "test")
            DispatchQueue.main.async {
            }
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
                               self.imageView.image = decodedimage as! UIImage
                           } else if self.imageURL != self.newURL{
                               self.imageURL = self.newURL
                               let url = URL(string: self.imageURL)!
                               let dataa = try? Data(contentsOf: url)
                               if let imageData = dataa {
                                   let imagee = UIImage(data: imageData)
                                   self.imageView?.image = imagee
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
               request.setValue(header, forHTTPHeaderField: "firebasepresentationkey")
            request.setValue("*", forHTTPHeaderField: "Origin")
            
               request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
               
               let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                   if let returned = String(data: data!, encoding: .utf8) {
                       let dict = returned.toJSON() as? [String:AnyObject] // can be any type here
                    self.response = dict!["data"] as! String
                    if self.response == "Valid Access Code" {
                       self.newURL = dict!["slideurl"] as! String
                       self.prestitle = dict!["presentationtitle"] as! String
    
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
    
    
    

}
 
