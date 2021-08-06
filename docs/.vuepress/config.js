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
        // google推送
        ['meta', {
            name: 'google-site-verification',
            content: 'UFFfhTzuoTYnMv5Pm34tNrw59qR_rm5KpPG3adgDkyY'
        }],
        // 百度推送
        ['script', {
            src: "/assets/js/autopush-baidu.js"
        }],
        ['script', {
            src: "/assets/js/tongji-baidu.js"
        }],
        // 百度地图
        ['script', {
            type: 'text/javascript',
            src: 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=35EPB0qFsmdCnpPbq6TYkyTAMGyPgEgv'
        }],
    ],
    plugins: [
        ['sitemap', {
            hostname: "https://vueshenzhen.com",
            // 排除无实际内容的页面
            exclude: ["/404.html"]
        }],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
    ]
}