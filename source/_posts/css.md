---
title: css
date: 2017-09-26 10:42:46
tags: Css
---

垂直居中方法
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
垂直居中：虚构一个全高的隐形的 :after 然后让图片和它居中。
```bash
.pic_box{
　　width:300px;
　　height:300px;
　　background-color:#beceeb;
　　text-align:center;
}
.pic_box img{
　　vertical-align:middle;
}
.pic_box:after{
　　display:inline-block;
　　width:0;
　　height:100%;
　　content:"center";
　　vertical-align:middle;
　　overflow:hidden;

```

```bash
    <div style="border:1px solid #333333;width:130px;height:80px;display:table-cell;vertical-align:middle;">
      <div>垂直居中table-cell</div>
    </div>
    <div style="border:1px solid #333333;width:130px;height:80px;display:flex;align-items:center;">
      <div>垂直居中flex</div>
    </div>
    <div style="border:1px solid #333333;width:130px;height:80px;position:relative;">
      <div style="position:absolute;top:50%;transform:translateY(-50%);">垂直居中translateY(-50%)</div>
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
```
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

**fixd absolute遮罩层点击时永远不获取target即没有点击事件**
border-radius:100px/20px;//横向radius/纵向radius


**css3兼容ie9**
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