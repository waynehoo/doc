---
title: git新建仓库操作，以及删除并忽略已上传的文件
date: 2021-04-30 16:50:25
tags:
- Git
categories:
- "工具"
isShowComments: true
---

 <Boxx/> 

如果git 没有全局设置，可以先设置一下:

```bash
git config --global user.name "XXX"
git config --global user.email "XXX@XXX.com"
```
## git新建仓库操作
创建 git 仓库:

```bash
mkdir mes-report-client
cd mes-report-client
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/XXX/mes-report-client.git
git push -u origin master
```

已有仓库?
```bash
cd existing_git_repo
git remote add origin https://gitee.com/XXX/mes-report-client.git
git push -u origin master
```
---

## git删除并忽略已上传的文件
### 场景
有时候我们会不小心把敏感文件(比如涉及DB信息等文件)或者没必要上传的文件(比如dist或者node_modules下的文件)上传到远程仓库，需要删除远端仓库的文件并且下次推送的时候忽略不上传。

### 解决方法
#### 1、删除缓存文件

```bash
git rm -r --cached /xxx.js
git status
```

#### 2、在 `.gitignore`中添加要忽略上传的文件

```bash
/src/xxx.js
```

#### 3、提交

```bash
git add .
git commit -m "delete"
git push
```


下面是一些.gitignore文件忽略的匹配规则：
```bash
*.a       # 忽略所有 .a 结尾的文件
!lib.a    # 但 lib.a 除外
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```




