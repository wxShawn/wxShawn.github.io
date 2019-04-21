window.onload = function(){
    setContactIconStyle("#aaa","#41b883");
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
    if(getScrollTop() >= 200){
        nav.style.background = color1;
    }
    else{
        nav.style.background = color2;
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