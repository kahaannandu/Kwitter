//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAi4Qk70I-LongZAEcO4iXA6QTMrEDdVf0",
  authDomain: "kwitter-9064a.firebaseapp.com",
  databaseURL: "https://kwitter-9064a-default-rtdb.firebaseio.com",
  projectId: "kwitter-9064a",
  storageBucket: "kwitter-9064a.appspot.com",
  messagingSenderId: "840244561183",
  appId: "1:840244561183:web:e0f47c3b76f7c41c8a9c2a",
  measurementId: "G-Z4KMY0WVX2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id='" + Room_names + "'onclick='redirect_to_room(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

document.getElementById("name").innerHTML = "Welcome " + localStorage.getItem("user_name");

function addRoom() {
  localStorage.setItem("room_name", document.getElementById("UName").value);
  firebase.database().ref("/").child(document.getElementById("UName").value).update({
    purpose: "user"
  });
  window.location = "kwitter_page.html";
}

function redirect_to_room(id) {
  console.log(id);
  localStorage.setItem("room_name", id);
  window.location = "kwitter_page.html";
}

function logOut() {
  localStorage.clear();
  window.location = "index.html";
}