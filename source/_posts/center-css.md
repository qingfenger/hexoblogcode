---
title: 水平、垂直居中
date: 2017-09-26 10:42:46
tags: Css
---

水平垂直居中方法
```bash
<!DOCTYPE html>
<html>
<head>
	<title>垂直居中</title>
	<style>
    .out_box{
      width:200px;
      height:100px;
      border:1px solid #f00;
    }
    .out_box img{
      width:50px;
      height:50px;
    }
     /** 图片垂直居中:after（一）*/
    .pic_box1{
    	background-color:#beceeb;
    	text-align:center;
    }
    .pic_box1 img{
    	vertical-align:middle;
    }
    .pic_box1:after{
       display:inline-block;
       width:0px;
       height:100%;
       content:"center";
       vertical-align:middle;
       overflow:hidden;
    }

    /* 图片垂直居中flex（二）*/
    .pic_box2{
      display:flex;
      align-items:center;/*垂直居中*/
      justify-content:center;/*水平居中*/
    }

    /* 图片垂直居中transform（三）*/
    .pic_box3{
      position:relative;
    }
    .pic_box3 img{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%) scale(0.5);
    }
     /* 图片垂直居中table-cell（四）*/
    .pic_box4{
      display:table-cell;
      vertical-align:middle;
      text-align:center;
    }

	</style>
</head>
<body>
    <!-- 图片垂直居中:after（一） （不常用不精确）-->
    <div class="out_box pic_box1" >
    	<img src="commonImg/01.jpg" />
    </div>

    <!-- 图片垂直居中flex（二） -->
    <div class="out_box pic_box2">
      <img src="commonImg/01.jpg" />
    </div>

    <!-- 图片垂直居中transform（三） -->
     <div class="out_box pic_box3">
      <img src="commonImg/01.jpg" />
    </div>

    <!-- 图片垂直居中table-cell（四） -->
     <div class="out_box pic_box4">
      <img src="commonImg/01.jpg" />
    </div>



    <!-- 文字垂直居中(一) -->
     <div class="out_box" style="text-align:center;line-height:100px;">
         line-height
    </div>

    <!-- 文字垂直居中margin:需要固定宽度(二) -->
    <div class="out_box" style="display:block;">
         <div style="width:80px;margin:0 auto;line-height:100px;">
           margin
         </div>
    </div>

    <!-- 文字垂直居中(三) -->
    <div class="out_box" style="display:table-cell;vertical-align:middle;text-align:center;">
         table-cell
    </div>

    <!-- 文字垂直居中(四) -->
    <div class="out_box" style="display:flex;align-items:center;justify-content:center;">
         flex
    </div>

    <!-- 文字垂直居中(五) -->
    <div class="out_box" style="position:relative;">
         <span style="position:absolute;top:50%;left:50%;transform:translate(-50%);">
          transform
        </span>
    </div>
</body>
</html>

```
