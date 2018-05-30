//只能用相对路径
var postsData = require('../../data/posts-data.js')

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
    },
    
    imagePath: "/images/...",
    
    process: function () {
        var date = "NOV 18 2016";
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //console.log("onLoad")
        
        //等同于将post_content1写在data下面
        this.setData({
            postList: postsData.postList
        })
    },
    
    onPostTap: function (event) {
        var postId = event.currentTarget.dataset.postid;
        
        wx.navigateTo({
            url: "post-detail/post-detail?id=" + postId
        })
    },
    
    onSwiperTap: function (event) {
        // target指的是当前点击的组件
        // currentTarget指的是事件捕获的组件
        var postId = event.target.dataset.postid;
        wx.navigateTo({
            url: "post-detail/post-detail?id=" + postId
        })
    }
    
})