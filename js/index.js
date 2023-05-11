function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var email = document.forms["message-form"]["email"].value;
    var phone = document.forms["message-form"]["phone"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == ""|| email == "" || phone == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    var atSymbol = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    if (atSymbol < 1 || dot < atSymbol+2 || dot+2 >= email.length) {
        alert("Masukkan alamat email yang valid!");
        return false;
    }

    setSenderUI(name, email, phone, messages);

    return false;
}

function setSenderUI(name, email, phone, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-phone").innerHTML = phone;
    document.getElementById("sender-messages").innerHTML = messages;
}