let id = '';
let code = '';
$("#search-input").on("input propertychange", function () {
    let queryStr = $.trim($("#search-input").val());
    if (queryStr === '') {
        $("#list").show();
    } else {
        $(".country-list-item").hide().find(".country-name, .country-code").filter(":contains('" + queryStr + "')").parent(".country-list-item").show();
        $(".country-list-cap").hide();
    }
});
$('.country-list-item').on('click', function () {
    console.log($(this));
    id = $(this).context.dataset.id;
    code = $(this).context.dataset.code;
    localStorage.setItem('contry', $(this).context.dataset.contry);
    localStorage.setItem('idContry',code.slice(2));
    // let data = {
    //     edit: 'country_id',
    //     id: id,
    //     code: code
    // }
    // let result = ajaxMethod('register', data);
    // if (result.code == 1) {
        $(location).attr('href', './register.html');
    // }
})
