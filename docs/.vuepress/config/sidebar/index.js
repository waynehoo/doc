//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '前端',
            collapsable: true,
            children: [
                'front-end/splice_split',
                'front-end/substr_substring'
            ]
        },
        {
            title: '后端',
            collapsable: true,
            children: [
                'back-end/substr_substring'
            ]
        },
        {
            title: '算法',
            collapsable: true,
            children: [
                'algorithm/regex'
            ]
        },
        {
            title: '数据库',
            collapsable: true,
            children: [
                'db/func_date_format'
            ]
        }, 
        {
            title: '代码段',
            collapsable: true,
            children: [
                'code-snippet/java_time'
            ]
        },
        {
            title: '面试题',
            collapsable: true,
            children: [
                'interview/ArrayList_LinkedList'
            ]
        }

    ]
}