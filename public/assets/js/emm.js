
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
var contentr = new Array()
var countprofr = new Array()
var expenditurer = new Array()
var lastvi, dlength, cnt
var nowc = 0
var clickcheck = 0
var eclickcheck = 0

var nowcard = 0
var checkarea = '1영역'
var removeprof = 0
var dlength = 0
var username2 = localStorage.getItem('uname')
document.getElementById('username3').innerHTML = username2 + '님, 반갑습니다.'
var init = firebase.initializeApp({
  // apiKey: 'AIzaSyCYrst18SfKDpPHJaSXw-9hyKCsS_vrhxs',
  // authDomain: 'hk-electives-comments.firebaseapp.com',
  // databaseURL: 'https://hk-electives-comments.firebaseio.com',
  // projectId: 'hk-electives-comments',
  // storageBucket: 'hk-electives-comments.appspot.com',
  // messagingSenderId: '988847625541',
  // appId: '1:988847625541:web:0cbf63890235d66f2b5a2c',
  // measurementId: 'G-43FWT7E6SF'
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
const lectures = [
  ['1영역', 'SF문학과과학적상상력', 3, '전지니'],
  ['융합', 'UCC제작과비평', 3, '김삼력'],
  ['4영역', '결혼과가족', 3, '박관영'],
  ['6영역', '경영학콘서트', 3, '정진'],
  ['6영역', '경영학콘서트', 3, '김동민'],
  ['소양', '골프', 1, '이인엽'],
  ['소양', '골프', 1, '지준철'],
  ['소양', '골프', 1, '정지윤'],
  ['융합', '공학과프로그래밍언어', 3, '신정호'],
  ['3영역', '공학윤리', 3, '임건태'],
  ['3영역', '공학윤리', 3, '황호식'],
  ['3영역', '공학윤리', 3, '소병일'],
  ['7영역', '과학기술과문명', 3, '오기영'],
  ['5영역', '과학기술문서작성과발표', 3, '김정훈'],
  ['5영역', '과학기술문서작성과발표', 3, '정명문'],
  ['3영역', '교육봉사활동', 2, '강창동'],
  ['3영역', '교육사회', 2, '강창동'],
  ['3영역', '교육심리', 2, '정미경'],
  ['3영역', '교육학의이해', 3, '박미연'],
  ['3영역', '교육행정및교육경영', 2, '이유정'],
  ['3영역', '교직실무', 2, '이유정'],
  ['소양', '국제협력론', 3, '김희숙'],
  ['6영역', '글로벌시대의국제관계', 3, '김희숙'],
  ['6영역', '기술경영', 3, '김대중'],
  ['6영역', '기술경영', 3, '안재근'],
  ['6영역', '기술경영', 3, '신세윤'],
  ['6영역', '기술경영', 3, '박재희'],
  ['6영역', '기술경영', 3, '김진'],
  ['6영역', '기술경영', 3, '박현식'],
  ['소양', '기업가정신과창업', 3, '강무희'],
  ['소양', '기업과 사회와 노동', 3, '류호상'],
  ['5영역', '논리와비판적사고', 3, '김영래'],
  ['소양', '농구', 1, '유정인'],
  ['4영역', '다문화교육의이해', 3, '오덕열'],
  ['4영역', '다문화교육의이해', 3, '서정기'],
  ['3영역', '다문화사회와사회정책', 3, '송현희'],
  ['3영역', '대중문화의이해', 3, '전지니'],
  ['공통과목', '대학생활과진로설정', 1, '대학일자리센터'],
  ['7영역', '대학수학', 3, '미정'],
  ['1영역', '동서양고전과세상읽기', 3, '김찬기'],
  ['1영역', '동서양신화와문화콘텐츠', 3, '미정'],
  ['3영역', '동양사상으로의초대', 3, '박승원'],
  ['3영역', '동양사상으로의초대', 3, '황호식'],
  ['4영역', '동양역사와문화', 3, '문상명'],
  ['소양', '레크레이션', 1, '문경영'],
  ['소양', '레크레이션', 1, '김경렬'],
  ['소양', '레크레이션', 1, '이윤일'],
  ['소양', '레크레이션', 1, '황용묵'],
  ['소양', '레크레이션', 1, '황인선'],
  ['소양', '리더십의이해', 3, '미정'],
  ['6영역', '마케팅이해하기', 3, '한승희'],
  ['공통과목', '말하기와글쓰기', 3, '전지니'],
  ['공통과목', '말하기와글쓰기', 3, '이은선'],
  ['공통과목', '말하기와글쓰기', 3, '조미경'],
  ['공통과목', '말하기와글쓰기', 3, '미정'],
  ['공통과목', '말하기와글쓰기', 3, '김지녀'],
  ['공통과목', '말하기와글쓰기', 3, '마상룡'],
  ['소양', '면접과프레젠테이션', 2, '박선환'],
  ['6영역', '모바일혁명이야기', 3, '김현주'],
  ['8영역', '몸과생명', 3, '이양진'],
  ['1영역', '문학과영상', 3, '김희주'],
  ['1영역', '문학과영상', 3, '서미진'],
  ['1영역', '문학과영상', 3, '미정'],
  ['1영역', '문학의이해', 3, '유지현'],
  ['3영역', '미디어로보는세계종교', 3, '손원영'],
  ['5영역', '미디어로소통하기', 3, '김삼력'],
  ['1영역', '미술의감상과비평', 3, '오유진'],
  ['7영역', '미적분학1', 3, '유재하'],
  ['7영역', '미적분학1', 3, '이윤진'],
  ['7영역', '미적분학2', 3, '백승재'],
  ['7영역', '미적분학2', 3, '이윤진'],
  ['7영역', '미적분학2', 3, '이택기'],
  ['7영역', '미적분학2', 3, '최명준'],
  ['7영역', '미적분학2', 3, '오광석'],
  ['7영역', '미적분학2', 3, '이종환'],
  ['7영역', '미적분학2', 3, '유현재'],
  ['7영역', '미적분학2', 3, '유재하'],
  ['7영역', '미적분학2', 3, '채명주'],
  ['소양', '배드민턴', 1, '윤완수'],
  ['4영역', '법과문화', 3, '한지혜'],
  ['소양', '봉사활동', 1, '김한중'],
  ['2영역', '부모교육론', 3, '박효정'],
  ['6영역', '사물인터넷의세상', 3, '최미경'],
  ['3영역', '삶과철학', 3, '임건태'],
  ['3영역', '삶과철학', 3, '이상문'],
  ['7영역', '생명과학', 3, '성지연'],
  ['7영역', '생명의기원과진화', 3, '이양진'],
  ['2영역', '생활법률', 3, '한지혜'],
  ['2영역', '생활법률', 3, '금종례'],
  ['2영역', '생활속의상담심리', 3, '조영주'],
  ['7영역', '생활속의수학', 3, '박정주'],
  ['7영역', '생활속의화학', 3, '한기종'],
  ['8영역', '생활원예', 3, '장정은'],
  ['5영역', '생활한자와한문', 3, '한정미'],
  ['4영역', '서양역사와문화', 3, '이종훈'],
  ['7영역', '선형대수학', 3, '이은경'],
  ['7영역', '선형대수학', 3, '김한정'],
  ['7영역', '선형대수학', 3, '박상돈'],
  ['1영역', '세계의민속음악', 3, '조효종'],
  ['1영역', '세계의민속음악', 3, '조은경'],
  ['소양', '수상레저', 1, '김경렬'],
  ['소양', '스키', 1, '김진훈'],
  ['소양', '스키', 1, '문경영'],
  ['소양', '스키', 1, '황인선'],
  ['소양', '스키', 1, '황용묵'],
  ['소양', '스키', 1, '양재혁'],
  ['소양', '스키', 1, '김경렬'],
  ['소양', '스키', 1, '김희재'],
  ['7영역', '시공간과우주', 3, '오기영'],
  ['5영역', '시청각영어', 3, '남은희'],
  ['5영역', '시청각영어', 3, '최정선'],
  ['공통과목', '실용영어', 2, '여수연'],
  ['공통과목', '실용영어', 2, '한정민'],
  ['공통과목', '실용영어', 2, '박수진'],
  ['공통과목', '실용영어', 2, '김다정'],
  ['공통과목', '실용영어', 2, '이효정'],
  ['공통과목', '실용영어', 2, '이영경'],
  ['3영역', '심리학의이해', 3, '최영미'],
  ['글컬', '안성맞춤융합교실', 3, '김원철'],
  ['글컬', '안성지역학의이해', 2, '서성은'],
  ['6영역', '알기쉬운경제이야기', 3, '정진'],
  ['5영역', '영문강독', 3, '박연미'],
  ['5영역', '영어글쓰기', 3, '류병율'],
  ['5영역', '영어글쓰기', 3, '류호열'],
  ['공통과목', '영어말하기1', 1, '린드로스'],
  ['공통과목', '영어말하기1', 1, '졸도'],
  ['공통과목', '영어말하기1', 1, '칼튼'],
  ['5영역', '영어말하기2', 3, '칼튼'],
  ['5영역', '영어말하기2', 3, '린드로스'],
  ['5영역', '영어말하기2', 3, '졸도'],
  ['5영역', '영어말하기2', 3, '안미연'],
  ['3영역', '영화속철학', 3, '소병일'],
  ['8영역', '웰니스와음식정보', 3, '김양희'],
  ['8영역', '웰니스와음식정보', 3, '강근옥'],
  ['1영역', '음악의이해', 3, '조은경'],
  ['5영역', '이미지와기호', 3, '김원철'],
  ['7영역', '인간・우주・문명', 3, '이정민'],
  ['8영역', '인간과식량', 3, '박영심'],
  ['8영역', '인간과환경', 3, '안진선'],
  ['2영역', '인간관계론', 3, '권재기'],
  ['2영역', '인간관계론', 3, '박선환'],
  ['2영역', '인간관계론', 3, '손원영'],
  ['6영역', '인공지능과미래사회', 3, '양애경'],
  ['2영역', '인권과복지사회', 3, '문영주'],
  ['융합', '인문・심리 치유실습', 3, '전지니'],
  ['융합', '인문・심리 치유실습', 3, '조영주'],
  ['7영역', '일반물리실험2', 1, '최용수'],
  ['7영역', '일반물리실험2', 1, '이현'],
  ['7영역', '일반물리실험2', 1, '양우일'],
  ['7영역', '일반물리학2', 3, '양우일'],
  ['7영역', '일반물리학2', 3, '최용수'],
  ['7영역', '일반물리학2', 3, '이현'],
  ['7영역', '일반물리학2', 3, '오기영'],
  ['7영역', '일반물리학및실험2', 3, '최홍'],
  ['7영역', '일반물리학및실험2', 3, '박종순'],
  ['7영역', '일반화학', 3, '김미수'],
  ['7영역', '일반화학2', 3, '임민경'],
  ['7영역', '일반화학및실험1', 3, '김미수'],
  ['7영역', '일반화학및실험1', 3, '오영호'],
  ['7영역', '일반화학및실험1', 3, '양도현'],
  ['7영역', '일반화학및실험1', 3, '한기종'],
  ['7영역', '일반화학및실험2', 3, '이승훈'],
  ['7영역', '일반화학및실험2', 3, '오영호'],
  ['7영역', '일반화학실험1', 1, '임민경'],
  ['7영역', '일반화학실험1', 1, '한기종'],
  ['7영역', '일반화학실험2', 1, '임민경'],
  ['5영역', '일본어', 3, '오영숙'],
  ['5영역', '일본어', 3, '이경화'],
  ['2영역', '자기이해와생애설계', 3, '정유선'],
  ['소양', '자기주도적학습법', 3, '박효정'],
  ['7영역', '자연과학의이해', 3, '오기영'],
  ['8영역', '재생에너지와인간삶', 3, '최용수'],
  ['2영역', '재테크와실용금융', 3, '정진'],
  ['2영역', '정신건강프로젝트', 3, '미정'],
  ['6영역', '제4차산업혁명핵심기술의이해', 3, '김현주'],
  ['5영역', '중국어', 3, '김영현'],
  ['5영역', '중국어', 3, '주신전'],
  ['소양', '지속가능한발전', 1, '최동욱'],
  ['융합', '지식경영을위한컴퓨터활용', 3, '최선주'],
  ['융합', '지식경영을위한컴퓨터활용', 3, '양성미'],
  ['6영역', '지적재산권의이해', 3, '미정'],
  ['소양', '진로선택과취업준비', 2, '대학일자리센터'],
  ['소양', '창업제대로하기', 3, '대학일자리센터'],
  ['5영역', '창의성계발', 3, '권재기'],
  ['5영역', '창의성계발', 3, '권희철'],
  ['2영역', '창의와소통', 3, '권희철'],
  ['2영역', '청년의삶과사회환경', 3, '박정배'],
  ['소양', '취업준비실무', 2, '대학일자리센터'],
  ['4영역', '통일과한반도미래', 3, '배종렬'],
  ['4영역', '통일과한반도미래', 3, '미정'],
  ['3영역', '특수교육학개론', 2, '박미연'],
  ['6영역', '프로그래밍언어의이해', 3, '양애경'],
  ['8영역', '필라테스와에스테틱', 2, '남미희'],
  ['8영역', '필라테스와에스테틱', 2, '안용길'],
  ['공통과목', '한경디지로그:이슈와토론', 2, '김원철'],
  ['공통과목', '한경디지로그:이슈와토론', 2, '권혜린'],
  ['공통과목', '한경디지로그:이슈와토론', 2, '마상룡'],
  ['공통과목', '한경디지로그:이슈와토론', 2, '미정'],
  ['공통과목', '한경디지로그:이슈와토론', 2, '이정민'],
  ['4영역', '한국근현대사', 3, '박윤진'],
  ['1영역', '한국명문과상상력', 3, '박춘희'],
  ['4영역', '한국문화와교육', 3, '이유정'],
  ['4영역', '한국문화와교육', 3, '김혜진'],
  ['4영역', '한국문화와교육', 3, '김영래'],
  ['4영역', '한국역사와문화', 3, '윤휘탁'],
  ['4영역', '한국역사와문화', 3, '미정'],
  ['1영역', '한국인의삶과문학', 3, '황치복'],
  ['소양', '합창', 3, '백은경'],
  ['2영역', '행복의심리', 3, '조영주'],
  ['3영역', '현대사회와교육 ', 3, '손원영'],
  ['3영역', '현대사회와교육 ', 3, '최철용'],
  ['3영역', '현대사회와교육 ', 3, '김혜진'],
  ['8영역', '현대사회와스포츠', 3, '김규호'],
  ['8영역', '현대사회와스포츠', 3, '김동규'],
  ['1영역', '현대생활과디자인', 3, '오승희'],
  ['3영역', '현대인과 윤리', 3, '김종진'],
  ['4영역', '현대중국의이해', 3, '윤휘탁'],
  ['4영역', '현대중국의이해', 3, '김지훈'],
  ['7영역', '확률과통계', 3, '허다연'],
  ['7영역', '확률과통계', 3, '강철'],
  ['7영역', '확률과통계', 3, '박정주'],
  ['8영역', '환경윤리', 3, '김원철']
]
function orderstar()
{
  let lencheck = ref.where('area', '==', checkarea).orderBy('avg_rating','desc').get()
    .then(doc => {
      dlength = doc.docs.length
    })
    if (choi >= 1) {
          for (i = 1; i <= choi; i++) {
            var parent = document.getElementById('added' + String(i))
            elem.removeChild(parent)
          }
        }
          choi = 0


  cnt = 0
  let rtload = ref.where('area', '==', checkarea).orderBy('avg_rating','desc').get()
    .then(doc => {
      doc.forEach(item => {
        var cche = 0; var cflag = 0

        for (cche = 1; cche <= cnt; cche++) {
          if (profcheck[cche] == item.data().lecture) {
            cflag = 1
            var rat = document.getElementById('rate' + String(cche))
            var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
            countprofr[cche]++
            profr[cche][countprofr[cche]] = item.data().professor
            rat.innerHTML = '★   ' + totalave
          }
        }
        if (cflag == 0) {
          cnt = cnt + 1
          profcheck[cnt] = item.data().lecture
          countr[cnt] = item.data().count
          aver[cnt] = item.data().avg_rating
          profr[cnt] = new Array()
          profr[cnt][1] = item.data().professor
          countprofr[cnt] = 1
          var elem = document.getElementById('leftside')
          var new_elem = document.createElement('div')
          //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
          var txt = document.createTextNode(item.data().lecture)
          var new_elem2 = document.createElement('span')
          new_elem2.setAttribute('class', 'circle')
          new_elem2.setAttribute('aria-hidden', 'true')

          var new_elem3 = document.createElement('span')
          new_elem3.setAttribute('class', 'icon arrow')

          var new_elem4 = document.createElement('button')
          new_elem4.setAttribute('class', 'learn-more')

          new_elem4.addEventListener('click', function (event) {
            var i

            for (i = 1; i <= 4; i++) {
              document.getElementById(String(i) + 'A').innerHTML = ''
              document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
              document.getElementById(String(i) + 'C').innerHTML = ''
              document.getElementById(String(i) + 'R').innerHTML = ''
            } // Get Email and Password
            /// //////////////////////////////////////////////////////////////////////////////////////////////
            for (i = 1; i <= cnt; i++) {
              if (this.id == 'ele' + String(i)) nowc = i
            }

            for (i = 1; i <= removeprof; i++) {
              var parents = document.getElementById('profs' + String(i))
              pelem.removeChild(parents)
            }
            removeprof = countprofr[nowc]
            var profpart = 0
            for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
              var pnew_elem = document.createElement('div')
              var pnew_elem2 = document.createElement('span')
              pnew_elem.setAttribute('class', 'button2')
              pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
              pnew_elem.id = 'profs' + profpart
              pnew_elem.addEventListener('click', function (event) {
                var i
                for (i = 1; i <= 4; i++) {
                  document.getElementById(String(i) + 'A').innerHTML = ''
                  document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                  document.getElementById(String(i) + 'C').innerHTML = ''
                  document.getElementById(String(i) + 'R').innerHTML = ''
                }
                var cardpart = 0
                starts = 1

                for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                  if (this.id == 'profs' + cardpart) nowcard = cardpart
                }
                document.getElementById('centerarea').innerHTML = checkarea
                document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                else document.getElementById('centerteam').innerHTML = 'X'
                if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                else document.getElementById('centerannounce').innerHTML = 'X'
                document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                var fir2 = 0, se2 = 0, th2 = 0
                fir2 = item.data().expenditureCount[0]
                se2 = item.data().expenditureCount[1]
                th2 = item.data().expenditureCount[2]
                var summ = fir2 + se2 + th2
                var fir = (fir2 / (summ)) * 244.29
                var se = (se2 / (summ)) * 244.29
                var th = (th2 / (summ)) * 244.29

                var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                var checktag = new Array()
                var ct = new Array()
                checktag[1] = item.data().tag1_count; ct[1] = 11
                checktag[2] = item.data().tag2_count; ct[2] = 22
                checktag[3] = item.data().tag3_count; ct[3] = 33
                checktag[4] = item.data().tag4_count; ct[4] = 44
                checktag[5] = item.data().tag5_count; ct[5] = 55
                checktag[6] = item.data().tag6_count; ct[6] = 66

                star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                for (var cq = 1; cq <= 6; cq++) {
                  for (var cw = 1; cw <= 6; cw++) {
                    if (checktag[cq] > checktag[cw]) {
                      var tmp = checktag[cq]
                      checktag[cq] = checktag[cw]
                      checktag[cw] = tmp
                      tmp = ct[cq]
                      ct[cq] = ct[cw]
                      ct[cw] = tmp
                    }
                  }
                }
                for (var dodo = 1; dodo <= 3; dodo++) {
                  if (checktag[dodo] >= 1) {
                    tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                  }
                }

                let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                let lencheck = reff.get()
                  .then(docq => {
                    dlength = docq.docs.length

                    document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                  })

                var ccnt = 0
                let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                  .then((subCollectionSnapshot) => {
                    subCollectionSnapshot.forEach((subDoc) => {
                      ccnt = ccnt + 1
                      teamr[ccnt] = subDoc.data().team_project
                      costr[ccnt] = subDoc.data().cost
                      asir[ccnt] = subDoc.data().assignment
                      creditr[ccnt] = subDoc.data().credit
                      contentr[ccnt] = subDoc.data().content
                      seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                      announcementr[ccnt] = subDoc.data().announcement
                      communicationr[ccnt] = subDoc.data().communication
                      expenditurer[ccnt] = subDoc.data().expenditure
                      tag1[ccnt] = subDoc.data().tag1
                      tag2[ccnt] = subDoc.data().tag2
                      tag3[ccnt] = subDoc.data().tag3
                      tag4[ccnt] = subDoc.data().tag4
                      tag5[ccnt] = subDoc.data().tag5
                      tag6[ccnt] = subDoc.data().tag6
                      document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                      document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                      document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                      document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                    })
                    lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                  })
                  .catch(err => {
                    //        alert(rtload)
                  })
                startnum[starts] = lastvi
              })
              var ptxt = document.createTextNode(profr[nowc][profpart])
              pnew_elem2.appendChild(ptxt)
              pnew_elem.appendChild(pnew_elem2)
              pelem.appendChild(pnew_elem)
              /// ///////////////////////////////////////////////////////////////////////////////////////////////
            }
          })

          var new_elem5 = document.createElement('span')
          new_elem5.setAttribute('class', 'button-text')
          new_elem5.appendChild(txt)

          var new_elem6 = document.createElement('span')
          new_elem6.setAttribute('class', 'button-text2')
          new_elem6.id = 'rate' + cnt
          var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
          new_elem6.appendChild(txt2)

          new_elem4.id = 'ele' + cnt
          new_elem.id = 'added' + cnt
          new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

          new_elem2.appendChild(new_elem3)
          new_elem2.appendChild(new_elem5)
          new_elem2.appendChild(new_elem6)
          new_elem4.appendChild(new_elem2)
          new_elem.appendChild(new_elem4)
          elem.appendChild(new_elem)
          choi = cnt
        }
      })
      lastvi = doc.docs[doc.docs.length - 1]
    })
    .catch(err => {
      alert(rtload)
    })
}
function orderlec()
{

  let lencheck = ref.where('area', '==', checkarea).orderBy('lecture').startAfter(startnum[starts]).get()
    .then(doc => {
      dlength = doc.docs.length
    })
    if (choi >= 1) {
          for (i = 1; i <= choi; i++) {
            var parent = document.getElementById('added' + String(i))
            elem.removeChild(parent)
          }
        }
          choi = 0

  cnt = 0
  let rtload = ref.where('area', '==', checkarea).orderBy('lecture').startAfter(startnum[starts]).get()
    .then(doc => {
      doc.forEach(item => {
        var cche = 0; var cflag = 0

        for (cche = 1; cche <= cnt; cche++) {
          if (profcheck[cche] == item.data().lecture) {
            cflag = 1
            var rat = document.getElementById('rate' + String(cche))
            var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
            countprofr[cche]++
            profr[cche][countprofr[cche]] = item.data().professor
            rat.innerHTML = '★   ' + totalave
          }
        }
        if (cflag == 0) {
          cnt = cnt + 1
          profcheck[cnt] = item.data().lecture
          countr[cnt] = item.data().count
          aver[cnt] = item.data().avg_rating
          profr[cnt] = new Array()
          profr[cnt][1] = item.data().professor
          countprofr[cnt] = 1
          var elem = document.getElementById('leftside')
          var new_elem = document.createElement('div')
          //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
          var txt = document.createTextNode(item.data().lecture)
          var new_elem2 = document.createElement('span')
          new_elem2.setAttribute('class', 'circle')
          new_elem2.setAttribute('aria-hidden', 'true')

          var new_elem3 = document.createElement('span')
          new_elem3.setAttribute('class', 'icon arrow')

          var new_elem4 = document.createElement('button')
          new_elem4.setAttribute('class', 'learn-more')

          new_elem4.addEventListener('click', function (event) {
            var i

            for (i = 1; i <= 4; i++) {
              document.getElementById(String(i) + 'A').innerHTML = ''
              document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
              document.getElementById(String(i) + 'C').innerHTML = ''
              document.getElementById(String(i) + 'R').innerHTML = ''
            } // Get Email and Password
            /// //////////////////////////////////////////////////////////////////////////////////////////////
            for (i = 1; i <= cnt; i++) {
              if (this.id == 'ele' + String(i)) nowc = i
            }

            for (i = 1; i <= removeprof; i++) {
              var parents = document.getElementById('profs' + String(i))
              pelem.removeChild(parents)
            }
            removeprof = countprofr[nowc]
            var profpart = 0
            for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
              var pnew_elem = document.createElement('div')
              var pnew_elem2 = document.createElement('span')
              pnew_elem.setAttribute('class', 'button2')
              pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
              pnew_elem.id = 'profs' + profpart
              pnew_elem.addEventListener('click', function (event) {
                var i
                for (i = 1; i <= 4; i++) {
                  document.getElementById(String(i) + 'A').innerHTML = ''
                  document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                  document.getElementById(String(i) + 'C').innerHTML = ''
                  document.getElementById(String(i) + 'R').innerHTML = ''
                }
                var cardpart = 0
                starts = 1

                for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                  if (this.id == 'profs' + cardpart) nowcard = cardpart
                }
                document.getElementById('centerarea').innerHTML = checkarea
                document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                else document.getElementById('centerteam').innerHTML = 'X'
                if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                else document.getElementById('centerannounce').innerHTML = 'X'
                document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                var fir2 = 0, se2 = 0, th2 = 0
                fir2 = item.data().expenditureCount[0]
                se2 = item.data().expenditureCount[1]
                th2 = item.data().expenditureCount[2]
                var summ = fir2 + se2 + th2
                var fir = (fir2 / (summ)) * 244.29
                var se = (se2 / (summ)) * 244.29
                var th = (th2 / (summ)) * 244.29

                var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                var checktag = new Array()
                var ct = new Array()
                checktag[1] = item.data().tag1_count; ct[1] = 11
                checktag[2] = item.data().tag2_count; ct[2] = 22
                checktag[3] = item.data().tag3_count; ct[3] = 33
                checktag[4] = item.data().tag4_count; ct[4] = 44
                checktag[5] = item.data().tag5_count; ct[5] = 55
                checktag[6] = item.data().tag6_count; ct[6] = 66

                star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                for (var cq = 1; cq <= 6; cq++) {
                  for (var cw = 1; cw <= 6; cw++) {
                    if (checktag[cq] > checktag[cw]) {
                      var tmp = checktag[cq]
                      checktag[cq] = checktag[cw]
                      checktag[cw] = tmp
                      tmp = ct[cq]
                      ct[cq] = ct[cw]
                      ct[cw] = tmp
                    }
                  }
                }
                for (var dodo = 1; dodo <= 3; dodo++) {
                  if (checktag[dodo] >= 1) {
                    tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                  }
                }

                let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                let lencheck = reff.get()
                  .then(docq => {
                    dlength = docq.docs.length

                    document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                  })

                var ccnt = 0
                let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                  .then((subCollectionSnapshot) => {
                    subCollectionSnapshot.forEach((subDoc) => {
                      ccnt = ccnt + 1
                      teamr[ccnt] = subDoc.data().team_project
                      costr[ccnt] = subDoc.data().cost
                      asir[ccnt] = subDoc.data().assignment
                      creditr[ccnt] = subDoc.data().credit
                      contentr[ccnt] = subDoc.data().content
                      seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                      announcementr[ccnt] = subDoc.data().announcement
                      communicationr[ccnt] = subDoc.data().communication
                      expenditurer[ccnt] = subDoc.data().expenditure
                      tag1[ccnt] = subDoc.data().tag1
                      tag2[ccnt] = subDoc.data().tag2
                      tag3[ccnt] = subDoc.data().tag3
                      tag4[ccnt] = subDoc.data().tag4
                      tag5[ccnt] = subDoc.data().tag5
                      tag6[ccnt] = subDoc.data().tag6
                      document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                      document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                      document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                      document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                    })
                    lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                  })
                  .catch(err => {
                    //        alert(rtload)
                  })
                startnum[starts] = lastvi
              })
              var ptxt = document.createTextNode(profr[nowc][profpart])
              pnew_elem2.appendChild(ptxt)
              pnew_elem.appendChild(pnew_elem2)
              pelem.appendChild(pnew_elem)
              /// ///////////////////////////////////////////////////////////////////////////////////////////////
            }
          })

          var new_elem5 = document.createElement('span')
          new_elem5.setAttribute('class', 'button-text')
          new_elem5.appendChild(txt)

          var new_elem6 = document.createElement('span')
          new_elem6.setAttribute('class', 'button-text2')
          new_elem6.id = 'rate' + cnt
          var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
          new_elem6.appendChild(txt2)

          new_elem4.id = 'ele' + cnt
          new_elem.id = 'added' + cnt
          new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

          new_elem2.appendChild(new_elem3)
          new_elem2.appendChild(new_elem5)
          new_elem2.appendChild(new_elem6)
          new_elem4.appendChild(new_elem2)
          new_elem.appendChild(new_elem4)
          elem.appendChild(new_elem)
          choi = cnt
        }
      })
      lastvi = doc.docs[doc.docs.length - 1]
    })
    .catch(err => {
      alert(rtload)
    })
}
function searchlec () {
  var searchname2 = document.getElementById('searchname1').value
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  searchname3 = searchname2.replace(/(\s*)/g, '').toUpperCase()
  searchname = searchname3.replace(reg, '')

  starts = 1
  startnum[starts] = 1
  starts = 1
  startnum[starts] = 1
  if (choi >= 1) {
    for (i = 1; i <= choi; i++) {
      var parent = document.getElementById('added' + i)
      elem.removeChild(parent)
    }
  }
  choi = 0
  cnt = 0
  for (var i2 = 0; i2 <= 221; i2++) {
    if (lectures[i2][1].indexOf(searchname) != -1) {
      db.collection('elective').doc(lectures[i2][1] + lectures[i2][3]).get().then((item) => {
        var cche = 0; var cflag = 0

        for (cche = 1; cche <= cnt; cche++) {
          if (profcheck[cche] == item.data().lecture) {
            cflag = 1
            var rat = document.getElementById('rate' + String(cche))
            var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
            countprofr[cche]++
            profr[cche][countprofr[cche]] = item.data().professor
            rat.innerHTML = '★   ' + totalave
          }
        }
        if (cflag == 0) {
          cnt = cnt + 1
          profcheck[cnt] = item.data().lecture
          countr[cnt] = item.data().count
          aver[cnt] = item.data().avg_rating
          profr[cnt] = new Array()
          profr[cnt][1] = item.data().professor
          countprofr[cnt] = 1
          var elem = document.getElementById('leftside')
          var new_elem = document.createElement('div')
          //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
          var txt = document.createTextNode(item.data().lecture)
          var new_elem2 = document.createElement('span')
          new_elem2.setAttribute('class', 'circle')
          new_elem2.setAttribute('aria-hidden', 'true')

          var new_elem3 = document.createElement('span')
          new_elem3.setAttribute('class', 'icon arrow')

          var new_elem4 = document.createElement('button')
          new_elem4.setAttribute('class', 'learn-more')

          new_elem4.addEventListener('click', function (event) {
            var i

            for (i = 1; i <= 4; i++) {
              document.getElementById(String(i) + 'A').innerHTML = ''
              document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
              document.getElementById(String(i) + 'C').innerHTML = ''
              document.getElementById(String(i) + 'R').innerHTML = ''
            } // Get Email and Password
            /// //////////////////////////////////////////////////////////////////////////////////////////////
            for (i = 1; i <= cnt; i++) {
              if (this.id == 'ele' + String(i)) nowc = i
            }

            for (i = 1; i <= removeprof; i++) {
              var parents = document.getElementById('profs' + String(i))
              pelem.removeChild(parents)
            }
            removeprof = countprofr[nowc]
            var profpart = 0
            for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
              var pnew_elem = document.createElement('div')
              var pnew_elem2 = document.createElement('span')
              pnew_elem.setAttribute('class', 'button2')
              pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
              pnew_elem.id = 'profs' + profpart
              pnew_elem.addEventListener('click', function (event) {
                var i
                for (i = 1; i <= 4; i++) {
                  document.getElementById(String(i) + 'A').innerHTML = ''
                  document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                  document.getElementById(String(i) + 'C').innerHTML = ''
                  document.getElementById(String(i) + 'R').innerHTML = ''
                }
                var cardpart = 0
                starts = 1

                for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                  if (this.id == 'profs' + cardpart) nowcard = cardpart
                }
                document.getElementById('centerarea').innerHTML = checkarea
                document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                else document.getElementById('centerteam').innerHTML = 'X'
                if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                else document.getElementById('centerannounce').innerHTML = 'X'
                document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                var fir2 = 0, se2 = 0, th2 = 0
                fir2 = item.data().expenditureCount[0]
                se2 = item.data().expenditureCount[1]
                th2 = item.data().expenditureCount[2]
                var summ = fir2 + se2 + th2
                var fir = (fir2 / (summ)) * 244.29
                var se = (se2 / (summ)) * 244.29
                var th = (th2 / (summ)) * 244.29

                var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                var checktag = new Array()
                var ct = new Array()
                checktag[1] = item.data().tag1_count; ct[1] = 11
                checktag[2] = item.data().tag2_count; ct[2] = 22
                checktag[3] = item.data().tag3_count; ct[3] = 33
                checktag[4] = item.data().tag4_count; ct[4] = 44
                checktag[5] = item.data().tag5_count; ct[5] = 55
                checktag[6] = item.data().tag6_count; ct[6] = 66

                star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                for (var cq = 1; cq <= 6; cq++) {
                  for (var cw = 1; cw <= 6; cw++) {
                    if (checktag[cq] > checktag[cw]) {
                      var tmp = checktag[cq]
                      checktag[cq] = checktag[cw]
                      checktag[cw] = tmp
                      tmp = ct[cq]
                      ct[cq] = ct[cw]
                      ct[cw] = tmp
                    }
                  }
                }
                for (var dodo = 1; dodo <= 3; dodo++) {
                  if (checktag[dodo] >= 1) {
                    tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                  }
                }

                let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                let lencheck = reff.get()
                  .then(docq => {
                    dlength = docq.docs.length
                    document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                  })


                var ccnt = 0
                let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                  .then((subCollectionSnapshot) => {
                    subCollectionSnapshot.forEach((subDoc) => {
                      ccnt = ccnt + 1
                      teamr[ccnt] = subDoc.data().team_project
                      costr[ccnt] = subDoc.data().cost
                      asir[ccnt] = subDoc.data().assignment
                      creditr[ccnt] = subDoc.data().credit
                      contentr[ccnt] = subDoc.data().content
                      seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                      announcementr[ccnt] = subDoc.data().announcement
                      communicationr[ccnt] = subDoc.data().communication
                      expenditurer[ccnt] = subDoc.data().expenditure
                      tag1[ccnt] = subDoc.data().tag1
                      tag2[ccnt] = subDoc.data().tag2
                      tag3[ccnt] = subDoc.data().tag3
                      tag4[ccnt] = subDoc.data().tag4
                      tag5[ccnt] = subDoc.data().tag5
                      tag6[ccnt] = subDoc.data().tag6
                      document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                      document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                      document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                      document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                    })
                    lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                  })
                  .catch(err => {
                    //        alert(rtload)
                  })
                startnum[starts] = lastvi
              })
              var ptxt = document.createTextNode(profr[nowc][profpart])
              pnew_elem2.appendChild(ptxt)
              pnew_elem.appendChild(pnew_elem2)
              pelem.appendChild(pnew_elem)
              /// ///////////////////////////////////////////////////////////////////////////////////////////////
            }
          })

          var new_elem5 = document.createElement('span')
          new_elem5.setAttribute('class', 'button-text')
          new_elem5.appendChild(txt)

          var new_elem6 = document.createElement('span')
          new_elem6.setAttribute('class', 'button-text2')
          new_elem6.id = 'rate' + cnt
          var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
          new_elem6.appendChild(txt2)

          new_elem4.id = 'ele' + cnt
          new_elem.id = 'added' + cnt
          new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

          new_elem2.appendChild(new_elem3)
          new_elem2.appendChild(new_elem5)
          new_elem2.appendChild(new_elem6)
          new_elem4.appendChild(new_elem2)
          new_elem.appendChild(new_elem4)
          elem.appendChild(new_elem)
          choi = cnt
        }
      })
        .catch(err => {

        })
    } else if (lectures[i2][3].indexOf(searchname) != -1) {
      db.collection('elective').doc(lectures[i2][1] + lectures[i2][3]).get().then((item) => {
        var cche = 0; var cflag = 0

        for (cche = 1; cche <= cnt; cche++) {
          if (profcheck[cche] == item.data().lecture) {
            cflag = 1
            var rat = document.getElementById('rate' + String(cche))
            var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
            countprofr[cche]++
            profr[cche][countprofr[cche]] = item.data().professor
            rat.innerHTML = '★   ' + totalave
          }
        }
        if (cflag == 0) {
          cnt = cnt + 1
          profcheck[cnt] = item.data().lecture
          countr[cnt] = item.data().count
          aver[cnt] = item.data().avg_rating
          profr[cnt] = new Array()
          profr[cnt][1] = item.data().professor
          countprofr[cnt] = 1
          var elem = document.getElementById('leftside')
          var new_elem = document.createElement('div')
          //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
          var txt = document.createTextNode(item.data().lecture)
          var new_elem2 = document.createElement('span')
          new_elem2.setAttribute('class', 'circle')
          new_elem2.setAttribute('aria-hidden', 'true')

          var new_elem3 = document.createElement('span')
          new_elem3.setAttribute('class', 'icon arrow')

          var new_elem4 = document.createElement('button')
          new_elem4.setAttribute('class', 'learn-more')

          new_elem4.addEventListener('click', function (event) {
            var i

            for (i = 1; i <= 4; i++) {
              document.getElementById(String(i) + 'A').innerHTML = ''
              document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
              document.getElementById(String(i) + 'C').innerHTML = ''
              document.getElementById(String(i) + 'R').innerHTML = ''
            } // Get Email and Password
            /// //////////////////////////////////////////////////////////////////////////////////////////////
            for (i = 1; i <= cnt; i++) {
              if (this.id == 'ele' + String(i)) nowc = i
            }

            for (i = 1; i <= removeprof; i++) {
              var parents = document.getElementById('profs' + String(i))
              pelem.removeChild(parents)
            }
            removeprof = countprofr[nowc]
            var profpart = 0
            for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
              var pnew_elem = document.createElement('div')
              var pnew_elem2 = document.createElement('span')
              pnew_elem.setAttribute('class', 'button2')
              pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
              pnew_elem.id = 'profs' + profpart
              pnew_elem.addEventListener('click', function (event) {
                var i
                for (i = 1; i <= 4; i++) {
                  document.getElementById(String(i) + 'A').innerHTML = ''
                  document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                  document.getElementById(String(i) + 'C').innerHTML = ''
                  document.getElementById(String(i) + 'R').innerHTML = ''
                }
                var cardpart = 0
                starts = 1

                for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                  if (this.id == 'profs' + cardpart) nowcard = cardpart
                }
                document.getElementById('centerarea').innerHTML = checkarea
                document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                else document.getElementById('centerteam').innerHTML = 'X'
                if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                else document.getElementById('centerannounce').innerHTML = 'X'
                document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                var fir2 = 0, se2 = 0, th2 = 0
                fir2 = item.data().expenditureCount[0]
                se2 = item.data().expenditureCount[1]
                th2 = item.data().expenditureCount[2]
                var summ = fir2 + se2 + th2
                var fir = (fir2 / (summ)) * 244.29
                var se = (se2 / (summ)) * 244.29
                var th = (th2 / (summ)) * 244.29

                var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                var checktag = new Array()
                var ct = new Array()
                checktag[1] = item.data().tag1_count; ct[1] = 11
                checktag[2] = item.data().tag2_count; ct[2] = 22
                checktag[3] = item.data().tag3_count; ct[3] = 33
                checktag[4] = item.data().tag4_count; ct[4] = 44
                checktag[5] = item.data().tag5_count; ct[5] = 55
                checktag[6] = item.data().tag6_count; ct[6] = 66

                star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                for (var cq = 1; cq <= 6; cq++) {
                  for (var cw = 1; cw <= 6; cw++) {
                    if (checktag[cq] > checktag[cw]) {
                      var tmp = checktag[cq]
                      checktag[cq] = checktag[cw]
                      checktag[cw] = tmp
                      tmp = ct[cq]
                      ct[cq] = ct[cw]
                      ct[cw] = tmp
                    }
                  }
                }
                for (var dodo = 1; dodo <= 3; dodo++) {
                  if (checktag[dodo] >= 1) {
                    tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                  }
                }

                let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                let lencheck = reff.get()
                  .then(docq => {
                    dlength = docq.docs.length

                    document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                  })

                var ccnt = 0
                let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                  .then((subCollectionSnapshot) => {
                    subCollectionSnapshot.forEach((subDoc) => {
                      ccnt = ccnt + 1
                      teamr[ccnt] = subDoc.data().team_project
                      costr[ccnt] = subDoc.data().cost
                      asir[ccnt] = subDoc.data().assignment
                      creditr[ccnt] = subDoc.data().credit
                      contentr[ccnt] = subDoc.data().content
                      seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                      announcementr[ccnt] = subDoc.data().announcement
                      communicationr[ccnt] = subDoc.data().communication
                      expenditurer[ccnt] = subDoc.data().expenditure
                      tag1[ccnt] = subDoc.data().tag1
                      tag2[ccnt] = subDoc.data().tag2
                      tag3[ccnt] = subDoc.data().tag3
                      tag4[ccnt] = subDoc.data().tag4
                      tag5[ccnt] = subDoc.data().tag5
                      tag6[ccnt] = subDoc.data().tag6
                      document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                      document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                      document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                      document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                    })
                    lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                  })
                  .catch(err => {
                    //        alert(rtload)
                  })
                startnum[starts] = lastvi
              })
              var ptxt = document.createTextNode(profr[nowc][profpart])
              pnew_elem2.appendChild(ptxt)
              pnew_elem.appendChild(pnew_elem2)
              pelem.appendChild(pnew_elem)
              /// ///////////////////////////////////////////////////////////////////////////////////////////////
            }
          })

          var new_elem5 = document.createElement('span')
          new_elem5.setAttribute('class', 'button-text')
          new_elem5.appendChild(txt)

          var new_elem6 = document.createElement('span')
          new_elem6.setAttribute('class', 'button-text2')
          new_elem6.id = 'rate' + cnt
          var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
          new_elem6.appendChild(txt2)

          new_elem4.id = 'ele' + cnt
          new_elem.id = 'added' + cnt
          new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

          new_elem2.appendChild(new_elem3)
          new_elem2.appendChild(new_elem5)
          new_elem2.appendChild(new_elem6)
          new_elem4.appendChild(new_elem2)
          new_elem.appendChild(new_elem4)
          elem.appendChild(new_elem)
          choi = cnt
        }
      })
        .catch(err => {

        })
    }
  }
}
let lencheck = ref.where('area', '==', checkarea).orderBy('lecture').startAfter(startnum[starts]).get()
  .then(doc => {
    dlength = doc.docs.length
  })


