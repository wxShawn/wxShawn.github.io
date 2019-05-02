window.onload = function(){
    danmuLauncher();
}

function danmuLauncher(){
    var screen  = document.getElementById("screen");
    var launch = document.getElementById("launch");
    var clear = document.getElementById("clear");
    var text = document.getElementById("text");

    //创建文本节点
    function getDanmuText(txt){
        var danmuText = document.createTextNode(txt.value);
        return danmuText;
    }

    //创建弹幕
    function creatDanmu(txt){
        var danmu = document.createElement("p");
        danmu.className = "danmu";
        danmu.style.position = "absolute";
        danmu.style.left = screen.offsetWidth + 10 + "px";
        danmu.style.top = parseInt(Math.random() * 220 + 20) + "px";
        danmu.style.color = "#fff";
        danmu.appendChild(txt);
        return danmu;
    }

    //发射弹幕
    function launchDanmu(txt){

        if(txt.length == 0) return;

        var danmu = creatDanmu(txt);
        screen.appendChild(danmu);

        //让弹幕动起来
        danmu.timer = setInterval(function(){
            var left = danmu.offsetLeft - 1;
            danmu.style.left = left + "px";

            //弹幕超出可视范围自动删除
            if(danmu.offsetLeft < -300){
                clearInterval(danmu.timer);
                screen.removeChild(danmu);
            }
        },10)
    }

    //清除所有弹幕
    clear.onclick = function(){
        var danmu = screen.getElementsByClassName("danmu");
        for(var i = 0; i < danmu.length; i++){
            clearInterval(danmu[i].timer);
            //screen.removeChild(danmu[i]);
        }
        screen.innerHTML = "";
    }

    //发射！！！
    launch.onclick = function(){
        launchDanmu(getDanmuText(text));
        
        //清除输入框
        text.value = "";
    }
}