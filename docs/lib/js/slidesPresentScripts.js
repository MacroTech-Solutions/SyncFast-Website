if (sessionStorage.getItem('presentationID') == null || sessionStorage.getItem('presentationID') == "null") {
    window.location.href = "index.html";
}

const database = firebase.database().ref();

let myVal;
let length;
let slideUrl;
let imageElement;
let imageElement2;
let newCode;
let change = document.querySelector('#change');
let changeKey = document.querySelector('#changeKey');
change.addEventListener('click', changeAccess);
let p = document.createElement("h4");
p.id = "access";
let changeInput = document.createElement('input');
changeInput.id = "changeInput";
changeKey.appendChild(changeInput);
changeInput.style.display = "none";
let submit = document.createElement('button');
submit.id = "submitButton";
submit.innerText = "Submit";
changeKey.appendChild(submit);
submit.style.display = "none";
submit.addEventListener('click', accessKeySubmitted);

// Client ID and API key from the Developer Console
let CLIENT_ID = "510632149212-b3nju2fd9omib1l67qal0ot1214rr75s.apps.googleusercontent.com";
let API_KEY = 'AIzaSyDhkJ2yT06tRwXIMEUp9xaj2-LxOnKyvGY';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://slides.googleapis.com/$discovery/rest?version=v1"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = 'https://www.googleapis.com/auth/drive.file';


/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function (error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        listSlides();
    } else {
        handleAuthClick();
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 * Prints the number of slides and elements in a sample presentation:
 * https://docs.google.com/presentation/d/1EAYk18WDjIG-zp_0vLm3CsfQh_i8eXc67Jo2O9C6Vuc/edit
 */
function listSlides() {
    gapi.client.slides.presentations.get({
        presentationId: sessionStorage.getItem('presentationID')
    }).then(async function (response) {
        await firebaseCommands();
        let presentation = response.result;
        length = presentation.slides.length;
        gapi.client.slides.presentations.pages.getThumbnail({
            presentationId: sessionStorage.getItem('presentationID'),
            pageObjectId: presentation.slides[sessionStorage.getItem('currentSlide')].objectId,
        }).then(function (response) {
            const res = JSON.parse(response.body);
            slideUrl = res.contentUrl;
            firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/slideUrl`).set(slideUrl);
            firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/presentationTitle`).set(presentation.title);
            imageElement = document.createElement("img");
            imageElement.id = "presImg";
            imageElement.title = presentation.title;
            imageElement.src = slideUrl;
            imageElement2 = document.createElement("img");
            imageElement2.id = "presImg2";
            imageElement2.title = presentation.title;
            imageElement2.src = slideUrl;
            document.querySelector(".img").appendChild(imageElement);
            document.querySelector(".img2").appendChild(imageElement2);
            p.innerText = `Access Code: ${sessionStorage.getItem('accessKey')}`
            document.querySelector(".center").prepend(p);
        }, function (response) {
            console.log('Error: ' + response.result.error.message);
        });
    }, function (response) {
        console.log('Error: ' + response.result.error.message);
    });
}

async function firebaseCommands() {
    myVal = await database.child("presentations").orderByChild('accessKey').equalTo(sessionStorage.getItem('accessKey')).once("value");
    myVal = myVal.val();
    console.log(myVal);
    for (key in myVal) {
        sessionStorage.setItem('firebasePresentationKey', key);
        sessionStorage.setItem('currentSlide', myVal[key].currentSlideNum);
    }
}

function previousSlide() {
    if (sessionStorage.getItem('currentSlide') > 0) {
        firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/currentSlideNum`).set((parseInt(sessionStorage.getItem('currentSlide')) - 1).toString());
        sessionStorage.setItem('currentSlide', ((parseInt(sessionStorage.getItem('currentSlide')) - 1).toString()));
    } else {
        alert("You are currently viewing the first slide.");
    }
    updatePage();
}

function nextSlide() {
    if (sessionStorage.getItem('currentSlide') < length - 1) {
        firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/currentSlideNum`).set((parseInt(sessionStorage.getItem('currentSlide')) + 1).toString());
        sessionStorage.setItem('currentSlide', ((parseInt(sessionStorage.getItem('currentSlide')) + 1).toString()));
    } else {
        alert("You are currently viewing the last slide.");
    }
    updatePage();
}

firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}`).on('child_changed', updatePage);

async function updatePage() {
    gapi.client.slides.presentations.get({
        presentationId: sessionStorage.getItem('presentationID')
    }).then(function (response) {
        firebaseCommands();
        let presentation = response.result;
        length = presentation.slides.length;
        gapi.client.slides.presentations.pages.getThumbnail({
            presentationId: sessionStorage.getItem('presentationID'),
            pageObjectId: presentation.slides[sessionStorage.getItem('currentSlide')].objectId,
        }).then(function (response) {
            const res = JSON.parse(response.body);
            slideUrl = res.contentUrl;
            firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/slideUrl`).set(slideUrl);
            imageElement.src = slideUrl;
            imageElement2.src = slideUrl;
        }, function (response) {
            console.log('Error: ' + response.result.error.message);
        });
    }, function (response) {
        console.log('Error: ' + response.result.error.message);
    });
}

function signOut() {
    gapi.auth2.getAuthInstance().signOut();
    sessionStorage.setItem('presentationID', null);
    sessionStorage.setItem('currentSlide', null);
    sessionStorage.setItem('firebasePresentationKey', null);
    sessionStorage.setItem('accessKey', null);
    sessionStorage.setItem('userKey', null);
    sessionStorage.setItem('profilePic', null);
    localStorage.setItem('access_token', null);
    localStorage.setItem('userKey', null);
    window.location.href = "index.html";
}

let userPic = document.querySelector("#userPic");
userPic.src = sessionStorage.getItem("profilePic");

function newPres() {
    window.location.href = "host.html";
}



function changeAccess() {
    change.style.display = "none";
    changeInput.style.display = "inline";
    submit.style.display = "inline";
}

async function accessKeySubmitted() {
    event.preventDefault();
    newCode = changeInput.value;
    let myCheck = await database.child("presentations").orderByChild('accessKey').equalTo(newCode).once("value");
    if (myCheck.val() == null) {
        firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}/accessKey`).set(newCode);
        await sessionStorage.setItem('accessKey', newCode);
    } else {
        alert("This key has already been reserved.");
    }
    submit.style.display = "none";
    changeInput.style.display = "none";
    change.style.display = "inline";
    p.innerText = `Access Code: ${sessionStorage.getItem('accessKey')}`;
}

function fullScreen() {
    document.getElementById("standardView").style.display = "none";
    document.getElementById("fullView").style.display = "block";
    if (document.getElementById("fullView").requestFullscreen)
        document.getElementById("fullView").requestFullscreen();
    else if (document.getElementById("fullView").mozRequestFullScreen)
        document.getElementById("fullView").mozRequestFullScreen();
    else if (document.getElementById("fullView").webkitRequestFullscreen)
        document.getElementById("fullView").webkitRequestFullscreen();
    else if (document.getElementById("fullView").msRequestFullscreen)
        document.getElementById("fullView").msRequestFullscreen();
}

function standardScreen() {
    document.getElementById("standardView").style.display = "block";
    document.getElementById("fullView").style.display = "none";
    if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();    
}