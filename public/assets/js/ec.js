
var check = new TimelineMax({ paused: true })
var uncheck = new TimelineMax({ paused: true })
var check2 = new TimelineMax({ paused: true })

var uncheck2 = new TimelineMax({ paused: true })
const curve = {
  x: 0,
  y: 50,
  cpx: 250,
  cpy: 0,
  endx: 450,
  endy: 50 }

let percent = 0.7

let curveEl = document.getElementById('curve')
let thumbEl = document.getElementById('thumb')

// get the XY at the specified percentage along the curve
const getQuadraticBezierXYatPercent = (curve, percent) => {
  let x =
  Math.pow(1 - percent, 2) * curve.x +
  2 * (1 - percent) * percent * curve.cpx +
  Math.pow(percent, 2) * curve.endx
  let y =
  Math.pow(1 - percent, 2) * curve.y +
  2 * (1 - percent) * percent * curve.cpy +
  Math.pow(percent, 2) * curve.endy

  return { x, y }
}

const drawCurve = () => {
  curveEl.setAttribute(
    'd',
    `M${curve.x},${curve.y} Q${curve.cpx},${curve.cpy} ${curve.endx},${curve.endy}`)
}

const drawThumb = percent => {
  let pos = getQuadraticBezierXYatPercent(curve, percent)
  document.getElementById('value').textContent = percent * 100
  if (document.getElementById('value').textContent <= 1) {
    document.getElementById('cost').textContent = 'No money'
    document.getElementById('moneymoney').textContent = 1
  } else if (document.getElementById('value').textContent <= 25) {
    document.getElementById('cost').textContent = '0~10000원'
    document.getElementById('moneymoney').textContent = 2
  } else if (document.getElementById('value').textContent <= 50) {
    document.getElementById('cost').textContent = '10000~50000원'
    document.getElementById('moneymoney').textContent = 3
  } else if (document.getElementById('value').textContent <= 75) {
    document.getElementById('cost').textContent = '50000~100000원'
    document.getElementById('moneymoney').textContent = 4
  } else if (document.getElementById('value').textContent <= 99) {
    document.getElementById('cost').textContent = '100000원 이상'
    document.getElementById('moneymoney').textContent = 5
  }
  thumbEl.setAttribute('cx', pos.x)
  thumbEl.setAttribute('cy', pos.y)
}

const moveThumb = e => {
  console.log(e.target.value)
  percent = e.target.value / 100
  drawThumb(percent)
}

// event on the range input
let rangeEl = document.getElementById('range')
rangeEl.value = percent * 100
rangeEl.addEventListener('input', moveThumb)

// init
drawCurve()
drawThumb(percent)
const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]
check
  .set('.ring', { opacity: 1 })
  .set('.drops', { opacity: 0 })
  .set('.ring0', { opacity: 0 })
  .set('.drop', {
    opacity: 0,
    y: -32,
    scale: 0.4,
    x: 0,
    transformOrigin: '50%, 0%'
  })
  .set('.ring', { transformOrigin: '50%, 50%' })
  .set('.dropTop', { opacity: 1, scale: 0.2, transformOrigin: '50%, 0%' })
  .add('sync')
  .to('.ring', 0.17, { scaleY: 0.95 }, 'sync')
  .to('.dropTop', 0.1, { scale: 1, y: 0.5, ease: Power0.easeNone }, 'sync')
  .to('.dropTop', 0.1, { scale: 0.3, ease: Power0.easeNone }, 'sync +=.08')
  .to(
    '.dropTop',
    0.08,
    { transformOrigin: '50%, 40%', scale: 0, ease: Power0.easeNone },
    'sync +=.181'
  )
  .set('.drop', { opacity: 1, ease: Power0.easeNone }, 'sync')
  .to('.drop', 0.17, { y: 0, ease: Power1.easeIn }, 'sync')
  .to('.drop', 0.08, { scale: 0.9, ease: Power0.easeNone }, 'sync +=.02')
  .to(
    '.ring',
    2,
    {
      transformOrigin: '50%, 50%',
      scaleY: 1,
      ease: Elastic.easeOut.config(0.8, 0.1)
    },
    'sync +=.14'
  )
  .to(
    '.drop',
    1.8,
    {
      transformOrigin: '50%, 10%',
      scale: 1,
      ease: Elastic.easeOut.config(0.8, 0.14)
    },
    'sync +=.14'
  )

