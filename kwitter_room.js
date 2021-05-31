
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAzSwmygk2h2bctstlVa6NTBfj7kDeJKpU",
      authDomain: "kwitter-cbee7.firebaseapp.com",
      projectId: "kwitter-cbee7",
      storageBucket: "kwitter-cbee7.appspot.com",
      messagingSenderId: "603087453507",
      appId: "1:603087453507:web:48a12c3a552d739f2483f6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
