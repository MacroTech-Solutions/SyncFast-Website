document.querySelector("#submit").addEventListener("click", onClick);
let myError = document.createElement("p");
document.querySelector("#error").append(myError);
let myVal;
let imageElement;
let imageElement2;
let accessCode;
let params = new URLSearchParams(document.location.search.substring(1));
let myKey = params.get("accessKey");

if (myKey) {
    accessCode = myKey;
    submitKey();
}

let socket = new WebSocket("wss://syncfastserver.macrotechsolutions.us:4211");
let lockState;

socket.onopen = function (e) {
    console.log("Connected to socket");
    socket.send("Connected");
};

socket.onmessage = function (event) {
    let socketData = event.data;
    console.log(socketData);
    if (socketData == sessionStorage.getItem('firebasePresentationKey')) {
        updatePage();
    } else if(socketData == `lock${sessionStorage.getItem('firebasePresentationKey')}`){
        lockScreen();
    } else if(socketData == `unlock${sessionStorage.getItem('firebasePresentationKey')}`){
        unlockScreen();
    }

};

async function onClick() {
    event.preventDefault();
    accessCode = document.querySelector("#accessKeyInput").value;
    let result = "";
    await axios({
        method: 'POST',
        url: 'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
        headers: {
            'Content-Type': 'application/json',
            'accesscode': accessCode
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    console.log(result);
    if (result.data == "Incorrect Access Code") {
        alert("Invalid Access Code");
    } else {
        myError.innerText = "";
        sessionStorage.setItem('firebasePresentationKey', result.firebasepresentationkey);
        sessionStorage.setItem('slideUrl', result.slideurl);
        sessionStorage.setItem('imageUrl', result.imageurl);
        sessionStorage.setItem('presentationTitle', result.presentationtitle);
        document.querySelector("#accessKeyInput").style.display = "none";
        document.querySelector("#submit").style.display = "none";
        document.querySelector("#accessKeyText").style.display = "none";
        imageElement = document.createElement("img");
        imageElement.id = "presImg";
        imageElement.title = sessionStorage.getItem('presentationTitle');
        imageElement.src = sessionStorage.getItem('slideUrl');
        imageElement.style.width = "80vw";
        imageElement.style.height = "auto";
        imageElement2 = document.createElement("img");
        imageElement2.id = "presImg2";
        imageElement2.title = 'myImg';
        imageElement2.src = sessionStorage.getItem('imageUrl');
        imageElement2.style.width = "30vw";
        imageElement2.style.height = "auto";
        imageElement2.style.position = "absolute";
        imageElement2.style.right = "10vw";
        imageElement2.style.top = "40vh";
        if (sessionStorage.getItem('imageUrl') == "undefined" || sessionStorage.getItem('imageUrl') == "null") {
            imageElement2.style.display = "none";
        } else {
            imageElement2.style.display = "inline";
        }
        document.querySelector(".img").appendChild(imageElement);
        document.querySelector(".img").appendChild(imageElement2);
    }
}



async function updatePage() {
    let result = "";
    await axios({
        method: 'POST',
        url: 'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
        headers: {
            'Content-Type': 'application/json',
            'accesscode': accessCode
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    sessionStorage.setItem('slideUrl', result.slideurl);
    sessionStorage.setItem('imageUrl', result.imageurl);
    imageElement.src = sessionStorage.getItem('slideUrl');
    imageElement2.src = sessionStorage.getItem('imageUrl');
    if(result.lockstate == 'true'){
        lockScreen();
        lockState = true;
    } else{
        unlockScreen();
        lockState = false;
    }
}

function lockScreen(){
    console.log("locked");
    lockState = true;
}

function unlockScreen(){
    console.log("unlocked");
    lockState = false;
}

async function submitKey() {
    let result = "";
    await axios({
        method: 'POST',
        url: 'https://syncfastserver.macrotechsolutions.us:9146/http://localhost/clientJoin',
        headers: {
            'Content-Type': 'application/json',
            'accesscode': accessCode
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    console.log(result);
    if (result.data == "Incorrect Access Code") {
        alert("Invalid Access Code");
    } else {
        myError.innerText = "";
        sessionStorage.setItem('firebasePresentationKey', result.firebasepresentationkey);
        sessionStorage.setItem('slideUrl', result.slideurl);
        sessionStorage.setItem('imageUrl', result.imageurl);
        sessionStorage.setItem('presentationTitle', result.presentationtitle);
        document.querySelector("#accessKeyInput").style.display = "none";
        document.querySelector("#submit").style.display = "none";
        document.querySelector("#accessKeyText").style.display = "none";
        imageElement = document.createElement("img");
        imageElement.id = "presImg";
        imageElement.title = sessionStorage.getItem('presentationTitle');
        imageElement.src = sessionStorage.getItem('slideUrl');
        imageElement.style.width = "80vw";
        imageElement.style.height = "auto";
        imageElement2 = document.createElement("img");
        imageElement2.id = "presImg2";
        imageElement2.title = 'myImg';
        imageElement2.src = sessionStorage.getItem('imageUrl');
        imageElement2.style.width = "30vw";
        imageElement2.style.height = "auto";
        imageElement2.style.position = "absolute";
        imageElement2.style.right = "10vw";
        imageElement2.style.top = "40vh";
        if (sessionStorage.getItem('imageUrl') == "undefined" || sessionStorage.getItem('imageUrl') == "null") {
            imageElement2.style.display = "none";
        } else {
            imageElement2.style.display = "inline";
        }
        document.querySelector(".img").appendChild(imageElement);
        document.querySelector(".img").appendChild(imageElement2);
    }
}