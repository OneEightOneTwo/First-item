// ==============================================
//1.封装a-b的随机整数
//10-100=>parseInt(Math.random()*(100-10+1))+10; 
// a-b  parseInt(Math.random()*(b-a+1))+a
function getRandomNum(min,max){
    var randomNum = parseInt(Math.random()*(max-min+1))+min;
    return randomNum;
}


//===============================================
// 2.封装一个随机色 'rgb('+red+','+green+','+blue+')'
function getColor(){
    var red = getRandomNum(0,255);
    var green = getRandomNum(0,255);
    var blue = getRandomNum(0,255);
    return 'rgb('+red+','+green+','+blue+')';
}

//==================================================
// 3.生成表格
function getTable (r,c){
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for(var i=0;i<r;i++){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        for(var j=0;j<c;j++){
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = "第"+i+j+"号";
        }
    }
    table.appendChild(tbody);
    return table;
}
 

//========================================================== 
// 4.将对象转成字符串
function ObjToStr(arr){
    var str = '';
    for(var key in arr[this.index]){
    //需要将对象转成name=xxx&price=188&price2=298这种格式
        str += key + '=' + arr[this.index].id + '&';//将id传过去
    }
    str = str.slice(0,-1); 
    return str;
}
            
//==========================================================
//5.将字符串转成对象
function StrToObj(){    
    // 字符串=split("&")=>数组["name=xxx","price=188",...]
    var dataArr = data.split("&");
    var dataObj = {};
    dataArr.forEach(function(item){//遍历数组dataArr
        var arr = item.split("=");//arr=[name,xxx,price,188,price2,288,imgurl,x...x]
        dataObj[arr[0]] = arr[1];//对象[]='xxx';给对象赋予键名与键值
    });
    return dataObj;
}



//===========================================================
//6.过滤敏感字符
function filter(str) {
    //只要是直接可以发布留言不需要审核的内容，都应该过滤敏感词
    var sensitive = ['傻B', '妈蛋', 'bitch', 'fuck', '操'];
    for(var i = 0; i < sensitive.length; i++) {
        var reg = new RegExp(sensitive[i], 'gi');
        str = str.replace(reg, '*');
    }
    return str; //处理好的数据
}


