var startnum = new Array()
var starts = 1
startnum[starts] = 1
var choi = 0
var profcheck = new Array()
var teamr = new Array()
var costr = new Array()
var asir = new Array()
var countr = new Array()
var aver = new Array()
var creditr = new Array()
var profr = new Array()
var announcementr = new Array()
var communicationr = new Array()
var seyearr = new Array()
var tag1 = new Array()
var tag2 = new Array()
var tag3 = new Array()
var tag4 = new Array()
var tag5 = new Array()
var tag6 = new Array()
var values = new Array()
var keys = new Array()
var contentr = new Array()
var countprofr = new Array()
var expenditurer = new Array()
var catenum = new Array()
var lastvi, dlength, cnt
var nowc = 0
var clickcheck = 0
var clickcheck2 = 0
var eclickcheck = 0
  var uiduid = localStorage.getItem('uid')
var nowcard = 0
var checkarea = new Array()
var removeprof = 0
var dlength = 0
var username2 = localStorage.getItem('uname')
document.getElementById('username3').innerHTML = username2 + '님이 작성한 후기입니다.'
var init = firebase.initializeApp({
  apiKey: 'AIzaSyBeTkS1nPcbkqlMSCJpFukdjLco3Vghh14',
  authDomain: 'hk-liberal-arts-comments.firebaseapp.com',
  projectId: 'hk-liberal-arts-comments',
  storageBucket: 'hk-liberal-arts-comments.appspot.com',
  messagingSenderId: '18425169280',
  appId: '1:18425169280:web:e153ac2694890e0891ad65',
  measurementId: 'G-YB7EWF6108'
})
var db = init.firestore() // 위 설정대로 저장소에 접속합니다
let ref = db.collection('elective')
var cnt = 0
var elem = document.getElementById('leftside')
var new_elem = document.createElement('div')
var pelem = document.getElementById('profside')

