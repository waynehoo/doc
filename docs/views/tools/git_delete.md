---
title: git commit之后，撤销commit
date: 2021-04-30 16:33:25
tags:
- Git
categories:
- "工具"
isShowComments: true
---

 <Boxx/> 

### 场景

**开发完后，执行`git add .`并且提交了`git commit -m "message"`,如果想撤回commit，怎么办？**

一般执行语句`git reset --soft HEAD^`就可以了，这是撤回commit操作，代码仍然保留。

HEAD^的意思是上一个版本，也可以写成HEAD~1，如果你进行了2次commit，想都撤回，可以使用HEAD~2。

下面简单说下reset的不同参数。

`--mixed`

不删除工作空间改动代码，撤销commit，并且撤销git add . 操作

这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。


`--soft`

不删除工作空间改动代码，撤销commit，不撤销git add . 

`--hard`

删除工作空间改动代码，撤销commit，撤销git add . 

**注意完成这个操作后，就恢复到了上一次的commit状态。**

---
**最后，如果commit注释写错了，只是想改一下注释，只需要：**
```bash
git commit --amend  #注意是两个杠
```
此时会进入默认vim编辑器，修改注释完毕后保存就好了。


