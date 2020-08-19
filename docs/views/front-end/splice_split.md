---
title: JavaScript的split() splice() slice()方法
date: 2020-08-19 016:20:25
tags:
- JavaScript
categories:
- "前端"
isShowComments: false
---

<!-- <Boxx/> -->
<!-- [[toc]] -->

## split()方法
用于把一个字符串分割成字符串数组

## splice()方法
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

语法：`arrayObject.splice(index,howmany,item1,.....,itemX)`

| 参数	            | 描述                                                            |
| ----              | ----                                                           |
| index	            | 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。|
| howmany	        | 必需。要删除的项目数量。如果设置为 0，则不会删除项目。              |
| item1, ..., itemX	| 可选。向数组添加的新项目。                                        |

## slice()方法
从已有的数组中返回选定的元素

**注意：** splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
```javascript
var tg = "e target value trim()";
var qrcode = tg.split(" ");   //按空格分割成字符串数组qrcode
console.log(qrcode);

for (i in qrcode) {
    if (qrcode[i] === "target") {
        qrcode.splice(i, 1);  //删除指定元素
    }
}
console.log(qrcode);          //使用splice后改变了原数组：'target'被删除
console.log(qrcode.slice(1)); //使用slice，从第一个元素开始截取数组
console.log(qrcode);          //使用slice，没有改变之前的数组
```
`console log:`<br/>
`(4) ["e", "target", "value", "trim()"]`<br/>
`(3) ["e", "value", "trim()"]`<br/>
`(2) ["value", "trim()"]`<br/>
`(3) ["e", "value", "trim()"]`<br/>