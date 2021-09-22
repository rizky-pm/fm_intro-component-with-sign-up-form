const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const handleChange = (e, validInput, setValidInput) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = validInput.errors;

    switch (name) {
        case 'firstname':
            errors.firstName =
                value.length < 1 ? 'First Name cannot be empty' : '';
            break;
        case 'lastname':
            errors.lastName =
                value.length < 1 ? 'Last Name cannot be empty' : '';
            break;
        case 'email':
            errors.email = validEmailRegex.test(value)
                ? ''
                : 'Looks like this is not an email';
            break;
        case 'password':
            errors.password =
                value.length < 1 ? 'Password cannot be empty' : '';
            break;
        default:
            break;
    }

    setValidInput({ errors, [name]: value });
};
