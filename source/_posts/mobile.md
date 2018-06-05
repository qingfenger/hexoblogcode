---
title: mobile
date: 2017-09-25 14:42:07
tags: Mobile
---

``` bash
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<meta http-equiv="content-security-policy">
<meta name = "format-detection" content = "telephone=no">
**************webAPP 苹果手机样式设置Start**************
1、iPhone、iPad默认按钮样式问题
  解决方法给按钮元素添加一个-webkit-appearance: none;具体代码
  input[type="button"], input[type="submit"], input[type="reset"] {
  -webkit-appearance: none;
  }
2、隐藏Safari用户栏
  为了更加像原生应用，我们还可以对Safari的用户栏和地址栏进行隐藏，这个叫作standalone模式，加入以下meta进入此模式：
  <meta name="apple-mobile-web-app-capable" content="yes" /> 
3、Icon
  iOS所用的icon是png格式的，其提供了apple-touch-icon和apple-touch-icon-precomposed两种icon，使用方式如下：
  <link rel="apple-touch-icon" href="/apple-touch-icon.png"/> 
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png"/>
4、数字禁止转换为电话号
  <meta name=”format-detection” content=”telephone=no” />
5、删除默认的苹果工具栏和菜单栏
  <meta name=”apple-mobile-web-app-capable” content=”yes” />
6、控制状态栏显示样式
  <meta name=”apple-mobile-web-app-status-bar-style” content=”default” />默认样式
  <meta name=”apple-mobile-web-app-status-bar-style” content=”black” />黑色
  <meta name=”apple-mobile-web-app-status-bar-style” content=”black-translucent” />透明
```
<!--more-->

var btn = document.getElementById('btn');
btn.onclick = function(event){//给btn绑定一个点击事件
  //这里用一个三元表达式来做简单判断，如果存在document.all那么使用window.event
  //否则就直接用event
  var ev = document.all ? window.event : event;
  alert(ev);
} 


``` bash
//对象字量量格式
var obj = { name: "姓名", sex: 25 };
//JSON对象格式
var json = { "name": "姓名", "sex": "25" };
//JSON字符串
var json_string = '{"name":"姓名","sex":"25"}';
//测试
document.write(json_string.name) //结果：undefined，说明：不能访问JSON字符串里面的数据
var string_to_json = JSON.parse(json_string);
document.write(string_to_json.name) //结果：姓名，说明：把JSON字符串转换为JSON对象格式后可以访问数据
var json_to_string = JSON.stringify(json);
document.write(json_to_string); //结果：{"name":"姓名","sex":"25"} ，说明：把JSON对象转换成了字符串
```
------------------------------------------
在jquery的ajax函数中，可以传入3种类型的数据
1.文本："uname=alice&mobileIpt=110&birthday=1983-05-12"
2.json对象：{uanme:'vic',mobileIpt:'110',birthday:'2013-11-11'}
3.json数组：
[
    {"name":"uname","value":"alice"},
    {"name":"mobileIpt","value":"110"},   
    {"name":"birthday","value":"2012-11-11"}
]
------------------------------------------

//设小号字体
``` bash
body,p{ margin:0; padding:0}
p{font-size:8px;}
span{-webkit-transform:scale(0.8);-o-transform:scale(1); display:inline-block}
```

@media
``` bash
device-height:设备屏幕的高度。
orientation:检测设备目前处于横向还是纵向状态。
aspect-ratio:检测浏览器可视宽度和高度的比例。(例如：aspect-ratio:16/9)
device-aspect-ratio:检测设备的宽度和高度的比例。
```

