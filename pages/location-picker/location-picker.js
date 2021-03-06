

const chooseLocation = requirePlugin('chooseLocation');
Page({
	onWatchDemo() {
		const key = 'NREBZ-WBP3X-57X4J-TRLUY-GIFZ2-B6BRE'; //使用在腾讯位置服务申请的key
		const referer = 'smartcity'; //调用插件的app的名称
		const location = JSON.stringify({
			latitude: 39.89631551,
			longitude: 116.323459711
		});
		const category = '';	//生活服务,娱乐休闲

		wx.navigateTo({
			url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
		});
	},

  // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
  onShow () {
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
  },
  onUnload () {
    // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
        chooseLocation.setLocation(null);
    }
})