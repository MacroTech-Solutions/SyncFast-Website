const _0x2422=['setItem','slidenum','auto','application/json','lockstate','POST','accessKey','click','30vw','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin','imageUrl','You\x20are\x20currently\x20viewing\x20the\x20first\x20slide.','title','then','#submit','none','width','search','style','Incorrect\x20Access\x20Code','myImg','addEventListener','toString','appendChild','position','preventDefault','onmessage','presImg2','absolute','#accessKeyInput','slideurl','innerText','display','height','onopen','log','data','presImg','imageurl','getItem','.img','append','#accessKeyText','locked','You\x20are\x20currently\x20viewing\x20the\x20last\x20available\x20slide.','false','undefined','#error','catch','lock','location','80vw','unlocked','createElement','img','unlock','presentationtitle','top','Invalid\x20Access\x20Code','inline','.buttons','src','querySelector','40vh','null','right','10vw','https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientGetSlide'];(function(_0x4358bf,_0x242237){const _0x44de53=function(_0x53b851){while(--_0x53b851){_0x4358bf['push'](_0x4358bf['shift']());}};_0x44de53(++_0x242237);}(_0x2422,0x17f));const _0x44de=function(_0x4358bf,_0x242237){_0x4358bf=_0x4358bf-0x0;let _0x44de53=_0x2422[_0x4358bf];return _0x44de53;};document['querySelector'](_0x44de('0x27'))[_0x44de('0x2e')](_0x44de('0x20'),onClick);let myError=document[_0x44de('0xa')]('p');document['querySelector'](_0x44de('0x4'))[_0x44de('0x42')](myError);let myVal;let imageElement;let imageElement2;let accessCode;let params=new URLSearchParams(document[_0x44de('0x7')][_0x44de('0x2a')]['substring'](0x1));let myKey=params['get'](_0x44de('0x1f'));let firebasePresentationKey;let presentationTitle;let slideUrl;let currentSlideNum;let maxSlideNum;let currentPresSlideNum;document[_0x44de('0x13')](_0x44de('0x11'))[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');if(myKey){accessCode=myKey;submitKey();}let socket=new WebSocket('wss://syncfastserver.macrotechsolutions.us:4211');let lockState;socket[_0x44de('0x3b')]=function(_0xd56e2a){console['log']('Connection\x20Established');};socket[_0x44de('0x33')]=function(_0x570e16){let _0x26f616=_0x570e16[_0x44de('0x3d')];console[_0x44de('0x3c')](_0x26f616);if(_0x26f616==firebasePresentationKey){updatePage();}else if(_0x26f616==_0x44de('0x6')+firebasePresentationKey){lockScreen();}else if(_0x26f616==_0x44de('0xc')+firebasePresentationKey){unlockScreen();}};async function onClick(){event[_0x44de('0x32')]();accessCode=document[_0x44de('0x13')](_0x44de('0x36'))['value'];let _0x284590='';await axios({'method':_0x44de('0x1e'),'url':_0x44de('0x22'),'headers':{'Content-Type':_0x44de('0x1c'),'accesscode':accessCode}})[_0x44de('0x26')](_0x285743=>_0x284590=_0x285743[_0x44de('0x3d')])[_0x44de('0x5')](_0x3b40ec=>console[_0x44de('0x3c')](_0x3b40ec));console[_0x44de('0x3c')](_0x284590);if(_0x284590[_0x44de('0x3d')]==_0x44de('0x2c')){alert(_0x44de('0xf'));}else{myError[_0x44de('0x38')]='';firebasePresentationKey=_0x284590['firebasepresentationkey'];slideUrl=_0x284590[_0x44de('0x37')];if(_0x284590[_0x44de('0x1d')]==_0x44de('0x2')){unlockScreen();}else{lockScreen();}currentPresSlideNum=_0x284590['slidenum'];maxSlideNum=_0x284590['slidenum'];currentSlideNum=_0x284590[_0x44de('0x1a')];sessionStorage[_0x44de('0x19')](_0x44de('0x23'),_0x284590[_0x44de('0x3f')]);presentationTitle=_0x284590[_0x44de('0xd')];document[_0x44de('0x13')]('#accessKeyInput')[_0x44de('0x2b')]['display']=_0x44de('0x28');document['querySelector'](_0x44de('0x27'))[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');document[_0x44de('0x13')](_0x44de('0x43'))[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');imageElement=document[_0x44de('0xa')](_0x44de('0xb'));imageElement['id']=_0x44de('0x3e');imageElement[_0x44de('0x25')]=presentationTitle;imageElement[_0x44de('0x12')]=slideUrl;imageElement[_0x44de('0x2b')][_0x44de('0x29')]=_0x44de('0x8');imageElement['style'][_0x44de('0x3a')]='auto';imageElement2=document[_0x44de('0xa')](_0x44de('0xb'));imageElement2['id']='presImg2';imageElement2[_0x44de('0x25')]=_0x44de('0x2d');imageElement2[_0x44de('0x12')]=sessionStorage[_0x44de('0x40')](_0x44de('0x23'));imageElement2[_0x44de('0x2b')][_0x44de('0x29')]=_0x44de('0x21');imageElement2[_0x44de('0x2b')][_0x44de('0x3a')]=_0x44de('0x1b');imageElement2[_0x44de('0x2b')][_0x44de('0x31')]=_0x44de('0x35');imageElement2[_0x44de('0x2b')][_0x44de('0x16')]=_0x44de('0x17');imageElement2[_0x44de('0x2b')]['top']=_0x44de('0x14');if(sessionStorage[_0x44de('0x40')](_0x44de('0x23'))=='undefined'||sessionStorage[_0x44de('0x40')](_0x44de('0x23'))==_0x44de('0x15')){imageElement2[_0x44de('0x2b')]['display']=_0x44de('0x28');}else{imageElement2[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x10');}document[_0x44de('0x13')](_0x44de('0x41'))['appendChild'](imageElement);document[_0x44de('0x13')](_0x44de('0x41'))[_0x44de('0x30')](imageElement2);}}async function updatePage(){let _0xaed635='';await axios({'method':_0x44de('0x1e'),'url':'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin','headers':{'Content-Type':_0x44de('0x1c'),'accesscode':accessCode}})[_0x44de('0x26')](_0x383f60=>_0xaed635=_0x383f60[_0x44de('0x3d')])['catch'](_0x3aaefd=>console[_0x44de('0x3c')](_0x3aaefd));if(parseInt(_0xaed635[_0x44de('0x1a')])>parseInt(maxSlideNum)){maxSlideNum=_0xaed635[_0x44de('0x1a')];}if(_0xaed635[_0x44de('0x1d')]==_0x44de('0x2')){unlockScreen();if(currentPresSlideNum==currentSlideNum){currentSlideNum=_0xaed635[_0x44de('0x1a')];slideUrl=_0xaed635[_0x44de('0x37')];sessionStorage[_0x44de('0x19')](_0x44de('0x23'),_0xaed635[_0x44de('0x3f')]);imageElement[_0x44de('0x12')]=slideUrl;}}else{lockScreen();slideUrl=_0xaed635[_0x44de('0x37')];currentSlideNum=_0xaed635[_0x44de('0x1a')];sessionStorage[_0x44de('0x19')](_0x44de('0x23'),_0xaed635[_0x44de('0x3f')]);imageElement[_0x44de('0x12')]=slideUrl;}currentPresSlideNum=_0xaed635[_0x44de('0x1a')];}function lockScreen(){console[_0x44de('0x3c')](_0x44de('0x0'));lockState=!![];document[_0x44de('0x13')]('.buttons')[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');}function unlockScreen(){console[_0x44de('0x3c')](_0x44de('0x9'));lockState=![];document[_0x44de('0x13')]('.buttons')[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x10');}async function previousSlide(){if(parseInt(currentSlideNum)>0x0){currentSlideNum=(parseInt(currentSlideNum)-0x1)['toString']();await axios({'method':_0x44de('0x1e'),'url':_0x44de('0x18'),'headers':{'Content-Type':_0x44de('0x1c'),'accesscode':accessCode,'slidenum':currentSlideNum}})[_0x44de('0x26')](_0x2e5e8=>result=_0x2e5e8['data'])['catch'](_0x4bbd84=>console[_0x44de('0x3c')](_0x4bbd84));slideUrl=result['slideurl'];imageElement[_0x44de('0x12')]=slideUrl;}else{alert(_0x44de('0x24'));}}async function nextSlide(){if(parseInt(currentSlideNum)<parseInt(maxSlideNum)){currentSlideNum=(parseInt(currentSlideNum)+0x1)[_0x44de('0x2f')]();await axios({'method':_0x44de('0x1e'),'url':_0x44de('0x18'),'headers':{'Content-Type':_0x44de('0x1c'),'accesscode':accessCode,'slidenum':currentSlideNum}})[_0x44de('0x26')](_0x40e448=>result=_0x40e448[_0x44de('0x3d')])[_0x44de('0x5')](_0x59466b=>console[_0x44de('0x3c')](_0x59466b));slideUrl=result[_0x44de('0x37')];imageElement[_0x44de('0x12')]=slideUrl;}else{alert(_0x44de('0x1'));}}async function submitKey(){let _0x23b043='';await axios({'method':'POST','url':'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin','headers':{'Content-Type':'application/json','accesscode':accessCode}})[_0x44de('0x26')](_0x1e6ee9=>_0x23b043=_0x1e6ee9[_0x44de('0x3d')])[_0x44de('0x5')](_0x27794e=>console[_0x44de('0x3c')](_0x27794e));console[_0x44de('0x3c')](_0x23b043);if(_0x23b043['data']==_0x44de('0x2c')){alert('Invalid\x20Access\x20Code');}else{myError[_0x44de('0x38')]='';firebasePresentationKey=_0x23b043['firebasepresentationkey'];slideUrl=_0x23b043[_0x44de('0x37')];sessionStorage[_0x44de('0x19')](_0x44de('0x23'),_0x23b043[_0x44de('0x3f')]);presentationTitle=_0x23b043[_0x44de('0xd')];document[_0x44de('0x13')]('#accessKeyInput')[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');document[_0x44de('0x13')](_0x44de('0x27'))[_0x44de('0x2b')]['display']='none';document[_0x44de('0x13')](_0x44de('0x43'))[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');imageElement=document[_0x44de('0xa')](_0x44de('0xb'));imageElement['id']=_0x44de('0x3e');imageElement[_0x44de('0x25')]=presentationTitle;imageElement[_0x44de('0x12')]=slideUrl;imageElement[_0x44de('0x2b')][_0x44de('0x29')]=_0x44de('0x8');imageElement['style'][_0x44de('0x3a')]=_0x44de('0x1b');imageElement2=document[_0x44de('0xa')]('img');imageElement2['id']=_0x44de('0x34');imageElement2[_0x44de('0x25')]=_0x44de('0x2d');imageElement2['src']=sessionStorage['getItem'](_0x44de('0x23'));imageElement2['style'][_0x44de('0x29')]=_0x44de('0x21');imageElement2[_0x44de('0x2b')][_0x44de('0x3a')]=_0x44de('0x1b');imageElement2[_0x44de('0x2b')][_0x44de('0x31')]=_0x44de('0x35');imageElement2[_0x44de('0x2b')][_0x44de('0x16')]=_0x44de('0x17');imageElement2[_0x44de('0x2b')][_0x44de('0xe')]=_0x44de('0x14');if(sessionStorage['getItem']('imageUrl')==_0x44de('0x3')||sessionStorage[_0x44de('0x40')](_0x44de('0x23'))==_0x44de('0x15')){imageElement2[_0x44de('0x2b')][_0x44de('0x39')]=_0x44de('0x28');}else{imageElement2['style'][_0x44de('0x39')]='inline';}document[_0x44de('0x13')](_0x44de('0x41'))[_0x44de('0x30')](imageElement);document[_0x44de('0x13')](_0x44de('0x41'))[_0x44de('0x30')](imageElement2);}}