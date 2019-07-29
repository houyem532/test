var firebaseConfig = {
    apiKey: "AIzaSyDkKQ4uun7VWcMBn0-IksV4P2JTGgbM_jU",
    authDomain: "fir-project-3179a.firebaseapp.com",
    databaseURL: "https://fir-project-3179a.firebaseio.com",
    projectId: "fir-project-3179a",
    storageBucket: "",
    messagingSenderId: "22998042176",
    appId: "1:22998042176:web:6052ab69576bd8dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef= firebase.database().ref('database');
  function submitfrom(e){
      event.preventDefault();
      var name = document.getElementById('name').value;
      var track = document.getElementById('inputState').value;
      var email=document.getElementById('inputEmail4').value;
      var number=document.getElementById('inputPassword4').value;
      saveMessage(name,track,email,number);

  }
  document.getElementById('contactForm').addEventListener('submit',submitfrom);
  function saveMessage(name,track,email,number)
  {
      var newMessageRef = messagesRef.push();
      newMessageRef.set(
          {
              name : name,
              track : track,
              email : email ,
              number : number
          }
      );
  }

