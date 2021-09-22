const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const handleSubmit = (e, validInput, setValidInput) => {
    e.preventDefault();
    let errors = validInput.errors;
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (firstName.length < 1) {
        errors.firstName = 'First Name cannot be empty';
        setValidInput({ errors, firstName });
    }

    if (lastName.length < 1) {
        errors.lastName = 'Last Name cannot be empty';
        setValidInput({ errors, lastName });
    }

    if (!validEmailRegex.test(email)) {
        errors.email = 'Looks like this is not an email';
        setValidInput({ errors, email });
    }

    if (password.length < 1) {
        errors.password = 'Password cannot be empty';
        setValidInput({ errors, password });
    }
};