cnt = 0
let rtload = ref.where('area', '==', checkarea).orderBy('lecture').startAfter(startnum[starts]).get()
  .then(doc => {
    doc.forEach(item => {
      var cche = 0; var cflag = 0

      for (cche = 1; cche <= cnt; cche++) {
        if (profcheck[cche] == item.data().lecture) {
          cflag = 1
          var rat = document.getElementById('rate' + String(cche))
          var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
          countprofr[cche]++
          profr[cche][countprofr[cche]] = item.data().professor
          rat.innerHTML = '★   ' + totalave
        }
      }
      if (cflag == 0) {
        cnt = cnt + 1
        profcheck[cnt] = item.data().lecture
        countr[cnt] = item.data().count
        aver[cnt] = item.data().avg_rating
        profr[cnt] = new Array()
        profr[cnt][1] = item.data().professor
        countprofr[cnt] = 1
        var elem = document.getElementById('leftside')
        var new_elem = document.createElement('div')
        //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
        var txt = document.createTextNode(item.data().lecture)
        var new_elem2 = document.createElement('span')
        new_elem2.setAttribute('class', 'circle')
        new_elem2.setAttribute('aria-hidden', 'true')

        var new_elem3 = document.createElement('span')
        new_elem3.setAttribute('class', 'icon arrow')

        var new_elem4 = document.createElement('button')
        new_elem4.setAttribute('class', 'learn-more')

        new_elem4.addEventListener('click', function (event) {
          var i

          for (i = 1; i <= 4; i++) {
            document.getElementById(String(i) + 'A').innerHTML = ''
            document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
            document.getElementById(String(i) + 'C').innerHTML = ''
            document.getElementById(String(i) + 'R').innerHTML = ''
          } // Get Email and Password
          /// //////////////////////////////////////////////////////////////////////////////////////////////
          for (i = 1; i <= cnt; i++) {
            if (this.id == 'ele' + String(i)) nowc = i
          }

          for (i = 1; i <= removeprof; i++) {
            var parents = document.getElementById('profs' + String(i))
            pelem.removeChild(parents)
          }
          removeprof = countprofr[nowc]
          var profpart = 0
          for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
            var pnew_elem = document.createElement('div')
            var pnew_elem2 = document.createElement('span')
            pnew_elem.setAttribute('class', 'button2')
            pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
            pnew_elem.id = 'profs' + profpart
            pnew_elem.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              }
              var cardpart = 0
              starts = 1

              for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                if (this.id == 'profs' + cardpart) nowcard = cardpart
              }
              document.getElementById('centerarea').innerHTML = checkarea
              document.getElementById('centerlecture').innerHTML = profcheck[nowc]
              document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
              if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
              else document.getElementById('centerteam').innerHTML = 'X'
              if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
              else document.getElementById('centerannounce').innerHTML = 'X'
              document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
              if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
              if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
              var fir2 = 0, se2 = 0, th2 = 0
              fir2 = item.data().expenditureCount[0]
              se2 = item.data().expenditureCount[1]
              th2 = item.data().expenditureCount[2]
              var summ = fir2 + se2 + th2
              var fir = (fir2 / (summ)) * 244.29
              var se = (se2 / (summ)) * 244.29
              var th = (th2 / (summ)) * 244.29

              var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
              var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
              var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
              var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
              var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
              var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

              var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
              var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
              var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
              var checktag = new Array()
              var ct = new Array()
              checktag[1] = item.data().tag1_count; ct[1] = 11
              checktag[2] = item.data().tag2_count; ct[2] = 22
              checktag[3] = item.data().tag3_count; ct[3] = 33
              checktag[4] = item.data().tag4_count; ct[4] = 44
              checktag[5] = item.data().tag5_count; ct[5] = 55
              checktag[6] = item.data().tag6_count; ct[6] = 66

              star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
              star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
              star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
              star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
              star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
              star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
              star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
              star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
              star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
              star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

              if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
              if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
              for (var cq = 1; cq <= 6; cq++) {
                for (var cw = 1; cw <= 6; cw++) {
                  if (checktag[cq] > checktag[cw]) {
                    var tmp = checktag[cq]
                    checktag[cq] = checktag[cw]
                    checktag[cw] = tmp
                    tmp = ct[cq]
                    ct[cq] = ct[cw]
                    ct[cw] = tmp
                  }
                }
              }
              for (var dodo = 1; dodo <= 3; dodo++) {
                if (checktag[dodo] >= 1) {
                  tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                }
              }

              let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
              let lencheck = reff.get()
                .then(docq => {
                  dlength = docq.docs.length

                  document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                })

              var ccnt = 0
              let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                .then((subCollectionSnapshot) => {
                  subCollectionSnapshot.forEach((subDoc) => {
                    ccnt = ccnt + 1
                    teamr[ccnt] = subDoc.data().team_project
                    costr[ccnt] = subDoc.data().cost
                    asir[ccnt] = subDoc.data().assignment
                    creditr[ccnt] = subDoc.data().credit
                    contentr[ccnt] = subDoc.data().content
                    seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                    announcementr[ccnt] = subDoc.data().announcement
                    communicationr[ccnt] = subDoc.data().communication
                    expenditurer[ccnt] = subDoc.data().expenditure
                    tag1[ccnt] = subDoc.data().tag1
                    tag2[ccnt] = subDoc.data().tag2
                    tag3[ccnt] = subDoc.data().tag3
                    tag4[ccnt] = subDoc.data().tag4
                    tag5[ccnt] = subDoc.data().tag5
                    tag6[ccnt] = subDoc.data().tag6
                    document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                    document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                    document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                    document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                  })
                  lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                })
                .catch(err => {
                  //        alert(rtload)
                })
              startnum[starts] = lastvi
            })
            var ptxt = document.createTextNode(profr[nowc][profpart])
            pnew_elem2.appendChild(ptxt)
            pnew_elem.appendChild(pnew_elem2)
            pelem.appendChild(pnew_elem)
            /// ///////////////////////////////////////////////////////////////////////////////////////////////
          }
        })

        var new_elem5 = document.createElement('span')
        new_elem5.setAttribute('class', 'button-text')
        new_elem5.appendChild(txt)

        var new_elem6 = document.createElement('span')
        new_elem6.setAttribute('class', 'button-text2')
        new_elem6.id = 'rate' + cnt
        var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
        new_elem6.appendChild(txt2)

        new_elem4.id = 'ele' + cnt
        new_elem.id = 'added' + cnt
        new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

        new_elem2.appendChild(new_elem3)
        new_elem2.appendChild(new_elem5)
        new_elem2.appendChild(new_elem6)
        new_elem4.appendChild(new_elem2)
        new_elem.appendChild(new_elem4)
        elem.appendChild(new_elem)
        choi = cnt
      }
    })
    lastvi = doc.docs[doc.docs.length - 1]
  })
  .catch(err => {
    alert(rtload)
  })

