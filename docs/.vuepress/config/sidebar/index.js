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
                'back-end/string_list'
            ]
        },
        {
            title: '算法',
            collapsable: true,
            children: [
                'algorithm/array_intersection',
                'algorithm/longest_common_prefix'
            ]
        },
        {
            title: '工具',
            collapsable: true,
            children: [
                'tools/git_github_gitee',
                'tools/git_stash',
                'tools/git_delete',
                'tools/git_init'
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
                'code-snippet/java_time',
                'code-snippet/regex'
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