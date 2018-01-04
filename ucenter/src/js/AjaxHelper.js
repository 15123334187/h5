function AjaxJson(url, postData, callBack) {
    $.ajax({
        url: url,
        type: "post",
        data: postData,
        dataType: "json",
        async: true,
        timeout: 60000,
        success: function (data) {
            callBack(data);
        },
        error: function () {
            //alert('系统发生错误,请刷新页面重试!');
        }
    });
}

function AjaxText(url, postData, callBack) {
    $.ajax({
        url: url,
        type: "post",
        data: postData,
        dataType: "text",
        async: true,
        timeout: 60000,
        success: function (data) {
            callBack(data);
        },
        error: function () {
            //alert('系统发生错误,请刷新页面重试!');
        }
    });
}