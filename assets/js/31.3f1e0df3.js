(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{437:function(t,r,e){"use strict";e.r(r);var i=e(2),n=Object(i.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[e("p",[e("strong",[t._v("都是实现了List接口的容器类")]),t._v("。ArrayList底层是基于"),e("strong",[t._v("动态数组")]),t._v("实现的非线程安全的集合；LinkedList基于"),e("strong",[t._v("链表")]),t._v("实现的非线程安全的集合。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("对于随机index访问的get和set方法，一般ArrayList的速度要优于LinkedList")]),t._v("。因为ArrayList直接通过数组下标找到元素，根据下标随机访问数组元素的效率高，向数组尾部添加元素的效率高；而LinkedList要移动指针遍历每个元素直到找到为止。")])]),t._v(" "),e("li",[e("p",[t._v("但是，"),e("strong",[t._v("新增和删除元素，一般LinkedList的速度要优于ArrayList")]),t._v("，因为ArrayList移动数组（可能需要扩容和复制数组），LinkedList实例化对象需要时间外，只需要修改指针即可。例如最坏的情况是删除第一个数组元素，则需要将第2至第n个数组元素各向前移动一位。而之所以称为动态数组，是因为Arraylist在数组元素超过其容量大，Arraylist可以进行扩容（针对JDK1.8  数组扩容后的容量是扩容前的1.5倍），Arraylist源码中最大的数组容量是Integer.MAX_VALUE-8，对于空出的8位，目前解释是 ：①存储Headerwords；②避免一些机器内存溢出，减少出错几率，所以少分配③最大还是能支持到Integer.MAX_VALUE（当Integer.MAX_VALUE-8依旧无法满足需求时）")])]),t._v(" "),e("li",[e("p",[t._v("而只要ArrayList的当前容足够大，add()操作向数组的尾部的效率非常高的，但当向数组指定位置添加数据时，会进行大量的数组移动复制操作。而数组复制时，最终将调用System.arraycopy()方法，因此add()操作的效率还是相当高的。尽管这样当向指定位置添加数据时也还是比Linkedlist慢，后者添加数据只需要改变指针指向即可。Arraylist删除数组也需要移动数组，效率较慢。")])]),t._v(" "),e("li",[e("p",[t._v("LinkedList集合不支持高效的随机随机访问（RandomAccess），ArrayList的空间浪费主要体现在在list列表的结尾预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗相当的空间")])])]),t._v(" "),e("blockquote",[e("p",[t._v("千万别在循环中调用LinkedList的get方法，耗时会让你崩溃")])]),t._v(" "),e("p",[e("br"),e("br"),e("br"),e("br"),t._v("\n参考链接："),e("br"),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/meism5/java/article/details/89845468",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/weixin_42468526/java/article/details/81178698",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接2"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);