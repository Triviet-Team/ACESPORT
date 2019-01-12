



$('document').ready(function() {
  // ACTIVE MENU
  let url = window.location.href;
  $(".main-menu a").each( function() {
    if (url == (this.href)) {
      $(this).closest("li a").addClass("active");
      $(this).closest("li li a").removeClass("active");
    }
  });
  // END ACTIVE MENU

  $('.menu .nav').slideAndSwipe();

  let ww = document.body.clientWidth;


  // GO TOP
  $(window).scroll( function() {
    if ($(this).scrollTop() > 400) {
      $('.go-top').fadeIn().css('transform', 'translateY(0)');

    } else {
      $('.go-top').fadeOut().css('transform', 'translateY(100px)');;
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  //NAVTABS ACTIVE
  $('.navbar-nav .nav-item').on('click', function(){
    let itemParent = $(this)
      .parent()
      .parent()
      .parent()
        .find('.navbar-toggler');

    $('.navbar-nav .nav-item').removeClass('active')
    $(this).addClass('active')

    let text = $(this).text();
    $(itemParent).text(text);
    $('.navbar-collapse').removeClass('show');
  })

  $('.nav-close').click(() => {
    $('.menu .nav')
      .css('transform', ' translate(-300px, 0px)')
      .removeClass('ssm-nav-visible');

    $('.ssm-overlay').css('display', 'none');
    $('html').removeClass('is-navOpen');
  });

  //INDEX SETTING
  for(let i = 0; i < 4; i++) {
    $('.intro-home-box').eq(i).hover(function() {
      $('.intro-home').removeClass('intro0 intro1 intro2 intro3');
      $(this).parent().addClass(`intro${i}`);
    });
  }

  if (ww < 575) {
    let attr = $('.intro-home-box a').attr('href');
    $('.intro-home-box-detail p').attr('href', attr);
    $('.intro-home-box a').removeAttr('href');
  }

  // Khi chưa đăng nhập
  $('.login-btn').click(function() {
    $('.box-login').toggleClass('box-login-show');
    $('.login-btn span i').toggleClass('mdi-chevron-down mdi-chevron-up');
  });

  $('.login-close').click(function() {
    $('.box-login').removeClass('box-login-show');
    $('.login-btn span i').remove('mdi-chevron-up')
  });
  

  // Khi đã đăng nhập
  $('.login-complete-btn').click(function() {
    $('.login-complete').toggleClass('box-login-show');
    $('.login-complete-btn span i').toggleClass('mdi-chevron-down mdi-chevron-up');
  });

  $('.login-close').click(function() {
    $('.login-complete').removeClass('box-login-show');
    $('.login-complete-btn span i').remove('mdi-chevron-up')
  });

  $('.link-signup').click(function() {
    $('#signin-tab').removeClass('active');
    $('#signup-tab').addClass('active');
    $('#signin').removeClass('show active');
    $('#signup').addClass('show active');
  });

  $('.link-signin').click(function() {
    $('#signup-tab').removeClass('active');
    $('#signin-tab').addClass('active');
    $('#signup').removeClass('show active');
    $('#signin').addClass('show active');
  });
  
});







$(document).ready(function(){
  jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value.indexOf(" ") < 0 && value != ""; 
  }, "Không được phép có khoảng trắng");
});

$("#signup-form").validate({
  rules: {
    email_signup: {
      required: true,
      email: true,
    },
    nick_signup:{
      required: true,
      noSpace: true,
      minlength: 6,
    },
    password_signup:{
      required: true,
      noSpace: true,
      minlength: 6,
    },
    passwordEq_signup:{
      equalTo: "#password_signup"
    },
  },
  messages: {
    email_signup: {
      required: "Vui lòng điền email",
      email: "Vui lòng điền đúng định dạng email"
    },
    nick_signup:{
      required: "Vui lòng tên đăng nhập",
      minlength: "Tên đăng nhập phải trên 6 ký tự",
    },
    password_signup:{
      required: "Vui lòng điền mật khẩu",
      minlength: "Mật khẩu phải trên 6 ký tự",
    },
    passwordEq_signup:{
      equalTo: "Mật khẩu không khớp"
    }
  },
  errorPlacement: function(error, element) {
    $(error).addClass('text-danger mt-2');
    $(element).addClass('form-control-danger');

    error.insertAfter(element);
  }
});
