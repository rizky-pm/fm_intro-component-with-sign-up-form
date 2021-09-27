const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const handleChange = (e, validInput, setValidInput) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = validInput.errors;

    switch (name) {
        case 'firstname':
            errors.firstName = value.length < 1 ? false : true;
            break;
        case 'lastname':
            errors.lastName = value.length < 1 ? false : true;
            break;
        case 'email':
            errors.email = validEmailRegex.test(value) ? true : false;
            break;
        case 'password':
            errors.password = value.length < 1 ? false : true;
            break;
        default:
            break;
    }

    setValidInput({ errors });
};