uncheck
  .set('.ring0', { opacity: 1 })
  .set('.drop', { opacity: 0 })
  .set('.ring', { opacity: 0 })
  .set('.drops', { opacity: 1 })
  .set('.drop0', { rotation: '40deg', transformOrigin: '50%, 50%' })
  .set('.drop1', { rotation: '112deg', transformOrigin: '50%, 50%' })
  .set('.drop2', { rotation: '175deg', transformOrigin: '50%, 50%' })
  .set('.drop3', { rotation: '-110deg', transformOrigin: '50%, 50%' })
  .set('.drop4', { rotation: '-35deg', transformOrigin: '50%, 50%' })
  .add('uncheck')
  .to('.drops', 0.2, { transformOrigin: '50%, 50%', scaleX: 0.5, scaleY: 0.3 })
  .staggerTo(
    '.drops',
    0.2,
    {
      cycle: {
        x: [45, 59, 14, -62, -35],
        y: [-46, 29, 62, 15, -55]
      }
    },
    '0.0184',
    'uncheck+=.1'
  )
  .to(
    '.ring0',
    0.2,
    { transformOrigin: '50%, 50%', scale: 1.05 },
    'uncheck+=.1'
  )
  .add('last')
  .to(
    '.ring0',
    2,
    {
      transformOrigin: '50%, 50%',
      scale: 1,
      ease: Elastic.easeOut.config(0.8, 0.1)
    },
    'last'
  )
  .to('.drops', 0.2, { scaleY: 0.1, scaleX: 0.3 }, 'last+=0')

check.timeScale(1.27)
uncheck.timeScale(1.14)

check2
  .set('.ring2', { opacity: 1 })
  .set('.drops2', { opacity: 0 })
  .set('.ring02', { opacity: 0 })
  .set('.drop222', {
    opacity: 0,
    y: -32,
    scale: 0.4,
    x: 0,
    transformOrigin: '50%, 0%'
  })
  .set('.ring2', { transformOrigin: '50%, 50%' })
  .set('.dropTop2', { opacity: 1, scale: 0.2, transformOrigin: '50%, 0%' })
  .add('sync2')
  .to('.ring2', 0.17, { scaleY: 0.95 }, 'sync2')
  .to('.dropTop2', 0.1, { scale: 1, y: 0.5, ease: Power0.easeNone }, 'sync2')
  .to('.dropTop2', 0.1, { scale: 0.3, ease: Power0.easeNone }, 'sync2 +=.08')
  .to(
    '.dropTop2',
    0.08,
    { transformOrigin: '50%, 40%', scale: 0, ease: Power0.easeNone },
    'sync2 +=.181'
  )
  .set('.drop222', { opacity: 1, ease: Power0.easeNone }, 'sync2')
  .to('.drop222', 0.17, { y: 0, ease: Power1.easeIn }, 'sync2')
  .to('.drop222', 0.08, { scale: 0.9, ease: Power0.easeNone }, 'sync2 +=.02')
  .to(
    '.ring2',
    2,
    {
      transformOrigin: '50%, 50%',
      scaleY: 1,
      ease: Elastic.easeOut.config(0.8, 0.1)
    },
    'sync2 +=.14'
  )
  .to(
    '.drop222',
    1.8,
    {
      transformOrigin: '50%, 10%',
      scale: 1,
      ease: Elastic.easeOut.config(0.8, 0.14)
    },
    'sync2 +=.14'
  )

