---
title: 两个数组的交集(350)
date: 2020-08-30 18:11:25
tags:
- Java
categories:
- "算法"
isShowComments: true
---

## 题目
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```
示例 2:
```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```
 

说明：

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
- 我们可以不考虑输出结果的顺序。

进阶：

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？



## 解题

### HashMap方法
1. 创建 HashMap 记录一个给定数组中的元素以及对应的个数。
2. 遍历另一个数组去和 HashMap 中记录的数据比较，构建出交集数组。
```java
private static int[] ArrayIntersectionByMap(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i : nums1) {
            //如果存在
            map.computeIfPresent(i, (k, v) -> {
                return v + 1;
            });
            //如果不存在
            map.computeIfAbsent(i, (v) -> {
                return 1;
            });
        }

        for (int i : nums2) {
            //如果存在
            map.computeIfPresent(i, (k, v) -> {
                if (v > 0) {
                    list.add(i);
                }
                return v - 1;
            });

        }
        //定义返回的数组，长度为交集元素数量
        int[] returnArray = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            returnArray[i] = list.get(i);
        }
        return returnArray;

    }
```

### 排好序后移动指针方法
 1.  分别对两个数组进行排序，使得两个数组按升序方向对应。
 2.  定义两个指针按条件移动从头开始遍历两个数组，遇到相等的就记录
 3.  有一个指针越界，结束遍历
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class array_intersection {

    public static void main(String[] args) {
        int[] a1;
        int[] a2;
        //初始化
        a1 = new int[]{6, 2, 3, 19, 2, 80, 99, 12, 55, 1};
        a2 = new int[]{3, 2, 7, 19, 2, 1};
        ArrayIntersection(a1, a2);
        System.out.println(Arrays.toString(ArrayIntersection(a1, a2)));
    }

    private static int[] ArrayIntersection(int[] nums1, int[] nums2) {
        //数组排序
        Arrays.sort(nums1);
        Arrays.sort(nums2);

        //扩展：冒泡排序
        //sort(a1);
        //sort(a2);

        int length1 = nums1.length;
        int length2 = nums2.length;
        int index1 = 0, index2 = 0;
        List<Integer> list = new ArrayList<Integer>();

        while (index1 < length1 && index2 < length2) {
            if (nums1[index1] < nums2[index2]) {
                index1++;
            } else if (nums1[index1] > nums2[index2]) {
                index2++;
            } else {
                list.add(nums1[index1]);
                index1++;
                index2++;
            }
        }

        //定义返回的数组，长度为交集元素数量
        int[] returnArray = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            returnArray[i] = list.get(i);
        }
        return returnArray;
    }

    //冒泡排序
    private static void sort(int[] array) {
        int size = array.length;

        for (int i = 0; i < size; i++) {
            for (int j = i + 1; j < size; j++) {
                if (array[i] > array[j]) {
                    int tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
            }
        }
    }
}
```


## 拓展总结
**HashMap**的`computeIfPresent`和`computeIfAbsent`等方法
```java 
// forEach遍历
hashMap.forEach((key,value) -> {
    System.out.println("key："+key + " value: "+value);
});

//computeIfPresent：如果key的值存在，使用函数值代替value
hashMap.computeIfPresent("key",(key,value)-> { return "value"+"xxx";});

// 如果 函数值为null ， 会移除key
hashMap.computeIfPresent("key",(key,value)-> { return null;});

//computeIfAbsent:  如果key的值不存在,使用函数值代替value
hashMap.computeIfAbsent("key",value-> { return "value";});

//putIfAbsent: 当key的值存在时不替换值；当key的值不存在时替换key的值(当key不存在其实就是put操作)
hashMap.putIfAbsent("key","value");

//getOrDefault:当key的值存在时获取值，否则获取指定的默认值；
hashMap.getOrDefault("key","value")

//merge:如果key的值不存在会用新的值代替,如果key的值存在会用函数值代替旧值,当函数值为空会移除key
HashMap<String, Object> hashMap = new HashMap<>();
//如果key的值不存在会用新的值（第二参数）代替
hashMap.merge("key","value",(key,value) -> { return "new value";});   //{key=value}
//如果key的值存在会用函数值代替旧值；新的值（第二参数）不起作用
hashMap.merge("key","value",(key,value) -> { return "new value";});   //{key=new value}
//当函数值为空会移除key 
hashMap.merge("key","value",(key,value) -> { return null;});  //{}
```