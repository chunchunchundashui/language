(function ($) {
    countDown();
})(jQuery);
//倒计时
function countDown() {
    let time = 10;
    if (time == 10) {
        var time1 = setInterval(function () {
            if (time == 0) {
                $(".get-code").html("<p class='resendNew' style='color:red'>重新发送</p>");
                time = 10;
                clearInterval(time1);
            } else {
                $(".get-code").html("重新发送(" + time + ")");
                time--;
            }
        }, 1000);
    }
}
//重新发送
$(".get-code").on('click', '.resendNew', function () {
    countDown();
    if (localStorage.getItem("idContry") && localStorage.getItem("phone")) {
        let data = {
            area: localStorage.getItem("idContry"),
            to: localStorage.getItem("phone"),
            type: 2,
            username: localStorage.getItem("phone"),
        }
        let smsSendResult = ajaxMethod('smsSend', data);
        if (smsSendResult.code == 0) {
            $.toast("请重新注册", "text");
        } else {
            $.toast("成功", "text");
        }
    }
})
$(".auth-code-form").bind('input propertychange', function () {
    if ($(".auth-code-form input").val() == "") {
        disabl();
    } else {
        isdisabl();
    }
});
//按钮状态
function disabl() {
    $(".submit").attr("disabled", true);
}

function isdisabl() {
    $('.submit').attr("disabled", false)
}

//下一步
$(".auth-code-form button").on('click', function () {
    const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    let type = '';
    if (!emailrule.test(localStorage.getItem("userName"))) {
        type = 1;
    } else {
        type = 2
    };
    let checkCodeResult = ajaxMethod('checkCode', {
        code: $(".auth-code-form input").val(),
        type: type,
        username: localStorage.getItem("userName")
    })
    if (checkCodeResult.code == 0) {
        $.toast("验证码错误", "text");
    } else {
        localStorage.setItem("idCode", $(".auth-code-form input").val());
        $(location).attr('href', './setPassWord.html');
    }
})