let lencheck = db.collection('users').doc(uiduid).get()
  .then(doc => {
    for (const [key, value] of Object.entries(doc.data().comment)) {
        dlength++;
    }//      dlength = doc.docs.length

  })
          var ccnt = 0
          starts = 1

  let lencheck2 = db.collection('users').doc(uiduid).get()
    .then(doc => {
      for (const [key, value] of Object.entries(doc.data().comment)) {
              ccnt++;
              values[ccnt] = value;
              keys[ccnt] = key;
          }
                var i;
                var tmp,tmp2;
                for(i = 1;i<=ccnt;i++)
                {
                  for(var j=1;j<=ccnt;j++)
                  {
                    if (keys[i] > keys[j])
                    {
                      tmp = keys[i];
                      keys[i]=keys[j];keys[j]=tmp;
                      tmp2 = values[i];
                      values[i]=values[j];values[j]=tmp2;
                    }
                  }
                }
                for (i = 1; i <= 4; i++) {
                  document.getElementById(String(i) + 'A').innerHTML = ''
                  document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                  document.getElementById(String(i) + 'C').innerHTML = ''
                  document.getElementById(String(i) + 'R').innerHTML = ''
                }
                var count1=0;
                for(i=1;i<=4;i++){
                let reffff = db.collection('elective').doc(String(values[starts+i-1])).collection('information').doc(String(keys[starts+i-1]))
                let rtload22 = reffff.get()
                .then(subDoc => {
                  count1++;
                  teamr[count1] = subDoc.data().team_project
                  costr[count1] = subDoc.data().cost
                  asir[count1] = subDoc.data().assignment
                  creditr[count1] = subDoc.data().credit
                  contentr[count1] = subDoc.data().content
                  seyearr[count1] = subDoc.data().year + '년 '+ subDoc.data().semester;
                  announcementr[count1] = subDoc.data().announcement
                  communicationr[count1] = subDoc.data().communication
                  expenditurer[count1] = subDoc.data().expenditure
                  tag1[count1] = subDoc.data().tag1
                  tag2[count1] = subDoc.data().tag2
                  tag3[count1] = subDoc.data().tag3
                  tag4[count1] = subDoc.data().tag4
                  tag5[count1] = subDoc.data().tag5
                  tag6[count1] = subDoc.data().tag6
                  checkarea[count1]=subDoc.data().area
                  catenum[count1] = starts+i-1;
                  document.getElementById(String(count1) + 'A').innerHTML = subDoc.data().lecture
                  document.getElementById(String(count1) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                  document.getElementById(String(count1) + 'C').innerHTML = subDoc.data().professor
                  document.getElementById(String(count1) + 'R').innerHTML = subDoc.data().rating
              })
              }




        })
            .catch(err => {
              //        alert(rtload)
            })

$(function(){

  $('#fbutton').click(function () {
    if (starts + 4<= dlength) {
      var i
      starts = starts + 4
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      }
      var count1=0;
      for(i=1;i<=4;i++){
      let reffff = db.collection('elective').doc(String(values[starts+i-1])).collection('information').doc(String(keys[starts+i-1]))
      let rtload22 = reffff.get()
      .then(subDoc => {
        count1++;
        teamr[count1] = subDoc.data().team_project
        costr[count1] = subDoc.data().cost
        asir[count1] = subDoc.data().assignment
        creditr[count1] = subDoc.data().credit
        contentr[count1] = subDoc.data().content
        seyearr[count1] = subDoc.data().year + '년 '+ subDoc.data().semester;
        announcementr[count1] = subDoc.data().announcement
        communicationr[count1] = subDoc.data().communication
        expenditurer[count1] = subDoc.data().expenditure
        tag1[count1] = subDoc.data().tag1
        tag2[count1] = subDoc.data().tag2
        tag3[count1] = subDoc.data().tag3
        tag4[count1] = subDoc.data().tag4
        tag5[count1] = subDoc.data().tag5
        tag6[count1] = subDoc.data().tag6
        checkarea[count1]=subDoc.data().area
        catenum[count1] = starts+i-1;
        document.getElementById(String(count1) + 'A').innerHTML = subDoc.data().lecture
        document.getElementById(String(count1) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
        document.getElementById(String(count1) + 'C').innerHTML = subDoc.data().professor
        document.getElementById(String(count1) + 'R').innerHTML = subDoc.data().rating
    })
    }

    }
  })
  $('#bbutton').click(function () {
    if (starts - 4>= 1) {
      var i
      starts = starts - 4
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      }
      var count1=0;
      for(i=1;i<=4;i++){
      let reffff = db.collection('elective').doc(String(values[starts+i-1])).collection('information').doc(String(keys[starts+i-1]))
      let rtload22 = reffff.get()
      .then(subDoc => {
        count1++;
        teamr[count1] = subDoc.data().team_project
        costr[count1] = subDoc.data().cost
        asir[count1] = subDoc.data().assignment
        creditr[count1] = subDoc.data().credit
        contentr[count1] = subDoc.data().content
        seyearr[count1] = subDoc.data().year + '년 '+ subDoc.data().semester;
        announcementr[count1] = subDoc.data().announcement
        communicationr[count1] = subDoc.data().communication
        expenditurer[count1] = subDoc.data().expenditure
        tag1[count1] = subDoc.data().tag1
        tag2[count1] = subDoc.data().tag2
        tag3[count1] = subDoc.data().tag3
        tag4[count1] = subDoc.data().tag4
        tag5[count1] = subDoc.data().tag5
        tag6[count1] = subDoc.data().tag6
        checkarea[count1]=subDoc.data().area
        catenum[count1] = starts+i-1;
        document.getElementById(String(count1) + 'A').innerHTML = subDoc.data().lecture
        document.getElementById(String(count1) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
        document.getElementById(String(count1) + 'C').innerHTML = subDoc.data().professor
        document.getElementById(String(count1) + 'R').innerHTML = subDoc.data().rating
    })
    }

    }
  })
  $('#deletee').click(function () {
      var i
      var count1=0;
      var commentList = {}
      let ref3 = db.collection('users').doc(uiduid)
      let restestt = ref3.get()
        .then((subDoc) => {
            commentList = subDoc.data().comment
            delete commentList[keys[starts+clickcheck-1]]

            let restestt2 = ref3
              .update({
                comment: commentList
              })
              .then(() => {
              let ref4 = db.collection('elective').doc(String(values[starts+clickcheck-1])).collection('information').doc(String(keys[starts+clickcheck-1]))
              let deletedoc = ref4.get()
              ref4.delete()
              .then(function(){
                window.location.reload()
              })

              })
              .catch(() => {
                alert('error')
              })
          })
  })
  $('#card1').click(function () {
    clickcheck = 1;
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck2 == 0) {
      clickcheck2 = 1;
      document.getElementById('poplecture').innerHTML = document.getElementById('1A').innerHTML + ' :: ' + document.getElementById('1C').innerHTML;
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('1R').innerHTML + ';'
      if (teamr[1] == 1) { document.getElementById('popteam').innerHTML = 'O'; } else { document.getElementById('popteam').innerHTML = 'X' ;}
//      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML = checkarea[1];
      if (announcementr[1] == 1) { document.getElementById('announce').innerHTML = 'O'; } else { document.getElementById('announce').innerHTML = 'X' ;}
      if (communicationr[1] == 0){document.getElementById('commun').innerHTML = '빠름';}
      else if (communicationr[1] == 1){document.getElementById('commun').innerHTML = '보통';}
      else {document.getElementById('commun').innerHTML = '느림';}
      document.getElementById('creditrr').innerHTML = creditr[1];
      document.getElementById('seye').innerHTML = seyearr[1];
      document.getElementById('contentc').innerHTML = contentr[1];
      if (costr[1] == 1) {document.getElementById('moneyc').innerHTML = '                      0                  원';}
      else if (costr[1] == 2) {document.getElementById('moneyc').innerHTML = '0~10000                  원';}
      else if (costr[1] == 3) {document.getElementById('moneyc').innerHTML = '10000~50000                  원';}
      else if (costr[1] == 4) {document.getElementById('moneyc').innerHTML = '50000~100000                  원';}
      else {document.getElementById('moneyc').innerHTML = '100000 원 이상';}
      if(asir[1] == 0){document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else if(asir[1] == 1){document.getElementById('asic').innerHTML = '학기 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '120');}
      else if(asir[1] == 2){document.getElementById('asic').innerHTML = '월 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else {document.getElementById('asic').innerHTML = '주 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}


      var tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-2');
      var tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-2');
      var tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-2');
      var tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-2');
      var tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-2');
      var tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-2');
      var fir2 = 0,se2=0,th2=0;
      if (expenditurer[1][0] == 1) fir2=1;
      if (expenditurer[1][1] == 1 )se2=1;
      if (expenditurer[1][2] == 1) th2=1;
      var summ = fir2+se2+th2;
      var fir =( fir2 / (summ)) *292.91;
      var se = (se2 / (summ)) *292.91;
      var th = (th2 / (summ)) * 292.91;
      var fi1 =document.getElementById('fi'); fi1.setAttribute('width', String(fir));
      var se1 =document.getElementById('se'); se1.setAttribute('x', String(412.23+fir));se1.setAttribute('width', String(se));
      var th1 =document.getElementById('th');th1.setAttribute('x', String(412.23+fir+se)); th1.setAttribute('width', String(th));
      if (tag1[1] == 1) {tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-9');}
      if (tag2[1] == 1) {tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-9');}
      if (tag3[1] == 1) {tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-9');}
      if (tag4[1] == 1) {tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-9');}
      if (tag5[1] == 1) {tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-9');}
      if (tag6[1] == 1) {tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-9');}
      document.body.classList.add('active')
    }
  })
  $('#card2').click(function () {
    clickcheck = 2;
    if (document.getElementById('2A').innerHTML != '과목명' && document.getElementById('2A').innerHTML != '' && clickcheck2 == 0) {
      
      document.getElementById('poplecture').innerHTML = document.getElementById('2A').innerHTML + ' :: ' +  document.getElementById('2C').innerHTML;
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('2R').innerHTML + ';'
      if (teamr[2] == 1) { document.getElementById('popteam').innerHTML = 'O'; } else { document.getElementById('popteam').innerHTML = 'X' ;}
//      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML =  checkarea[2];
      if (announcementr[2] == 1) { document.getElementById('announce').innerHTML = 'O'; } else { document.getElementById('announce').innerHTML = 'X' ;}
      if (communicationr[2] == 0){document.getElementById('commun').innerHTML = '빠름';}
      else if (communicationr[2] == 1){document.getElementById('commun').innerHTML = '보통';}
      else {document.getElementById('commun').innerHTML = '느림';}
      document.getElementById('creditrr').innerHTML = creditr[2];
      document.getElementById('seye').innerHTML = seyearr[2];
      document.getElementById('contentc').innerHTML = contentr[2];
      if (costr[2] == 1) {document.getElementById('moneyc').innerHTML = '                      0                  원';}
      else if (costr[2] == 2) {document.getElementById('moneyc').innerHTML = '0~10000                  원';}
      else if (costr[2] == 3) {document.getElementById('moneyc').innerHTML = '10000~50000                  원';}
      else if (costr[2] == 4) {document.getElementById('moneyc').innerHTML = '50000~100000                  원';}
      else {document.getElementById('moneyc').innerHTML = '100000 원 이상';}
      if(asir[2] == 0){document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else if(asir[2] == 1){document.getElementById('asic').innerHTML = '학기 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '120');}
      else if(asir[2] == 2){document.getElementById('asic').innerHTML = '월 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else {document.getElementById('asic').innerHTML = '주 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      var fir2 = 0,se2=0,th2=0;
      if (expenditurer[2][0] == 1) fir2=1;
      if (expenditurer[2][1] == 1 )se2=1;
      if (expenditurer[2][2] == 1) th2=1;
      var summ = fir2+se2+th2;
      var fir =( fir2 / (summ)) *292.91;
      var se = (se2 / (summ)) *292.91;
      var th = (th2 / (summ)) * 292.91;

      var tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-2');
      var tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-2');
      var tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-2');
      var tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-2');
      var tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-2');
      var tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-2');

      var fi1 =document.getElementById('fi'); fi1.setAttribute('width', String(fir));
      var se1 =document.getElementById('se'); se1.setAttribute('x', String(412.23+fir));se1.setAttribute('width', String(se));
      var th1 =document.getElementById('th');th1.setAttribute('x', String(412.23+fir+se)); th1.setAttribute('width', String(th));
      if (tag1[2] == 1) {tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-9');}
      if (tag2[2] == 1) {tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-9');}
      if (tag3[2] == 1) {tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-9');}
      if (tag4[2] == 1) {tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-9');}
      if (tag5[2] == 1) {tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-9');}
      if (tag6[2] == 1) {tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-9');}
      document.body.classList.add('active')
    }
  })

  $('#card3').click(function () {
    clickcheck = 2;
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck2 == 0) {
      clickcheck2 = 1;
    document.getElementById('poplecture').innerHTML = document.getElementById('3A').innerHTML + ' :: ' +  document.getElementById('3C').innerHTML;
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('3R').innerHTML + ';'
      if (teamr[3] == 1) { document.getElementById('popteam').innerHTML = 'O'; } else { document.getElementById('popteam').innerHTML = 'X' ;}
//      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML =  checkarea[3];
      if (announcementr[3] == 1) { document.getElementById('announce').innerHTML = 'O'; } else { document.getElementById('announce').innerHTML = 'X' ;}
      if (communicationr[3] == 0){document.getElementById('commun').innerHTML = '빠름';}
      else if (communicationr[3] == 1){document.getElementById('commun').innerHTML = '보통';}
      else {document.getElementById('commun').innerHTML = '느림';}
      document.getElementById('creditrr').innerHTML = creditr[3];
      document.getElementById('seye').innerHTML = seyearr[3];
      document.getElementById('contentc').innerHTML = contentr[3];
      if (costr[3] == 1) {document.getElementById('moneyc').innerHTML = '                      0                  원';}
      else if (costr[3] == 2) {document.getElementById('moneyc').innerHTML = '0~10000                  원';}
      else if (costr[3] == 3) {document.getElementById('moneyc').innerHTML = '10000~50000                  원';}
      else if (costr[3] == 4) {document.getElementById('moneyc').innerHTML = '50000~100000                  원';}
      else {document.getElementById('moneyc').innerHTML = '100000 원 이상';}
      if(asir[3] == 0){document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else if(asir[3] == 1){document.getElementById('asic').innerHTML = '학기 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '120');}
      else if(asir[3] == 2){document.getElementById('asic').innerHTML = '월 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else {document.getElementById('asic').innerHTML = '주 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      var fir2 = 0,se2=0,th2=0;
      if (expenditurer[3][0] == 1) fir2=1;
      if (expenditurer[3][1] == 1 )se2=1;
      if (expenditurer[3][2] == 1) th2=1;
      var summ = fir2+se2+th2;
      var fir =( fir2 / (summ)) *292.91;
      var se = (se2 / (summ)) *292.91;
      var th = (th2 / (summ)) * 292.91;

      var tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-2');
      var tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-2');
      var tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-2');
      var tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-2');
      var tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-2');
      var tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-2');

      var fi1 =document.getElementById('fi'); fi1.setAttribute('width', String(fir));
      var se1 =document.getElementById('se'); se1.setAttribute('x', String(412.23+fir));se1.setAttribute('width', String(se));
      var th1 =document.getElementById('th');th1.setAttribute('x', String(412.23+fir+se)); th1.setAttribute('width', String(th));
      if (tag1[3] == 1) {tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-9');}
      if (tag2[3] == 1) {tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-9');}
      if (tag3[3] == 1) {tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-9');}
      if (tag4[3] == 1) {tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-9');}
      if (tag5[3] == 1) {tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-9');}
      if (tag6[3] == 1) {tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-9');}
      document.body.classList.add('active')
    }
  })

  $('#card4').click(function () {
    clickcheck = 4;
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck2 == 0) {
      clickcheck2 = 1;
    document.getElementById('poplecture').innerHTML = document.getElementById('4A').innerHTML + ' :: ' +  document.getElementById('4C').innerHTML;
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('4R').innerHTML + ';'
      if (teamr[4] == 1) { document.getElementById('popteam').innerHTML = 'O'; } else { document.getElementById('popteam').innerHTML = 'X' ;}
//      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML =  checkarea[4];
      if (announcementr[4] == 1) { document.getElementById('announce').innerHTML = 'O'; } else { document.getElementById('announce').innerHTML = 'X' ;}
      if (communicationr[4] == 0){document.getElementById('commun').innerHTML = '빠름';}
      else if (communicationr[4] == 1){document.getElementById('commun').innerHTML = '보통';}
      else {document.getElementById('commun').innerHTML = '느림';}
      document.getElementById('creditrr').innerHTML = creditr[4];
      document.getElementById('seye').innerHTML = seyearr[4];
      document.getElementById('contentc').innerHTML = contentr[4];
      if (costr[4] == 1) {document.getElementById('moneyc').innerHTML = '                      0                  원';}
      else if (costr[4] == 2) {document.getElementById('moneyc').innerHTML = '0~10000                  원';}
      else if (costr[4] == 3) {document.getElementById('moneyc').innerHTML = '10000~50000                  원';}
      else if (costr[4] == 4) {document.getElementById('moneyc').innerHTML = '50000~100000                  원';}
      else {document.getElementById('moneyc').innerHTML = '100000 원 이상';}
      if(asir[4] == 0){document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else if(asir[4] == 1){document.getElementById('asic').innerHTML = '학기 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '120');}
      else if(asir[4] == 2){document.getElementById('asic').innerHTML = '월 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      else {document.getElementById('asic').innerHTML = '주 1~2회';hakwi =document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74');}
      var fir2 = 0,se2=0,th2=0;
      if (expenditurer[4][0] == 1) fir2=1;
      if (expenditurer[4][1] == 1 )se2=1;
      if (expenditurer[4][2] == 1) th2=1;
      var summ = fir2+se2+th2;
      var fir =( fir2 / (summ)) *292.91;
      var se = (se2 / (summ)) *292.91;
      var th = (th2 / (summ)) * 292.91;

      var tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-2');
      var tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-2');
      var tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-2');
      var tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-2');
      var tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-2');
      var tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-2');

      var fi1 =document.getElementById('fi'); fi1.setAttribute('width', String(fir));
      var se1 =document.getElementById('se'); se1.setAttribute('x', String(412.23+fir));se1.setAttribute('width', String(se));
      var th1 =document.getElementById('th');th1.setAttribute('x', String(412.23+fir+se)); th1.setAttribute('width', String(th));
      if (tag1[4] == 1) {tag111=document.getElementById('tag11');tag111.setAttribute('class', 'cls-9');}
      if (tag2[4] == 1) {tag222=document.getElementById('tag22');tag222.setAttribute('class', 'cls-9');}
      if (tag3[4] == 1) {tag333=document.getElementById('tag33');tag333.setAttribute('class', 'cls-9');}
      if (tag4[4] == 1) {tag444=document.getElementById('tag44');tag444.setAttribute('class', 'cls-9');}
      if (tag5[4] == 1) {tag555=document.getElementById('tag55');tag555.setAttribute('class', 'cls-9');}
      if (tag6[4] == 1) {tag666=document.getElementById('tag66');tag666.setAttribute('class', 'cls-9');}
      document.body.classList.add('active')
    }
  })
  $('#editt').click(function () {
    window.localStorage.setItem('editkey', keys[starts+clickcheck-1]);
    window.localStorage.setItem('editvalue', values[starts+clickcheck-1]);
    location.href = './mypage_edit.html'
  })
})
$(document).mouseup(function (e) {
  var container = $('#popup')
  var container2 = $('#card2')
  var container3 = $('#card4')

  if (
    !container.is(e.target) && // if the target of the click isn't the container...
    !container3.is(e.target) &&
    !container2.is(e.target) &&
    container.has(e.target).length === 0 &&
    container2.has(e.target).length === 0 &&
    container3.has(e.target).length === 0
  ) {
    // ... nor a descendant of the container
    document.body.classList.remove('active')
    clickcheck2 = 0
  }

})