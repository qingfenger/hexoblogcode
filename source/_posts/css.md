---
title: css
date: 2020-07-14 10:42:46
tags: Css
---

**-ie 背景透明文字不透明**
```bash
background:rgba(255, 255, 255, 0.8) none repeat scroll 0 0 !important;/*实现FF背景透明，文字不透明*/
filter:Alpha(opacity=80); background:#fff;/*实现IE背景透明*/}
.con p{ position:relative;}
```

**实现IE文字不透明**
```bash
iframe:frameborder="0" scrolling="no" 
表格边框：table{
	          border-collapse:collapse;合并separate;分开
	          border-spacing:10px 50px;//边框空间
	          empty-cells:hide;隐藏表格中空单元格上的边框和背景
          }
```

**改变input输入框中placeholder的字体样式**
```bash
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #f00;  
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #f00;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #f00;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #f00;
}
还原移动端按钮的样式：-webkit-appearance:none;
```

**transiton**
```bash
@keyframes mymove
{
0%   {top:0px;}
25%  {top:200px;}
50%  {top:100px;}
75%  {top:200px;}
100% {top:0px;}
}
@-moz-keyframes mymove /* Firefox */
{
0%   {top:0px;}
25%  {top:200px;}
50%  {top:100px;}
75%  {top:200px;}
100% {top:0px;}
}
@-webkit-keyframes mymove /* Safari 和 Chrome */
{
0%   {top:0px;}
25%  {top:200px;}
50%  {top:100px;}
75%  {top:200px;}
100% {top:0px;}
}
@-o-keyframes mymove /* Opera */
{
0%   {top:0px;}
25%  {top:200px;}
50%  {top:100px;}
75%  {top:200px;}
100% {top:0px;}
}
```


**苹果input disabled样式**
```bash
	input:disabled {
		-webkit-text-fill-color: rgba(0, 0, 0, 1);
		-webkit-opacity: 1;
	}
```	

***滚动条设置**
```bash
   .reportLeft::-webkit-scrollbar {  
        width: 8px;/*滚动条高度*/  
        height: 8px; /*滚动条宽度*/ 
        background-color: #cccccc;  
      }  
      /*定义滚动条轨道 内阴影+圆角*/  
   .reportLeft::-webkit-scrollbar-track {  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
        background: #fff ;  
      }  
      /*定义滑块 内阴影+圆角*/  
    .reportLeft::-webkit-scrollbar-thumb {  
        border-radius: 3px;  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color:rgba(204, 204, 204, 0.7);  
      }  
    .reportLeft::-webkit-scrollbar-thumb:hover {  
        border-radius: 3px;  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color:rgba(204,204,204, 1);  
      }
```
**css:**
**文字渐变**
```bash
    background-image: -webkit-linear-gradient(left, rgb(255, 118, 92), rgb(255, 35, 179));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;//text-fill-color会覆盖color所定义的字体颜色：
```

**边框小于1px**
```bash
.bdr-r:after {
    height: 100%;
    content: '';
    width: 1PX;
    border-right: 1PX solid #f0f0f0;
    position: absolute;
    top: 0;
    right: 0;
    transform: scaleX(0.5);
    -webkit-transform: scaleX(0.5);
    z-index: 10;
}
```

**fixd absolute遮罩层点击时永远不获取target即没有点击事件**
border-radius:100px/20px;//横向radius/纵向radius


**css3兼容ie9**
```bash
behavior: url(ie-css3.htc);/*兼容ie，加上这句*/
**iconfont 用伪元素添加时为空方块时添加font-family: "iconfont";
           content默认为16进制所以content中不需要添加X
           content:attr(data-icon);未验证成功**
 .com-dialog .el-dialog__title:before{
    font-family: "iconfont";
    /*content:"\e639";*/
    content:attr(data-icon);
    font-size:16px;
    margin-right:8px;
    font-weight:normal;
  }
  ```

  **1rem、1em、1vh、1px各自代表的含义？**
  ```bash
  rem
  rem是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。

  em
  子元素字体大小的em是相对于父元素字体大小
  元素的width/height/padding/margin用em的话是相对于该元素的font-size

  vw/vh
  全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。
     1.vw：1vw等于视口宽度的1%。
     2.vh：1vh等于视口高度的1%。
     3.vmin：选取vw和vh中最小的那个。
     4.vmax：选取vw和vh中最大的那个。
   vh and vw：相对于视口的高度和宽度，而不是父元素的（CSS百分比是相对于包含它的最近的父元素的高度和宽度）。1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度。

  px
  px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
  一般电脑的分辨率有{1920*1024}等不同的分辨率
  1920*1024 前者是屏幕宽度总共有1920个像素,后者则是高度为1024个像素
  ```

  ***calc() 函数用于动态计算长度值。***
  需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
  任何长度值都可以使用calc()函数进行计算；
  calc()函数支持 "+", "-", "*", "/" 运算；
  calc()函数使用标准的数学运算优先级规则；
