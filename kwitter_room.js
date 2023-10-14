var firebaseConfig = {
      apiKey: "AIzaSyBpj5c8aXFFbLNq6nMVqwKOmeNf_Jonzso",
      authDomain: "st-fairy-school-9c1b6.firebaseapp.com",
      databaseURL: "https://st-fairy-school-9c1b6-default-rtdb.firebaseio.com",
      projectId: "st-fairy-school-9c1b6",
      storageBucket: "st-fairy-school-9c1b6.appspot.com",
      messagingSenderId: "249664679019",
      appId: "1:249664679019:web:cf7acfeb1f3c3f8147552e",
      measurementId: "G-4RW4K7PT4W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

