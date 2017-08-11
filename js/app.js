const reviews = [
  {
    name: 'CHIXUNXAN_OvO',
    avatar: '/imgs/avatar.png',
    comment: 'Uống rất vừa miệng, trân châu ở toco khá ngon :3 nhất là trân châu sợ. Một điểm mạnh cho quán là hôm nay mình qua các bạn nhân viên siêu dễ thương, pha đồ xong còn hỏi mình là uống có được không, có bị ngọt hay nhạt quá không, quan trong là các bạn ấy dễ thương và nhẹ nhàng như trai Hàn >w<'
  },

  {
    name: 'FALL FIN',
    avatar: '/imgs/avatar1.png',
    comment: 'Thích trà xanh của Tocotoco, vị ngọt vừa phải, hoà cùng vị chua nhẹ nên giải khát tốt. Tối qua vừa uống 3 ly trà sữa Chago nên sáng nay thấy hơi hơi ngán vị ngọt. Thêm sáng chưa ăn gì uống trà chua để tráng bao tử. Mình thích uống giảm đường giảm đá nên thức uống thấy ngon đậm đà hơn hẳn.'
  },

  {
    name: 'HUYỀN PHẠM',
    avatar: '/imgs/avatar2.png',
    comment: 'Trà sữa ngọt, trân châu dai dai dẻo dẻo, pudding thơm ngậy, rau câu mềm mịn không có điểm nào để chê :< Ngoài ra mình còn thích cái túi đựng takeaway của Tocotoco vì trông rất cute với cái logo =))) Nói chung là yêu Tocotoco hehee =)))))'
  },

  {
    name: 'LOAN HOÀNG',
    avatar: '/imgs/avatar3.png',
    comment: 'Nhân viên nice, nhanh nhẹn. Đồ làm nhanh. Mình thì toàn uống trà sữa panda và 3 anh em sz M  giảm 10% còn 69k. Uống ngon lành, đã khát lắm, thích thì giảm xuống còn 70% đường uống vẫn ngon lắm nha. Mình thích trân châu sợi hơn là các loại topping khác, nhưng mà hay hết lắm.'
  },

  {
    name: 'VŨ NHẬT HOA',
    avatar: '/imgs/avatar4.png',
    comment: 'Ấn tượng đầu tiên của mình với toco là giá khá rẻ so với mặt bằng các quán trá sữa khác và menu cũng đa dạng nhiều loại. Một cốc size M có cả trân châu rồi cũng chỉ tâm 30k thôi, khá giẻ với mặt bằng chung. Và đặc biệt có trân châu sợi khá ổn, lại rẻ nữa chỉ 6k thôi đầy cốc ăn kiểu dẻo dẻo dai dai mà giống thạch trong chè thái ý :)))'
  }
]


let currentReview = 0

const nextReview = () => {
  if (currentReview >= 4) {
    currentReview = 0
  } else {
    currentReview++
  }

  rname.innerHTML = reviews[currentReview].name
  rcomment.innerHTML = reviews[currentReview].comment
  ravatar.src = reviews[currentReview].avatar
}

const prevReview = () => {
  if (currentReview <= 0) {
    currentReview = 4
  } else {
    currentReview--
  }

  rname.innerHTML = reviews[currentReview].name
  rcomment.innerHTML = reviews[currentReview].comment
  ravatar.src = reviews[currentReview].avatar
}




next.addEventListener('click', () => {
  nextReview()
  console.log('next rv');
})

prev.addEventListener('click', () => {
  prevReview()
  console.log('prev rv');
})

var mil = document.getElementsByClassName('mil')
var mir = document.getElementsByClassName('mir')

window.addEventListener('scroll', () => {
  for (let i = 0; i < mil.length; i++) {
    if (mil[i].getBoundingClientRect().top < window.outerHeight-200) {
      mil[i].className = 'mil active'
    }
  }

  for (let i = 0; i < mir.length; i++) {
    if (mir[i].getBoundingClientRect().top < window.outerHeight-200) {
      mir[i].className = 'mir active'
    }
  }
})
