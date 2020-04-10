import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:web_socket_channel/io.dart';
import 'package:barcode_scan/barcode_scan.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

void main() {
  runApp(MyApp());
}

String url = "https://www.macrotechsolutions.us/contact-us.html";

String accessCode;
var clientJson;
var hostJson;

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SyncFast',
      theme: ThemeData(
        primarySwatch: Colors.pink,
      ),
      routes: {
        "/": (_) => MyHomePage(title: 'SyncFast'),
        "/webview": (_) => WebviewScaffold(
              url: url,
              appBar: AppBar(
                title: Text("Contact MacroTech"),
              ),
              withJavascript: true,
              withLocalStorage: true,
              withZoom: true,
            )
      },
      //home: MyHomePage(title: 'SyncFast'),
    );
  }
}

GoogleSignIn googleSignIn = GoogleSignIn(
  scopes: [
    'email',
  ],
);

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final webView = FlutterWebviewPlugin();
  TextEditingController controller = TextEditingController(text: url);

  @override
  void initState() {
    super.initState();

    webView.close();
    controller.addListener(() {
      url = controller.text;
    });
  }

  @override
  void dispose() {
    webView.dispose();
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Welcome to SyncFast!',
              style: TextStyle(
                fontSize: 20.0,
              ),
            ),
            Image(
              image: AssetImage('assets/logo.png'),
              height: 150,
            ),
            ListTile(
              title: RaisedButton(
                onPressed: () {
                  dispose() {
                    SystemChrome.setPreferredOrientations([
                      DeviceOrientation.landscapeRight,
                      DeviceOrientation.landscapeLeft,
                      DeviceOrientation.portraitUp,
                      DeviceOrientation.portraitDown,
                    ]);
                    super.dispose();
                  }

                  Navigator.push(
                      context,
                      new MaterialPageRoute(
                          builder: (context) => new ClientJoinPage()));
                },
                child: Text("View Presentation"),
              ),
            ),
            ListTile(
                title: RaisedButton(
                    onPressed: () {
                      dispose() {
                        SystemChrome.setPreferredOrientations([
                          DeviceOrientation.landscapeRight,
                          DeviceOrientation.landscapeLeft,
                          DeviceOrientation.portraitUp,
                          DeviceOrientation.portraitDown,
                        ]);
                        super.dispose();
                      }

                      Navigator.push(
                          context,
                          new MaterialPageRoute(
                              builder: (context) => new HostSignIn()));
                    },
                    child: Text("Host Remote"))),
            ListTile(
                title: RaisedButton(
                    onPressed: () async {
                      Navigator.of(context).pushNamed("/webview");
                    },
                    child: Text("Help"))),
          ],
        ),
      ),
    );
  }
}

class ClientJoinPage extends StatefulWidget {
  ClientJoinPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _ClientJoinPageState createState() => _ClientJoinPageState();
}

