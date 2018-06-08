---
    title: 浮动下载拖动
    date: 2017-09-03 20:33:39
    tags: js
---
**浮动下载拖动**
```bash
if(document.querySelector(".excel_float")){
    var excel_float=document.querySelector(".excel_float");
    excel_float.addEventListener('touchmove',touchmoveFun,false);
    excel_float.addEventListener("touchend",touchendFun,false);
    function touchmoveFun(evt){
        evt.preventDefault();//阻止触摸时浏览器的缩放、滚动条等
        var touch=evt.touches[0];//获取第一个触点
        var x=Number(touch.pageX);//页面触点X坐标
        var y=Number(touch.pageY);//页面触点Y坐标
        var width=excel_float.offsetWidth;
        var halfWidth=parseFloat(width)*0.5;
        var moveX=x-halfWidth;
        var moveY=y-halfWidth;
        var moveBx=x+halfWidth;
        var moveBy=y+halfWidth;
        var screenScroll=document.documentElement.scrollTop  || document.body.scrollTop;
        var screenwidth = document.documentElement.clientWidth || document.body.clientWidth;
        var muicontentwidth=document.querySelector(".mui-content").offsetWidth;
        var screenheight = document.documentElement.clientHeight || document.body.clientHeight;
        if(moveX>0 && moveBx<screenwidth && moveY>0 && moveBy<screenheight+screenScroll){
            excel_float.style.left=x-halfWidth+'px';
            excel_float.style.top=y-halfWidth-screenScroll+'px';
        }
    }
    function touchendFun(evt){
        //element.removeEventListener(type，handler，false/true)
    }
}
```