uncheck2
  .set('.ring02', { opacity: 1 })
  .set('.drop222', { opacity: 0 })
  .set('.ring2', { opacity: 0 })
  .set('.drops2', { opacity: 1 })
  .set('.drop02', { rotation: '40deg', transformOrigin: '50%, 50%' })
  .set('.drop12', { rotation: '112deg', transformOrigin: '50%, 50%' })
  .set('.drop22', { rotation: '175deg', transformOrigin: '50%, 50%' })
  .set('.drop32', { rotation: '-110deg', transformOrigin: '50%, 50%' })
  .set('.drop42', { rotation: '-35deg', transformOrigin: '50%, 50%' })
  .add('uncheck2')
  .to('.drops2', 0.2, { transformOrigin: '50%, 50%', scaleX: 0.5, scaleY: 0.3 })
  .staggerTo(
    '.drops2',
    0.2,
    {
      cycle: {
        x: [45, 59, 14, -62, -35],
        y: [-46, 29, 62, 15, -55]
      }
    },
    '0.0184',
    'uncheck2+=.1'
  )
  .to(
    '.ring02',
    0.2,
    { transformOrigin: '50%, 50%', scale: 1.05 },
    'uncheck2+=.1'
  )
  .add('last2')
  .to(
    '.ring02',
    2,
    {
      transformOrigin: '50%, 50%',
      scale: 1,
      ease: Elastic.easeOut.config(0.8, 0.1)
    },
    'last2'
  )
  .to('.drops2', 0.2, { scaleY: 0.1, scaleX: 0.3 }, 'last2+=0')

check2.timeScale(1.27)
uncheck2.timeScale(1.14)

$('.toggler').click(function () {
  if (!$('#boom').is(':checked')) {
    check.play(0)
    $('#teamcheck').text('있음')
    $('#boom').prop('checked', true)
  } else {
    uncheck.play(0)
    $('#teamcheck').text('없음')
    $('#boom').prop('checked', false)
  }
})
$('.toggler2').click(function () {
  if (!$('#boom2').is(':checked')) {
    check2.play(0)
    $('#teamcheck2').text('있음')
    $('#boom2').prop('checked', true)
  } else {
    uncheck2.play(0)
    $('#teamcheck2').text('없음')
    $('#boom2').prop('checked', false)
  }
})
uncheck2.play(0)
$('#teamcheck2').text('없음')
$('#boom2').prop('checked', false)
const areas = [
  '1영역',
  '2영역',
  '3영역',
  '4영역',
  '5영역',
  '6영역',
  '7영역',
  '8영역',
  '글컬',
  '소양',
  '융합',
  '공통과목'
]
var starrating = 3
const difficulty = ['상', '중', '하']

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
$('#choice_prof').show()
$('#choice_prof2').show()
$('#years').show()
$('#ki').show()
$('#boom').hide()
var credit = '0'
var init = firebase.initializeApp({
  apiKey: 'AIzaSyBeTkS1nPcbkqlMSCJpFukdjLco3Vghh14',
  authDomain: 'hk-liberal-arts-comments.firebaseapp.com',
  projectId: 'hk-liberal-arts-comments',
  storageBucket: 'hk-liberal-arts-comments.appspot.com',
  messagingSenderId: '18425169280',
  appId: '1:18425169280:web:e153ac2694890e0891ad65',
  measurementId: 'G-YB7EWF6108'
})
const db = init.firestore() // 위 설정대로 저장소에 접속합니다