class _ClientJoinPageState extends State<ClientJoinPage> {
  Future<String> createAlertDialog(
      BuildContext context, String title, String body) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
              title: Text(title),
              content: Text(body),
              actions: <Widget>[
                MaterialButton(
                  elevation: 5.0,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text("OK"),
                )
              ]);
        });
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    String result = "";
    return Scaffold(
      appBar: AppBar(
        title: Text("View Presentation"),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image(
              image: AssetImage('assets/logo.png'),
              height: 150,
            ),
            Padding(
              padding: const EdgeInsets.only(left: 30.0, right: 30.0),
              child: TextField(
                decoration: InputDecoration(hintText: "Enter Access Code"),
                textAlign: TextAlign.center,
                onChanged: (String str) {
                  setState(() {
                    accessCode = str;
                  });
                },
              ),
            ),
            ListTile(
                title: RaisedButton(
                    onPressed: () async {
                      Map<String, String> headers = {
                        "Content-type": "application/json",
                        "Origin": "*",
                        "accesscode": accessCode
                      };
                      Response response = await post(
                          'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
                          headers: headers);
                      //createAlertDialog(context);
                      clientJson = jsonDecode(response.body);
                      if (clientJson["data"] == "Incorrect Access Code") {
                        createAlertDialog(context, "Incorrect Access Code",
                            "Access code $accessCode is invalid. Please try again.");
                      } else {
                        dispose() {
                          SystemChrome.setPreferredOrientations([
                            DeviceOrientation.landscapeRight,
                            DeviceOrientation.landscapeLeft,
                            DeviceOrientation.portraitUp,
                            DeviceOrientation.portraitDown,
                          ]);
                          super.dispose();
                        }

                        Navigator.push(
                            context,
                            new MaterialPageRoute(
                                builder: (context) => new ViewPresPage()));
                      }
                    },
                    child: Text("Submit"))),
            Padding(
              padding: const EdgeInsets.all(30.0),
              child: Text(
                "OR",
                style: TextStyle(
                  fontSize: 20.0,
                ),
              ),
            ),
            FloatingActionButton.extended(
              icon: Icon(Icons.camera_alt),
              label: Text("Scan QR"),
              onPressed: () async {
                try {
                  String qrResult = await BarcodeScanner.scan();
                  result = qrResult;
                  if (result.contains("syncfast") &&
                      result.contains("?accessKey=")) {
                    accessCode = result.substring(result.indexOf('=') + 1);
                    Map<String, String> headers = {
                      "Content-type": "application/json",
                      "Origin": "*",
                      "accesscode": accessCode
                    };
                    Response response = await post(
                        'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
                        headers: headers);
                    //createAlertDialog(context);
                    clientJson = jsonDecode(response.body);
                    if (clientJson["data"] == "Incorrect Access Code") {
                      createAlertDialog(context, "Incorrect Access Code",
                          "Access code $accessCode is invalid. Please try again.");
                    } else {
                      dispose() {
                        SystemChrome.setPreferredOrientations([
                          DeviceOrientation.landscapeRight,
                          DeviceOrientation.landscapeLeft,
                          DeviceOrientation.portraitUp,
                          DeviceOrientation.portraitDown,
                        ]);
                        super.dispose();
                      }

                      Navigator.push(
                          context,
                          new MaterialPageRoute(
                              builder: (context) => new ViewPresPage()));
                    }
                  } else {
                    createAlertDialog(context, "Scan QR", "Invalid QR Code");
                  }
                } on PlatformException catch (ex) {
                  if (ex.code == BarcodeScanner.CameraAccessDenied) {
                    setState(() {
                      createAlertDialog(context, "Scan QR",
                          "Please enable camera permissions for SyncFast.");
                    });
                  } else {
                    setState(() {
                      result = "Unknown Error $ex";
                      createAlertDialog(
                          context, "Scan QR", "Unkown Error Occured: $ex");
                    });
                  }
                } on FormatException {
                  setState(() {
                    result =
                        "You pressed the back button before scanning anything";
                    createAlertDialog(
                        context, "Scan QR", "No QR Code was recognized.");
                  });
                } catch (ex) {
                  setState(() {
                    result = "Unknown Error $ex";
                    createAlertDialog(
                        context, "Scan QR", "Unkown Error Occured: $ex");
                  });
                }
              },
            )
          ],
        ),
      ),
    );
  }
}

class ViewPresPage extends StatefulWidget {
  ViewPresPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _ViewPresPageState createState() => _ViewPresPageState();
}

