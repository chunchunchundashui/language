let contry = localStorage.getItem("contry");
//读取国家缓存
if (contry) {
    $("#country-id em").text(contry);
} else {
    $("#country-id em").text("中国");
}

$(".email-input-box").bind('input propertychange', function () {
    if ($(".email-input-box input").val() == "") {
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
$(".submit").on("click", function () {
    let checkResult = ajaxMethod('checkregister', {
        to: $(".email-input-box input").val()
    });
    if (checkResult.code == 0) {
        let smsSendEmailResult = ajaxMethod('smsSendEmail', {
            to: $(".email-input-box input").val()
        })
        console.log(smsSendEmailResult);
        if (smsSendEmailResult.code == 1) {
            localStorage.setItem('userName', $(".email-input-box input").val());
            $(location).attr('href', './authCodeEmail.html');   
        }
    }
})