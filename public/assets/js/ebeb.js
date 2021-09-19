var startnum = new Array();
var starts=1;
startnum[starts]=1;
var lastvi, dlength,cnt;
var checkarea = "1영역";
var init = firebase.initializeApp({
  apiKey: "AIzaSyCYrst18SfKDpPHJaSXw-9hyKCsS_vrhxs",
  authDomain: "hk-electives-comments.firebaseapp.com",
  databaseURL: "https://hk-electives-comments.firebaseio.com",
  projectId: "hk-electives-comments",
  storageBucket: "hk-electives-comments.appspot.com",
  messagingSenderId: "988847625541",
  appId: "1:988847625541:web:0cbf63890235d66f2b5a2c",
  measurementId: "G-43FWT7E6SF"
});
var db = init.firestore();  //위 설정대로 저장소에 접속합니다.
let ref = db.collection('elective');
var cnt = 0;
let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
  .then(doc=>{
  dlength = doc.docs.length;
})
let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
    .then(doc => {
        doc.forEach( item=>{
          cnt = cnt + 1;
          document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
          document.getElementById(String(cnt)+"B").style = "--rating: " + String(item.data().rating) + ";";
          document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
        });
        lastvi=doc.docs[doc.docs.length-1];
    })
    .catch(err => {
//        alert(rtload)
    })
jQuery(document).ready(function ($) {
  //open modal
  //REMOVE THIS - it's just to show error messages
  const btnCreatedata = document.getElementById('btncreatedata');
  const btnb = document.getElementById('bbutton');
  const btnf= document.getElementById('fbutton');
  const ccard1 =  document.getElementById('card1');
  const ccard2 =  document.getElementById('card2');
  const ccard3 =  document.getElementById('card3');
  const ccard4 =  document.getElementById('card4');
  const Fullsearch =  document.getElementById('fullsearch');

// 작성 폼
//
//btnCreatedata.addEventListener('click',e=>{
 //Get Email and Password
// var date = new Date();
// let setSf = ref.doc().set( { Name: '영', Booleans: true , Date: date , Star: 4.1 , Prof: '문유송'} );
  //Sign in
//});
document.getElementById('duddur1').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  }
 //Get Email and Password
 checkarea="1영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur2').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="2영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur3').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="3영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur4').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="4영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur5').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="5영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur6').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="6영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur7').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="7영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddur8').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="8영역";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddurglobal').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="글컬";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddurth').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="소양";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddurdbd').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="융합";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});
document.getElementById('duddurrhd').addEventListener('click',e=>{
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  } //Get Email and Password
 checkarea="공통과목";
 starts=1;
 document.getElementById('q1').innerHTML = starts;
 var cnt = 0;
 let lencheck =ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
   .then(doc=>{
   dlength = doc.docs.length;
 })
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
           document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
           document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
           document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
         });
         lastvi=doc.docs[doc.docs.length-1];
     })
     .catch(err => {
 //        alert(rtload)
     })
  //Sign in
});


