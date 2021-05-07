---
title: Git“开发到一半”处理办法
date: 2020-09-09 20:33:25
tags:
- Git
categories:
- "工具"
isShowComments: true
---

 <Boxx/> 

### 场景一

**开发到一半，需要处理其他紧急情况，使用 git stash暂存当前进度，处理完后再释放暂存的代码继续工作**

```bash
1. git stash                 将未提交代码暂存到本地，工作区的代码恢复到干净的状态

2. git stash list           查看stash 列表会发现刚才的对面被暂存到 stash 了

3. git stash apply [序号]    (序号省略)将最近一次 stash 给恢复回来

4. git stash drop 序号        删除 stash
```

注意 git stash pop，和git stash apply一样也会将当前分支的最后一次缓存的内容释放出来，但是释放出来后的记录不存在list中

**注意事项**

默认情况下，它只会将工作区中的修改的文件进行 stash，也就是指 stash 一些 modified 状态的文件。如果要将 untracked 和暂存区中的文件都进行 stash。要使用如下命令：

```bash
git stash  --include-untracked
```

### 场景二

**开发到一半，下班了想回家再继续当前工作，又不想commit造成垃圾提交，可新建一个分支提交，然后再进行后续操作**

如果开发到一半没有完成，想回家再开发可按以下步骤操作：

```bash
$ git stash                            #将没有提交的代码暂存
$ git branch [new-branch] 
$ git checkout [new-branch]            #新建分支并转到新分支下，两句可以合成一个语句git checkout -b new-branch
$ git stash pop                        #释放出缓存的代码
$ git push --set-upstream origin nb    #分支提交至远程

###回家后
$ git checkout -b new-branch origin/new-branch    #把分支拉取下来
##此时在家尽情的开发（分支下）
$ git commit
$ git merge [new-branch]                  #切到master分支下，合并分支到master
$ git push                                #push主分支
$ git branch -d [new-branch]              #可以删除本地分支
$ git push origin --delete [new-branch]   #可以删除远程分支
##结束
```

**以下为分支相关操作：**

```bash
# 列出所有本地分支
$ git branch
# 列出所有远程分支
$ git branch -r
# 列出所有本地分支和远程分支
$ git branch -a
# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]
# 新建一个分支，并切换到该分支
$ git checkout -b [branch]
# 新建一个分支，指向指定commit
$ git branch [branch] [commit]
# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]
# 切换到指定分支，并更新工作区
$ git checkout [branch-name]
# 切换到上一个分支
$ git checkout -
# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream-to=[origin/branch-name] [local-branch]
$ git branch --set-upstream-to=origin/nb new-branch
# 合并指定分支到当前分支
$ git merge [branch]
# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]
# 删除分支
$ git branch -d [branch-name]
# 删除远程分支
# 方法一
$ git push origin --delete [branch-name]
# 方法二
$ git branch -dr [remote/branch]     #例如 git branch -dr origin/nb0506
$ git push origin :nb0506   # 例如 git push origin :nb0506（注意格式）
```