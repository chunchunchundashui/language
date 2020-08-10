let contry = localStorage.getItem("contry");
let idContry = localStorage.getItem("idContry");
//读取国家缓存
if (contry) {
    $("#country-id em").text(contry);
} else {
    $("#country-id em").text("中国");
}
if (idContry) {
    $("#country-code em").text(idContry);
} else {
    $("#country-code em").text('86');
}
(function () {
    if (localStorage.getItem("isphone")) {
        $(".phone-input-box input").val(localStorage.getItem("isphone"));
        isdisabl();
    }
})();
//控制按钮
$(".phone-input-box input").bind('input propertychange', function () {
    if ($(".phone-input-box input").val().length == 11) {
        isdisabl();
    } else {
        disabl();
    }

});
//按钮状态
function disabl() {
    $(".submit").attr("disabled", true);
}

function isdisabl() {
    $('.submit').attr("disabled", false)
}
$(".submit").on("click", function () {
    let checkResult = ajaxMethod('checkregister', {
        username: $(".phone-input-box input").val()
    });
    console.log(checkResult, "这是检测结果");
    if (checkResult.msg == '没有注册') {
        localStorage.setItem('phone', $(".phone-input-box input").val());
        let data = {
            area: $("#country-code em").text(),
            to: $(".phone-input-box input").val(),
            type: 2,
            username: $(".phone-input-box input").val(),
        }
        let smsSendResult = ajaxMethod('smsSend', data);
        if (smsSendResult.code == 0) {
            $.toast(smsSendResult.msg, "text");
        } else {
            localStorage.setItem('userName', $(".phone-input-box input").val());
            $(location).attr('href', './authCode.html');
        }
        console.log(smsSendResult, "456");
    } else {
        $.toast("当前手机号已经注册", "text");
    }
    // let code = ajaxMethod('getCode', {});
    // console.log(code, "123");
    // $(location).attr('href', './authCode.html');
})