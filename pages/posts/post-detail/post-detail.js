//只能用相对路径
var postsData = require('../../../data/posts-data.js')

Page({
    onLoad: function (option) {
        var postId = option.id;         //id是在navigateTo的url里拼进来的参数
        var postData = postsData.postList[postId];
        this.setData({
            postData: postData
        })
        
       
        
    },
    
    onCollectionTap: function (event) {
    },
    
    onShareTap: function (event) {
        //缓存的上限最大不能超过10MB
    }
    
})