jQuery(document).ready(function ($) {
  // open modal
  // REMOVE THIS - it's just to show error messages
  var j
  const btnCreatedata = document.getElementById('btncreatedata')
  const btnb = document.getElementById('bbutton')
  const btnf = document.getElementById('fbutton')
  const ccard1 = document.getElementById('card1')
  const ccard2 = document.getElementById('card2')
  const ccard3 = document.getElementById('card3')
  const ccard4 = document.getElementById('card4')
  const Fullsearch = document.getElementById('fullsearch')

  function reply_click (obj) {
    alert(a)
    document.getElementById('1A').innerHTML = obj
  }

  // 작성 폼
  //
  // btnCreatedata.addEventListener('click',e=>{
  // Get Email and Password
  // var date = new Date();
  // let setSf = ref.doc().set( { Name: '영', Booleans: true , Date: date , Star: 4.1 , Prof: '문유송'} );
  // Sign in
  // });
  document.getElementById('duddur1').addEventListener('click', e => {
    var i
    checkarea = '1영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + String(i))
        elem.removeChild(parent)
      }
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      } // Get Email and Password
      /// //////////////////////////////////////////////////////////////////////////////////////////////
    }
    choi = 0

    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })

    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length

                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur2').addEventListener('click', e => {
    var i
    checkarea = '2영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })

    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length

                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                  })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  // Sign in
  })
  document.getElementById('duddur3').addEventListener('click', e => {
    var i
    checkarea = '3영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length

                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                                        })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur4').addEventListener('click', e => {
    var i
    checkarea = '4영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0

    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)

                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur5').addEventListener('click', e => {
    var i
    checkarea = '5영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })

    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur6').addEventListener('click', e => {
    var i
    checkarea = '6영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur7').addEventListener('click', e => {
    var i
    checkarea = '7영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddur8').addEventListener('click', e => {
    var i
    checkarea = '8영역'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0

    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })

  // Sign in
  })
  document.getElementById('duddurglobal').addEventListener('click', e => {
    var i
    checkarea = '글컬'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })

                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })

  document.getElementById('duddurth').addEventListener('click', e => {
    var i
    checkarea = '소양'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })

    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)

                    })


                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddurdbd').addEventListener('click', e => {
    var i
    checkarea = '융합'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)

                    })


                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
  document.getElementById('duddurrhd').addEventListener('click', e => {
    var i
    checkarea = '공통'
    starts = 1
    startnum[starts] = 1
    if (choi >= 1) {
      for (i = 1; i <= choi; i++) {
        var parent = document.getElementById('added' + i)
        elem.removeChild(parent)
      }
    }
    choi = 0
    let lencheck = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        dlength = doc.docs.length
      })


    cnt = 0
    let rtload = ref.where('area', '==', checkarea).orderBy('date').startAfter(startnum[starts]).get()
      .then(doc => {
        doc.forEach(item => {
          var cche = 0; var cflag = 0

          for (cche = 1; cche <= cnt; cche++) {
            if (profcheck[cche] == item.data().lecture) {
              cflag = 1
              var rat = document.getElementById('rate' + String(cche))
              var totalave = (((aver[cche] * countr[cche]) + (item.data().avg_rating * item.data().count)) / (Number(item.data().count) + Number(countr[cche]))).toFixed(1)
              countprofr[cche]++
              profr[cche][countprofr[cche]] = item.data().professor
              rat.innerHTML = '★   ' + totalave
            }
          }
          if (cflag == 0) {
            cnt = cnt + 1
            profcheck[cnt] = item.data().lecture
            countr[cnt] = item.data().count
            aver[cnt] = item.data().avg_rating
            profr[cnt] = new Array()
            profr[cnt][1] = item.data().professor
            countprofr[cnt] = 1
            var elem = document.getElementById('leftside')
            var new_elem = document.createElement('div')
            //         var txt = document.createTextNode(item.data().lecture + "                                  ★" + item.data().avg_rating) ;
            var txt = document.createTextNode(item.data().lecture)
            var new_elem2 = document.createElement('span')
            new_elem2.setAttribute('class', 'circle')
            new_elem2.setAttribute('aria-hidden', 'true')

            var new_elem3 = document.createElement('span')
            new_elem3.setAttribute('class', 'icon arrow')

            var new_elem4 = document.createElement('button')
            new_elem4.setAttribute('class', 'learn-more')
            new_elem4.addEventListener('click', function (event) {
              var i
              for (i = 1; i <= 4; i++) {
                document.getElementById(String(i) + 'A').innerHTML = ''
                document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                document.getElementById(String(i) + 'C').innerHTML = ''
                document.getElementById(String(i) + 'R').innerHTML = ''
              } // Get Email and Password
              /// //////////////////////////////////////////////////////////////////////////////////////////////
              for (i = 1; i <= cnt; i++) {
                if (this.id == 'ele' + String(i)) nowc = i
              }

              for (i = 1; i <= removeprof; i++) {
                var parents = document.getElementById('profs' + String(i))
                pelem.removeChild(parents)
              }
              removeprof = countprofr[nowc]
              var profpart = 0
              for (profpart = 1; profpart <= countprofr[nowc]; profpart++) {
                var pnew_elem = document.createElement('div')
                var pnew_elem2 = document.createElement('span')
                pnew_elem.setAttribute('class', 'button2')
                pnew_elem.setAttribute('style', 'float: left; width: 1/6%; margin-left: 15px')
                pnew_elem.id = 'profs' + profpart
                pnew_elem.addEventListener('click', function (event) {
                  var i
                  for (i = 1; i <= 4; i++) {
                    document.getElementById(String(i) + 'A').innerHTML = ''
                    document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
                    document.getElementById(String(i) + 'C').innerHTML = ''
                    document.getElementById(String(i) + 'R').innerHTML = ''
                  }
                  var cardpart = 0
                  starts = 1
                  for (cardpart = 1; cardpart <= removeprof; cardpart++) {
                    if (this.id == 'profs' + cardpart) nowcard = cardpart
                  }
                  document.getElementById('centerarea').innerHTML = checkarea
                  document.getElementById('centerlecture').innerHTML = profcheck[nowc]
                  document.getElementById('centerprof').innerHTML = profr[nowc][nowcard]
                  if (item.data().team_project == true) document.getElementById('centerteam').innerHTML = 'O'
                  else document.getElementById('centerteam').innerHTML = 'X'
                  if (item.data().announcement == true) document.getElementById('centerannounce').innerHTML = 'O'
                  else document.getElementById('centerannounce').innerHTML = 'X'
                  document.getElementById('centercredit').innerHTML = item.data().credit + '학점'
                  if (item.data().avg_cost < 1.5) { document.getElementById('centercost').innerHTML = '                      0                  ' } else if (item.data().avg_cost < 2.5) { document.getElementById('centercost').innerHTML = '0~10000                  ' } else if (item.data().avg_cost < 3.5) { document.getElementById('centercost').innerHTML = '10000~50000                  ' } else if (item.data().avg_cost < 4.5) { document.getElementById('centercost').innerHTML = '50000~100000                  ' } else { document.getElementById('centercost').innerHTML = '100000 ' }
                  if (item.data().avg_assignment < 0.5) { document.getElementById('centerasi').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (item.data().avg_assignment < 1.5) { document.getElementById('centerasi').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (item.data().avg_assignment <= 2.5) { document.getElementById('centerasi').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('centerasi').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
                  var fir2 = 0, se2 = 0, th2 = 0
                  fir2 = item.data().expenditureCount[0]
                  se2 = item.data().expenditureCount[1]
                  th2 = item.data().expenditureCount[2]
                  var summ = fir2 + se2 + th2
                  var fir = (fir2 / (summ)) * 244.29
                  var se = (se2 / (summ)) * 244.29
                  var th = (th2 / (summ)) * 244.29

                  var tag111 = document.getElementById('ctag11'); tag111.setAttribute('class', 'clss-99')
                  var tag222 = document.getElementById('ctag22'); tag222.setAttribute('class', 'clss-99')
                  var tag333 = document.getElementById('ctag33'); tag333.setAttribute('class', 'clss-99')
                  var tag444 = document.getElementById('ctag44'); tag444.setAttribute('class', 'clss-99')
                  var tag555 = document.getElementById('ctag55'); tag555.setAttribute('class', 'clss-99')
                  var tag666 = document.getElementById('ctag66'); tag666.setAttribute('class', 'clss-99')

                  var fi1 = document.getElementById('fi22'); fi1.setAttribute('width', String(fir))
                  var se1 = document.getElementById('se22'); se1.setAttribute('x', String(37.86 + fir)); se1.setAttribute('width', String(se))
                  var th1 = document.getElementById('th22'); th1.setAttribute('x', String(37.86 + fir + se)); th1.setAttribute('width', String(th))
                  var checktag = new Array()
                  var ct = new Array()
                  checktag[1] = item.data().tag1_count; ct[1] = 11
                  checktag[2] = item.data().tag2_count; ct[2] = 22
                  checktag[3] = item.data().tag3_count; ct[3] = 33
                  checktag[4] = item.data().tag4_count; ct[4] = 44
                  checktag[5] = item.data().tag5_count; ct[5] = 55
                  checktag[6] = item.data().tag6_count; ct[6] = 66

                  star11 = document.getElementById('0.5star'); star11.setAttribute('class', 'clss-6')
                  star22 = document.getElementById('1star'); star22.setAttribute('class', 'clss-21')
                  star33 = document.getElementById('1.5star'); star33.setAttribute('class', 'clss-21')
                  star44 = document.getElementById('2star'); star44.setAttribute('class', 'clss-21')
                  star55 = document.getElementById('2.5star'); star55.setAttribute('class', 'clss-21')
                  star66 = document.getElementById('3star'); star66.setAttribute('class', 'clss-21')
                  star77 = document.getElementById('3.5star'); star77.setAttribute('class', 'clss-21')
                  star88 = document.getElementById('4star'); star88.setAttribute('class', 'clss-21')
                  star99 = document.getElementById('4.5star'); star99.setAttribute('class', 'clss-21')
                  star999 = document.getElementById('5star'); star999.setAttribute('class', 'clss-21')

                  if (item.data().avg_rating >= 0.5) star22.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1) star33.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 1.5) star44.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2) star55.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 2.5) star66.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3) star77.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 3.5) star88.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4) star99.setAttribute('class', 'clss-6')
                  if (item.data().avg_rating >= 4.5) star999.setAttribute('class', 'clss-6')
                  for (var cq = 1; cq <= 6; cq++) {
                    for (var cw = 1; cw <= 6; cw++) {
                      if (checktag[cq] > checktag[cw]) {
                        var tmp = checktag[cq]
                        checktag[cq] = checktag[cw]
                        checktag[cw] = tmp
                        tmp = ct[cq]
                        ct[cq] = ct[cw]
                        ct[cw] = tmp
                      }
                    }
                  }
                  for (var dodo = 1; dodo <= 3; dodo++) {
                    if (checktag[dodo] >= 1) {
                      tag111 = document.getElementById('ctag' + String(ct[dodo])); tag111.setAttribute('class', 'clss-15')
                    }
                  }
                  let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information')
                  let lencheck = reff.get()
                    .then(docq => {
                      dlength = docq.docs.length
                      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
                    })


                  var ccnt = 0
                  let rtload2 = reff.where('lecture', '==', item.data().lecture).orderBy('date', 'desc').limit(4).get()
                    .then((subCollectionSnapshot) => {
                      subCollectionSnapshot.forEach((subDoc) => {
                        ccnt = ccnt + 1
                        teamr[ccnt] = subDoc.data().team_project
                        costr[ccnt] = subDoc.data().cost
                        asir[ccnt] = subDoc.data().assignment
                        creditr[ccnt] = subDoc.data().credit
                        contentr[ccnt] = subDoc.data().content
                        seyearr[ccnt] = subDoc.data().year + '년 ' + subDoc.data().semester
                        announcementr[ccnt] = subDoc.data().announcement
                        communicationr[ccnt] = subDoc.data().communication
                        expenditurer[ccnt] = subDoc.data().expenditure
                        tag1[ccnt] = subDoc.data().tag1
                        tag2[ccnt] = subDoc.data().tag2
                        tag3[ccnt] = subDoc.data().tag3
                        tag4[ccnt] = subDoc.data().tag4
                        tag5[ccnt] = subDoc.data().tag5
                        tag6[ccnt] = subDoc.data().tag6
                        document.getElementById(String(ccnt) + 'A').innerHTML = subDoc.data().lecture
                        document.getElementById(String(ccnt) + 'B').style = '--rating: ' + subDoc.data().rating + ';'
                        document.getElementById(String(ccnt) + 'C').innerHTML = subDoc.data().professor
                        document.getElementById(String(ccnt) + 'R').innerHTML = subDoc.data().rating
                      })
                      lastvi = subCollectionSnapshot.docs[subCollectionSnapshot.docs.length - 1]
                    })
                    .catch(err => {
                      //        alert(rtload)
                    })
                  startnum[starts] = lastvi
                })
                var ptxt = document.createTextNode(profr[nowc][profpart])
                pnew_elem2.appendChild(ptxt)
                pnew_elem.appendChild(pnew_elem2)
                pelem.appendChild(pnew_elem)
                /// ///////////////////////////////////////////////////////////////////////////////////////////////
              }
            })

            var new_elem5 = document.createElement('span')
            new_elem5.setAttribute('class', 'button-text')
            new_elem5.appendChild(txt)

            var new_elem6 = document.createElement('span')
            new_elem6.setAttribute('class', 'button-text2')
            new_elem6.id = 'rate' + cnt
            var txt2 = document.createTextNode('★' + item.data().avg_rating.toFixed(1))
            new_elem6.appendChild(txt2)

            new_elem4.id = 'ele' + cnt
            new_elem.id = 'added' + cnt
            new_elem.className = 'bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300 font-medium text-sm text-gray-500'

            new_elem2.appendChild(new_elem3)
            new_elem2.appendChild(new_elem5)
            new_elem2.appendChild(new_elem6)
            new_elem4.appendChild(new_elem2)
            new_elem.appendChild(new_elem4)
            elem.appendChild(new_elem)
            choi = cnt
          }
        })
        lastvi = doc.docs[doc.docs.length - 1]
      })
      .catch(err => {
        alert(rtload)
      })
  })
})

