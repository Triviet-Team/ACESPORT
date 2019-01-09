



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
    
  $('.menu .nav li').click(() => {
    let $ul = $(this).find('.menu-bottom');
    $ul
      .css('display', 'block')
      .toggleClass('in out')
  });

  if (ww < 992) {
    $('.footer-bottom .collapse').removeClass('show');
  }

  if (ww > 1200) {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 150) {
        $('.menu').addClass('menu-down slideInDown');
        $('.cart-form').addClass('cart-form-down');
      } else {
        $('.menu').removeClass('menu-down slideInDown');
        $('.cart-form').removeClass('cart-form-down');
      }
    });
  } 

  // GO TOP
  $(window).scroll( function() {
    if ($(this).scrollTop() > 400) {
      $('.go-top').fadeIn();

    } else {
      $('.go-top').fadeOut();
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $('.go-top').hover(() => {
    $('.go-top i').toggleClass('mdi-watch-import mdi-watch-export')
  });

  // CATEGORY LEFT
  $('.list-cate-title').on('click', function() {
    $('.list-cate-title').removeClass('active');
    $(this).addClass('active');
  });

  // SETTING SEARCH FORM
  $('.search-btn').click(() => {
    $('.overlay').css('display', 'block');
  });
  
  $('.overlay').click(function() {
    $(this).css('display', 'none');
    $('#search').removeClass('show');
    $('.filter').css('transform', 'translateX(300px)');
  });

  // NOTIFICATION ADD TO CART + WISHLIST
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $('.custom-wishlist').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào danh sách yêu thích thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="danh-sach-yeu-thich.html">Vào danh sách yêu thích</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(() => {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
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

  $('.scroll-product a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + -80
    }, 300, 'linear');
  });

  $('.filter-btn').click(() => {
    $('.filter').css('transform', 'translateX(0)');
    $('.overlay').css('display', 'block');
  });

  $('.close-filter').click(() => {
    $('.overlay').css('display', 'none');
    $('.filter').css('transform', 'translateX(300px)');
  });

  $('.view-type').click( function() {
    $('.view-type').removeClass('active');
    $(this).addClass('active');
  });

  $('.grid-2').click(() => {
    $('.product-page-main .tab-product')
      .css('grid-template-columns', '1fr 1fr');
    
    $('.box-product').removeClass('row box-product-list');
    $('.box-product-img').removeClass('col');
    $('.box-product-detail').removeClass('col');
  }); 
  
  $('.grid-3').click(() => {
    $('.product-page-main .tab-product')
      .css('grid-template-columns', '1fr 1fr 1fr');
    
    $('.box-product').removeClass('row box-product-list');
    $('.box-product-img').removeClass('col');
    $('.box-product-detail').removeClass('col');
  });
  
  $('.grid-1').click(() => {
    $('.product-page-main .tab-product')
      .css('grid-template-columns', '1fr');

    $('.box-product').addClass('row box-product-list');
    $('.box-product-img').addClass('col');
    $('.box-product-detail').addClass('col');
  });

  for(let i = 0; i < 4; i++) {
    $('.intro-home-box').eq(i).hover(function() {
      $('.intro-home').removeClass('intro0 intro1 intro2 intro3');
      $(this).parent().addClass(`intro${i}`);
    });
  }

  if (ww < 575) {
    let attr = $('.intro-home-box a').attr('href');
    console.log(attr);
    $('.intro-home-box-detail p').attr('href', attr);
    $('.intro-home-box a').removeAttr('href');
  }
});
