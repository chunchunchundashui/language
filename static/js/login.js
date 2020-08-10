$("#userName").bind('input propertychange', function () {
    if ($("#passWord").val() == '' || $("#userName").val() == '') {
        disabl();
    } else {
        isdisabl();
    }
});

$("#passWord").bind('input propertychange', function () {
    if ($("#passWord").val() == '' || $("#userName").val() == '') {
        disabl();
    } else {
        isdisabl();
    }
});

//按钮状态
function disabl() {
    $("#user-submit").attr("disabled", true);
}

function isdisabl() {
    $('#user-submit').attr("disabled", false)
}

//登录
$("#user-submit").on('click', function () {
    let data = {
        username: $("#userName").val(),
        password: $("#passWord").val(),
    };
    //检验是否注册
    let resultRegister = ajaxMethod('checkregister', data);
    if (resultRegister.code == 0) {
        $.toast(resultRegister.msg, "text");
    } else {
            //登录
            $.showLoading("登录中");
            let result = ajaxMethod('login', data);
            if (result.code == 1) {
                $.hideLoading();
                localStorage.setItem('user',JSON.stringify(result.return));
                localStorage.setItem('uid',result.return.token);
                $(location).attr('href', '../index.html');
            } else {
                $.hideLoading();
                $.toast(result.msg, "text");
            }
    }
})