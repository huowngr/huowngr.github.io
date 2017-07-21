document.addEventListener('DOMContentLoaded', () => {
  var info_user = [];
  var msg = "";
  var index = "";

  var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
  var check_name = /([a-zA-Z \.\-])/;

  var mail = document.getElementsByClassName('email');
  var send_email = document.getElementsByClassName('email-active');

  var user_name = document.getElementsByClassName('user-name');
  var send_name = document.getElementsByClassName('name-active');

  var local_input = document.getElementsByClassName('location-input');
  var send_place = document.getElementsByClassName('place-active');

  var gender_input = document.getElementsByClassName('gender-input');
  var send_gender = document.getElementsByClassName('gender-active');

  var show = document.getElementsByClassName('message-email');
  var blink_text = document.getElementsByClassName('blink-text');


  mail[0].addEventListener('click', function() {
    index = "1/4";
    blink_text[0].style.display = 'block';
    blink_text[0].innerHTML = index;
  });

  send_email[0].addEventListener('click', function() {
    var email_value = mail[0].value;
    if (email_value == "") {
      show[0].style.display = 'block';
      msg = "Kiểm tra lại email!";
      show[0].style.color = '#e73948';
      show[0].innerHTML = msg;
    } else {
      if (pattern.test(email_value)) {
        info_user.push(email_value);
        show[0].style.display = 'none';
        console.log(info_user);
        mail[0].style.display = 'none';
        user_name[0].style.display = 'block';
        index = "2/4";
        blink_text[0].innerHTML = index;
        send_email[0].style.display = 'none';
        send_name[0].style.display = 'block';

      } else {
        show[0].style.display = 'block';
        msg = "Kiểm tra lại email!";
        show[0].style.color = '#e73948';
        show[0].innerHTML = msg;
      }
    }
  });

  send_name[0].addEventListener('click', function() {
    var name_value = user_name[0].value;
    if (name_value == "") {
      show[0].style.display = 'block';
      msg = "Kiểm tra lại tên!";
      show[0].style.color = '#e73948';
      show[0].innerHTML = msg;
    } else {
      if (check_name.test(name_value)) {
        info_user.push(name_value);
        show[0].style.display = 'none';
        console.log(info_user);
        user_name[0].style.display = 'none';
        index = "3/4";
        blink_text[0].innerHTML = index;
        send_name[0].style.display = 'none';
        local_input[0].style.zIndex = 1;
        send_place[0].style.display = 'block';

      } else {
        show[0].style.display = 'block';
        msg = "Kiểm tra lại email!";
        show[0].style.color = '#e73948';
        show[0].innerHTML = msg;
      }
    }
  });


  send_place[0].addEventListener('click', function() {
    if (local_input[0].value != "") {
      console.log(info_user);
      local_input[0].style.display = 'none';
      index = "4/4";
      info_user.push(local_input[0].value);
      blink_text[0].innerHTML = index;
      send_place[0].style.display = 'none';
      gender_input[0].style.zIndex = 1;
      send_gender[0].style.display = 'block';
      show[0].style.display = 'none';
    } else {

      show[0].style.display = 'block';
      show[0].style.color = '#e73948';
      msg = "Chọn địa điểm";
      show[0].innerHTML = msg;

    }
  });


  send_gender[0].addEventListener('click', function() {
    if (gender_input[0].value != "") {
      console.log(info_user);
      info_user.push(gender_input[0].value);
      gender_input[0].style.display = 'none';
      index = "4/4";
      blink_text[0].innerHTML = index;
      send_gender[0].style.display = 'none';
      gender_input[0].style.zIndex = -1;
      show[0].style.display = 'block';
      show[0].style.color = '#64A964';
      msg = "Đã hoàn tất, hãy mở hòm thư và xác nhận!";
      show[0].innerHTML = msg;
      blink_text[0].style.display = 'none';
    } else {

      show[0].style.display = 'block';
      show[0].style.color = '#e73948';
      msg = "Chọn giới tính";
      show[0].innerHTML = msg;

    }
  });


  var click_place = document.getElementsByClassName('place-location');
  click_place[0].addEventListener('click', function(event) {
    var show = document.getElementById('cities');
    show.style.display = 'block';
    event.stopPropagation();
  });
  var event = document.body;


  event.addEventListener('click', function(event) {
    var hidden = document.getElementById('cities');
    hidden.style.display = "none";
  });


  var show_box = document.getElementById('hamburger-box-jamja');
  var hidden_content = document.getElementById('jamja-content');

  var hamburger = document.getElementById('hamburger');
  var check_visiable = document.getElementById('hamburger-box-jamja');
  hamburger.addEventListener('click', function() {
    if (check_visiable.style.display == 'none') {
      show_box.style.display = "block";
      hidden_content.style.display = "none";
    } else {
      show_box.style.display = "none";
      hidden_content.style.display = "block";
    }
  });


  var input_your_text = document.getElementsByClassName('input-text');
  var button_active = document.getElementById('btn-search');
  var cancel_x = document.getElementsByClassName('cancel');
  var icon_change = document.getElementsByClassName('glyphicon');
  var change_search = document.getElementsByClassName('input-search');

  button_active.addEventListener('click', function() {
    input_your_text[0].style.display = 'block';
    cancel_x[0].style.display = 'block';
    icon_change[0].style.background = 'none';
    icon_change[0].style.border = 'none';
    change_search[0].style.right = '32px';
  });

  cancel_x[0].addEventListener('click', function() {
    input_your_text[0].style.display = 'none';
    cancel_x[0].style.display = 'none';
    change_search[0].style.right = '10px';
  })


  var check_follow = document.getElementsByClassName('icons-add');
  var msg_follow = document.getElementsByClassName('msg-follow');

  for (var i = 0; i < check_follow.length; i++) {
    check_follow[i].addEventListener('click', function() {
      var parent = this.parentElement;
      if (parent.querySelector('.msg-follow').style.display == 'none') {
        parent.querySelector('.msg-follow').style.display = 'block';
      } else {
        parent.querySelector('.msg-follow').style.display = 'none';
      }
    });
  }


  var check_follow_noti = document.getElementsByClassName('like-product');
  var msg_follow = document.getElementsByClassName('notification-follow');

  for (var i = 0; i < check_follow.length; i++) {
    check_follow_noti[i].addEventListener('click', function() {
      var parent = this.parentElement;
      if (parent.querySelector('.notification-follow').style.display == 'none') {
        parent.querySelector('.notification-follow').style.display = 'block';
      } else {
        parent.querySelector('.notification-follow').style.display = 'none';
      }
    });
  }

})
