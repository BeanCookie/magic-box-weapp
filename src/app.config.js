export default {
  pages: [
    // 'pages/home/index',
    'pages/study/index',
    'pages/study/article',
    'pages/hotspot/index',
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
            selectedIconPath: 'assets/study.png',
            iconPath: 'assets/study_unselected.png',
            pagePath: 'pages/study/index',
            text: '学习',
        },
        {
            selectedIconPath: 'assets/hotspot.png',
            iconPath: 'assets/hotspot_unselected.png',
            pagePath: 'pages/hotspot/index',
            text: '热点',
        },
    ],
},
}
