window.onload = function(){
    
    var str = document.getElementById("str");
    var btn = document.getElementById("btn");

    btn.onclick = function(){
        var myArr = str.value.split(",");
        for(var i = 0; i < myArr.length; i++){
            if(isNaN(myArr[i]) || myArr[i] == ""){
                alert("请输入正确的格式！");
                return false;
            }
        }
        calculator(myArr.map(Number));
    }
}

function calculator(myArr){

    var max = myArr[0]; //最大值
    var min = myArr[0]; //最小值
    var range = 0;  //极差
    var group = 0;  //组数
    var interval = 0;   //组距

    //取得最值
    for(var i = 0; i < myArr.length; i++){
        var m = myArr[i];
        var n = myArr[i + 1];
        if(max < n){
            max = n;
        }
        if(min > n){
            min = n;
        }
    }
    
    //计算
    range = max - min;
    group = (1 + 3.322 * (Math.log(myArr.length)/Math.log(10)));
    interval = Math.ceil(range/group);

    //输出
    function output(){

        var body = document.getElementsByTagName("body")[0];

        //输出计算结果
        var result1 = document.createElement("p");
        var txt1 = document.createTextNode("全距：" + range + " 组数：" + Math.ceil(group) + " 组距：" + interval);
        result1.appendChild(txt1);
        body.appendChild(result1);

        //分组
        var temp = min;
        for(var i = 0; i < group; i++){
            var tmpArray = new Array;
            var index = 0;
            for(var j = 0; j < myArr.length; j++){
                if(myArr[j] >= temp && myArr[j] < temp + interval){
                    tmpArray[index] = myArr[j];
                    index++;
                }
            }

            //输出分组结果
            var result2 = document.createElement("p");
            var txt2 = document.createTextNode(temp + "——" + (temp + interval) + ": " + tmpArray.length + " , " + toPercentage(tmpArray.length/myArr.length));
            result2.appendChild(txt2);
            body.appendChild(result2);

            temp += interval;
        }
    }

    //转换为百分数
    function toPercentage(n){
        var m = n.toFixed(4).slice(2,4) + "." + n.toFixed(4).slice(4,6) + "%";
        return m;
    }

    output();
}