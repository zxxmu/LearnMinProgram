// pages/home/home.js
const app=getApp()
console.log(app.globalData.name)
console.log(app.globalData.name)
//注册一个页面
//页面也有自己的生命周期函数
Page({
  data:{
    message:'哈哈哈',
  },
   handleGetUserInfo(event){
     console.log(event)
   },
  //----1.监听页面的生命周期函数------
  onLoad(){
    //console.log('onLoad')
  },
  onShow() {
    //console.log('onLoad')
  },
  //页面初次渲染完成时
  onReady(){
    //console.log('onReady')
  },
  
  onHide(){
    //console.log('onHide')
  },
  onUnload(){
   // console.log('onUnload')
  },

  //------3.监听wxml中相关的一些事件--------
  handleViewClick(){
    console.log('哈哈哈被点击')
  },
  //------4.其他事件------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听我们的页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  }

  }
)