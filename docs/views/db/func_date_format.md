---
title: 编写函数实现自定义日期格式
date: 2020-08-19 08:38:25
tags:
- Sql
- Oracle
categories:
- "数据库"
isShowComments: false
---


## 编写函数

```sql
CREATE OR REPLACE FUNCTION FUNC_DATE_FORMAT (p_date        IN VARCHAR2,
                                             p_date_type   IN VARCHAR2)
   RETURN VARCHAR2
IS
   V_date_val   VARCHAR2 (50);
--声明变量
BEGIN
   --年格式化
   IF (UPPER (p_date_type) = UPPER ('yyyy'))
   THEN
      SELECT CHR (65 + TO_NUMBER (TO_CHAR (SYSDATE, p_date_type) - 2018))
        INTO V_date_val
        FROM DUAL;
   ELSE
      --月、日格式化
      SELECT (CASE
                 WHEN TO_NUMBER (TO_CHAR (SYSDATE, p_date_type)) > 9
                 THEN
                    CHR (
                       65 + (TO_NUMBER (TO_CHAR (SYSDATE, p_date_type)) - 10))
                 ELSE
                    REPLACE (TO_CHAR (SYSDATE, p_date_type), '0', '')
              END)
        INTO V_date_val
        FROM DUAL;
   END IF;

   RETURN V_date_val;
END FUNC_DATE_FORMAT;
/
```

## 测试
```sql
-- 当前时间 2020-08-19
 select FUNC_DATE_FORMAT(sysdate,'yyyy') || FUNC_DATE_FORMAT(sysdate,'mm') 
 || FUNC_DATE_FORMAT(sysdate,'dd') DATE_FORMAT  from dual;
```

- 结果

| DATE_FORMAT |
---------------
| C8J         |