function acomplete () {
  communi = $('input[name=project-commu]:checked').val()
  money = document.getElementById('moneymoney').textContent
  assi = $('input[name=positive-change]:checked').val()
  var team = false
  if ($('#teamcheck').text() == '있음') {
    team = true
  }
  var present = false
  if ($('#teamcheck2').text() == '있음') {
    present = true
  }

  var costreason1 = false
  if ($('#project-contribute-1').prop('checked')) {
    costreason1 = true
  }
  var costreason2 = false
  if ($('#project-contribute-2').prop('checked')) {
    costreason2 = true
  }
  var costreason3 = false
  if ($('#project-contribute-3').prop('checked')) {
    costreason3 = true
  }

  // tag

  var tag1 = false
  if ($('#project-tag-1').prop('checked')) {
    tag1 = true
  }
  var tag2 = false
  if ($('#project-tag-2').prop('checked')) {
    tag2 = true
  }
  var tag3 = false
  if ($('#project-tag-3').prop('checked')) {
    tag3 = true
  }
  var tag4 = false
  if ($('#project-tag-4').prop('checked')) {
    tag4 = true
  }
  var tag5 = false
  if ($('#project-tag-5').prop('checked')) {
    tag5 = true
  }
  var tag6 = false
  if ($('#project-tag-6').prop('checked')) {
    tag6 = true
  }

  star1 = starrating
  var check = $('input[name=enjoy-last-event]:checked').val()
  var check2 = document.getElementById('choice_prof')
  var check3 = document.getElementById('choice_prof2')
  area = check
  lecture = check2[check2.selectedIndex].value
  prof = check3[check3.selectedIndex].value

  if (prof !='X'){
  // credit
        var check4 = document.getElementById('years')
        yearcheck = check4[check4.selectedIndex].value
        var check5 = document.getElementById('ki')
        hakki = check5[check5.selectedIndex].value
        comment = document.getElementById('contact').value
        var date = new Date()
        var username2 = localStorage.getItem('uname')
        var uiduid = localStorage.getItem('uid')
        var department1 = localStorage.getItem('department')
        var docid = String(Date.now())
        let refff = db.collection('elective').doc(lecture + prof).collection('information')
        if (yearcheck != 'X' && hakki != 'X'){
          if (comment == '') alert('총평을 입력해주세요')
          else
          {
            var rating = 0
            var count = 0
            var tagsCount = [0, 0, 0, 0, 0, 0]
            var expenditureCount = [0, 0, 0]
            var avgRating = 0.0
            var avgCost = 0.0
            var avgAssignment = 0.0
            var avgCommunication = 0.0
            var _tags = [tag1, tag2, tag3, tag4, tag5, tag6]
            var _expenditureSelections = [costreason1, costreason2, costreason3]

            // 후기 존재 여부 확인
            db.collection('elective').doc(lecture + prof).get().then((value) => {
              if (value.exists) {
                count = value.data().count
                avgRating = value.data().avg_rating
                avgAssignment = value.data().avg_assignment
                avgCost = value.data().avg_cost
                avgCommunication = value.data().avg_communication

                if (_tags[1]) {
                  tagsCount[1] = value.data().tag1_count + 1
                } else {
                  tagsCount[1] = value.data().tag1_count
                }
                if (_tags[2]) {
                  tagsCount[2] = value.data().tag2_count + 1
                } else {
                  tagsCount[2] = value.data().tag2_count
                }
                if (_tags[3]) {
                  tagsCount[3] = value.data().tag3_count + 1
                } else {
                  tagsCount[3] = value.data().tag3_count
                }
                if (_tags[4]) {
                  tagsCount[4] = value.data().tag4_count + 1
                } else {
                  tagsCount[4] = value.data().tag4_count
                }
                if (_tags[5]) {
                  tagsCount[5] = value.data().tag5_count + 1
                } else {
                  tagsCount[5] = value.data().tag5_count
                }
                if (_tags[6]) {
                  tagsCount[6] = value.data().tag6_count + 1
                } else {
                  tagsCount[6] = value.data().tag6_count
                }

                for (var i = 0; i < _expenditureSelections.length; i++) {
                  if (_expenditureSelections[i]) {
                    expenditureCount[i] = value.data().expenditureCount[i] + 1
                  } else {
                    expenditureCount[i] = value.data().expenditureCount[i]
                  }
                }
              } else // 새로운 글 일 때
              {
                for (i = 0;
                  i < _tags.length;
                  i++) {
                  if (_tags[i]) {
                    tagsCount[i] += 1
                  }
                }
                for (i = 0;
                  i <
                  _expenditureSelections
                    .length;
                  i++) {
                  if (_expenditureSelections[i]) {
                    expenditureCount[i] += 1
                  }
                }
              }
            }).then(() => {
              db.collection('elective').doc(lecture + prof).set({
                lecture: lecture,
                professor: prof,
                date: date,
                count: count + 1,
                avg_rating: (count * avgRating +
                  starrating) /
                (count + 1),
                content: comment,
                area: area,
                credit: credit,
                tag1_count: tagsCount[0],
                tag2_count: tagsCount[1],
                tag3_count: tagsCount[2],
                tag4_count: tagsCount[3],
                tag5_count: tagsCount[4],
                tag6_count: tagsCount[5],
                expenditureCount: expenditureCount,
                team_project: team,
                announcement: present,
                avg_cost: (count * avgCost + Number(money)) /
                (count + 1),
                avg_assignment: (count * avgAssignment +
                  Number(assi)) /
                (count + 1),
                avg_communication: (count *
                  avgCommunication +
                  Number(communi)) /
              (count + 1),

                department: department1
              })
            })

            let restest = refff.doc(docid)
              .set({
                uid: uiduid,
                department: department1,
                lecture: lecture,
                professor: prof,
                rating: starrating,
                semester: hakki,
                team_project: team,
                announcement: present,
                content: comment,
                year: yearcheck,
                area: area,
                assignment: Number(assi),
                communication: Number(communi),
                cost: Number(money),
                credit: credit,
                date: date,
                expenditure: [costreason1, costreason2, costreason3],
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
                tag6: tag6
              }, {merge: true})
              .then(() => {
                var commentList = {}
                let reffff = db.collection('users')
                let restestt = reffff.where('userId', '==', uiduid).orderBy('phonenumber', 'desc').limit(4).get()
                  .then((value) => {
                    value.forEach((subDoc) => {
                      commentList = subDoc.data().comment
                      commentList[docid] = lecture + prof
                      let restestt2 = reffff.doc(uiduid)
                        .set({
                          comment: commentList
                        }, {merge: true})
                        .then(() => {
                          alert('등록되었습니다')
                          window.history.back();
                        })
                        .catch(() => {
                          alert('error')
                        })
                    })
                  })
                  .catch(err => {
                    //        alert(rtload)
                  })

              })
              .catch(() => {
                alert('error')
              })
            }
          }
          else {
            alert("년도와 학기를 선택해주세요")
          }
    }
    else {
      alert('과목과 교수를 선택해주세요')
    }
}

