Page({
    
    onTap: function (event) {
        console.log("onTap");
        
        
        //子页面跳转 navigateTo
        //平行跳转  redirectTo
        //wx.redirectTo({
        //    url: '../posts/post',
        //})
        
        wx.switchTab({
          url: '../posts/post'
        })
    },
    
    onUnload: function () {
        console.log("welcome page is onUnload");
    },
    
    onHide: function () {
        console.log("welcome page is onHide");
    }
})