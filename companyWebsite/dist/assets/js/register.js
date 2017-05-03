/**
 * Created by pankaicheng on 17/5/1.
 */
$(function() {
    $('#doc-vld-msg').validator({
        onValid: function(validity) {
            $(validity.field).closest('.am-form-group').find('.am-u-sm-8').hide();
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-group');
            var $alert = $group.find('.am-u-sm-8');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            if (!$alert.length) {
                $alert = $('<div class="am-u-sm-8 am-u-sm-offset-2 am-text-danger am-text-xs"></div>').hide().
                appendTo($group);
            }
            $alert.html(msg).show();
        }
    });
});