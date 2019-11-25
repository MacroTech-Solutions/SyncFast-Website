//
//  ImageVC.swift
//  SyncFast
//
//  Created by Arya Tschand on 11/2/19.
//  Copyright © 2019 Arya Tschand. All rights reserved.
//

import UIKit
import FirebaseDatabase

class ImageVC: UIViewController, UITextFieldDelegate {
    
    
    
    @IBOutlet weak var image: UIImageView!
    var ref = DatabaseReference()
    
    
    @IBOutlet weak var secondImage: UIImageView!
    
    var imageURL: String = ""
    var sideURL: String = ""
    var header: String = ""
    var prestitle: String = ""

    @IBOutlet weak var PresentationTitle: UINavigationItem!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ref = Database.database().reference()
    }
    
    func getImage(CompletionHandler: @escaping (Bool?, Error?) -> Void){
        do {
            let url = NSURL(string: "https://h2grow.herokuapp.com/api")!
            let request = NSMutableURLRequest(url: url as URL)
            request.httpMethod = "POST"
            
            request.setValue("application/json; charset=utf-8", forHTTPHeaderField: "Content-Type")
            request.httpBody = try JSONSerialization.data(withJSONObject: [""], options: .prettyPrinted)
            let task = URLSession.shared.dataTask(with: request as URLRequest){ data, response, error in
                self.ref.child("presentations").child(self.header).observeSingleEvent(of: .value, with: { (snapshot) in
                    
                    let value = snapshot.value as? NSDictionary
                    var keyExists = value?["slideUrl"] != nil
                    if keyExists {
                        self.imageURL = value?["slideUrl"] as! String
                    } else {
                        self.imageURL = ""
                    }
                    keyExists = value?["imageUrl"] != nil
                    if keyExists {
                        self.sideURL = value?["imageUrl"] as! String
                    } else {
                        self.sideURL = ""
                    }
                    CompletionHandler(true,nil)
                    
                })
                
            }
            task.resume()
        } catch {
            print(error)
        }
    }
    
    
    override func viewWillAppear(_ animated: Bool) {
        PresentationTitle.title = prestitle
        Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { timer in
            self.getImage() {
                (returnval, error) in
                if (returnval)!
                {
                    DispatchQueue.main.async {
                        let wordToRemove = "data:image/png;base64,"


                        if let range = self.imageURL.range(of: wordToRemove) {
                            self.imageURL.removeSubrange(range)
                        }
                        if self.imageURL != ""  && self.imageURL.count > 1000 {
                            let decodedData = NSData(base64Encoded: self.imageURL, options: NSData.Base64DecodingOptions(rawValue: 0))
                            var decodedimage = UIImage(data: decodedData as! Data)
                            self.image.image = decodedimage as! UIImage
                        } else if self.imageURL != "" {
                            let url = URL(string: self.imageURL)!
                            let dataa = try? Data(contentsOf: url)
                            if let imageData = dataa {
                                let imagee = UIImage(data: imageData)
                                self.image?.image = imagee
                            }
                        }
                        if self.sideURL != "" {
                            let url = URL(string: self.sideURL)!
                            let dataa = try? Data(contentsOf: url)
                            if let imageData = dataa {
                                let imagee = UIImage(data: imageData)
                                self.secondImage?.image = imagee
                            }
                            
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

}
 
