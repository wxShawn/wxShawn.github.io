$(function() {

  // 当 scrollTop 大于指定高度时，修改导航条样式
  $(window).scroll(function() {
    if ($(document).scrollTop() > window.innerHeight - 176) {
      $('nav').addClass('bg-light navbar-light shadow-sm');
      $('nav').removeClass('bg-transparent navbar-dark');
    } else {
      $('nav').removeClass('bg-light navbar-light navbar-dark');
      $('nav').addClass('bg-transparent navbar-dark');
    }
  });

  // 启动 star 背景
  runStar();

  // 绑定导航条事件
  let navBtns = $('nav .nav-item');
  navBtns.click(function() {
    scrollT($(this).attr('to'));
    navBtns.removeClass('active');
    $(this).addClass('active');
  });

  // 点击复制邮箱地址
  $('.contact .icon-youxiang').click(function() {
    const mail = 'wxshawn@foxmail.com';
    const txt = $('<textarea>');
    $('body').append(txt);
    txt.val(mail).select();
    const bool = document.execCommand('copy');
    txt.remove();
    if (bool) {
      window.alert('📬已复制邮箱地址');
    } else {
      window.alert(`📬邮箱: ${mail}`);
    }
  })

});

function scrollT(e) {// 页面滚动至元素 e
  $('html, body').animate({
    scrollTop: $(e).offset().top - 56 + 'px',
  }, 200);
}