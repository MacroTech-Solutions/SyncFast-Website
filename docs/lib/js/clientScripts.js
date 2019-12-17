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


async function onClick() {
    event.preventDefault();
    accessCode = document.querySelector("#accessKeyInput").value;

    myVal = await database.child('presentations').orderByChild('accessKey').equalTo(accessCode).once("value");
    myVal = myVal.val();
    if (myVal == null) {
        alert("Invalid Access Code");
    } else {
        myError.innerText = "";
        for (key in myVal) {
            sessionStorage.setItem('firebasePresentationKey', key);
            sessionStorage.setItem('slideUrl', myVal[key].slideUrl);
            sessionStorage.setItem('imageUrl', myVal[key].imageUrl);
            sessionStorage.setItem('presentationTitle', myVal[key].presentationTitle);
        }
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
        firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}`).on('child_changed', updatePage);
    }
}



async function updatePage() {
    myVal = await database.child('presentations').orderByChild('accessKey').equalTo(accessCode).once("value");
    myVal = myVal.val();
    for (key in myVal) {
        sessionStorage.setItem('slideUrl', myVal[key].slideUrl);
        sessionStorage.setItem('imageUrl', myVal[key].imageUrl);
    }
    imageElement.src = sessionStorage.getItem('slideUrl');
    imageElement2.src = sessionStorage.getItem('imageUrl');
}

async function submitKey() {
    myVal = await database.child('presentations').orderByChild('accessKey').equalTo(accessCode).once("value");
    myVal = myVal.val();
    if (myVal == null) {
        alert("Invalid Access Code");
    } else {
        myError.innerText = "";
        for (key in myVal) {
            sessionStorage.setItem('firebasePresentationKey', key);
            sessionStorage.setItem('slideUrl', myVal[key].slideUrl);
            sessionStorage.setItem('imageUrl', myVal[key].imageUrl);
            sessionStorage.setItem('presentationTitle', myVal[key].presentationTitle);
        }
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
        firebase.database().ref(`presentations/${sessionStorage.getItem('firebasePresentationKey')}`).on('child_changed', updatePage);
    }
}