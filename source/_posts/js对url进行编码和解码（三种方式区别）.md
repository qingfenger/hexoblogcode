---
title: js
date: 2017-09-03 20:33:39
tags: js
---
昨天日期：
	function GetDateStr(AddDayCount) { 
		var dd = new Date(); 
		dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
		var y = dd.getFullYear(); 
		var m = dd.getMonth()+1;//获取当前月份的日期 
		var d = dd.getDate(); 
		return y+"-"+m+"-"+d; 
	}  
	console.log("<br />昨天："+GetDateStr(-1));
<!--more-->
**函数返回值**
	function Test() {    
		　　this.name = 'Test';    
		　　return 'Test';    
	} 
	var fnT = Test();  
	console.log(fnT);
	var newT = new Test();
	console.log(newT);
	如果函数返回值为常规意义上的值类型（Number、String、Boolean）时，new函数将会返回一个该函数的实例对象，而如果函数返回一个引用类型（Object、Array、Function），则new函数与直接调用函数产生的结果等同。

	{% asset_img 1.jpg %}

-----------------------------
jquery包含div本身：$(".test").prop("outerHTML");
--------------------------
$(".checktype input:radio:checked").each(function(index,elem){
	typeArray.push( $(elem).val());//选中的内容数组
});	

```bash
**比较器**
function compare(propertyName) {
	return function (object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (parseFloat(value2) < parseFloat(value1)) {
			return -1;
		}
		else if (parseFloat(value2) > parseFloat(value1)) {
			return 1;
		}
		else {
			return 0;
		}
	}
}
```

iframe跨域修改url
```bash
document.domain = "sinopec.com";
 var url = window.top.location.href;
 var url = window.parent.parent.location.href;
 ```

-------缓存-----
```bash
window.addEventListener('pageshow', function( e ){
	if (e.persisted) {//如果有缓存
		window.location.reload()
	}
})
```


// 清除IE的ajax的结果缓存
$.ajaxSetup({ cache: false });

###获取url参数
 ```bash
function searchvalue(name){
	var name_val='';
    var search=window.location.search.slice(1);
    var ss=search.split('&');
    ss.forEach(function(value,index,array){
    	var aa=value.split('=');
    	if(aa[0]==name){
    		name_val=aa[1];
    	}
    })
    return name_val;
}
```

```bash
/**
   单双击区别
**/
var flag = true;
var	first = 0;
var f_value='';
var second = 0;
var s_value='';
myChart.on('click', function (params) {
	isclick(params);
});
function isclick(p){
	var date = new Date();
	var pa_name=p.name;
	var one = date.getTime();
	if(flag){
		first = one;
		f_value=pa_name;
		flag = false;
	} else {
		second = one;
		s_value=pa_name;
		flag = false;
	}
	var end = 0 ;
	if(second > first){
		end = second - first ;
		if(end < 500  && (f_value==s_value)){//双击
			var param={
				  		code:p.data.code,
				  		name:p.data.name,
				  		value:p.data.value
				  }
			var result_indate=getfdate();
			mui.openWindow({url:'dspzPage.jhtml?IsRefresh=false&token='+initialData.token+'&clientflag='+initialData.clientflag+'&openid='+initialData.openid+'&rowid='+param.code+'&ftdate='+initialData.ftdate+'&indate='+result_indate+'&c_date=1&c_type=1&datarowname='+param.name+'&provence='});

		}else{
			first=one;
			f_value=pa_name;
			second='';
			s_value='';
			return;
		}
	}
}
```
**原生插入html**
element.insertAdjacentHTML(position, text);
position 是相对于 element 元素的位置，并且只能是以下的字符串之一：

beforebegin：在 element 元素的前面。
afterbegin：在 element 元素的第一个子节点前面。
beforeend：在 element 元素的最后一个子节点后面。
afterend：在 element 元素的后面。
text 是字符串，会被解析成 HTML 或 XML，并插入到 DOM 树中。


```bash
******************获取屏幕高度宽度**************************
      s += " 网页可见区域宽："+ document.body.clientWidth+"\n";    
      s += " 网页可见区域高："+ document.body.clientHeight+"\n";    
      s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)"+"\n";    
      s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)"+"\n";    
      s += " 网页正文全文宽："+ document.body.scrollWidth+"\n";    
      s += " 网页正文全文高："+ document.body.scrollHeight+"\n";    
      s += " 网页被卷去的高(ff)："+ document.body.scrollTop+"\n";    
      s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop+"\n";    
      s += " 网页被卷去的左："+ document.body.scrollLeft+"\n";    
      s += " 网页正文部分上："+ window.screenTop+"\n";    
      s += " 网页正文部分左："+ window.screenLeft+"\n";    
      s += " 屏幕分辨率的高："+ window.screen.height+"\n";    
      s += " 屏幕分辨率的宽："+ window.screen.width+"\n";    
      s += " 屏幕可用工作区高度："+ window.screen.availHeight+"\n";    
      s += " 屏幕可用工作区宽度："+ window.screen.availWidth+"\n";    
      s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+"\n";    
      s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"\n";  
*******************************************************************
```

document.onreadystatechange 页面加载状态改变时的事件
document.readyState 返回当前文档的状态
document.onreadystatechange=function(){
   console.log(document.readyState==“complete”);
   //uninitialized还未载入 loading载入中  interactive已加载，文档与用户可以开始交互 complete载入完成

-------------------------------
if(1,1,1){alert("123")}: 
这是逗号运算符，之前所有的运算表达式都会执行，但整个语句的值是最后一个表达式的值
比如：a = (b=2, c=3, 4==4);
括号里的是逗号运算表达式，b=2, c=3这样的赋值表达式会正常执行，
但a最后的值是true，也就是4==4的结果，true；如果换成4==5，a就是false了
而 && 表达式是只要其中一个为假，那么整个表达式就是假
逗号表达式(s=a, b, c, ...., n)s的值就是n的值，与前面的都没有关系，只是正常的执行罢了，不会影响结果
---
js错误处理
```bash
window.onerror = function(){return true;};隐藏错误信息 
try{}catch(e){}捕捉但不跳出循环继续执行
获取标签之外的内容
<h3><span>中文图书</span><a href="item.php?marc_no=0000283487"><b>2.<em style="color:#F00;">经济</em>法</b></a>     D922.29/357</h3>
var text = $("h3").contents().filter(function() { return this.nodeType === 3; }).text(); 
```
**rem.js**
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

**获取iframe 元素**
$('#wrap').contents().find('.bb').html('给我变');
值为空添加setTimeout
