import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:web_socket_channel/io.dart';

void main() {
  runApp(MyApp());
}

String accessCode;
var clientJson;
var hostJson;
final channel = IOWebSocketChannel.connect(
    "wss://syncfastserver.macrotechsolutions.us:4211");

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SyncFast',
      theme: ThemeData(
        primarySwatch: Colors.pink,
      ),
      home: MyHomePage(title: 'SyncFast'),
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
            RaisedButton(
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
                child: Text("View Presentation")),
            RaisedButton(
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
                child: Text("Host Remote")),
            RaisedButton(
                onPressed: () async {
                  //html.window.location.href = "https://www.macrotechsolutions.us/contact-us/";
                },
                child: Text("Help")),
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
//    channel.stream.listen((message) async {
//      print(message);
//      if (message == clientJson["firebasepresentationkey"]) {
//        Map<String, String> headers = {
//          "Content-type": "application/json",
//          "Origin": "*",
//          "accesscode": accessCode
//        };
//        Response response = await post(
//            'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
//            headers: headers);
//        //createAlertDialog(context);
//        clientJson = jsonDecode(response.body);
//      }
//    });
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
            FittedBox(
                child: Container(
                    child: Image(
                      image: NetworkImage(clientJson["slideurl"]),
                    )))
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
            OutlineButton(
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
                  //createAlertDialog(context);
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
              borderSide: BorderSide(color: Colors.grey),
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
                          color: Colors.grey,
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
    StreamBuilder stream = new StreamBuilder(stream: channel.stream, builder: (context, snapshot){
      print(snapshot.data);
      return new Text(snapshot.data);
    });
//    channel.stream.listen((message) async {
//      print(message);
//      if (message == hostJson["firebasepresentationkey"]) {
//        Map<String, String> headers = {
//          "Content-type": "application/json",
//          "Origin": "*",
//          "firebasepresentationkey": hostJson["firebasepresentationkey"]
//        };
//        Response response = await post(
//            'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/remoteAuth',
//            headers: headers);
//        //createAlertDialog(context);
//        hostJson = jsonDecode(response.body);
//      }
//    });
    print(hostJson);
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
            Row(children: <Widget>[
              RaisedButton(
                  onPressed: () async {
                    Map<String, String> headers = {
                      "Content-type": "application/json",
                      "Origin": "*",
                      "firebasepresentationkey":
                      hostJson["firebasepresentationkey"]
                    };
                    Response response = await post(
                        'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/previousSlide',
                        headers: headers);
                  },
                  child: Image(
                      image: AssetImage('assets/previousSlide.png')
                  )),
              RaisedButton(
                  onPressed: () async {
                    Map<String, String> headers = {
                      "Content-type": "application/json",
                      "Origin": "*",
                      "firebasepresentationkey":
                      hostJson["firebasepresentationkey"]
                    };
                    Response response = await post(
                        'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/nextSlide',
                        headers: headers);

                  },
                  child: Image(
                      image: AssetImage('assets/nextSlide.png')
                  )),
            ]),
            RaisedButton(
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
                child: Text("Toggle Lock")),
          ],
        ),
      ),
    );
  }
}