//=======================================================
//7.补零函数:toDB(num)
//   参数：num数字
//   返回值：小于10的补零返回
function toDB(num) {
    //补零操作
    if(num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}



//==========================================================
// 8.秒转成时间：xx天xx时xx分xx秒(实现倒计时效果)
//     setTime(num)
//         * 参数： 秒
//         * 返回值： {}数据返回(灵活一点)        
 
function setTime(num) {
    //num是秒数    98876秒  有多少天： xx天xx时xx分xx秒
    var sec = toDB(num % 60);//06 秒
    var min = toDB(Math.floor(num / 60) % 60); //Math.floor(num / 60) % 60 分
    var hour = toDB(Math.floor(num / 60 / 60) % 24);//时
    var day = toDB(Math.floor(num / 60 / 60 / 24));//天数    
    return {
        secs : sec,
        mins : min,
        hours : hour,
        days : day
    }    
}



//==========================================================
//9.正则的封装
/*
验证账号
    不能为空，不能使用特殊字符（数字、字母、下划线、横杠），必须以字母开头，
    长度6-20
    
密码
    长度6-18 字母+数字

昵称
    只能输入中文/^[\u2E80-\u9FFF]+$/

电子邮件
    英文开头,@前面的内容可以包含数字字母下划线、-、.
    @后面的域名只能是数字小写字母、-,最多是63位。域名后缀（例如.com）可以有多个。 
    jinrong.xie@qq.com     x11@qq.com     x@163.com      110120119@a-r.com.cn
    
手机号码
    11位
    158 8888 8888
    1 [34578]    
        
身份证
    18/15
    445655 19900707 2165
    445655 19900707 211x
        
生日 
    1999-5-8
*/
var checkReg = {
    uname : function(str){
        var reg = /^[a-zA-Z][\w-]{4,18}\w$/;
        return reg.test(str);
    },
    pwd : function(str){
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        return reg.test(str);
    },
    nickName : function(str){
        var reg = /^[\u4E00-\u9FA5]+$/;
        return reg.test(str);
    },
    email : function(str){
        var reg = /^[A-Za-z\d]+([-\.\w]+[A-Za-z\d])*@([A-Za-z\d]+\.)+[A-Za-z\d]{2,4}$/;
        return reg.test(str);
    },
    tel : function(str){
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    idcard : function(str){
        var reg = /^([1-9]\d{7}((0[1-9])|(1[0-2]))(([0-2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-2]\d{3}((0[1-9])|(1[0-2]))(([0-2]\d)|3[0-1])\d{3}([0-9Xx]))$/;
        return reg.test(str);
    },
    birthday : function(str){
        var reg = /^[1-2]\d{3}-((0[1-9])|(1[0-2]))-(([0-2]\d)|3[0-1])$/;
        return reg.test(str);
    }
}


//===================================================
/*10.事件监听：bbind(ele, type, fn)
    参数一：对象名
    参数二：事件类型
    参数三：执行函数
 */

function bbind(ele, type, fn) {
    if(ele.addEventListener) {
        //高级浏览器 IE9+
        ele.addEventListener(type, fn, false);
    } else {
        //IE8-
        ele.attachEvent('on' + type, fn);
    }
}


//===========================================================
/*11.运动框架封装：startMove()过渡    jq animate()
    最终版：多对象，多属性，链式运动框架(运动队列)
    参数一：对象名
    参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
    参数三：回调函数(可选参数)
 */
function startMove(obj, json, fnend) {
    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function() {
        var istrue = true;
        //1.获取属性名，获取键名：属性名->初始值
        for(var key in json) {
            //  console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if(key == 'opacity') { //初始值
                cur = getStyle(obj, key) * 100; //透明度
            } else {
                cur = parseInt(getStyle(obj, key)); //width heigth borderwidth px为单位的
            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动
            if(cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if(key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if(istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if(fnend) {
                fnend();
            }
        }

    }, 50); //obj.timer 每个对象都有自己定时器
}

//12.获取非行内样式
function getStyle(obj,name){
        if(getComputedStyle(obj,false)){
             return getComputedStyle(obj,false)[name];
        }else{
            return obj.currentStyle(name);
        }
    }




//======================================================
/*13.ajax(method,url,data,fn)
    参数一：请求方式   get  和  post
    参数二：路径
    参数三：数据   name=malin&psw=12345
    参数四：成功的回调    回调函数
*/
function ajax(method, url, data, fn) {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //告诉对象，要什么
    if(method == 'get' && data) {//如果是get的方式，data接在url后面
        //如果请求的地址是同一个地址，浏览器自动缓存
        url = url + '?day='+ new Date(); +'&'+ data ;
    }    
    xhr.open(method,url,true);
    //2.发送请求
    if(method == 'get') {
        xhr.send(null);
    }else{
        //设置请求头
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }    
    //3.3号线去后台制作    
    //4.号线。接收数据，做渲染    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200){
                //个性需求
                if(fn) {
                    fn(xhr.responseText);//实参
                }
            }else{
                alert('出错了，因为：' + xhr.status);//404找不到
            }            
        }
    } 
}

//=========================================================
/*14.封装cookie函数:
    存: Cookie.set()
    取:  Cookie.get()
    删: Cookie.remove()
 */
var Cookie = {

    set: function(name, value, prop) { //设置cookie
        //存数据到cookie里面:必写的
        var str = name + '=' + value;

        //prop存json数据，json存后面一些可选参数
        //expires:设置失效时间
        if(prop.expires) {
            str += ';expires=' + prop.expires.toUTCString(); //把时间转成字符串
        }
        //设置path路径
        if(prop.path) {
            //如果设置了
            str += ';path=' + prop.path;
        }
        //domain设置可访问cookie的域名
        if(prop.domain) {
            str += ';domain=' + prop.domain;
        }
        //写到cookie
        document.cookie = str;
    },
    get: function(key) {
        var cookies = document.cookie; //name=tiantian; age=18; usn=yuanyuan; pws=456123
        var arr = cookies.split('; '); //['name=tiantian','age=18','usn=yuanyuan','pws=456123']
        for(var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //['name','tiantian']
            if(key == arr2[0]) {
                return arr2[1];
            }
        }
    },
    remove: function(key) {

        //删的原理:设置过期时间
        var now = new Date();
        now.setDate(now.getDate() - 1);
        this.set(key, 'no', {
            expires: now
        });
    }
}

//===========================================================
/* 15、js 特效
  1）、开定时器，让图片运动：旧图挪走，新图进入可视区
  2）、(鼠标经过停止)点击上下按钮：可以切换下一张和上一张
  3）、焦点跟随，点击焦点可以切到对应的图片
 
  做插件：把代码封装，把不同的地方做成参数
*/ 
function sliderImg(id, special) {
    var slideimg = getid(id); //最大盒子
    var ul = slideimg.children[0].children[0];
    var alis = ul.children;
    var iW = alis[0].offsetWidth; //获取一个图片的宽度
    var num = 0; //可视区内图片下标，当前的那张
    var light = slideimg.children[1];
    var aspan = light.children; //焦点
    var pis = slideimg.children[2];
    var prevImg = pis.children[0]; //上一张
    var nextImg = pis.children[1]; //下一张
    //  console.log(aspan.length);
    //1.图片都在右侧
    for(var i = 0; i < alis.length; i++) {
        alis[i].style.left = iW + 'px';
    }
    //2.第一个图放到可视区
    alis[0].style.left = 0;
    //3、不断的轮下一张，开定时器：旧图挪走，新图进入可视区
    var timer = null;
    clearInterval(timer);
    timer = setInterval(next, 2000); //每隔2秒切一张图
    function next() { //切一个图片
        //旧图挪走 num=0
        startMove(alis[num], {
            'left': -iW
        });
        //新图进入可视区  num=1,先把新图放在右侧，再挪进来
        //      num++;
        num = ++num >= alis.length ? 0 : num;
        alis[num].style.left = iW + 'px';
        startMove(alis[num], {
            'left': 0
        }); //挪到可视区
        spanAvtive();
    }
    function prev() {
        //旧图挪到右侧 num 0
        startMove(alis[num], {
            'left': iW
        });
        //新图快速放到左侧，再挪进可视区
        //      num--; //num 5
        num = --num < 0 ? alis.length - 1 : num;
        alis[num].style.left = -iW + 'px';
        startMove(alis[num], {
            'left': 0
        }); //可视区
        spanAvtive(); //焦点跟随
    }
    //4、鼠标经过停止，鼠标离开继续轮播
    slideimg.onmouseenter = function() {
        clearInterval(timer); //鼠标经过清除定时器
    }

    slideimg.onmouseleave = function() {
        clearInterval(timer); //放在定时器叠加
        timer = setInterval(next, 2000);
    }

    //5.点击上下按钮：可以切换下一张和上一张
    prevImg.onclick = function() {
        //上一张
        prev();
    }

    nextImg.onclick = function() {
        //下一张
        next();
    }
    //6、焦点跟随，点击焦点可以切到对应的图片
    function spanAvtive() {
        for(var i = 0; i < aspan.length; i++) {
            aspan[i].className = '';
        }
        aspan[num].className = special;
    }
    //点击焦点可以切到对应的图片
    for(var i = 0; i < aspan.length; i++) {
        aspan[i].index = i;
        aspan[i].onclick = function() {
            //给每一个焦点绑定点击事件
            var index = this.index;
            //判断方向
            if(index > num) {
                //从右边切到可视区
                //旧图 num 挪到左边
                startMove(alis[num], {
                    'left': -iW
                });
                //新图 index 先放在右侧，再挪进可视区
                alis[index].style.left = iW + 'px';
                startMove(alis[index], {
                    'left': 0
                });
                num = index;
                spanAvtive();
            }
            if(index < num) {
                //从左边切入
                //旧图挪到右侧
                startMove(alis[num], {
                    'left': iW
                });
                //新的快速放左边，再进入可视区  index
                alis[index].style.left = -iW + 'px';
                startMove(alis[index], {
                    'left': 0
                });
                num = index;
                spanAvtive();
            }
        }
    }
}


//==========================================================
//16.选项卡
function TabControl(id1){
    //需求：给li都绑定鼠标点击事件
    var box = document.getElementById(id1);
    var menu = box.children[0];
    var aLis = menu.getElementsByTagName('li');//通过标签名查找元素门
    var aDivs = box.getElementsByTagName('div');
    //数组：循环绑定事件
    // for(var i=0;i<aLis.length;i++){
    //     aLis[i].index=i;//绑定索引值，标记
    //     aLis[i].onclick=function(){//给每一个li绑定事件 this:当前这个      
    //         for(var i=0;i<aLis.length;i++){//清空其他，排他思想
    //             aLis[i].className='';
    //             aDivs[i].style.display='none';
    //         }
    //         this.className = 'active';//当前的
    //         console.log(this.index);
    //         aDivs[this.index].style.display='block';
    //     }
    // }       
    // ES6用法
    for(let i=0;i<aLis.length;i++){
        aLis[i].onclick=function(){//给每一个li绑定事件this:当前这个
            for(let i=0;i<aLis.length;i++){//清空其他，排他
                aLis[i].className='';
                aDivs[i].style.display='none';
            }
            console.log(this);//当前的
            this.className = 'active';
            aDivs[i].style.display='block';
        }
    }
}

//=========================================================
//17.新闻提示信息
function newsHint(clsn1,clsn2){
    //当移动动到li标签时，details出现，并跟随光标位置
    //光标位置：clientX，clientY浏览器的可视区域，将details的位置定位在浏览器的clientX，clientY
    var newslist = document.getElementsByClassName(clsn1)[0];
    var details = document.getElementsByClassName(clsn2)[0];
    var as = newslist.getElementsByTagName("a");
    var val;
    for(var i=0;i<as.length;i++){
        as[i].onmouseover = function(){
            details.style.display = "block";
            val = this.title;
            details.innerHTML = val;
            this.removeAttribute("title");
        }
        as[i].onmousemove = function(e){
            e = e || window.event;
            details.style.left = e.clientX - 15 + 'px';
            details.style.top = e.clientY + 30 + 'px';
        }
        as[i].onmouseout = function(){
            details.style.display = "none";
            this.title = val;
        }
    }
}




//吸顶菜单
function xiDing(id){
    var box = document.getElementById(id);
    var iT = box.offsetTop;
    window.onscroll = function() {
        var scrollTop = window.scrollY;
        if(scrollTop >= iT){
            //添加样式
            box.className = 'menu';
        }else{
            box.className = '';
        }
    }
}

// 取消点击摸默认
// e = e || window.event;
//         document.onselectstart = function(){
//             return false;//取消字段选择功能
//         }
//         var arr = '';
