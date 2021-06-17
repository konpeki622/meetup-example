module.exports = {
    title: 'VUE SHENZHEN',
    description: '深圳Vue.js meetup活动',
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/images/v-logo.png'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Vue Shenzhen, vue 深圳, vue.js shenzhen, vue.js 深圳, vuejs shenzhen, vuejs 深圳, vue shenzhen meetup, vue 深圳 meetup, vue meetup'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, user-scalable=no'
        }],
        ['meta', {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge'
        }],
        // 百度推送
        ['meta', {
            name: 'baidu-site-verification',
            content: 'code-1ieWIYBkwB'
        }],
        ['script', {
            src: "/assets/js/autopush-baidu.js"
        }]
    ],
    plugins: [
        ['sitemap', {
            hostname: "http://vueshenzhen.com",
            // 排除无实际内容的页面
            exclude: ["/404.html"]
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
    ]
}