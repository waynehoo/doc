---
title: java中逗号分隔的字符串和List相互转换
date: 2020-08-21 10:55:25
tags:
- Java
categories:
- "后端"
isShowComments: true
---

### 逗号分隔的字符串转List
- 直接用Java Util的Arrays.asList()方法
### 将List转换为逗号分隔的字符串
- 1.利用**Guava**的Joiner  (推荐使用，语义化可读性强，比如`skipNulls()`为过滤掉`null`)
- 2.利用**Apache Commons**的StringUtils
```java
import com.google.common.base.Joiner;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class test {
    public static void main(String[] args) {
        //将逗号分隔的字符串转换为List
        String str = "a,b,c";
        List<String> list = Arrays.asList(str.split(","));
        System.out.println(str + " --> " + list);

        //将List转换为逗号分隔的字符串
        //1.利用Guava的Joiner
        List<String> list1 = new ArrayList<String>();
        list1.add("aa");
        list1.add("bb");
        list1.add(null);
        list1.add("cc");

        String str1 = Joiner.on(",").skipNulls().join(list1);
        System.out.println(list1 + " --> " + str1);

        //2.利用Apache Commons的StringUtils
        List<String> list2 = new ArrayList<String>();
        list2.add("xx");
        list2.add("yy");
        list2.add(null);
        list2.add("zz");
        String str2 = StringUtils.join(list2.toArray(), ",");
        System.out.println(list2 + " --> " + str2);
    }
}
```


**结果:**
```text
a,b,c --> [a, b, c]
[aa, bb, null, cc] --> aa,bb,cc
[xx, yy, null, zz] --> xx,yy,,zz
```


依赖：
```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>29.0-jre</version>
</dependency>
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.10</version>
</dependency>
```