Fullsearch.addEventListener('click',e=>{
  const Searchplace = document.getElementById('mk-fullscreen-search-input').value;
  starts=1;
  cnt = 0;
  let lencheck = ref.where('lecture', '==', Searchplace).orderBy('Date').startAfter(1).get()
    .then(doc=>{
    dlength = doc.docs.length;
    alert(dlength);
  })
  var i;
  for(i = 1;i<=4;i++)
  {
    document.getElementById(String(i)+"A").innerHTML = "";
    document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
    document.getElementById(String(i)+"C").innerHTML = "";
    document.getElementById(String(i)+"R").innerHTML = "";
  }
  alert(dlength);
  let rtload = ref.where('lecture', '==', Searchplace).orderBy('date').startAfter(1).limit(4).get()
      .then(doc => {
          doc.forEach( item=>{
            cnt = cnt + 1;
            document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
            document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
            document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
            document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
          });
          lastvi=doc.docs[doc.docs.length-1];
      })
      .catch(err => {
  //        alert(rtload)
      })
      $("div.mk-fullscreen-search-overlay").removeClass(
        "mk-fullscreen-search-overlay-show"
      );
});
btnb.addEventListener('click',e=>{
  if (starts >=2)
  {
    var i;
    for(i = 1;i<=4;i++)
    {
      document.getElementById(String(i)+"A").innerHTML = "";
      document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
      document.getElementById(String(i)+"C").innerHTML = "";
      document.getElementById(String(i)+"R").innerHTML = "";
    }
    starts = starts -1;
    var cnt = 0;
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
        .then(doc => {
            doc.forEach( item=>{
              cnt = cnt + 1;
              document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
              document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
              document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
              document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
            });
            lastvi=doc.docs[doc.docs.length-1];
        })
        .catch(err => {
    //        alert(rtload)
        })
  }
});
btnf.addEventListener('click',e=>{
  if ( (starts*4)  <  dlength)
  {
    var i;
    for(i = 1;i<=4;i++)
    {
      document.getElementById(String(i)+"A").innerHTML = "";
      document.getElementById(String(i)+"B").style = "--rating: " + "0" + ";";
      document.getElementById(String(i)+"C").innerHTML = "";
      document.getElementById(String(i)+"R").innerHTML = "";
    }  starts = starts +1;
    startnum[starts] = lastvi;
    var cnt = 0;
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
        .then(doc => {
            doc.forEach( item=>{
              cnt = cnt + 1;
              document.getElementById(String(cnt)+"A").innerHTML = item.data().lecture;
              document.getElementById(String(cnt)+"B").style = "--rating: " + item.data().rating + ";";
              document.getElementById(String(cnt)+"C").innerHTML = item.data().professor;
              document.getElementById(String(cnt)+"R").innerHTML = item.data().rating;
            });
            lastvi=doc.docs[doc.docs.length-1];
        })
        .catch(err => {
    //        alert(rtload)
        })
  }
});
ccard1.addEventListener('click',e=>{
 //Get Email and Password
cnt=0;
 let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
     .then(doc => {
         doc.forEach( item=>{
           cnt = cnt + 1;
           if (cnt ==1)
           { document.getElementById('title1').innerHTML = item.data().lecture;
            document.getElementById('starratings').style = "--rating: " + item.data().rating + ";";
            document.getElementById('titleprof').innerHTML = item.data().professor;
            document.getElementById('q1').innerHTML = item.data().area;
            document.getElementById('q2').innerHTML = item.data().credit;
            document.getElementById('q3').innerHTML =item.data().difficulty;
            if (item.data().team_project == 1)
            {document.getElementById('q4').innerHTML ="있음" ;}
            else{document.getElementById('q4').innerHTML ="없음";}
            document.getElementById('q5').innerHTML = "한줄평   :  "+ item.data().content;

    //         document.getElementById('q6').innerHTML = "       작성자 "+ item.data().uid;
      //       document.getElementById('q7').innerHTML = "        작성시간  "+ item.data().date;
           }
         });
     })
     .catch(err => {
 //        alert(rtload)
     })
   //Sign in

});
ccard2.addEventListener('click',e=>{
  cnt=0;
   let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
       .then(doc => {
           doc.forEach( item=>{
             cnt = cnt + 1;
             if (cnt ==2)
              { document.getElementById('title1').innerHTML = item.data().lecture;
               document.getElementById('starratings').style = "--rating: " + item.data().rating + ";";
               document.getElementById('titleprof').innerHTML = item.data().professor;
               document.getElementById('q1').innerHTML = item.data().area;
               document.getElementById('q2').innerHTML = item.data().credit;
               document.getElementById('q3').innerHTML =item.data().difficulty;
               if (item.data().team_project == 1)
               {document.getElementById('q4').innerHTML ="있음" ;}
               else{document.getElementById('q4').innerHTML ="없음";}
               document.getElementById('q5').innerHTML = "한줄평   :  "+ item.data().content;

             }
           });
       })
       .catch(err => {
   //        alert(rtload)
       })
});
ccard3.addEventListener('click',e=>{
  cnt=0;
   let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
       .then(doc => {
           doc.forEach( item=>{
             cnt = cnt + 1;
             if (cnt ==3)
             { document.getElementById('title1').innerHTML = item.data().lecture;
              document.getElementById('starratings').style = "--rating: " + item.data().rating + ";";
              document.getElementById('titleprof').innerHTML = item.data().professor;
              document.getElementById('q1').innerHTML = item.data().area;
              document.getElementById('q2').innerHTML = item.data().credit;
              document.getElementById('q3').innerHTML =item.data().difficulty;
              if (item.data().team_project == 1)
              {document.getElementById('q4').innerHTML ="있음" ;}
              else{document.getElementById('q4').innerHTML ="없음";}
              document.getElementById('q5').innerHTML = "한줄평   :  "+ item.data().content;


             }
           });
       })
       .catch(err => {
   //        alert(rtload)
       })
});
ccard4.addEventListener('click',e=>{
  cnt=0;
   let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).limit(4).get()
       .then(doc => {
           doc.forEach( item=>{
             cnt = cnt + 1;
             if (cnt ==4)
             { document.getElementById('title1').innerHTML = item.data().lecture;
              document.getElementById('starratings').style = "--rating: " + item.data().rating + ";";
              document.getElementById('titleprof').innerHTML = item.data().professor;
              document.getElementById('q1').innerHTML = item.data().area;
              document.getElementById('q2').innerHTML = item.data().credit;
              document.getElementById('q3').innerHTML =item.data().difficulty;
              if (item.data().team_project == 1)
              {document.getElementById('q4').innerHTML ="있음" ;}
              else{document.getElementById('q4').innerHTML ="없음";}
              document.getElementById('q5').innerHTML = "한줄평   :  "+ item.data().content;

             }
           });
       })
       .catch(err => {
   //        alert(rtload)
       })

});

//      promise.catch(e=> console.log(e.message));
var wHeight = window.innerHeight;
//search bar middle alignment
$("#mk-fullscreen-searchform").css("top", wHeight / 2);
//reform search bar
jQuery(window).resize(function () {
  wHeight = window.innerHeight;
  $("#mk-fullscreen-searchform").css("top", wHeight / 2);
});
// Search
$("#search-button").click(function () {
  $("div.mk-fullscreen-search-overlay").addClass(
    "mk-fullscreen-search-overlay-show"
  );
});
$("a.mk-fullscreen-close").click(function () {
  $("div.mk-fullscreen-search-overlay").removeClass(
    "mk-fullscreen-search-overlay-show"
  );
});
});
