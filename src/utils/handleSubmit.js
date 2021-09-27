const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const handleSubmit = (e, validInput, setValidInput) => {
    e.preventDefault();
    let errors = validInput.errors;
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (firstName.length < 1) {
        errors.firstName = false;
        setValidInput({ errors });
    }

    if (lastName.length < 1) {
        errors.lastName = false;
        setValidInput({ errors });
    }

    if (!validEmailRegex.test(email)) {
        errors.email = false;
        setValidInput({ errors });
    }

    if (password.length < 1) {
        errors.password = false;
        setValidInput({ errors });
    }
};
