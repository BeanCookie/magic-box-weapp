export default {
  pages: [
    'pages/home/index',
    'pages/juejin/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#ff7a45',
    color: '#888888',
    backgroundColor: '#ffffff',
    list: [
        {
            // selectedIconPath: 'assets/tab_index_pre.png',
            // iconPath: 'assets/tab_index.png',
            pagePath: 'pages/home/index',
            text: '文章',
        },
        {
            // selectedIconPath: 'assets/tab_application_pre.png',
            // iconPath: 'assets/tab_application.png',
            pagePath: 'pages/juejin/index',
            text: '热点',
        },
    ],
},
}
