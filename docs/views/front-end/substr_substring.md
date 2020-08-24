---
title: JavaScript的substr和substring区别
date: 2020-08-19 10:05:25
tags:
- JavaScript
categories:
- "前端"
isShowComments: false
---


### substr和substring两个都是截取字符串
**相同：** 一个参数时，都是从该位置截取到末尾

**不同：** 两个参数时,两者功能不同

`substr(a,b)`第二个参数是截取字符串的长度

`substring(a,b)`第二个参数是字符串截取至的下标

```javascript
var msg = "hello Vuepress"
var a = msg.substr(3)
var b = msg.substring(3)
console.log(a)
console.log(b)

var aa = msg.substr(3,5)
var bb = msg.substring(3,5)
console.log(aa)
console.log(bb)
```

**console log:**
```
lo Vuepress
lo Vuepress
lo Vu
lo
```