var lecount = 0
function changeprof (index) {
  var check = document.getElementById('choice_prof')
  var check2 = document.getElementById('choice_prof2')
  var i
  for (i = 0; i <= 221; i++) {
    if (lectures[i][1] == check[check.selectedIndex].value && lectures[i][3] == check2[index].value) {
      credit = String(lectures[i][2])

      break
    }
  }
  hakk = document.getElementById('hak')
  hakk.value = ' ' + credit + '학점'
}
function changelecture (index) {
  var list2 = []
  lecount = 0
  var check2 = document.getElementById('choice_prof')
  var i
  for (i = 0; i <= 221; i++) {
    if (lectures[i][1] == check2[index].value && list2.includes(lectures[i][3]) == false) {
      list2.push(lectures[i][3])
      lecount++
    }
  }
  $('#choice_prof2').empty()
  optVal = $("<option value='X'> 교수를 선택하세요</option>")
  $('#choice_prof2').append(optVal)
  for (i = 0; i < lecount; i++) {
    optVal = $("<option value='" + list2[i] + "'>" + list2[i] + '</option>')
    $('#choice_prof2').append(optVal)
  }
}
function changeddud () {
  var list = []
  lecount = 0
  var i
  var check = $('input[name=enjoy-last-event]:checked').val()
  for (i = 0; i <= 221; i++) {
    if (lectures[i][0] == check && list.includes(lectures[i][1]) == false) {
      list.push(lectures[i][1])
      lecount++
    }
  }
  $('#choice_prof').empty()
  optVal = $("<option value='X'> 과목를 선택하세요</option>")
  $('#choice_prof').append(optVal)
  for (i = 0; i < lecount; i++) {
    optVal = $("<option value='" + list[i] + "'>" + list[i] + '</option>')
    $('#choice_prof').append(optVal)
  }
}

jQuery(document).ready(function ($) {
  $('.rating .star')
    .hover(function () {
      $(this).addClass('to_rate')
      $(this)
        .parent()
        .find('.star:lt(' + $(this).index() + ')')
        .addClass('to_rate')
      $(this)
        .parent()
        .find('.star:gt(' + $(this).index() + ')')
        .addClass('no_to_rate')
    })
    .mouseout(function () {
      $(this).parent().find('.star').removeClass('to_rate')
      $(this)
        .parent()
        .find('.star:gt(' + $(this).index() + ')')
        .removeClass('no_to_rate')
    })
    .click(function () {
      $(this).removeClass('to_rate').addClass('rated')
      $(this)
        .parent()
        .find('.star:lt(' + $(this).index() + ')')
        .removeClass('to_rate')
        .addClass('rated')
      starrating = $(this).index() + 1

      $(this)
        .parent()
        .find('.star:gt(' + $(this).index() + ')')
        .removeClass('no_to_rate')
        .removeClass('rated')
      /* Save your rate */
      /* TODO */
    })
})
