
// map

function initMap(){
    let location = {lat: 53.403280, lng: -2.978690};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom:16,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    
}

// contact form data

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD5-Yx3Jkn5i6n2AytRu2Vz6jbOXWSpTXo",
    authDomain: "alnoor-290518.firebaseapp.com",
    databaseURL: "https://alnoor-290518.firebaseio.com",
    projectId: "alnoor-290518",
    storageBucket: "alnoor-290518.appspot.com",
    messagingSenderId: "1088155185691",
    appId: "1:1088155185691:web:520b557a2a2eb05090febe",
    measurementId: "G-KW1SQJC7HM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  //reference contactInfo collections 

  let contactInfo = firebase.database().ref("infos");



// check if the form is submitted 





document.querySelector('.contact-form').addEventListener('submit', submitForm);


function submitForm(e){

    e.preventDefault();

    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value; 


  
        console.log(name, email, message)

        saveContactInfo(name, email, message);

        document.querySelector('.contact-form').reset();
    

}

// save info to firebase

function saveContactInfo(name, email, message){

    const errorMessage = document.getElementById('msg');
    errorMessage.innerText = "Thank you for the inquire, we will get back in touch as soon as possible.";
    
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message
    });

}