$(function () {
  $('#bbutton').click(function () {
    if (starts == 2) {
      var i
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      }
      starts = 1
      document.getElementById('pgnum').innerHTML =starts+ '/' + Math.ceil(dlength /4)
      var ccnt = 0
      let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information').orderBy('date', 'desc').limit(4)
      let rtload2 = reff.get()
        .then(doc => {
          doc.forEach(item => {
            ccnt = ccnt + 1
            teamr[ccnt] = item.data().team_project
            costr[ccnt] = item.data().cost
            asir[ccnt] = item.data().assignment
            creditr[ccnt] = item.data().credit
            document.getElementById(String(ccnt) + 'A').innerHTML = item.data().lecture
            document.getElementById(String(ccnt) + 'B').style = '--rating: ' + item.data().rating + ';'
            document.getElementById(String(ccnt) + 'C').innerHTML = item.data().professor
            document.getElementById(String(ccnt) + 'R').innerHTML = item.data().rating
          })
          lastvi = doc.docs[doc.docs.length - 1]
        })
        .catch(err => {
          //        alert(rtload)
        })
    } else if (starts >= 3) {
      var i
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      }
      starts = starts - 1
      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)

      var cnt = 0
      let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information').orderBy('date', 'desc').startAfter(startnum[starts]).limit(4)
      let rtload2 = reff.get()
        .then(doc => {
          doc.forEach(item => {
            ccnt = ccnt + 1
            teamr[ccnt] = item.data().team_project
            costr[ccnt] = item.data().cost
            asir[ccnt] = item.data().assignment
            creditr[ccnt] = item.data().credit
            document.getElementById(String(ccnt) + 'A').innerHTML = item.data().lecture
            document.getElementById(String(ccnt) + 'B').style = '--rating: ' + item.data().rating + ';'
            document.getElementById(String(ccnt) + 'C').innerHTML = item.data().professor
            document.getElementById(String(ccnt) + 'R').innerHTML = item.data().rating
          })
          lastvi = doc.docs[doc.docs.length - 1]
        })
        .catch(err => {
          //        alert(rtload)
        })
    }
  })
  $('#fbutton').click(function () {
    if (starts * 4 < dlength) {

      var i
      starts = starts + 1
      document.getElementById('pgnum').innerHTML =starts+ '/' +  Math.ceil(dlength /4)
      for (i = 1; i <= 4; i++) {
        document.getElementById(String(i) + 'A').innerHTML = ''
        document.getElementById(String(i) + 'B').style = '--rating: ' + '0' + ';'
        document.getElementById(String(i) + 'C').innerHTML = ''
        document.getElementById(String(i) + 'R').innerHTML = ''
      }
      var ccnt = 0
      let reff = db.collection('elective').doc(profcheck[nowc] + profr[nowc][nowcard]).collection('information').orderBy('date', 'desc').startAfter(lastvi).limit(4)
      let rtload2 = reff.get()
        .then(doc => {
          doc.forEach(item => {
            ccnt = ccnt + 1
            teamr[ccnt] = item.data().team_project
            costr[ccnt] = item.data().cost
            asir[ccnt] = item.data().assignment
            creditr[ccnt] = item.data().credit
            document.getElementById(String(ccnt) + 'A').innerHTML = item.data().lecture
            document.getElementById(String(ccnt) + 'B').style = '--rating: ' + item.data().rating + ';'
            document.getElementById(String(ccnt) + 'C').innerHTML = item.data().professor
            document.getElementById(String(ccnt) + 'R').innerHTML = item.data().rating
          })
          lastvi = doc.docs[doc.docs.length - 1]
        })
        .catch(err => {
          //        alert(rtload)
        })
      startnum[starts] = lastvi
    }
  })
  // contact form animations
  $('#card1').click(function () {
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck == 0) {
      document.getElementById('poplecture').innerHTML = document.getElementById('1A').innerHTML + ' :: ' + profr[nowc][nowcard]
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('1R').innerHTML + ';'
      if (teamr[1] == 1) { document.getElementById('popteam').innerHTML = 'O' } else { document.getElementById('popteam').innerHTML = 'X' }
      //      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML = checkarea
      if (announcementr[1] == 1) { document.getElementById('announce').innerHTML = 'O' } else { document.getElementById('announce').innerHTML = 'X' }
      if (communicationr[1] == 0) { document.getElementById('commun').innerHTML = '빠름' } else if (communicationr[1] == 1) { document.getElementById('commun').innerHTML = '보통' } else { document.getElementById('commun').innerHTML = '느림' }
      clickcheck = 1
     
      document.getElementById('creditrr').innerHTML = creditr[1]
      document.getElementById('seye').innerHTML = seyearr[1]
      document.getElementById('contentc').innerHTML = contentr[1]
      if (costr[1] == 1) { document.getElementById('moneyc').innerHTML = '                      0                  원' } else if (costr[1] == 2) { document.getElementById('moneyc').innerHTML = '0~10000                  원' } else if (costr[1] == 3) { document.getElementById('moneyc').innerHTML = '10000~50000                  원' } else if (costr[1] == 4) { document.getElementById('moneyc').innerHTML = '50000~100000                  원' } else { document.getElementById('moneyc').innerHTML = '100000 원 이상' }
      if (asir[1] == 0) { document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (asir[1] == 1) { document.getElementById('asic').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (asir[1] == 2) { document.getElementById('asic').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('asic').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
      var fir2 = 0, se2 = 0, th2 = 0
      if (expenditurer[1][0] == 1) fir2 = 1
      if (expenditurer[1][1] == 1)se2 = 1
      if (expenditurer[1][2] == 1) th2 = 1
      var summ = fir2 + se2 + th2
      var fir = (fir2 / (summ)) * 292.91
      var se = (se2 / (summ)) * 292.91
      var th = (th2 / (summ)) * 292.91

      var tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-2')
      var tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-2')
      var tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-2')
      var tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-2')
      var tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-2')
      var tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-2')

      var fi1 = document.getElementById('fi'); fi1.setAttribute('width', String(fir))
      var se1 = document.getElementById('se'); se1.setAttribute('x', String(412.23 + fir)); se1.setAttribute('width', String(se))
      var th1 = document.getElementById('th'); th1.setAttribute('x', String(412.23 + fir + se)); th1.setAttribute('width', String(th))
      if (tag1[1] == 1) { tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-9') }
      if (tag2[1] == 1) { tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-9') }
      if (tag3[1] == 1) { tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-9') }
      if (tag4[1] == 1) { tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-9') }
      if (tag5[1] == 1) { tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-9') }
      if (tag6[1] == 1) { tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-9') }
      document.body.classList.add('active')
    }
  })
  $('#close1').click(function () {
    if (clickcheck == 1)
    {
      document.body.classList.remove('active')
      clickcheck = 0
    }
  })
  $('#card2').click(function () {
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck == 0) {
      document.getElementById('poplecture').innerHTML = document.getElementById('2A').innerHTML + ' :: ' + profr[nowc][nowcard]
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('2R').innerHTML + ';'
      if (teamr[2] == 1) { document.getElementById('popteam').innerHTML = 'O' } else { document.getElementById('popteam').innerHTML = 'X' }
      //      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML = checkarea
      if (announcementr[2] == 1) { document.getElementById('announce').innerHTML = 'O' } else { document.getElementById('announce').innerHTML = 'X' }
      if (communicationr[2] == 0) { document.getElementById('commun').innerHTML = '빠름' } else if (communicationr[2] == 1) { document.getElementById('commun').innerHTML = '보통' } else { document.getElementById('commun').innerHTML = '느림' }
      clickcheck = 1
      document.getElementById('creditrr').innerHTML = creditr[2]
      document.getElementById('seye').innerHTML = seyearr[2]
      document.getElementById('contentc').innerHTML = contentr[2]
      if (costr[2] == 1) { document.getElementById('moneyc').innerHTML = '                      0                  원' } else if (costr[2] == 2) { document.getElementById('moneyc').innerHTML = '0~10000                  원' } else if (costr[2] == 3) { document.getElementById('moneyc').innerHTML = '10000~50000                  원' } else if (costr[2] == 4) { document.getElementById('moneyc').innerHTML = '50000~100000                  원' } else { document.getElementById('moneyc').innerHTML = '100000 원 이상' }
      if (asir[2] == 0) { document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (asir[2] == 1) { document.getElementById('asic').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (asir[2] == 2) { document.getElementById('asic').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('asic').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
      var fir2 = 0, se2 = 0, th2 = 0
      if (expenditurer[2][0] == 1) fir2 = 1
      if (expenditurer[2][1] == 1)se2 = 1
      if (expenditurer[2][2] == 1) th2 = 1
      var summ = fir2 + se2 + th2
      var fir = (fir2 / (summ)) * 292.91
      var se = (se2 / (summ)) * 292.91
      var th = (th2 / (summ)) * 292.91

      var tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-2')
      var tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-2')
      var tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-2')
      var tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-2')
      var tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-2')
      var tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-2')

      var fi1 = document.getElementById('fi'); fi1.setAttribute('width', String(fir))
      var se1 = document.getElementById('se'); se1.setAttribute('x', String(412.23 + fir)); se1.setAttribute('width', String(se))
      var th1 = document.getElementById('th'); th1.setAttribute('x', String(412.23 + fir + se)); th1.setAttribute('width', String(th))
      if (tag1[2] == 1) { tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-9') }
      if (tag2[2] == 1) { tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-9') }
      if (tag3[2] == 1) { tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-9') }
      if (tag4[2] == 1) { tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-9') }
      if (tag5[2] == 1) { tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-9') }
      if (tag6[2] == 1) { tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-9') }
      document.body.classList.add('active')
    }
  })

  $('#card3').click(function () {
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck == 0) {
      document.getElementById('poplecture').innerHTML = document.getElementById('3A').innerHTML + ' :: ' + profr[nowc][nowcard]
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('3R').innerHTML + ';'
      if (teamr[3] == 1) { document.getElementById('popteam').innerHTML = 'O' } else { document.getElementById('popteam').innerHTML = 'X' }
      //      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML = checkarea
      if (announcementr[3] == 1) { document.getElementById('announce').innerHTML = 'O' } else { document.getElementById('announce').innerHTML = 'X' }
      if (communicationr[3] == 0) { document.getElementById('commun').innerHTML = '빠름' } else if (communicationr[3] == 1) { document.getElementById('commun').innerHTML = '보통' } else { document.getElementById('commun').innerHTML = '느림' }
      clickcheck = 1
      document.getElementById('creditrr').innerHTML = creditr[3]
      document.getElementById('seye').innerHTML = seyearr[3]
      document.getElementById('contentc').innerHTML = contentr[3]
      if (costr[3] == 1) { document.getElementById('moneyc').innerHTML = '                      0                  원' } else if (costr[3] == 2) { document.getElementById('moneyc').innerHTML = '0~10000                  원' } else if (costr[3] == 3) { document.getElementById('moneyc').innerHTML = '10000~50000                  원' } else if (costr[3] == 4) { document.getElementById('moneyc').innerHTML = '50000~100000                  원' } else { document.getElementById('moneyc').innerHTML = '100000 원 이상' }
      if (asir[3] == 0) { document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (asir[3] == 1) { document.getElementById('asic').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (asir[3] == 2) { document.getElementById('asic').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('asic').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
      var fir2 = 0, se2 = 0, th2 = 0
      if (expenditurer[3][0] == 1) fir2 = 1
      if (expenditurer[3][1] == 1)se2 = 1
      if (expenditurer[3][2] == 1) th2 = 1
      var summ = fir2 + se2 + th2
      var fir = (fir2 / (summ)) * 292.91
      var se = (se2 / (summ)) * 292.91
      var th = (th2 / (summ)) * 292.91

      var tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-2')
      var tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-2')
      var tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-2')
      var tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-2')
      var tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-2')
      var tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-2')

      var fi1 = document.getElementById('fi'); fi1.setAttribute('width', String(fir))
      var se1 = document.getElementById('se'); se1.setAttribute('x', String(412.23 + fir)); se1.setAttribute('width', String(se))
      var th1 = document.getElementById('th'); th1.setAttribute('x', String(412.23 + fir + se)); th1.setAttribute('width', String(th))
      if (tag1[3] == 1) { tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-9') }
      if (tag2[3] == 1) { tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-9') }
      if (tag3[3] == 1) { tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-9') }
      if (tag4[3] == 1) { tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-9') }
      if (tag5[3] == 1) { tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-9') }
      if (tag6[3] == 1) { tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-9') }
      document.body.classList.add('active')
    }
  })

  $('#card4').click(function () {
    if (document.getElementById('1A').innerHTML != '과목명' && document.getElementById('1A').innerHTML != '' && clickcheck == 0) {
      document.getElementById('poplecture').innerHTML = document.getElementById('4A').innerHTML + ' :: ' + profr[nowc][nowcard]
      document.getElementById('popavg').style = '--rating: ' + document.getElementById('4R').innerHTML + ';'
      if (teamr[4] == 1) { document.getElementById('popteam').innerHTML = 'O' } else { document.getElementById('popteam').innerHTML = 'X' }
      //      document.getElementById('popcredit').innerHTML = creditr[1] + '학점'
      document.getElementById('area1').innerHTML = checkarea
      if (announcementr[4] == 1) { document.getElementById('announce').innerHTML = 'O' } else { document.getElementById('announce').innerHTML = 'X' }
      if (communicationr[4] == 0) { document.getElementById('commun').innerHTML = '빠름' } else if (communicationr[4] == 1) { document.getElementById('commun').innerHTML = '보통' } else { document.getElementById('commun').innerHTML = '느림' }
      clickcheck = 1
      document.getElementById('creditrr').innerHTML = creditr[4]
      document.getElementById('seye').innerHTML = seyearr[4]
      document.getElementById('contentc').innerHTML = contentr[4]
      if (costr[4] == 1) { document.getElementById('moneyc').innerHTML = '                      0                  원' } else if (costr[4] == 2) { document.getElementById('moneyc').innerHTML = '0~10000                  원' } else if (costr[4] == 3) { document.getElementById('moneyc').innerHTML = '10000~50000                  원' } else if (costr[4] == 4) { document.getElementById('moneyc').innerHTML = '50000~100000                  원' } else { document.getElementById('moneyc').innerHTML = '100000 원 이상' }
      if (asir[4] == 0) { document.getElementById('asic').innerHTML = '&nbsp;&nbsp;&nbsp;없음'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else if (asir[4] == 1) { document.getElementById('asic').innerHTML = '학기 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '120') } else if (asir[4] == 2) { document.getElementById('asic').innerHTML = '월 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') } else { document.getElementById('asic').innerHTML = '주 1~2회'; hakwi = document.getElementById('hakwid'); hakwi.setAttribute('width', '101.74') }
      var fir2 = 0, se2 = 0, th2 = 0
      if (expenditurer[4][0] == 1) fir2 = 1
      if (expenditurer[4][1] == 1)se2 = 1
      if (expenditurer[4][2] == 1) th2 = 1
      var summ = fir2 + se2 + th2
      var fir = (fir2 / (summ)) * 292.91
      var se = (se2 / (summ)) * 292.91
      var th = (th2 / (summ)) * 292.91

      var tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-2')
      var tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-2')
      var tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-2')
      var tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-2')
      var tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-2')
      var tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-2')

      var fi1 = document.getElementById('fi'); fi1.setAttribute('width', String(fir))
      var se1 = document.getElementById('se'); se1.setAttribute('x', String(412.23 + fir)); se1.setAttribute('width', String(se))
      var th1 = document.getElementById('th'); th1.setAttribute('x', String(412.23 + fir + se)); th1.setAttribute('width', String(th))
      if (tag1[4] == 1) { tag111 = document.getElementById('tag11'); tag111.setAttribute('class', 'cls-9') }
      if (tag2[4] == 1) { tag222 = document.getElementById('tag22'); tag222.setAttribute('class', 'cls-9') }
      if (tag3[4] == 1) { tag333 = document.getElementById('tag33'); tag333.setAttribute('class', 'cls-9') }
      if (tag4[4] == 1) { tag444 = document.getElementById('tag44'); tag444.setAttribute('class', 'cls-9') }
      if (tag5[4] == 1) { tag555 = document.getElementById('tag55'); tag555.setAttribute('class', 'cls-9') }
      if (tag6[4] == 1) { tag666 = document.getElementById('tag66'); tag666.setAttribute('class', 'cls-9') }
      document.body.classList.add('active')
    }
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
      clickcheck = 0
    }
  })

// $(".progress .precent").text(percentshow + " 아주 많음");
})
