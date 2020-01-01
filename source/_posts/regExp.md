---
title: regExp
date: 2020-01-01 12:09:37
tags: js
---
正则表达式
/abc/.exec("abcdef");//"abc"
/abc/.test("abcde");//true
/abc/.toString();//"/abc/"
var reg=/abc/;
reg.compile("def");//compile改变正则的属性
reg.test("def");//true

String 类型与zhengze相关的方法
“abcabcdef”.search(/(abc)\1/);  //0
"aabbbbcc".replace(/b+?/,"1");   //aa1bbbcc
"aabbbbcc".match(/b+/);    //["bbbb"]
"aabbbbccbbaa".match(/b+/g);    //["bbbb","bb"]
"aabbbbccbbaa".split(/b+/);  //["aa","cc","aa"]
