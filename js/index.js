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

function setHtmlStyle(){
    var htmlstyle = document.getElementById('htmlstyle');
    var width = document.getElementsByTagName('body')[0].offsetWidth;
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || width < 800){
        htmlstyle.setAttribute('href','./css/index-mob.css');
        // 移动端操作
    } else {
        htmlstyle.setAttribute('href','./css/index-pc.css');
        // PC端操作
    }
    window.onresize = function(){
        setHtmlStyle();
    }
}

addLoadEvent(setHtmlStyle());

function setContactIconStyle(color1,color2){
    var icon = document.getElementsByClassName('icon-link')[0];
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

addLoadEvent(setContactIconStyle('#8a8a8a','#3f72af'));

function modalSwitch(){
    var body = document.getElementsByTagName('body')[0];
    var btn = document.getElementsByClassName('switch')[0];
    var btn_color = btn.getElementsByTagName('path')[0];
    var modal = document.getElementsByClassName('links')[0];
    var j = true;
    btn.onclick = function(){
        console.log(j);
        if(j == true){
            modal.style.animation = 'showModal 1s';
            modal.style.height = '100%';
            body.style.overflowY = 'hidden';
            btn_color.setAttribute('fill','#3f72af');
            j = false;
        }else{
            modal.style.animation = 'hideModal 1s';
            modal.style.height = '0';
            body.style.overflowY = 'scroll';
            setTimeout(function(){
                btn_color.setAttribute('fill','#dbe2ef');
            },800);
            j = true;
        }
        
    }
}

addLoadEvent(modalSwitch());