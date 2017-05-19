/**
 * Created by pankaicheng on 17/5/19.
 */
$().ready(function () {

    $("#login_form").validate({
        rules: {
            login_user_id: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            login_password: {
                required: true,
                minlength: 5,
                maxlength: 20
            }
        },
        messages: {
            login_user_id: {
                required: "*请输入用户名",
                minlength: jQuery.validator.format("*用户名不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*用户名不能大于{0}个字符"),
                notnumber: "*用户名不能是纯数字"
            },
            login_password: {
                required: "*请输入密码",
                minlength: jQuery.validator.format("*密码不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*密码不能大于{0}个字符")
            }
        }

    });

});
