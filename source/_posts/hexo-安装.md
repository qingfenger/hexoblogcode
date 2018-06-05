---
title: hexo 安装
comments: true
date: 2017-09-03 20:16:29
tags: Hexo
---
1.首先安装node npm git

2.安装hexo ：npm install hexo-cli -g
<!--more-->
3.安装 Hexo 完成后，执行下列命令，初始化并安装依赖，Hexo将会在指定文件夹中新建所需要的文件。
	``` bash
	hexo init <folder>
	cd <folder>
	npm install
    ```
4.生成静态页面 ：
	``` bash
	hexo generate	
	```
5.本地启动预览 ：hexo server 浏览器输入http://localhost:4000
6.部署到github
	在github上创建名为your_user_name.github.io的仓库，例如我的github的用户名是flyxu,那么创建的仓库名称为flyxu.github.io
	编辑博客所在文件夹下的_config.yml文件,翻到最下面，修改deploy如下：
	``` bash
	deploy:
	  type: git
	  repository: git@github.com:flyxu/flyxu.github.io.git
	  branch: master	
	```

7.然后执行下面命令安装 hexo-deployer-git
(如果执行hexo d报ERROR Deployer not found: Git执行这一步)
    ``` bash
    npm install hexo-deployer-git --save
    ```
8.最后部署到github:hexo deplo
9.每次部署的步骤，可按以下三步来进行。
	``` bash
	hexo clean
	hexo generate 
	hexo deploy
    ```
    clean的作用是清理缓存，有时候作用很大，最好不要舍弃这一步，最后两步可简写为hexo d -g
    
### 10.一些常用命令：
	``` bash
	hexo new "postName" #新建文章
	hexo new page "pageName" #新建页面
	hexo generate #生成静态页面至public目录
	hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
	hexo deploy #将.deploy目录部署到GitHub
	hexo help # 查看帮助
	hexo version #查看Hexo的版本
    ```
###---秘钥：-----
	``` bash
	git生成秘钥：ssh-keygen -t rsa -c “您的邮箱”
	ssh-keygen -t rsa
	git clone https://github.com/iissnan/hexo-theme-next themes/next主题

	查看是否已经有了ssh密钥：cd ~/.ssh
	如果没有密钥则不会有此文件夹，有则备份删除
	2）生存密钥：
	$ ssh-keygen -t rsa -C “haiyan.xu.vip@gmail.com”
	或者ssh-keygen -t rsa -C wangqin798@126.com -f ~/.ssh/test指定文件名为test
	(-t指定密钥的类型，默认就是rsa，所以不加-t rsa也行，如果你想生成dsa密钥，就需要加参数-t dsa。)
	按3个回车，密码为空。
	Your identification has been saved in /home/tekkub/.ssh/id_rsa.
	Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
	The key fingerprint is:
	最后得到了两个文件：id_rsa和id_rsa.pub
	3）添加密钥到ssh：ssh-add 文件名
	需要之前输入密码。
	```
	``` bash
    在github上添加ssh密钥，这要添加的是“id_rsa.pub”里面的公钥。
	测试
	在控制台上测试一下，输入：
	ssh -T git@github.com
	只要看到最后一行Hi chenlianjiang! You've successfully authenticated, but GitHub does not provide shell access，说明验证成功了
   ```
   问题：是发布到github之后路径找不到，在本地一样的路径没有问题
   解决：hexo配置问题，检查下根目录的_config.yml（注意不是yilia目录下的）的root设置
         应该是 root: /fullstack.github.io/
         
git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
更新
cd themes/yilia
git pull
主题：[https://github.com/litten/hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)
原文: [http://blog.csdn.net/yaphat/article/details/53187675](http://blog.csdn.net/yaphat/article/details/53187675)

Estelle 独立 友好 温馨 
