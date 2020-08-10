//路由
function urlLink(str) {
    let urlNew = {
        //登录
        login: {
            method: 'post',
            url: 'user_login'
        },
        //检查是否注册
        checkregister: {
            method: "get",
            url: 'user_checkPhoneIsReg'
        },
        // //检验登录密码
        // checkLoginpassword: {
        //     method: 'get',
        //     url: 'user_invitepassword'
        // },
        //注册
        register: {
            method: 'get',
            url: 'userethpro_register'
        },
        //获取验证码
        getCode: {
            method: 'get',
            url: 'com_getVailImg'
        },
        //检查验证码
        checkCode: {
            method: 'get',
            url: 'user_checkCode'
        },
        //发短信
        smsSend: {
            method: 'post',
            url: 'sms_send'
        },
        //发邮件
        smsSendEmail: {
            method: 'post',
            url: 'sms_sendEmail'
        },
        //获取行情交易队
        excGetExcpairs: {
            method: 'get',
            url: 'exc_getExcpairs'
        },
        //获取我的资产
        transGetAssets: {
            method: 'get',
            url: 'trans_getAssets'
        },
        //获取币种信息
        excGetCoininfo: {
            method: "get",
            url: 'exc_getCoininfo'
        },
        //获取委托历史
        excGetEntrust: {
            method: 'post',
            url: 'exc_getEntrust'
        },
        //加入自选
        excStar:{
           method:'post',
           url:'exc_star'
        },
        //删除自选
        excUnstar:{
            method:'post',
            url:'exc_unstar'
        },
        //获取深度图数据
        excDepth:{
            method:'get',
            url:'exc_depth'
        },
        //获取币种行情列表
        walletGetCoinList:{
            method:'get',
            url:'wallet_getCoinList'
        },
        //提交委托
        startEntrusts:{
            method:'post',
            url:'excethpro_startEntrusts'
        },
        //获取汇率
        getHuilv:{
            method:'get',
            url:'com_getHuilv'
        }

    };
    return urlNew[str];
};

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

//域名
let host = 'http://api.51mall.vip/';
//请求后缀
let suffix = '.html?systemostype=android&clienttype=h5&systemversion=2.0&lang=zh'
//请求
function ajaxMethod(str, obj) {
    let link = urlLink(str);
    let result = {};
    if (localStorage.getItem("uid")) {
        obj.uid = localStorage.getItem("uid");
    }
    $.ajax({
        url: host + link.url + suffix,
        method: link.method,
        data: obj,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        crossDomain: true,
        async: false,
        cache: true,
        beforeSend: function () {
            //请求前动作
            // $.showLoading("数据加载中")
        },
        complete: function () {
            //请求完成动作
            // $.hideLoading();
        },
        success: function (data) {
            // $.hideLoading();
            result = data;
        },
        error: function (data) {
            console.log(data, "Error");
            setTimeout(() => {
                $.toast("请检查网络配置", "text");
            }, 1000);
        }
    });
    return result;
};