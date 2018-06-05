---
title: css
date: 2017-09-26 10:42:46
tags: Css
---
**禁止网页文本选中**
body{
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

**小于1px的左边框**
.detail_list  li .row_con>div{
  height:0.8rem;
  box-sizing:border-box;
  background-position: 0 0;
    background-repeat: repeat-y;
    background-size: 1px 100%;
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(20%,transparent),color-stop(20%,#dcdcdc),color-stop(80%,#dcdcdc),color-stop(80%,transparent));
    background-image: -webkit-linear-gradient(top,transparent 20%,#dcdcdc 120%,#dcdcdc 80%,transparent 80%);
    background-image: linear-gradient(180deg,transparent 20%,#dcdcdc 20%,#dcdcdc 80%,transparent 80%);
}
---
<!--more-->
CSS3计算calc和vw单位巧妙实现滚动条出现页面不跳动 .wrap-outer指的是居中定宽主体的父级
.wrap-outer {   
    margin-left: calc(100vw - 100%);   
}  
.demo{
	width:100vw;
	font-size:10vw;//宽度为窗口100%，字体大小为窗口的10%；
}

```bash
垂直居中/position:absolute;
.parent {
            width:800px;
            height:500px;
            border:2px solid #000;
            display:table-cell;
            vertical-align:middle;
            text-align: center;
        }
.child {
    width:200px;
    height:200px;
    display:inline-block;
    background-color: red;
}
```

多行文本显示省略号
``` bash
overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/


display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```
垂直居中方法
```bash
    <div style="border:1px solid #333333;width:130px;height:80px;display:table-cell;vertical-align:middle;">
      <div>啊啊啊啊啊啊啊啊啊啊</div>
    </div>
    <div style="border:1px solid #333333;width:130px;height:80px;display:flex;align-items:center;">
      <div>啊啊啊啊啊啊啊啊啊啊</div>
    </div>
    <div style="border:1px solid #333333;width:130px;height:80px;position:relative;">
      <div style="position:absolute;top:50%;transform:translateY(-50%);">啊啊啊啊啊啊啊啊啊啊</div>
    </div>
    <div style="border:1px solid #333333;width:130px;height:80px;display:table-cell;vertical-align:middle;">
      <div>啊啊啊啊啊啊啊啊啊啊</div>
    </div>
```
---------ie 背景透明文字不透明--------------
background:rgba(255, 255, 255, 0.8) none repeat scroll 0 0 !important;/*实现FF背景透明，文字不透明*/
filter:Alpha(opacity=80); background:#fff;/*实现IE背景透明*/}
.con p{ position:relative;}
/*实现IE文字不透明*/
---------------------------------------------

iframe:frameborder="0" scrolling="no" 
表格边框：table{
	          border-collapse:collapse;合并separate;分开
	          border-spacing:10px 50px;//边框空间
	          empty-cells:hide;隐藏表格中空单元格上的边框和背景
          }

```bash
---------------改变input输入框中placeholder的字体样式：--------------------
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

----------transiton-----------------
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
-----------------
```bash
苹果input disabled样式
	input:disabled {
		-webkit-text-fill-color: rgba(0, 0, 0, 1);
		-webkit-opacity: 1;
	}
```	

```bash
*****************************滚动条设置***********************************
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

**css:**
**文字渐变**
    background-image: -webkit-linear-gradient(left, rgb(255, 118, 92), rgb(255, 35, 179));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;//text-fill-color会覆盖color所定义的字体颜色：

**边框小于1px**
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

**垂直居中**
父：div{
  line-height:0.6rem;
}
子：span{
display: inline-block;
    vertical-align: middle;
    line-height: 0.26rem;
}

**fixd absolute遮罩层点击时永远不获取target即没有点击事件css3：pointer-events:none;**
border-radius:100px/20px;//横向radius/纵向radius