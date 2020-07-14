---
title: 水平、垂直居中
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

**垂直居中**
```bash
父：div{
  line-height:0.6rem;
}
子：span{
display: inline-block;
    vertical-align: middle;
    line-height: 0.26rem;
}
```

```bash
水平居中
行内元素: text-align: center
块级元素: margin: 0 auto
position:absolute +left:50%+ transform:translateX(-50%)
display:flex + justify-content: center

垂直居中
设置line-height 等于height
position：absolute +top:50%+ transform:translateY(-50%)
display:flex + align-items: center
display:table+display:table-cell + vertical-align: middle;
```
