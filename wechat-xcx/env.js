export default {
  // 微信云函数配置
  wxCloudEnv: "pdd-3gzj96cfdc162689",
  // 跳转外卖券
  waimai: {
    appId: "wx7310f234719c1a10",
    path: "/pages/index/index",
  },
  // 其他小程序
  otherMiniPrograms: [
    {
      icon: "/images/waimai.jpg",
      name: "外卖领券",
      appId: "wx7310f234719c1a10",
      path: "/pages/takeout/takeout",
    },
  ],
  // 拼多多appid
  pddAppId: "wx32540bd863b27570",
  // 首页子分类进去的详情页顶部banner图片地址
  subTypeBannerImage: {
    shot:
      "cloud://pdd-3gzj96cfdc162689.7064-pdd-3gzj96cfdc162689-1304682256/s-hot.jpg",
    s19:
      "cloud://pdd-3gzj96cfdc162689.7064-pdd-3gzj96cfdc162689-1304682256/s-19.jpg",
    spp:
      "cloud://pdd-3gzj96cfdc162689.7064-pdd-3gzj96cfdc162689-1304682256/s-pp.jpg",
  },
};
