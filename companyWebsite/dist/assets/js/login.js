/**
 * Created by pankaicheng on 17/4/23.
 */

$().ready(function() {
    jQuery.validator.addMethod(
        "notnumber",
        function(value, element, param) {
            var regex = /^\d+$/;
            if (regex.test(value)) {return false;}
            else {return true;}
        },
        $.validator.format("不能为纯数字")
    );

    $("#register_form").validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 20,
                notnumber : true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            rpassword: {
                equalTo: "#register_password"
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "*请输入用户名",
                minlength: jQuery.validator.format("*用户名不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*用户名不能大于{0}个字符"),
                notnumber: "*用户名不能是纯数字"
            },
            password: {
                required: "*请输入密码",
                minlength: jQuery.validator.format("*密码不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*密码不能大于{0}个字符")
            },
            rpassword: {
                equalTo: "*两次密码不一样"
            },
            email: {
                required: "*请输入邮箱",
                email: "*请输入有效邮箱"
            }
        }
    });
});

$(function() {
    $("#register_btn").click(function() {
        $("#register_form").css("display", "block");
        $("#login_form").css("display", "none");

    });
    $("#back_btn").click(function() {
        $("#register_form").css("display", "none");
        $("#login_form").css("display", "block");
    });
});