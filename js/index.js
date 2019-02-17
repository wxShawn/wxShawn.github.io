function addLoadEvent(func){
    var oldOnload = window.onload;
    if(window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

function getScrollTop(){
    var scrollTop = 0;
    if(document.documentElement && document.documentElement.scrollTop){
        scrollTop = document.documentElement.scrollTop;
    }
    else if(document.body){
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

function setNavbarStyle(){
    var nav = document.getElementById('navbar');
    var nav_w = nav.offsetWidth;
    var nav_a = nav.getElementsByTagName('a');
    var a_color = 0;
    var a_size = 0;
    var a_margin = 0;
    var a_width = 0;
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || nav_w < 700){
        a_size = '14px';
        a_margin = '0';
        a_width = '90px';
    }else{
        a_size = '20px';
        a_margin = '0 20px';
        a_width = '120px';
    }
    if(getScrollTop() >= 440){
        nav.className = 'nav-fixed';
        a_color = '#f9f7f7';
    }else{
        nav.className = '';
        a_color = '#3f72af';
    }
    for(var i = 0; i < nav_a.length; i++){
        nav_a[i].style.color = a_color;
        nav_a[i].style.fontSize = a_size;
        nav_a[i].style.margin = a_margin;
        nav_a[i].style.width = a_width;
    }
}

addLoadEvent(setNavbarStyle());

window.onscroll = function(){
    setNavbarStyle();
}

window.onresize = function(){
    setNavbarStyle();
}

function navbar(){
    var nav = document.getElementById('navbar');
    var nav_a = nav.getElementsByTagName('a');
    var headerH = document.getElementsByTagName('header')[0].offsetHeight;
    var aboutH = document.getElementById('about').offsetHeight;
    var porfolioH = document.getElementById('porfolio').offsetHeight;
    var height = new Array;
    height[0] = 0;
    height[1] = headerH - 60;
    height[2] = height[1] + aboutH;
    height[3] = height[2] + porfolioH;
    for(var i = 0; i < nav_a.length; i++){
        nav_a[i].index = i;
        nav_a[i].onclick = function(){
            var j = this.index;
            window.scrollTo({
                top: height[j],
                behavior: 'smooth'
            })
        }
    }
}

addLoadEvent(navbar());

function setContactIconStyle(color1,color2){
    var icon = document.getElementById('contact-icon');
    var btn = icon.getElementsByTagName('a');
    var elem = icon.getElementsByTagName('path');
    for(var i = 0; i < btn.length; i++){
        btn[i].index = i;
        elem[i].setAttribute('fill',color1);
        btn[i].onmouseover = function(){
            for(var i = 0; i < elem.length; i++){
                elem[i].setAttribute('fill',color1);
            }
            elem[this.index].setAttribute('fill',color2);
        }
        btn[i].onmouseout = function(){
            for(var i = 0; i < elem.length; i++){
                elem[i].setAttribute('fill',color1);
            }
        }
    }
}

addLoadEvent(setContactIconStyle('#f9f7f7','#3f72af'));