//YOUR FIREBASE LINKS
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

room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);

//Start code
name_tag = "<h3 style='display: inline;'>"+message_data["sender"]+"</h3> <img class='user_tick' src='tick.png'>";
msg_tag = "<h4 class='message_h4'>"+message_data["msg"]+"</h4>";
btn_tag = "<button onclick='like(this.id)' id='"+firebase_message_id+"' value="+message_data["likes"]+">Likes: "+message_data["likes"]+"</button> <br> <br>";
row = name_tag + msg_tag + btn_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      firebase.database().ref(room_name).push({
            sender: localStorage.getItem("user_name"),
            msg: document.getElementById("msg").value,
            likes: 0
      });
}

function like(msg_id){
      current_likes = document.getElementById(msg_id).value;
      console.log(current_likes);
      current_likes++;
      firebase.database().ref(room_name).child(msg_id).update({
            likes: current_likes
      });
}

function logOut() {
      localStorage.clear();
      window.location = "index.html";
}