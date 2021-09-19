
// jQuery(document).ready(function ($) {
//   //open modal
//   //show forgot-password form
//   //REMOVE THIS - it's just to show error messages
//   var firebaseConfig2 = {
//     apiKey: "AIzaSyCYrst18SfKDpPHJaSXw-9hyKCsS_vrhxs",
//     authDomain: "hk-electives-comments.firebaseapp.com",
//     databaseURL: "https://hk-electives-comments.firebaseio.com",
//     projectId: "hk-electives-comments",
//     storageBucket: "hk-electives-comments.appspot.com",
//     messagingSenderId: "988847625541",
//     appId: "1:988847625541:web:0cbf63890235d66f2b5a2c",
//     measurementId: "G-43FWT7E6SF"
//   };
//   // Initialize Firebase

// //Get elements
// const  btnLogout = document.getElementById('btnlogout');
// const auth = firebase.auth();

// //Add login Click event
// btnLogout.addEventListener('click',e=>{
//  //Get Email and Password

//     alert("logout");
//      const promise = auth.signOut();
//      window.location.href="/index.html";
// });

// //Add signup event
// //      promise.catch(e=> console.log(e.message));
// });

// //Add a realtime auth listener
// firebase.auth().onAuthStateChanged(firebaseUser => {
//  if(firebaseUser){
//      console.log(firebaseUser);
//  }
//   else{
//       console.log('not logged in');
//   }
// });
//   //IE9 placeholder fallback
//   //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
// //credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
var username2 = localStorage.getItem('uname')
document.getElementById('username1').innerHTML = username2 + '님'
