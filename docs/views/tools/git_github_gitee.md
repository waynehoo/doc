---
title: 一套代码git管理,同时推送至github和gitee
date: 2020-08-25 09:33:25
tags:
- Git
categories:
- "工具"
isShowComments: true
---

 <Boxx/> 

*一般我们会有github和gitee两个托管平台，git如何将一套代码同时push到两个平台。还有一种情况，公司一个gitee账号，个人一个gitee账号，如何实现不用修改过或删除Windows密码凭证，而提交到不同账号的gitee远程仓库。*

---

<!-- more -->

**1.`C:\Users\.gitconfig`删除git全局配置的user.name和user.email信息，因为git对应多个不同的远端仓库（github和gitee,或有两个gitee的情况）,不能共用一个name和email**

```bash
git config --global --unset user.name
git config --global --unset user.email
```

**2.为每个项目repo设置自己的user/email**

```bash
git config  user.email "wy@example.com"
git config  user.name "wy"
```

**3.在`C:\Users\asus\.ssh`生成密钥对:按自己的需求生成唯一id的密钥对，如下`gitee_id_rsa`,则会在目录下生成一对密钥（`gitee_id_rsa`为私钥，`gitee_id_rsa.pub`为公钥，公钥需要配置到`github`或者`gitee`）**

```bash
ssh-keygen -t rsa -C "XXX@example.com" -f "gitee_id_rsa"
```

![](/doc/img/tools/git-keys.png)

**4.用户`.ssh`下(与密钥对同级目录)新建config配置文件，git通过ssh与远端仓库交互。本地配置的为私钥，公钥需要添加在`github`或者`gitee`中,如何在`github`或者`gitee`中配置公钥这里不赘述。** [gitee参考](https://gitee.com/help/articles/4191#article-header0)/[github参考](https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

```bash
# gitee person
Host gitee.com                        #  唯一主机
HostName gitee.com
PreferredAuthentications publickey    # gitee上配置公钥认证
IdentityFile ~/.ssh/gitee_pub_id_rsa  # 本地配置私钥位置

# gitee work
Host work.gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_work

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```

**5.测试链接**

注意这里的 T 一定要大写 

```bash
ssh -T git@github.com 
ssh -T git@gitee.com
ssh -T git@work.gitee.com
```

测试结果：可以看到返回对应的名字

![](/doc/img/tools/git-test.png)


**6.本地项目仓库下的git配置文件config，使用ssh的方式，如`git@github.com:waynehoo/doc.git`：@github.com为.ssh下自定义的config配置文件中的Host,后面`waynehoo/doc.git`为github或者gitee的 用户名和项目名**

可以手动配置，也要执行命令, 记得设置该项目name/email(我已在第2点配置)

```bash
git remote rm origin
git remote add github git@github.com:waynehoo/doc.git          #ssh连接方式
git remote add gitee git@gitee.com:wayne05/doc.git
```

config内容：
```bash
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "github"]
	url = git@github.com:waynehoo/doc.git
	fetch = +refs/heads/*:refs/remotes/github/*
[remote "gitee"]
	url = git@gitee.com:wayne05/doc.git
	fetch = +refs/heads/*:refs/remotes/gitee/*
[user]
	name = wy
	email = wy@example.com

```



**7.如要要提交代码至`github` 则执行 `git push github master`**

  **如要要提交代码至`gitee` 则执行 `git push gitee master`**



**8.至此已经配置完成，可以看到一套代码下执行不同的命令可以推送至不同的远程仓库，如果想一个命令同时推送至不同仓库，可以配置**

```bash
[remote "origin"]
	url = git@github.com:waynehoo/doc.git
	fetch = +refs/heads/*:refs/remotes/github/*
	url = git@gitee.com:wayne05/doc.git
```

**执行`git push origin master`即可同时推送多个仓库。**