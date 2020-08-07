---
title: meta标签的作用与使用
date: 2020-07-29 20:05:48
tags: html
---
***HTML中meta标签的作用与使用***
META标签用来描述一个HTML网页文档的属性

META标签可分为两大部分：HTTP-EQUIV和NAME变量。


***HTTP实例***
HTML代码实例中有一项内容是

<meta http-equiv="Content-Type"content="text/html; charset=gb2312">

其作用是指定了当前文档所使用的字符编码为gb2312，也就是中文简体字符。根据这一行代码，浏览器就可以识别出这个网页应该用中文简体字符显示。类似地，如果将"gb2312"换为"big5"，就是我们熟知的中文繁体字符了。


***HTTP使用方法***
1、<metahttp-equiv="Content-Type"content="text/html;charset=gb_2312-80">和<meta http equiv="Content-Language" content="zh-CN">用以说明主页制作所使用的文字以及语言；又如英文是ISO-8859-1字符集，还有BIG5、utf-8、shift-Jis、Euc、Koi8-2等字符集；

2、<metahttp-equiv="Refresh" content="n;url=http://yourlink">定时让网页在指定的时间n内，跳转到你的页面；

3、<metahttp-equiv="Expires" content="Mon,12 May 2001 00:20:00GMT">可以用于设定网页的到期时间，一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式；

4、<meta http-equiv="Pragma"content="no-cache">是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出；

5、<metahttp-equiv="set-cookie" content="Mon,12 May 2001 00:20:00GMT">cookie设定，如果网页过期，存盘的cookie将被删除。需要注意的也是必须使用GMT时间格式；

6、<metahttp-equiv="Pics-label" content="">网页等级评定，在IE的internet选项中有一项内容设置，可以防止浏览一些受限制的网站，而网站的限制级别就是通过meta属性来设置的；

7、<metahttp-equiv="windows-Target" content="_top">强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作一个frame页调用；

8、<metahttp-equiv="Page-Enter" content="revealTrans（duration=10,transition=50）">和<metahttp-equiv="Page-Exit" content="revealTrans（duration=20，transition=6）">设定进入和离开页面时的特殊效果，这个功能即FrontPage中的"格式/网页过渡"，不过所加的页面不能够是一个frame页面。

HTTP-EQUIV用于向浏览器提供一些说明信息，从而可以根据这些说明做出反应。HTTP-EQUIV其实并不仅仅只有说明网页的字符编码这一个作用，常用的HTTP-EQUIV类型还包括：网页到期时间、默认的脚本语言、默认的风格页语言、网页自动刷新时间等。
