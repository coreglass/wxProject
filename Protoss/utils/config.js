
class Config{
    constructor(){

    }
}

Config.restUrl='http://tust.vipgz1.idcfengye.com/zerg/public/api/v1/';
//Ngork 内网穿透  外网测试URL 网速较慢 需要开启sunny Ngork客户端
//本机测试 加载速度快
//'http://z.cn/api/v1/';                   
Config.onPay=false;  //是否启用支付

export {Config};