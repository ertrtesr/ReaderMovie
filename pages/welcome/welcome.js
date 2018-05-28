Page({
    
    onTap: function (event) {
        console.log("onTap");
        
        //平行跳转
        wx.redirectTo({
            url: '../posts/post',
        })
    },
    
    onUnload: function () {
        console.log("welcome page is onUnload");
    },
    
    onHide: function () {
        console.log("welcome page is onHide");
    }
})