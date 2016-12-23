function validateForm() {
	var society = $("#society").val();
	var contact = $.trim($('#contact').val());
    var email   = $("#email").val();

    if (validateEmail(email) && ()) {
        return true;
    } else {
        $("#result_id").text("Please input valid data.");
        return false;
    }
}

function validateEmail(email) {
    var re = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    return re.test(email);
}

$("form").bind("submit", checkValidate);