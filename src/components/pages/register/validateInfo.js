export default function validateInfo(values) {

    let errors = {}

    if(!values.nickname.trim()) {
        errors.nickname = "Nickname required"
    }
    if(!values.firstName.trim()) {
        errors.firstName = "Firstname required"
    }
    if(!values.lastName.trim()) {
        errors.lastName = "Lastname required"
    }

    if(!values.email) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.phone) {
        errors.phone = "Contact Number required"
    } else if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)) {
        errors.phone = "Contact Number is invalid"
    }

    if(!values.password) {
        errors.password = "password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password should be longer"
    }

    if(!values.cpassword) {
        errors.cpassword = "Password is required"
    } else if (values.cpassword !== values.password) {
        errors.cpassword = "Password does not match"
    }

    return errors;
}