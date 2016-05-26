# ios-weixin-title-change

ios微信title hack

document.title = 'xxxx' 是无法改变微信的title的

通过动态创建iframe会触发webview的didFinishLoad事件拿到document.title来改变title。