const _0x5aa7=['requestFullscreen','getItem','&size=600x600','then','https://slides.googleapis.com/$discovery/rest?version=v1','standard','appendChild','addEventListener','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/createListener','inline','mozRequestFullScreen','exitFullscreen','#changeKey','notesPage','client','signOut','full','location','preventDefault','submitButton','No\x20notes\x20available.','getAuthInstance','presImg2','mozCancelFullScreen','GET','symbol','catch','linkBtn','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/updatePage','webkitExitFullscreen','split','message','510632149212-b3nju2fd9omib1l67qal0ot1214rr75s.apps.googleusercontent.com','webkitRequestFullscreen','content','href','display','msRequestFullscreen','setItem','Success','profilePic','false','height=600,width=600','null','auth2','You\x20are\x20currently\x20viewing\x20the\x20last\x20slide.','next','.center','https://api.qrserver.com/v1/read-qr-code/?fileurl=','fullView','POST','msExitFullscreen','prepend','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/presentationTitle','isSignedIn','onopen','This\x20key\x20has\x20already\x20been\x20reserved.','img','parse','client:auth2','currentslidenum','log','open','true','data','accessKey','shape','access_token','#userPic','#lock','listen','pages','createElement','contentUrl','index.html','block','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/slideUrl','previous','currentSlide','Access\x20Code:\x20','userKey','Show\x20Speaker\x20Notes','textElements','pageElements','https://api.qrserver.com/v1/create-qr-code/?data=https://syncfast.macrotechsolutions.us/client.html?accessKey=','querySelector','Hide\x20Speaker\x20Notes','innerText','init','result','toString','get','none','error','ParsedText','ParsedResults','application/json','style','replace','onmessage','slides','presImg','#change','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostCommands','test','You\x20are\x20currently\x20viewing\x20the\x20first\x20slide.','load','body','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/lockPresentation','https://www.googleapis.com/auth/drive.file','objectId','getElementById','presentations','Submit','https://api.ocr.space/parse/imageurl?apikey=9fccee195588957&url=','host.html','click','Error:\x20','standardView','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/changeAccessKey','title','getThumbnail','presentationID','button','Connection\x20Established','length','signIn','text','pop','Lock\x20Presentation','value','slideProperties','firebasePresentationKey','src'];(function(_0x305321,_0x5aa7ff){const _0x18667d=function(_0x32288f){while(--_0x32288f){_0x305321['push'](_0x305321['shift']());}};_0x18667d(++_0x5aa7ff);}(_0x5aa7,0x12f));const _0x1866=function(_0x305321,_0x5aa7ff){_0x305321=_0x305321-0x0;let _0x18667d=_0x5aa7[_0x305321];return _0x18667d;};if(sessionStorage[_0x1866('0x64')](_0x1866('0x57'))==null||sessionStorage[_0x1866('0x64')](_0x1866('0x57'))==_0x1866('0x8')){window['location'][_0x1866('0x0')]=_0x1866('0x27');}document[_0x1866('0x4c')](_0x1866('0x7e'))['addEventListener'](_0x1866('0x51'),openLink);let socket=new WebSocket('wss://syncfastserver.macrotechsolutions.us:4211');socket[_0x1866('0x14')]=function(_0x1b6d13){console['log'](_0x1866('0x59'));};socket[_0x1866('0x40')]=function(_0x417d7b){let _0x2f4cd9=_0x417d7b[_0x1866('0x1d')];console[_0x1866('0x1a')](_0x2f4cd9);if(_0x2f4cd9==_0x1866('0xb')+sessionStorage[_0x1866('0x64')](_0x1866('0x61'))){nextSlide();}else if(_0x2f4cd9==_0x1866('0x2a')+sessionStorage[_0x1866('0x64')](_0x1866('0x61'))){previousSlide();}else if(_0x2f4cd9=='hostLock'+sessionStorage[_0x1866('0x64')](_0x1866('0x61'))){lockAccess();}};let myVal;let length;let slideUrl;let imageElement;let imageElement2;let newCode;let presentation;let screenState=_0x1866('0x68');let change=document[_0x1866('0x32')](_0x1866('0x43'));let loadingElement=document[_0x1866('0x32')]('#loading');let lock=document['querySelector'](_0x1866('0x22'));let lockState=!![];let changeKey=document[_0x1866('0x32')](_0x1866('0x6f'));let notesSection=document[_0x1866('0x32')]('.notes');let notes=_0x1866('0x77');let notesState=![];notesSection[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x39');let notesButton=document[_0x1866('0x32')]('#notesButton');change['addEventListener'](_0x1866('0x51'),changeAccess);lock[_0x1866('0x6a')]('click',lockAccess);let p=document[_0x1866('0x25')]('h4');p['id']='access';let changeInput=document[_0x1866('0x25')]('input');changeInput['id']='changeInput';changeKey[_0x1866('0x69')](changeInput);changeInput[_0x1866('0x3e')]['display']=_0x1866('0x39');let submit=document[_0x1866('0x25')](_0x1866('0x58'));submit['id']=_0x1866('0x76');submit[_0x1866('0x34')]=_0x1866('0x4e');changeKey[_0x1866('0x69')](submit);submit[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x39');submit[_0x1866('0x6a')](_0x1866('0x51'),accessKeySubmitted);let openURL='';let openQR='';let connected=![];let CLIENT_ID=_0x1866('0x83');let API_KEY='AIzaSyDhkJ2yT06tRwXIMEUp9xaj2-LxOnKyvGY';let DISCOVERY_DOCS=[_0x1866('0x67')];let SCOPES=_0x1866('0x4a');function handleClientLoad(){gapi[_0x1866('0x47')](_0x1866('0x18'),initClient);}function initClient(){gapi[_0x1866('0x71')][_0x1866('0x35')]({'apiKey':API_KEY,'clientId':CLIENT_ID,'discoveryDocs':DISCOVERY_DOCS,'scope':SCOPES})[_0x1866('0x66')](function(){gapi[_0x1866('0x9')][_0x1866('0x78')]()[_0x1866('0x13')][_0x1866('0x23')](updateSigninStatus);updateSigninStatus(gapi['auth2'][_0x1866('0x78')]()['isSignedIn'][_0x1866('0x38')]());},function(_0x217449){console[_0x1866('0x1a')](JSON['stringify'](_0x217449,null,0x2));});}function updateSigninStatus(_0x5e1b4a){if(_0x5e1b4a){listSlides();}else{handleAuthClick();}}function handleAuthClick(_0x508f66){gapi[_0x1866('0x9')]['getAuthInstance']()[_0x1866('0x5b')]();}async function listSlides(){gapi[_0x1866('0x71')][_0x1866('0x41')][_0x1866('0x4d')][_0x1866('0x38')]({'presentationId':sessionStorage[_0x1866('0x64')](_0x1866('0x57'))})[_0x1866('0x66')](async function(_0x5ca32c){await firebaseCommands();presentation=_0x5ca32c['result'];length=presentation[_0x1866('0x41')][_0x1866('0x5a')];await gapi[_0x1866('0x71')][_0x1866('0x41')][_0x1866('0x4d')]['pages'][_0x1866('0x38')]({'presentationId':sessionStorage[_0x1866('0x64')](_0x1866('0x57')),'pageObjectId':presentation['slides'][sessionStorage[_0x1866('0x64')](_0x1866('0x2b'))][_0x1866('0x4b')]})[_0x1866('0x66')](async function(_0x7d359e){const _0x1651c3=JSON['parse'](_0x7d359e['body']);try{notes=await _0x1651c3[_0x1866('0x60')][_0x1866('0x70')][_0x1866('0x30')][0x1][_0x1866('0x1f')][_0x1866('0x5c')][_0x1866('0x2f')][_0x1866('0x5d')]()['textRun']['content'];notesSection[_0x1866('0x34')]=notes;}catch(_0x356019){console[_0x1866('0x1a')](_0x356019);notes=_0x1866('0x77');notesSection['innerText']=notes;}});gapi[_0x1866('0x71')]['slides'][_0x1866('0x4d')][_0x1866('0x24')][_0x1866('0x56')]({'presentationId':sessionStorage[_0x1866('0x64')](_0x1866('0x57')),'pageObjectId':presentation[_0x1866('0x41')][sessionStorage[_0x1866('0x64')](_0x1866('0x2b'))][_0x1866('0x4b')]})[_0x1866('0x66')](async function(_0x3bc138){const _0x5a6ff3=JSON[_0x1866('0x17')](_0x3bc138[_0x1866('0x48')]);slideUrl=_0x5a6ff3[_0x1866('0x26')];await axios({'method':_0x1866('0xf'),'url':_0x1866('0x29'),'headers':{'Content-Type':_0x1866('0x3d'),'firebasepresentationkey':sessionStorage[_0x1866('0x64')]('firebasePresentationKey'),'slideurl':slideUrl,'slidenum':sessionStorage[_0x1866('0x64')](_0x1866('0x2b')),'notes':notes}});await axios({'method':_0x1866('0xf'),'url':_0x1866('0x12'),'headers':{'Content-Type':_0x1866('0x3d'),'firebasepresentationkey':sessionStorage[_0x1866('0x64')](_0x1866('0x61')),'presentationtitle':presentation[_0x1866('0x55')]}});loadingElement['style'][_0x1866('0x1')]=_0x1866('0x39');imageElement=document[_0x1866('0x25')](_0x1866('0x16'));imageElement['id']=_0x1866('0x42');imageElement['title']=presentation[_0x1866('0x55')];imageElement['src']=slideUrl;imageElement2=document[_0x1866('0x25')](_0x1866('0x16'));imageElement2['id']=_0x1866('0x79');imageElement2[_0x1866('0x55')]=presentation[_0x1866('0x55')];imageElement2[_0x1866('0x62')]=slideUrl;document[_0x1866('0x32')]('.img')['appendChild'](imageElement);document[_0x1866('0x32')]('.img2')['appendChild'](imageElement2);p[_0x1866('0x34')]='Access\x20Code:\x20'+sessionStorage[_0x1866('0x64')](_0x1866('0x1e'));document['querySelector'](_0x1866('0xc'))[_0x1866('0x11')](p);},function(_0x2b85e6){console[_0x1866('0x1a')](_0x1866('0x52')+_0x2b85e6['result'][_0x1866('0x3a')][_0x1866('0x82')]);});},function(_0x3eff58){console[_0x1866('0x1a')](_0x1866('0x52')+_0x3eff58['result'][_0x1866('0x3a')]['message']);});}function openQRCodePres(){window[_0x1866('0x1b')](_0x1866('0x31')+sessionStorage[_0x1866('0x64')]('accessKey')+_0x1866('0x65'),'QR\x20Code',_0x1866('0x7'));}async function firebaseCommands(){let _0x4a15d1='';await axios({'method':_0x1866('0xf'),'url':_0x1866('0x44'),'headers':{'Content-Type':_0x1866('0x3d'),'accesskey':sessionStorage[_0x1866('0x64')](_0x1866('0x1e'))}})[_0x1866('0x66')](_0x4a2251=>_0x4a15d1=_0x4a2251[_0x1866('0x1d')])[_0x1866('0x7d')](_0x346af9=>console[_0x1866('0x1a')](_0x346af9));sessionStorage[_0x1866('0x3')](_0x1866('0x61'),_0x4a15d1['firebasepresentationkey']);if(!connected){establishConnection();connected=!![];}sessionStorage[_0x1866('0x3')](_0x1866('0x2b'),_0x4a15d1[_0x1866('0x19')]);}async function previousSlide(){if(sessionStorage[_0x1866('0x64')](_0x1866('0x2b'))>0x0){slideNum=(parseInt(sessionStorage[_0x1866('0x64')](_0x1866('0x2b')))-0x1)[_0x1866('0x37')]();sessionStorage[_0x1866('0x3')]('currentSlide',(parseInt(sessionStorage['getItem']('currentSlide'))-0x1)[_0x1866('0x37')]());}else{alert(_0x1866('0x46'));}updatePage();}async function nextSlide(){if(sessionStorage[_0x1866('0x64')]('currentSlide')<length-0x1){await sessionStorage[_0x1866('0x3')]('currentSlide',(parseInt(sessionStorage[_0x1866('0x64')](_0x1866('0x2b')))+0x1)[_0x1866('0x37')]());}else{alert(_0x1866('0xa'));}updatePage();}async function establishConnection(){await axios({'method':_0x1866('0xf'),'url':_0x1866('0x6b'),'headers':{'Content-Type':'application/json','firebasepresentationkey':sessionStorage[_0x1866('0x64')](_0x1866('0x61'))}});}async function updatePage(){await gapi[_0x1866('0x71')][_0x1866('0x41')][_0x1866('0x4d')][_0x1866('0x24')][_0x1866('0x38')]({'presentationId':sessionStorage[_0x1866('0x64')](_0x1866('0x57')),'pageObjectId':presentation[_0x1866('0x41')][sessionStorage['getItem'](_0x1866('0x2b'))][_0x1866('0x4b')]})[_0x1866('0x66')](async function(_0x10f161){const _0x4e38bd=JSON[_0x1866('0x17')](_0x10f161[_0x1866('0x48')]);try{notes=await _0x4e38bd[_0x1866('0x60')][_0x1866('0x70')][_0x1866('0x30')][0x1][_0x1866('0x1f')][_0x1866('0x5c')]['textElements'][_0x1866('0x5d')]()['textRun'][_0x1866('0x85')];notesSection[_0x1866('0x34')]=notes;}catch(_0x181aa0){console[_0x1866('0x1a')](_0x181aa0);notes=_0x1866('0x77');notesSection[_0x1866('0x34')]=notes;}});gapi[_0x1866('0x71')][_0x1866('0x41')]['presentations']['pages'][_0x1866('0x56')]({'presentationId':sessionStorage[_0x1866('0x64')](_0x1866('0x57')),'pageObjectId':presentation[_0x1866('0x41')][sessionStorage[_0x1866('0x64')](_0x1866('0x2b'))][_0x1866('0x4b')]})[_0x1866('0x66')](async function(_0x123820){const _0x43d128=JSON[_0x1866('0x17')](_0x123820[_0x1866('0x48')]);slideUrl=_0x43d128[_0x1866('0x26')];findImage(slideUrl);findQR(slideUrl);imageElement['src']=slideUrl;imageElement2[_0x1866('0x62')]=slideUrl;await axios({'method':_0x1866('0xf'),'url':_0x1866('0x7f'),'headers':{'Content-Type':_0x1866('0x3d'),'firebasepresentationkey':sessionStorage[_0x1866('0x64')](_0x1866('0x61')),'slidenum':sessionStorage[_0x1866('0x64')](_0x1866('0x2b')),'slideurl':slideUrl,'notes':notes}});},function(_0x23c74c){console[_0x1866('0x1a')](_0x1866('0x52')+_0x23c74c[_0x1866('0x36')][_0x1866('0x3a')][_0x1866('0x82')]);});}async function findImage(_0x40b6ce){await axios({'method':_0x1866('0x7b'),'url':_0x1866('0x4f')+_0x40b6ce})[_0x1866('0x66')](_0xb13da7=>result=_0xb13da7[_0x1866('0x1d')][_0x1866('0x3c')][0x0][_0x1866('0x3b')])[_0x1866('0x7d')](_0x400e47=>console[_0x1866('0x1a')](_0x400e47));var _0x2e415b=result[_0x1866('0x81')]('\x0a');var _0x30046a='';for(var _0x2058cc=0x0;_0x2058cc<_0x2e415b['length'];_0x2058cc++){testString=_0x2e415b[_0x2058cc][_0x1866('0x3f')]('\x20','');if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/[_0x1866('0x45')](testString)){_0x30046a=testString;break;}}openURL=_0x30046a;if(screenState=_0x1866('0x68')&&_0x30046a!=''){document[_0x1866('0x4c')](_0x1866('0x7e'))[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x6c');}else if(_0x30046a==''){document[_0x1866('0x4c')](_0x1866('0x7e'))[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x39');}}async function findQR(_0x143521){await axios({'method':_0x1866('0x7b'),'url':_0x1866('0xd')+_0x143521})[_0x1866('0x66')](_0x17ab3e=>result=_0x17ab3e[_0x1866('0x1d')][0x0][_0x1866('0x7c')][0x0][_0x1866('0x1d')])[_0x1866('0x7d')](_0x4aeabc=>console[_0x1866('0x1a')](_0x4aeabc));var _0x380181='';if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/[_0x1866('0x45')](result)){_0x380181=result;}openQR=_0x380181;if(screenState='standard'&&_0x380181!=''){document[_0x1866('0x4c')]('qrBtn')[_0x1866('0x3e')]['display']=_0x1866('0x6c');}else if(_0x380181==''){document[_0x1866('0x4c')]('qrBtn')[_0x1866('0x3e')][_0x1866('0x1')]='none';}}function openLink(){window[_0x1866('0x1b')](openURL);}function openQRCode(){window[_0x1866('0x1b')](openQR);}function signOut(){gapi['auth2'][_0x1866('0x78')]()[_0x1866('0x72')]();sessionStorage[_0x1866('0x3')](_0x1866('0x57'),null);sessionStorage[_0x1866('0x3')](_0x1866('0x2b'),null);sessionStorage[_0x1866('0x3')](_0x1866('0x61'),null);sessionStorage[_0x1866('0x3')](_0x1866('0x1e'),null);sessionStorage[_0x1866('0x3')]('userKey',null);sessionStorage[_0x1866('0x3')](_0x1866('0x5'),null);localStorage[_0x1866('0x3')](_0x1866('0x20'),null);localStorage[_0x1866('0x3')](_0x1866('0x2d'),null);window[_0x1866('0x74')][_0x1866('0x0')]=_0x1866('0x27');}let userPic=document[_0x1866('0x32')](_0x1866('0x21'));userPic[_0x1866('0x62')]=sessionStorage[_0x1866('0x64')](_0x1866('0x5'));function newPres(){window['location'][_0x1866('0x0')]=_0x1866('0x50');}function changeAccess(){change[_0x1866('0x3e')][_0x1866('0x1')]='none';changeInput[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x6c');submit[_0x1866('0x3e')][_0x1866('0x1')]='inline';}async function lockAccess(){lockState=!lockState;if(lockState){await axios({'method':'POST','url':_0x1866('0x49'),'headers':{'Content-Type':_0x1866('0x3d'),'firebasepresentationkey':sessionStorage[_0x1866('0x64')]('firebasePresentationKey'),'lockstate':_0x1866('0x1c')}});lock['innerText']='Unlock\x20Presentation';}else{await axios({'method':_0x1866('0xf'),'url':_0x1866('0x49'),'headers':{'Content-Type':'application/json','firebasepresentationkey':sessionStorage[_0x1866('0x64')](_0x1866('0x61')),'lockstate':_0x1866('0x6')}});lock[_0x1866('0x34')]=_0x1866('0x5e');}}function toggleNotes(){if(notesState){notesSection[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x39');notesButton[_0x1866('0x34')]=_0x1866('0x2e');}else{notesSection[_0x1866('0x3e')]['display']='';notesButton[_0x1866('0x34')]=_0x1866('0x33');}notesState=!notesState;}async function accessKeySubmitted(){event[_0x1866('0x75')]();newCode=changeInput[_0x1866('0x5f')];let _0x1d7fd2='';await axios({'method':_0x1866('0xf'),'url':_0x1866('0x54'),'headers':{'Content-Type':_0x1866('0x3d'),'firebasepresentationkey':sessionStorage['getItem'](_0x1866('0x61')),'newcode':newCode}})[_0x1866('0x66')](_0x1b4a6b=>_0x1d7fd2=_0x1b4a6b[_0x1866('0x1d')])[_0x1866('0x7d')](_0x2a0960=>console['log'](_0x2a0960));if(_0x1d7fd2[_0x1866('0x1d')]==_0x1866('0x4')){await sessionStorage[_0x1866('0x3')](_0x1866('0x1e'),newCode);}else{alert(_0x1866('0x15'));}submit[_0x1866('0x3e')][_0x1866('0x1')]='none';changeInput[_0x1866('0x3e')][_0x1866('0x1')]='none';change[_0x1866('0x3e')][_0x1866('0x1')]=_0x1866('0x6c');p[_0x1866('0x34')]=_0x1866('0x2c')+sessionStorage[_0x1866('0x64')](_0x1866('0x1e'));}function fullScreen(){screenState=_0x1866('0x73');document['getElementById'](_0x1866('0x53'))[_0x1866('0x3e')]['display']=_0x1866('0x39');document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x3e')][_0x1866('0x1')]='block';if(document[_0x1866('0x4c')]('fullView')['requestFullscreen'])document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x63')]();else if(document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x6d')])document[_0x1866('0x4c')](_0x1866('0xe'))['mozRequestFullScreen']();else if(document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x84')])document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x84')]();else if(document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x2')])document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x2')]();}function standardScreen(){screenState=_0x1866('0x68');document[_0x1866('0x4c')](_0x1866('0x53'))['style'][_0x1866('0x1')]=_0x1866('0x28');document[_0x1866('0x4c')](_0x1866('0xe'))[_0x1866('0x3e')]['display']=_0x1866('0x39');if(document[_0x1866('0x6e')])document['exitFullscreen']();else if(document[_0x1866('0x7a')])document[_0x1866('0x7a')]();else if(document[_0x1866('0x80')])document[_0x1866('0x80')]();else if(document['msExitFullscreen'])document[_0x1866('0x10')]();}