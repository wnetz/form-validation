function validateForm(id)
{
    let email = document.getElementById("email");
    let emailerror = document.getElementById("badEmail");
    let phone = document.getElementById("pNumber");
    let phoneerror = document.getElementById("badPNumber");
    if(! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
        emailerror.innerText = "invalid email";
    }
    else
    {
        emailerror.innerText = null;
    }
    if(! /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone.value))
    {
        phoneerror.innerText = "invalid email";
    }
    else
    {
        phoneerror.innerText = null;
    }
}