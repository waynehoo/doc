---
title: 最长公共前缀(14)
date: 2020-09-01 21:06:25
tags:
- Java
categories:
- "算法"
isShowComments: true
---

## 题目
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1:
```
输入: ["flower","flow","flight"]
输出: "fl"
```
示例 2:
```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```
说明:所有输入只包含小写字母 a-z 。


### 解题

> 1. 所求的最长公共前缀子串一定是每个字符串的前缀子串。所以选择第一个字符串作为前缀串，与其他字符串进行判断，看是否是所有字符串的公共前缀。
> 2. 不满足则把前缀字符串（第一个）往前移一位，继续比较
> 3. 另外注意数组为空的情况

这里的时间性能是O(m·n·m)。性能较差。
```java
public class max_prefix {
    public static void main(String[] args) {
        //String[] strings = new String[]{"flower","flow","flight"};
        String[] strings = new String[]{"dog", "racecar", "car"};
        //String[] strings = new String[]{};  //空数组测试
        String aa = longestCommonPrefix(strings);
        System.out.println(aa);
    }

    private static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0)
            return "";
        String prefix = "";
        //把数组第一个元素当做前缀，如果不是共同前缀则减一位继续循环
        for (int i = 0; i < strs[0].length(); i++) {
            prefix = strs[0].substring(0, strs[0].length() - i);
            int count = 0;
            for (String s : strs) {
                if (s.indexOf(prefix) != 0 && prefix.length() > 1)
                    break;
                if (s.indexOf(prefix) != 0 && prefix.length() == 1)
                    return "";
                count++;
                if (count == strs.length)
                    return prefix;
            }
        }
        return prefix;
    }
}
```

### 其他方法
横向扫描：前两个字符串找公共子串，将其结果和第三个字符串找公共子串……直到最后一个串。时间性能为O(n·m)。

> 1. 令第一个字符串为公共字符串 ans，进行初始化
> 2. 遍历后面的字符串，依次将其与 ans 进行比较，两两找出公共前缀，最终结果即为最长公共前缀
> 3. 如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回

```java
public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) 
            return "";
        String ans = strs[0];
        for(int i =1;i<strs.length;i++) {
            int j=0;
            for(;j<ans.length() && j < strs[i].length();j++) {
                if(ans.charAt(j) != strs[i].charAt(j))
                    break;
            }
            ans = ans.substring(0, j);
            if(ans.equals(""))
                return ans;
        }
        return ans;
    }
```
两种方法时间上相差不少
![](/doc/img/algorithm/a2-1.png)
