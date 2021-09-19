var check = 0
var dbdb = firebase.firestore();
var usern;
var emailcheck= 0;
async function login () {
// void _login(BuildContext context) async {
//     try {
//       var result = await FirebaseAuth.instance.signInWithEmailAndPassword(
//           email: _emailController.text.trim(),
//           password: _passwordController.text.trim());
let userEmail = document.getElementById('userId').value
let userPass = document.getElementById('password_field').value
emailcheck = 0;
firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(() => {
     var email_verified = firebase.auth().currentUser.emailVerified;

     if(email_verified == true){
         document.getElementById('user_div').style.display = 'block'
         document.getElementById('login_div').style.display = 'none'
         alert('환영합니다. 이시국앱입니다.')
         let refff = dbdb.collection('users')
         const uid = firebase.auth().currentUser.uid;
         
         let rtload2=refff.where('userId', '==', uid).orderBy('phonenumber','desc').limit(4).get()
           .then((subCollectionSnapshot) => {
             subCollectionSnapshot.forEach((subDoc) => {
               
              usern = subDoc.data().userName;
              var depart1 = subDoc.data().department;
              window.localStorage.setItem('uname', String(usern));
              window.localStorage.setItem('uid', String(uid));
              window.localStorage.setItem('department', String(depart1));
             location.href = './login.html'
           });
         })
         .catch(err => {
         })
     }
     else if(email_verified== false){
         emailcheck = 1;
         alert('이메일 인증 후 로그인 해 주세요.')
         firebase.auth().currentUser.sendEmailVerification().then(function() {
          window.alert("인증메일 재전송")
        }).catch(function(error) {  //error 호출 안 한 이유 : 인증 메일 다시 전송하는데 쿨타임이 아직 안돼서 어차피 안 가지기 때문. 쿨 다 돌면 재전송 가능이라 결론적으론 기다려야 함.

        });

     }
})
.catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    if (emailcheck == 0){
      alert('잘못 입력하셨습니다.')
      location.href = './login_signup.html'
    }
})
};

function create_account() {
let userEmail = document.getElementById('userId1')
let userPass = document.getElementById('password_field1')
let userPasscheck = document.getElementById('password_field1_check')
let userName = document.getElementById('userName')
let studentId = document.getElementById('studentId')
let phonenumber = document.getElementById('phonenumber')
let userDept = document.getElementById('department')

if (!userEmail.value) {
window.alert('웹메일을 입력해 주세요.')
return
}
if (!userPass.value) {
window.alert('비밀번호를 입력해 주세요.')
return
}
if (!userPasscheck.value) {
window.alert('비밀번호 다시 한 번 입력해 주세요.')
return
}
if (userPass.value !== userPasscheck.value) {
window.alert('비밀번호가 동일하지 않습니다.')
doc.getElementById('userPass')=''
doc.getElementById('userPasscheck')=''
return
}
if (!userName.value) {
window.alert('성함을 입력해 주세요.')
return
}
if (!studentId.value) {
window.alert('학번을 입력해 주세요.')
return
}
if (!phonenumber.value) {
window.alert('전화번호를 입력해 주세요.')
return
}
if (!userDept.value) {
window.alert('학부를 선택해 주세요.')
return
}

firebase.auth().createUserWithEmailAndPassword(userEmail.value, userPass.value).then((user) => {
    var firestore = firebase.firestore();
    const outputHeader = document.querySelector('#output');
    const userEmail = document.querySelector('#userId');
    const uid = firebase.auth().currentUser.uid;
    let reff = dbdb.collection('users');
    const userPass = document.querySelector('#password_field1');
    const userPasscheck = document.querySelector('#password_field1_check');
    const userName = document.querySelector('#userName');
    const studentId = document.querySelector('#studentId');
    const phonenumber = document.querySelector('#phonenumber');
    const department = document.querySelector('#department');


    const textToSave_userName = userName.value;
    const textToSave_studentId = studentId.value;
    const textToSave_phonenumber = phonenumber.value;
    const textToSave_department = department.value;
    console.log('파이어스토어에' + uid,
        textToSave_userName, textToSave_studentId,
        textToSave_phonenumber, textToSave_department + '를 저장');
    saving_data(uid,textToSave_userName,textToSave_studentId,textToSave_phonenumber,textToSave_department);
    alert('한경대 웹메일 인증을 받은 후 진행해 주세요.')
    firebase.auth().currentUser.sendEmailVerification().then(function () {
        alert('웹메일에 전송된 링크를 클릭하시면 가입이 완료됩니다.')
    }).catch(function (error) {
        // error 호출 안 한 이유 : 인증 메일 다시 전송하는데 쿨타임이 아직 안돼서 어차피 안 가지기 때문. 쿨 다 돌면 재전송 가능이라 결론적으론 기다려야 함.
    })

});
};

function logout () {
alert("로그아웃 되었습니다.")
firebase.auth().signOut()
}
function send_verification () {
var user = firebase.auth().currentUser

user.sendEmailVerification().then(function () {
window.alert('인증메일 전송')
}).catch(function (error) {
window.alert('인증메일 전송실패 : ' + error.message)
})
}

function saving_data (uid,textToSave_userName,textToSave_studentId,textToSave_phonenumber,textToSave_department) {
let refff = dbdb.collection('users')
let res1 = refff.doc(uid)
.set({
    userId: uid,
    userName: textToSave_userName,
    studentId: textToSave_studentId,
    phonenumber: textToSave_phonenumber,
    department: textToSave_department,
    comment: {}
})
.then(() => {
    console.log('well done')
})
.catch(() => {

    });
}
//     alert(22323)
//     var firestore = firebase.firestore()
//     const uid = firebase.auth().currentUser.uid
//     const docRef = firestore.doc('users/' + uid)
//     const outputHeader = document.querySelector('#output')
//     const userEmail = document.querySelector('#userId')
//     const userPass = document.querySelector('#password_field1')
//     const userPasscheck = document.querySelector('#password_field1_check')
//     const userName = document.querySelector('#userName')
//     const studentId = document.querySelector('#studentId')
//     const phonenumber = document.querySelector('#phonenumber')
//     const department = document.querySelector('#department')
//     const saveButton = document.querySelector('#save')

//     saveButton.addEventListener('click', function () {
//     const textToSave_userId = uid
//     const textToSave_userName = userName.value
//     const textToSave_studentId = studentId.value
//     const textToSave_phonenumber = phonenumber.value
//     const textToSave_department = department.value
//     console.log('파이어스토어에' + textToSave_userId,
//         textToSave_userName, textToSave_studentId,
//         textToSave_phonenumber, textToSave_department + '를 저장')
//     docRef.set({
//         userId: textToSave_userId,
//         userName: textToSave_userName,
//         studentId: textToSave_studentId,
//         phonenumber: textToSave_phonenumber,
//         department: textToSave_department
//     }).then(function () {
//         console.log('well done')
//     }).catch(function (error) {
//         console.log(error)
//     })
//     })
// }
