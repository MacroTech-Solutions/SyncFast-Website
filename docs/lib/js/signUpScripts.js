const _0x5bd6=['signOut','access_token','setItem','getEmail','getName','getImageUrl','then','data','catch','log','userKey','profilePic','location','href','landing.html','signin2','render','my-signin2','profile\x20email\x20https://www.googleapis.com/auth/drive.file','light','querySelector','#submit_button','addEventListener','createElement','value','toLowerCase','#firstName','#lastName','#passwordInput','#passwordConfirm','#wrong','POST','application/json','Email\x20already\x20exists.','Please\x20enter\x20an\x20email\x20address.','Invalid\x20Name','Invalid\x20email\x20address.','Your\x20password\x20needs\x20to\x20be\x20at\x20least\x206\x20characters.','Your\x20passwords\x20don\x27t\x20match.','innerText','class','prepend','onbeforeunload','getAuthInstance'];(function(_0x1e747f,_0x26f7da){const _0x566a69=function(_0x2d030c){while(--_0x2d030c){_0x1e747f['push'](_0x1e747f['shift']());}};_0x566a69(++_0x26f7da);}(_0x5bd6,0xae));const _0x3e1c=function(_0x1e747f,_0x26f7da){_0x1e747f=_0x1e747f-0x0;let _0x566a69=_0x5bd6[_0x1e747f];return _0x566a69;};window[_0x3e1c('0x0')]=function(_0x4022c3){gapi['auth2'][_0x3e1c('0x1')]()[_0x3e1c('0x2')]();};async function onSuccess(_0x380b80){let _0x2395a2=_0x380b80['getBasicProfile']();let _0x4a1276;for(key in _0x380b80){if(_0x380b80[key][_0x3e1c('0x3')]!=undefined){localStorage[_0x3e1c('0x4')](_0x3e1c('0x3'),_0x380b80[key]['access_token']);}}await axios({'method':'POST','url':'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/googleSignIn','headers':{'Content-Type':'application/json','email':_0x2395a2[_0x3e1c('0x5')](),'password':'','name':_0x2395a2[_0x3e1c('0x6')](),'imageurl':_0x2395a2[_0x3e1c('0x7')]()}})[_0x3e1c('0x8')](_0xf27329=>_0x4a1276=_0xf27329[_0x3e1c('0x9')])[_0x3e1c('0xa')](_0x330337=>console[_0x3e1c('0xb')](_0x330337));sessionStorage[_0x3e1c('0x4')](_0x3e1c('0xc'),_0x4a1276[_0x3e1c('0xc')]);sessionStorage['setItem'](_0x3e1c('0xd'),_0x2395a2[_0x3e1c('0x7')]());window[_0x3e1c('0xe')][_0x3e1c('0xf')]=_0x3e1c('0x10');}function onFailure(_0x1d8c79){console[_0x3e1c('0xb')](_0x1d8c79);}function renderButton(){gapi[_0x3e1c('0x11')][_0x3e1c('0x12')](_0x3e1c('0x13'),{'scope':_0x3e1c('0x14'),'width':0xf0,'height':0x32,'longtitle':!![],'theme':_0x3e1c('0x15'),'onsuccess':onSuccess,'onfailure':onFailure});}document[_0x3e1c('0x16')](_0x3e1c('0x17'))[_0x3e1c('0x18')]('click',signUpEmail);let box;let notSameError=document[_0x3e1c('0x19')]('p');async function signUpEmail(_0x58234f){_0x58234f['preventDefault']();let _0x10ac7c=document[_0x3e1c('0x16')]('#emailInput')[_0x3e1c('0x1a')][_0x3e1c('0x1b')]();let _0x272c95=document[_0x3e1c('0x16')](_0x3e1c('0x1c'))[_0x3e1c('0x1a')];let _0x2b8c29=document[_0x3e1c('0x16')](_0x3e1c('0x1d'))[_0x3e1c('0x1a')];let _0x10eb8b=document[_0x3e1c('0x16')](_0x3e1c('0x1e'))[_0x3e1c('0x1a')];let _0x2cbbae=document[_0x3e1c('0x16')](_0x3e1c('0x1f'))[_0x3e1c('0x1a')];box=document[_0x3e1c('0x16')](_0x3e1c('0x20'));let _0x16f872;await axios({'method':_0x3e1c('0x21'),'url':'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/signUp','headers':{'Content-Type':_0x3e1c('0x22'),'email':_0x10ac7c,'firstname':_0x272c95,'lastname':_0x2b8c29,'password':_0x10eb8b,'passwordconfirm':_0x2cbbae}})[_0x3e1c('0x8')](_0x471121=>_0x16f872=_0x471121[_0x3e1c('0x9')])[_0x3e1c('0xa')](_0x6c6919=>console[_0x3e1c('0xb')](_0x6c6919));if(_0x16f872[_0x3e1c('0x9')]==_0x3e1c('0x23')){notSame('Email\x20already\x20exists.');}else if(_0x16f872[_0x3e1c('0x9')]==_0x3e1c('0x24')){notSame(_0x3e1c('0x24'));}else if(_0x16f872['data']=='Invalid\x20Name'){notSame(_0x3e1c('0x25'));}else if(_0x16f872['data']==_0x3e1c('0x26')){notSame(_0x3e1c('0x26'));}else if(_0x16f872[_0x3e1c('0x9')]==_0x3e1c('0x27')){notSame(_0x3e1c('0x27'));}else if(_0x16f872[_0x3e1c('0x9')]==_0x3e1c('0x28')){notSame(_0x3e1c('0x28'));}else{sessionStorage[_0x3e1c('0x4')](_0x3e1c('0xc'),_0x16f872['data']);sessionStorage['setItem'](_0x3e1c('0xd'),_0x16f872['imageurl']);window['location'][_0x3e1c('0xf')]=_0x3e1c('0x10');}}function notSame(_0x5949f5){notSameError[_0x3e1c('0x29')]=''+_0x5949f5;notSameError[_0x3e1c('0x2a')]='error';box[_0x3e1c('0x2b')](notSameError);}