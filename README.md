# pdd-coupon

### 券多省钱通 —— 拼多多领券小程序（多多金宝）

![小程序码](./2.png)

![截图](./1.png)

### 使用方法

`该小程序使用微信原生+云函数开发。`

* 申请多多进宝应用，不做详细叙述，申请地址：[https://jinbao.pinduoduo.com/](https://jinbao.pinduoduo.com/)、[https://open.pinduoduo.com/](https://open.pinduoduo.com/)
* 在微信开发者工具中导入项目`wechat-xcx`文件夹，并开启云开发。
* 修改`env.js`的配置。
* 修改`functions\pquery\pdd\utils.js`里拼多多相关的配置参数。上传云函数。

### 其他问题

* 如果遇到领券 搜索接口报错，需要用这个接口[https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate](https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.rp.prom.url.generate)对`pid`备案一次，channel_type: 10。接口会返回以下格式的参数：

```json
{"rp_promotion_url_generate_response":{"url_list":[{"mobile_url":"xxxxx","url":"xxxx"}],"request_id":"xxx"}}
```
登录上述的url，用你的账号授权一次。用该接口[https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.member.authority.query](https://jinbao.pinduoduo.com/third-party/api-detail?apiName=pdd.ddk.member.authority.query)查询下是否备案成功，成功后就没权限问题。

### 已上线案例：

<img src="https://raw.githubusercontent.com/sgxiang/pdd-coupon/main/xcx-1.png" width="200"/> <img src="https://raw.githubusercontent.com/sgxiang/pdd-coupon/main/xcx-2.png" width="200"/> <img src="https://raw.githubusercontent.com/sgxiang/pdd-coupon/main/xcx-3.png" width="200"/>

如有疑问，请提issue或微信联系：sgxiang



推广位

```
{"p_id_generate_response":{"p_id_list":[{"create_time":1609732689,"media_id":0,"pid_name":"","p_id":"13943073_186718366"}],"remain_pid_count":499998,"request_id":"16097326889582679"}}
```

推广位备案

```
{"rp_promotion_url_generate_response":{"url_list":[{"mobile_url":"https://mobile.yangkeduo.com/app.html?use_reload=1&launch_url=duo_coupon_landing.html%3F__page%3Dauth%26pid%3D13943073_186718366%26cpsSign%3DCC_210104_13943073_186718366_4c8a6d689643982445f2f1d2f6eb895d%26duoduo_type%3D2&campaign=ddjb&cid=launch_","url":"https://mobile.yangkeduo.com/duo_coupon_landing.html?__page=auth&pid=13943073_186718366&cpsSign=CC_210104_13943073_186718366_4c8a6d689643982445f2f1d2f6eb895d&duoduo_type=2"}],"request_id":"16097327933337062"}}
```

推广位备案

```
{"rp_promotion_url_generate_response":{"url_list":[{"mobile_url":"https://mobile.yangkeduo.com/app.html?use_reload=1&launch_url=duo_coupon_landing.html%3F__page%3Dauth%26pid%3D13943073_186718366%26customParameters%3D%257B%2522uid%2522%253A%25221234%2522%257D%26cpsSign%3DCC_210104_13943073_186718366_1a64c38093d1bd42245b86d0cd712b6c%26duoduo_type%3D2&campaign=ddjb&cid=launch_","we_app_info":{"we_app_icon_url":"http://xcxcdn.yangkeduo.com/pdd_logo.png","user_name":"gh_a6611aee87d6","page_path":"/pages/web/web?specialUrl=1&src=https%3A%2F%2Fmobile.yangkeduo.com%2Fduo_coupon_landing.html%3F__page%3Dauth%26pid%3D13943073_186718366%26customParameters%3D%257B%2522uid%2522%253A%25221234%2522%257D%26cpsSign%3DCC_210104_13943073_186718366_1a64c38093d1bd42245b86d0cd712b6c%26duoduo_type%3D2","source_display_name":"拼多多福利券","title":"认证页","app_id":"wxa918198f16869201","desc":"拼多多，多实惠，多乐趣。"},"url":"https://mobile.yangkeduo.com/duo_coupon_landing.html?__page=auth&pid=13943073_186718366&customParameters=%7B%22uid%22%3A%221234%22%7D&cpsSign=CC_210104_13943073_186718366_1a64c38093d1bd42245b86d0cd712b6c&duoduo_type=2"}],"request_id":"16097332540851827"}}
```
