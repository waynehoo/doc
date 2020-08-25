---
title: 正则表达式密码规则
date: 2020-08-19 11:30:25
tags:
- Java
categories:
- "代码段"
isShowComments: true
---


```java
    /***
	 * 规则:字母+数字+特殊字符,且长度不能小于8
	 * @param passWord
	 */
	public static void CheckPassWord(String passWord) {
		 // 邮箱验证规则
	    String regEx = "(?![a-zA-Z]+$)(?!\\d+$)(?![!@#$%^&*]+$)(?![a-zA-Z\\d]+$)(?![a-zA-Z!@#$%^&*]+$)(?![\\d!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]{8,}+$";
	    // 编译正则表达式
	    Pattern pattern = Pattern.compile(regEx);
	    // 忽略大小写的写法 
	    Matcher matcher = pattern.matcher(passWord);
	    // 字符串是否与正则表达式相匹配
	    if(!matcher.matches()) { 
			throw new ElidomValidationException("PASSWORD_ERROR", "密码不符合规则:字母+数字+特殊字符,且长度不能小于8");
	    }
	}
```