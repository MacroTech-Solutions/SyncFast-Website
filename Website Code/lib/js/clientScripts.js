const database = firebase.database().ref();
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

let socket = new WebSocket("ws://syncfastserver.macrotechsolutions.us:1319");

socket.onopen = function (e) {
    console.log("Connected to socket");
    socket.send("Connected");
};

socket.onmessage = function (event) {
    let socketData = event.data;
    console.log(socketData);
    if (socketData == sessionStorage.getItem('firebasePresentationKey')) {
        updatePage();
    }
};

async function onClick() {
    event.preventDefault();
    accessCode = document.querySelector("#accessKeyInput").value;
    let result = "";
    await axios({
        method: 'POST',
        url: 'https://cors-anywhere.herokuapp.com/https://syncfastserver.macrotechsolutions.us/clientJoin',
        headers: {
            'Content-Type': 'application/json',
            'accesscode': accessCode
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    if (result.data == "Incorrect Access Code") {
        alert("Invalid Access Code");
    } else {
        myError.innerText = "";
        sessionStorage.setItem('firebasePresentationKey', result.firebasepresentationkey);
        sessionStorage.setItem('slideUrl', result.slideUrl);
        sessionStorage.setItem('imageUrl', result.imageUrl);
        sessionStorage.setItem('presentationTitle', result.presentationTitle);
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
        url: 'https://cors-anywhere.herokuapp.com/https://syncfastserver.macrotechsolutions.us/clientJoin',
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
}

async function submitKey() {
    let result = "";
    await axios({
        method: 'POST',
        url: 'https://cors-anywhere.herokuapp.com/https://syncfastserver.macrotechsolutions.us/clientJoin',
        headers: {
            'Content-Type': 'application/json',
            'accesscode': accessCode
        }
    })
        .then(data => result = data.data)
        .catch(err => console.log(err))
    if (result.data == "Incorrect Access Code") {
        alert("Invalid Access Code");
    } else {
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