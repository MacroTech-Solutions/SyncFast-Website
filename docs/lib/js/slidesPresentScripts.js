const _0x3093=['result','510632149212-b3nju2fd9omib1l67qal0ot1214rr75s.apps.googleusercontent.com','Submit','application/json','false','target','replace','prepend','currentslidenum','inline','standardView','objectId','createElement','button','null','classList','POST','msRequestFullscreen','This\x20key\x20has\x20already\x20been\x20reserved.','test','data','No\x20notes\x20available.','Show\x20Speaker\x20Notes','slides','error','Error:\x20','index.html','fullView','parse','firebasePresentationKey','wss://syncfastserver.macrotechsolutions.us:4211','isSignedIn','text','display','.notes','slideProperties','https://api.qrserver.com/v1/create-qr-code/?data=https://syncfast.macrotechsolutions.us/client.html?accessKey=','img','pages','src','appendChild','value','title','shape','style','Access\x20Code:\x20','block','ParsedText','webkitExitFullscreen','input','init','none','innerText','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/hostCommands','presImg2','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/presentationLength','listen','matches','click','#change','.dropbtn','.img','presentationID','toString','split','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/createListener','getElementById','stringify','contains','mozCancelFullScreen','dropdown-content','Connection\x20Established','https://www.googleapis.com/auth/drive.file','toggle','open','log','&size=600x600','body','onmessage','onopen','QR\x20Code','then','client:auth2','location','setItem','webkitRequestFullscreen','getItem','.img2','currentSlide','addEventListener','msExitFullscreen','show','Lock\x20Presentation','#userPic','firebasepresentationkey','.center','getAuthInstance','mozRequestFullScreen','catch','pop','full','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/updatePage','querySelector','access','contentUrl','symbol','client','#loading','pageElements','#changeKey','GET','remove','standard','true','getThumbnail','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/presentationTitle','userKey','presentations','accessKey','You\x20are\x20currently\x20viewing\x20the\x20last\x20slide.','https://api.ocr.space/parse/imageurl?apikey=9fccee195588957&url=','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/changeAccessKey','changeInput','message','preventDefault','access_token','notesPage','href','Hide\x20Speaker\x20Notes','auth2','#notesButton','qrBtn','get','requestFullscreen','content','textRun','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/lockPresentation','length','linkBtn','Unlock\x20Presentation','submitButton','myDropdown','profilePic','Success','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/slideUrl'];(function(_0x18e5a9,_0x30935b){const _0x1af17c=function(_0x52fe54){while(--_0x52fe54){_0x18e5a9['push'](_0x18e5a9['shift']());}};_0x1af17c(++_0x30935b);}(_0x3093,0xcc));const _0x1af1=function(_0x18e5a9,_0x30935b){_0x18e5a9=_0x18e5a9-0x0;let _0x1af17c=_0x3093[_0x18e5a9];return _0x1af17c;};if(sessionStorage['getItem'](_0x1af1('0x3'))==null||sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3'))==_0x1af1('0x64')){window[_0x1af1('0x18')][_0x1af1('0x44')]=_0x1af1('0x70');}document[_0x1af1('0x7')]('linkBtn')[_0x1af1('0x1e')](_0x1af1('0x90'),openLink);let socket=new WebSocket(_0x1af1('0x74'));socket[_0x1af1('0x14')]=function(_0x478cbe){console[_0x1af1('0x10')](_0x1af1('0xc'));};socket[_0x1af1('0x13')]=function(_0x963939){let _0x2494a3=_0x963939[_0x1af1('0x6a')];console['log'](_0x2494a3);if(_0x2494a3=='next'+sessionStorage[_0x1af1('0x1b')]('firebasePresentationKey')){nextSlide();}else if(_0x2494a3=='previous'+sessionStorage['getItem'](_0x1af1('0x73'))){previousSlide();}else if(_0x2494a3=='hostLock'+sessionStorage[_0x1af1('0x1b')](_0x1af1('0x73'))){lockAccess();}};let myVal;let length;let slideUrl;let imageElement;let imageElement2;let newCode;let presentation;let screenState=_0x1af1('0x35');let change=document[_0x1af1('0x2b')](_0x1af1('0x0'));let loadingElement=document[_0x1af1('0x2b')](_0x1af1('0x30'));let lock=document[_0x1af1('0x2b')]('#lock');let lockState=!![];let changeKey=document[_0x1af1('0x2b')](_0x1af1('0x32'));let notesSection=document[_0x1af1('0x2b')](_0x1af1('0x78'));let notes=_0x1af1('0x6b');let notesState=![];notesSection[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');let notesButton=document[_0x1af1('0x2b')](_0x1af1('0x47'));change[_0x1af1('0x1e')](_0x1af1('0x90'),changeAccess);lock['addEventListener']('click',lockAccess);let p=document[_0x1af1('0x62')]('h4');p['id']=_0x1af1('0x2c');let changeInput=document['createElement'](_0x1af1('0x87'));changeInput['id']=_0x1af1('0x3f');changeKey[_0x1af1('0x7e')](changeInput);changeInput[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');let submit=document['createElement'](_0x1af1('0x63'));submit['id']=_0x1af1('0x51');submit[_0x1af1('0x8a')]=_0x1af1('0x58');changeKey[_0x1af1('0x7e')](submit);submit[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');submit[_0x1af1('0x1e')](_0x1af1('0x90'),accessKeySubmitted);let openURL='';let openQR='';let connected=![];let CLIENT_ID=_0x1af1('0x57');let API_KEY='AIzaSyDhkJ2yT06tRwXIMEUp9xaj2-LxOnKyvGY';let DISCOVERY_DOCS=['https://slides.googleapis.com/$discovery/rest?version=v1'];let SCOPES=_0x1af1('0xd');function handleClientLoad(){gapi['load'](_0x1af1('0x17'),initClient);}function initClient(){gapi[_0x1af1('0x2f')][_0x1af1('0x88')]({'apiKey':API_KEY,'clientId':CLIENT_ID,'discoveryDocs':DISCOVERY_DOCS,'scope':SCOPES})[_0x1af1('0x16')](function(){gapi['auth2'][_0x1af1('0x25')]()['isSignedIn'][_0x1af1('0x8e')](updateSigninStatus);updateSigninStatus(gapi[_0x1af1('0x46')][_0x1af1('0x25')]()[_0x1af1('0x75')][_0x1af1('0x49')]());},function(_0x2a1af2){console[_0x1af1('0x10')](JSON[_0x1af1('0x8')](_0x2a1af2,null,0x2));});}function updateSigninStatus(_0x4c29a3){if(_0x4c29a3){listSlides();}else{handleAuthClick();}}function handleAuthClick(_0x3bd694){gapi[_0x1af1('0x46')][_0x1af1('0x25')]()['signIn']();}async function listSlides(){gapi[_0x1af1('0x2f')][_0x1af1('0x6d')][_0x1af1('0x3a')][_0x1af1('0x49')]({'presentationId':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3'))})['then'](async function(_0x5850f5){await firebaseCommands();presentation=_0x5850f5[_0x1af1('0x56')];length=presentation[_0x1af1('0x6d')][_0x1af1('0x4e')];await gapi[_0x1af1('0x2f')][_0x1af1('0x6d')][_0x1af1('0x3a')][_0x1af1('0x7c')][_0x1af1('0x49')]({'presentationId':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3')),'pageObjectId':presentation[_0x1af1('0x6d')][sessionStorage[_0x1af1('0x1b')]('currentSlide')]['objectId']})[_0x1af1('0x16')](async function(_0x1d73cf){const _0x524cf3=JSON[_0x1af1('0x72')](_0x1d73cf['body']);try{notes=await _0x524cf3[_0x1af1('0x79')]['notesPage']['pageElements'][0x1][_0x1af1('0x81')][_0x1af1('0x76')]['textElements'][_0x1af1('0x28')]()[_0x1af1('0x4c')][_0x1af1('0x4b')];notesSection['innerText']=notes;}catch(_0x5de50a){console[_0x1af1('0x10')](_0x5de50a);notes=_0x1af1('0x6b');notesSection[_0x1af1('0x8a')]=notes;}});gapi[_0x1af1('0x2f')][_0x1af1('0x6d')][_0x1af1('0x3a')]['pages'][_0x1af1('0x37')]({'presentationId':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3')),'pageObjectId':presentation[_0x1af1('0x6d')][sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d'))][_0x1af1('0x61')]})['then'](async function(_0x260830){const _0x2f90fa=JSON[_0x1af1('0x72')](_0x260830[_0x1af1('0x12')]);slideUrl=_0x2f90fa[_0x1af1('0x2d')];await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x55'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x73')),'slideurl':slideUrl,'slidenum':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d')),'notes':notes}});await axios({'method':'POST','url':_0x1af1('0x38'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x73')),'presentationtitle':presentation[_0x1af1('0x80')]}});await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x8d'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x73')),'length':length,'presentationtitle':presentation[_0x1af1('0x80')]}});loadingElement[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');imageElement=document[_0x1af1('0x62')]('img');imageElement['id']='presImg';imageElement[_0x1af1('0x80')]=presentation['title'];imageElement[_0x1af1('0x7d')]=slideUrl;imageElement2=document[_0x1af1('0x62')](_0x1af1('0x7b'));imageElement2['id']=_0x1af1('0x8c');imageElement2[_0x1af1('0x80')]=presentation[_0x1af1('0x80')];imageElement2[_0x1af1('0x7d')]=slideUrl;document[_0x1af1('0x2b')](_0x1af1('0x2'))[_0x1af1('0x7e')](imageElement);document['querySelector'](_0x1af1('0x1c'))[_0x1af1('0x7e')](imageElement2);p[_0x1af1('0x8a')]=_0x1af1('0x83')+sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3b'));document[_0x1af1('0x2b')](_0x1af1('0x24'))[_0x1af1('0x5d')](p);},function(_0x1b79e5){console['log'](_0x1af1('0x6f')+_0x1b79e5[_0x1af1('0x56')][_0x1af1('0x6e')]['message']);});},function(_0x5f14c8){console[_0x1af1('0x10')](_0x1af1('0x6f')+_0x5f14c8[_0x1af1('0x56')][_0x1af1('0x6e')][_0x1af1('0x40')]);});}function openQRCodePres(){window[_0x1af1('0xf')](_0x1af1('0x7a')+sessionStorage[_0x1af1('0x1b')]('accessKey')+_0x1af1('0x11'),_0x1af1('0x15'),'height=600,width=600');}async function firebaseCommands(){let _0x1b90c7='';await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x8b'),'headers':{'Content-Type':_0x1af1('0x59'),'accesskey':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3b'))}})['then'](_0x517cf9=>_0x1b90c7=_0x517cf9[_0x1af1('0x6a')])['catch'](_0x2d988a=>console[_0x1af1('0x10')](_0x2d988a));sessionStorage[_0x1af1('0x19')](_0x1af1('0x73'),_0x1b90c7[_0x1af1('0x23')]);if(!connected){establishConnection();connected=!![];}sessionStorage['setItem'](_0x1af1('0x1d'),_0x1b90c7[_0x1af1('0x5e')]);}async function previousSlide(){if(sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d'))>0x0){slideNum=(parseInt(sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d')))-0x1)[_0x1af1('0x4')]();sessionStorage[_0x1af1('0x19')]('currentSlide',(parseInt(sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d')))-0x1)[_0x1af1('0x4')]());}else{alert('You\x20are\x20currently\x20viewing\x20the\x20first\x20slide.');}updatePage();}async function nextSlide(){if(sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d'))<length-0x1){await sessionStorage[_0x1af1('0x19')](_0x1af1('0x1d'),(parseInt(sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d')))+0x1)['toString']());}else{alert(_0x1af1('0x3c'));}updatePage();}async function establishConnection(){await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x6'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage['getItem'](_0x1af1('0x73'))}});}async function updatePage(){await gapi[_0x1af1('0x2f')][_0x1af1('0x6d')][_0x1af1('0x3a')]['pages'][_0x1af1('0x49')]({'presentationId':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3')),'pageObjectId':presentation[_0x1af1('0x6d')][sessionStorage['getItem'](_0x1af1('0x1d'))]['objectId']})[_0x1af1('0x16')](async function(_0x46452a){const _0x54d164=JSON['parse'](_0x46452a[_0x1af1('0x12')]);try{notes=await _0x54d164['slideProperties'][_0x1af1('0x43')][_0x1af1('0x31')][0x1][_0x1af1('0x81')][_0x1af1('0x76')]['textElements'][_0x1af1('0x28')]()[_0x1af1('0x4c')][_0x1af1('0x4b')];notesSection[_0x1af1('0x8a')]=notes;}catch(_0x564967){console[_0x1af1('0x10')](_0x564967);notes=_0x1af1('0x6b');notesSection[_0x1af1('0x8a')]=notes;}});gapi[_0x1af1('0x2f')][_0x1af1('0x6d')][_0x1af1('0x3a')][_0x1af1('0x7c')][_0x1af1('0x37')]({'presentationId':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3')),'pageObjectId':presentation[_0x1af1('0x6d')][sessionStorage['getItem'](_0x1af1('0x1d'))][_0x1af1('0x61')]})['then'](async function(_0xb83e9a){const _0xcdfaef=JSON['parse'](_0xb83e9a[_0x1af1('0x12')]);slideUrl=_0xcdfaef[_0x1af1('0x2d')];findImage(slideUrl);findQR(slideUrl);imageElement['src']=slideUrl;imageElement2[_0x1af1('0x7d')]=slideUrl;await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x2a'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')]('firebasePresentationKey'),'slidenum':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x1d')),'slideurl':slideUrl,'notes':notes}});},function(_0x48b29d){console[_0x1af1('0x10')]('Error:\x20'+_0x48b29d[_0x1af1('0x56')][_0x1af1('0x6e')][_0x1af1('0x40')]);});}async function findImage(_0x46bb97){await axios({'method':_0x1af1('0x33'),'url':_0x1af1('0x3d')+_0x46bb97})[_0x1af1('0x16')](_0x2676ba=>result=_0x2676ba[_0x1af1('0x6a')]['ParsedResults'][0x0][_0x1af1('0x85')])[_0x1af1('0x27')](_0x213d1f=>console['log'](_0x213d1f));var _0x1137ed=result[_0x1af1('0x5')]('\x0a');var _0x1da84e='';for(var _0xd5038c=0x0;_0xd5038c<_0x1137ed['length'];_0xd5038c++){testString=_0x1137ed[_0xd5038c][_0x1af1('0x5c')]('\x20','');if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/[_0x1af1('0x69')](testString)){_0x1da84e=testString;break;}}openURL=_0x1da84e;if(screenState=_0x1af1('0x35')&&_0x1da84e!=''){document[_0x1af1('0x7')](_0x1af1('0x4f'))[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x5f');}else if(_0x1da84e==''){document[_0x1af1('0x7')](_0x1af1('0x4f'))[_0x1af1('0x82')]['display']=_0x1af1('0x89');}}async function findQR(_0x572839){await axios({'method':_0x1af1('0x33'),'url':'https://api.qrserver.com/v1/read-qr-code/?fileurl='+_0x572839})[_0x1af1('0x16')](_0x4b9209=>result=_0x4b9209[_0x1af1('0x6a')][0x0][_0x1af1('0x2e')][0x0][_0x1af1('0x6a')])[_0x1af1('0x27')](_0x4c2621=>console[_0x1af1('0x10')](_0x4c2621));var _0x5d72f3='';if(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/[_0x1af1('0x69')](result)){_0x5d72f3=result;}openQR=_0x5d72f3;if(screenState=_0x1af1('0x35')&&_0x5d72f3!=''){document[_0x1af1('0x7')](_0x1af1('0x48'))[_0x1af1('0x82')][_0x1af1('0x77')]='inline';}else if(_0x5d72f3==''){document['getElementById'](_0x1af1('0x48'))['style'][_0x1af1('0x77')]=_0x1af1('0x89');}}function openLink(){window[_0x1af1('0xf')](openURL);}function openQRCode(){window[_0x1af1('0xf')](openQR);}function signOut(){gapi[_0x1af1('0x46')][_0x1af1('0x25')]()['signOut']();sessionStorage['setItem'](_0x1af1('0x3'),null);sessionStorage[_0x1af1('0x19')](_0x1af1('0x1d'),null);sessionStorage[_0x1af1('0x19')](_0x1af1('0x73'),null);sessionStorage[_0x1af1('0x19')]('accessKey',null);sessionStorage[_0x1af1('0x19')](_0x1af1('0x39'),null);sessionStorage[_0x1af1('0x19')]('profilePic',null);localStorage['setItem'](_0x1af1('0x42'),null);localStorage['setItem'](_0x1af1('0x39'),null);window[_0x1af1('0x18')][_0x1af1('0x44')]=_0x1af1('0x70');}let userPic=document[_0x1af1('0x2b')](_0x1af1('0x22'));userPic[_0x1af1('0x7d')]=sessionStorage['getItem'](_0x1af1('0x53'));function newPres(){window[_0x1af1('0x18')][_0x1af1('0x44')]='host.html';}function changeAccess(){change['style'][_0x1af1('0x77')]=_0x1af1('0x89');changeInput[_0x1af1('0x82')]['display']=_0x1af1('0x5f');submit['style']['display']=_0x1af1('0x5f');}async function lockAccess(){lockState=!lockState;if(lockState){await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x4d'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')](_0x1af1('0x73')),'lockstate':_0x1af1('0x36')}});lock[_0x1af1('0x8a')]=_0x1af1('0x50');}else{await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x4d'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage['getItem'](_0x1af1('0x73')),'lockstate':_0x1af1('0x5a')}});lock[_0x1af1('0x8a')]=_0x1af1('0x21');}}function toggleNotes(){if(notesState){notesSection[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');notesButton[_0x1af1('0x8a')]=_0x1af1('0x6c');}else{notesSection[_0x1af1('0x82')][_0x1af1('0x77')]='';notesButton[_0x1af1('0x8a')]=_0x1af1('0x45');}notesState=!notesState;}async function accessKeySubmitted(){event[_0x1af1('0x41')]();newCode=changeInput[_0x1af1('0x7f')];let _0x439183='';await axios({'method':_0x1af1('0x66'),'url':_0x1af1('0x3e'),'headers':{'Content-Type':_0x1af1('0x59'),'firebasepresentationkey':sessionStorage[_0x1af1('0x1b')]('firebasePresentationKey'),'newcode':newCode}})[_0x1af1('0x16')](_0xca478d=>_0x439183=_0xca478d[_0x1af1('0x6a')])[_0x1af1('0x27')](_0x109fc2=>console[_0x1af1('0x10')](_0x109fc2));if(_0x439183[_0x1af1('0x6a')]==_0x1af1('0x54')){await sessionStorage[_0x1af1('0x19')](_0x1af1('0x3b'),newCode);}else{alert(_0x1af1('0x68'));}submit[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x89');changeInput['style'][_0x1af1('0x77')]=_0x1af1('0x89');change[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x5f');p[_0x1af1('0x8a')]=_0x1af1('0x83')+sessionStorage[_0x1af1('0x1b')](_0x1af1('0x3b'));}function fullScreen(){screenState=_0x1af1('0x29');document[_0x1af1('0x7')](_0x1af1('0x60'))[_0x1af1('0x82')]['display']=_0x1af1('0x89');document[_0x1af1('0x7')]('fullView')[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x84');if(document[_0x1af1('0x7')](_0x1af1('0x71'))[_0x1af1('0x4a')])document[_0x1af1('0x7')]('fullView')['requestFullscreen']();else if(document[_0x1af1('0x7')]('fullView')['mozRequestFullScreen'])document[_0x1af1('0x7')](_0x1af1('0x71'))[_0x1af1('0x26')]();else if(document[_0x1af1('0x7')]('fullView')[_0x1af1('0x1a')])document[_0x1af1('0x7')](_0x1af1('0x71'))[_0x1af1('0x1a')]();else if(document[_0x1af1('0x7')]('fullView')[_0x1af1('0x67')])document['getElementById'](_0x1af1('0x71'))[_0x1af1('0x67')]();}function standardScreen(){screenState=_0x1af1('0x35');document[_0x1af1('0x7')](_0x1af1('0x60'))[_0x1af1('0x82')][_0x1af1('0x77')]=_0x1af1('0x84');document[_0x1af1('0x7')](_0x1af1('0x71'))[_0x1af1('0x82')][_0x1af1('0x77')]='none';if(document['exitFullscreen'])document['exitFullscreen']();else if(document[_0x1af1('0xa')])document[_0x1af1('0xa')]();else if(document[_0x1af1('0x86')])document['webkitExitFullscreen']();else if(document[_0x1af1('0x1f')])document[_0x1af1('0x1f')]();}function showDropdown(){document['getElementById'](_0x1af1('0x52'))['classList'][_0x1af1('0xe')](_0x1af1('0x20'));}window['onclick']=function(_0x569b00){if(!_0x569b00[_0x1af1('0x5b')][_0x1af1('0x8f')](_0x1af1('0x1'))){var _0x3cf7c0=document['getElementsByClassName'](_0x1af1('0xb'));var _0x2e4120;for(_0x2e4120=0x0;_0x2e4120<_0x3cf7c0['length'];_0x2e4120++){var _0x2eecd6=_0x3cf7c0[_0x2e4120];if(_0x2eecd6[_0x1af1('0x65')][_0x1af1('0x9')](_0x1af1('0x20'))){_0x2eecd6['classList'][_0x1af1('0x34')](_0x1af1('0x20'));}}}};function setup(){}function draw(){}function keyPressed(){if(keyCode===LEFT_ARROW){previousSlide();}else if(keyCode===RIGHT_ARROW){nextSlide();}}