class _ViewPresPageState extends State<ViewPresPage> {
  Future<String> createAlertDialog(
      BuildContext context, String title, String body) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
              title: Text(title),
              content: Text(body),
              actions: <Widget>[
                MaterialButton(
                  elevation: 5.0,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text("OK"),
                )
              ]);
        });
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
    var channel = IOWebSocketChannel.connect(
        "wss://syncfastserver.macrotechsolutions.us:4211");
    channel.stream.listen((message) async {
      print(message);
      if (message == clientJson["firebasepresentationkey"]) {
        Map<String, String> headers = {
          "Content-type": "application/json",
          "Origin": "*",
          "accesscode": accessCode
        };
        Response response = await post(
            'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
            headers: headers);
        //createAlertDialog(context);
        setState(() {
          clientJson = jsonDecode(response.body);
        });
      }
    });
    return Scaffold(
      appBar: AppBar(
        title: Text("View Presentation"),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '${clientJson["presentationtitle"]} - $accessCode',
              style: TextStyle(
                fontSize: 20.0,
              ),
            ),
//            FittedBox(
//                child: Container(
//                    child:
            Image(
              image: NetworkImage(clientJson["slideurl"]),
//            ))
            )
          ],
        ),
      ),
    );
  }
}

class HostSignIn extends StatefulWidget {
  HostSignIn({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HostSignInState createState() => _HostSignInState();
}

class _HostSignInState extends State<HostSignIn> {
  Future<String> createAlertDialog(
      BuildContext context, String title, String body) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
              title: Text(title),
              content: Text(body),
              actions: <Widget>[
                MaterialButton(
                  elevation: 5.0,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text("OK"),
                )
              ]);
        });
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    googleSignIn.signOut();
    return Scaffold(
      appBar: AppBar(
        title: Text("Sign In"),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(left: 30.0, right: 30.0),
              child: TextField(
                decoration: InputDecoration(hintText: "Email Address"),
                onChanged: (String str) {
                  setState(() {
                    accessCode = str;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 30.0, right: 30.0),
              child: TextField(
                decoration: InputDecoration(hintText: "Password"),
                obscureText: true,
                onChanged: (String str) {
                  setState(() {
                    accessCode = str;
                  });
                },
              ),
            ),
            RaisedButton(
                onPressed: () async {
                  Map<String, String> headers = {
                    "Content-type": "application/json",
                    "Origin": "*",
                    "accesscode": accessCode
                  };
                  Response response = await post(
                      'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
                      headers: headers);
                  //createAlertDialog(context);
                  clientJson = jsonDecode(response.body);
                  if (clientJson["data"] == "Incorrect Access Code") {
                    createAlertDialog(context, "Incorrect Access Code",
                        "Access code $accessCode is invalid. Please try again.");
                  } else {
                    dispose() {
                      SystemChrome.setPreferredOrientations([
                        DeviceOrientation.landscapeRight,
                        DeviceOrientation.landscapeLeft,
                        DeviceOrientation.portraitUp,
                        DeviceOrientation.portraitDown,
                      ]);
                      super.dispose();
                    }

                    Navigator.push(
                        context,
                        new MaterialPageRoute(
                            builder: (context) => new ViewPresPage()));
                  }
                },
                child: Text("Submit")),
            SizedBox(height: 50),
            RaisedButton(
              splashColor: Colors.grey,
              onPressed: () async {
                final GoogleSignInAccount googleSignInAccount =
                    await googleSignIn.signIn();
                Map<String, String> headers = {
                  "Content-type": "application/json",
                  "Origin": "*",
                  "email": googleSignInAccount.email
                };
                Response response = await post(
                    'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostRemote',
                    headers: headers);
                //createAlertDialog(context);
                hostJson = jsonDecode(response.body);
                if (hostJson["data"] == "Valid User") {
                  Map<String, String> headers = {
                    "Content-type": "application/json",
                    "Origin": "*",
                    "firebasepresentationkey":
                        hostJson["firebasepresentationkey"]
                  };
                  Response response = await post(
                      'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/remoteAuth',
                      headers: headers);
                  hostJson = jsonDecode(response.body);
                  dispose() {
                    SystemChrome.setPreferredOrientations([
                      DeviceOrientation.landscapeRight,
                      DeviceOrientation.landscapeLeft,
                      DeviceOrientation.portraitUp,
                      DeviceOrientation.portraitDown,
                    ]);
                    super.dispose();
                  }

                  Navigator.push(
                      context,
                      new MaterialPageRoute(
                          builder: (context) => new HostRemotePage()));
                } else {
                  createAlertDialog(context, "Error",
                      "The email address $googleSignInAccount is not associated with an account. Please host a presentationon https://syncfast.macrotechsolutions.us.");
                }
              },
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(40)),
              highlightElevation: 0,
//              borderSide: BorderSide(color: Colors.grey),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Image(
                        image: AssetImage("assets/google_logo.png"),
                        height: 35.0),
                    Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Text(
                        'Sign in with Google',
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.black,
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class HostRemotePage extends StatefulWidget {
  HostRemotePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HostRemotePageState createState() => _HostRemotePageState();
}

class _HostRemotePageState extends State<HostRemotePage> {
  Future<String> createAlertDialog(
      BuildContext context, String title, String body) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
              title: Text(title),
              content: Text(body),
              actions: <Widget>[
                MaterialButton(
                  elevation: 5.0,
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text("OK"),
                )
              ]);
        });
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    var channel = IOWebSocketChannel.connect(
        "wss://syncfastserver.macrotechsolutions.us:4211");
    channel.stream.listen((message) async {
      print(message);
      if (message == hostJson["firebasepresentationkey"]) {
        Map<String, String> headers = {
          "Content-type": "application/json",
          "Origin": "*",
          "firebasepresentationkey": hostJson["firebasepresentationkey"]
        };
        Response response = await post(
            'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/remoteAuth',
            headers: headers);
        //createAlertDialog(context);
        setState(() {
          hostJson = jsonDecode(response.body);
        });
      }
    });
    print(hostJson);
    googleSignIn.signOut();
    return Scaffold(
      appBar: AppBar(
        title: Text("Host Remote"),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '${hostJson["presentationtitle"]} - ${hostJson["accesskey"]}',
              style: TextStyle(
                fontSize: 20.0,
              ),
            ),
            FittedBox(
                child: Container(
              child: Image(image: NetworkImage(hostJson["slideurl"])),
            )),
            Padding(
              padding: const EdgeInsets.only(top: 30.0, bottom: 30.0),
              child: Text(
                '${hostJson["notes"]}',
                style: TextStyle(
                  fontSize: 20.0,
                ),
              ),
            ),
            ButtonBar(alignment: MainAxisAlignment.center, children: <Widget>[
              RaisedButton(
                  onPressed: () async {
                    if (hostJson["slidenum"] != "0") {
                      Map<String, String> headers = {
                        "Content-type": "application/json",
                        "Origin": "*",
                        "firebasepresentationkey":
                            hostJson["firebasepresentationkey"]
                      };
                      Response response = await post(
                          'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/previousSlide',
                          headers: headers);
                    } else {
                      createAlertDialog(context, "Previous Slide",
                          "You are currently on the first slide.");
                    }
                  },
                  child: Image(
                    image: AssetImage('assets/previousSlide.png'),
                    width: 100,
                  )),
              RaisedButton(
                  onPressed: () async {
                    if (hostJson["slidenum"] !=
                        (int.parse(hostJson["length"]) - 1).toString()) {
                      Map<String, String> headers = {
                        "Content-type": "application/json",
                        "Origin": "*",
                        "firebasepresentationkey":
                            hostJson["firebasepresentationkey"]
                      };
                      Response response = await post(
                          'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/nextSlide',
                          headers: headers);
                    } else {
                      createAlertDialog(context, "Next Slide",
                          "You are currently on the last slide.");
                    }
                  },
                  child: Image(
                    image: AssetImage('assets/nextSlide.png'),
                    width: 100,
                  )),
            ]),
            ListTile(
                title: RaisedButton(
                    onPressed: () async {
                      Map<String, String> headers = {
                        "Content-type": "application/json",
                        "Origin": "*",
                        "firebasepresentationkey":
                            hostJson["firebasepresentationkey"]
                      };
                      Response response = await post(
                          'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostLock',
                          headers: headers);
                    },
                    child: Text("Toggle Lock"))),
          ],
        ),
      ),
    );
  }
}
