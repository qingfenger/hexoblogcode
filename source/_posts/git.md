---
title: git
date: 2017-09-03 20:33:39
tags:
---
当前任务，学习中... 公司小范围用法：  服务器上做的：
``` bash
1.在服务器上建立一个用户，这里命名为git。 ubuntu下:  useradd  git —— passwd git 1 （改密码为1）
2.找个目录，建立空仓库 git --bare init 。 ubuntu下： cd /opt —— mkdir git —— git --bare init
3.建立文件夹project.git (名字随便取，这里取project，以后别人git clone时就会生成project文件夹)。
4.再建立一个文件夹.ssh，用来存入需要访问的成员的 ssh-keygen
```
### 项目成员机上要做的： 

生成本机的ssh-keygen：直接运行 ssh-keygen ，回车，回车。生成的密钥会在window下: “C:\Documents and Settings\userName\.ssh”，有两个文件，复制id_rsa.pub的内容给服务器管理员（邮件或直接QQ吧！）。
轮到服务器管理员：在.ssh文件夹下建立 id_rsa.pub 文件 ， 或直接：cat ~/opt/.ssh/id_rsa.pub 加成员的id_rsa.pub内容 （反正添加到这个文件后面就可以）
下面小组成员应该可以正常访问服务器了（对了，在此之前，需要安装ssh服务器 ： apt-get install ssh）
项目组老大要做的：
     ``` bash
    1.做一个基本项目原型，供项目成员克隆下载 ， 将已有文件推送到git服务器上
    2.新建文件夹，git init 初始化git 。
    3.git add *    将所有文件加入git 监控  ，可以用git status 查看监控状态
    4.git commit -m "你的提交说明"
    5.git remote add origin git@yourServerIP:/opt/git/project.git    (这里是将远程git服务器命名成origin，方便以后使用，名字随便改)
    6.推送到服务器   git push origin master   意思是 : git 推送 到  服务器目录 哪个分支—master 。 至此，完毕。
    ```
    (-a -m -am/添加 提交 添加提交;git add --all 第一次提交)
项目成员基本步骤：
``` bash
1.git clone git@serverIP:/opt/git/project.git     完成仓库克隆工作
2.做该做的事，
3.git commit -a -m "你的提交说明"
4.git remote add origin git@yourServerIP:/opt/git/project.git
5.git push origin master 上传分支。
```
当然，还有更多的分支使用技巧...请参考以下书籍：
Pro.Git-zh_CN
还有一本：
Git Community Book 中文版
 下面是本人在使用git过程遇到的问题：

git服务器把文件藏在哪了呢？
答：在objects文件夹下。查看文件的方式：不用进入目录下，直接用git cat-file -p 短目录名（如0e）+文件名前n位即可
——————————————————————————————————————
在本地新建dev分支 
git branch dev
git checkout dev
然后建立联系
git push -u origin dev
————————————
参考文章：http://www.ossxp.com/doc/git/gitolite.html

原文: [http://www.cnblogs.com/trying/archive/2012/06/28/2863758.html](http://www.cnblogs.com/trying/archive/2012/06/28/2863758.html)
