window.onload = function(){
    setContactIconStyle("#aaa","#41b883");
    navigation();
}

window.onscroll = function(){
    navbarScroll("#fff","transparent");
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

function navbarScroll(color1,color2){
    var nav = document.getElementById("nav");
    if(getScrollTop() > 0){
        nav.style.background = color1;
    }
    else{
        nav.style.background = color2;
    }
}

function navigation(){
    var brand = document.getElementById('brand');
    var btn = document.getElementById("navbtn");
    var nav = document.getElementById("navbar");
    var nav_a = navbar.getElementsByTagName('a');
    var homeH = document.getElementById('home').offsetHeight;
    var portfolioH = document.getElementById('portfolio').offsetHeight;
    var height = new Array;
    height[0] = 0;
    height[1] = homeH - 50;
    height[2] = height[1] + portfolioH;
    for(var i = 0; i < nav_a.length; i++){
        nav_a[i].index = i;
        nav_a[i].onclick = function(){
            var j = this.index;
            window.scrollTo({
                top: height[j],
                behavior: "smooth"
            });
            return false;
        }
    }
    brand.onclick = function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        return false;
    }
    btn.onclick = function(){
        window.scrollTo({
            top: height[1],
            behavior: "smooth"
        });
    }
}

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