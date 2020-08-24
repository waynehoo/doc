---
title: Java时间相关的代码段
date: 2020-08-19 09:52:25
tags:
- Java
categories:
- "代码段"
isShowComments: false
---


```java
//格式化时间yyyy-MM-dd
SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
input.setApplyAt(sf.format(new Date()));
```