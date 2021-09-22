import React, { useState } from 'react';
import styled from 'styled-components';

import iconError from '../../images/icon-error.svg';

import { handleSubmit } from '../../utils/handleSubmit';
import { handleChange } from '../../utils/handleChange';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: ${(props) => props.theme.colors.darkBlue};
    width: 100%;
    height: 100%;
    margin-top: 25px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Space = styled.span`
    margin-bottom: 25px;
    width: 100%;
    position: relative;
`;

const HiddenLabel = styled.label`
    border-width: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
`;

const InputField = styled.input`
    /* border: 1px solid ${(props) => props.theme.colors.grayishBlue}; */
    border: 1px solid
        ${(props) => (props.border ? 'red' : 'hsl(246, 25%, 77%)')};
    outline: none;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 55px;
    padding: 20px;
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontweights.semiBold};
    border-radius: 5px;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.colors.darkBlue};
        opacity: 0.75; /* Firefox */
    }

    :-ms-input-placeholder {
        /* Internet 
  Explorer 10-11 */
        color: ${(props) => props.theme.colors.darkBlue};
        opacity: 0.75;
    }

    ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${(props) => props.theme.colors.darkBlue};
        opacity: 0.75;
    }

    :focus {
        border: 1.5px solid ${(props) => props.theme.colors.darkBlue};
    }
`;

const ErrorMessage = styled.em`
    color: red;
    font-size: 12px;
    text-align: right;
    display: block;
`;

const ErrorIcon = styled.img`
    display: ${(props) => (props.isError ? 'block' : 'none')};
    position: absolute;
    top: 40%;
    right: 10px;
    transform: translateY(-50%);
`;

const Button = styled.button`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        ${(props) => props.theme.colors.secondary} 0px 3px 6px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
`;

const Terms = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.grayishBlue};
    width: 85%;
    margin-top: 15px;
    font-size: 12px;
    font-weight: 700;
`;

const HighlightedText = styled.a`
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
`;

const Form = () => {
    const [validInput, setValidInput] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    });

    const { errors } = validInput;

    return (
        <FormContainer
            onSubmit={(e) => {
                handleSubmit(e, validInput, setValidInput);
            }}
            noValidate
            autoComplete='off'
        >
            <Space>
                <HiddenLabel htmlFor='firstname'>First Name :</HiddenLabel>
                <InputField
                    type='text'
                    name='firstname'
                    id='firstname'
                    placeholder='First Name'
                    border={errors.firstName}
                    onChange={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    onBlur={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    noValidate
                />
                <ErrorIcon src={iconError} isError={errors.firstName} />
                {errors.firstName.length > 0 && (
                    <ErrorMessage>{errors.firstName}</ErrorMessage>
                )}
            </Space>
            <Space>
                <HiddenLabel htmlFor='lastname'>Last Name :</HiddenLabel>
                <InputField
                    type='text'
                    name='lastname'
                    id='lastname'
                    placeholder='Last Name'
                    border={errors.lastName}
                    onChange={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    onBlur={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    noValidate
                />
                <ErrorIcon src={iconError} isError={errors.lastName} />
                {errors.lastName.length > 0 && (
                    <ErrorMessage>{errors.lastName}</ErrorMessage>
                )}
            </Space>
            <Space>
                <HiddenLabel htmlFor='email'>Email Address :</HiddenLabel>
                <InputField
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email Address'
                    border={errors.email}
                    onChange={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    onBlur={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    noValidate
                />
                <ErrorIcon src={iconError} isError={errors.email} />
                {errors.email.length > 0 && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                )}
            </Space>
            <Space>
                <HiddenLabel htmlFor='password'>Password :</HiddenLabel>
                <InputField
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    border={errors.password}
                    onChange={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    onBlur={(e) => {
                        handleChange(e, validInput, setValidInput);
                    }}
                    noValidate
                />
                <ErrorIcon src={iconError} isError={errors.password} />
                {errors.password.length > 0 && (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                )}
            </Space>
            <Button>Claim Your Free Trial</Button>
            <Terms>
                By clicking the button, you are agreeing to our{' '}
                <HighlightedText href='#'>Terms and Services</HighlightedText>
            </Terms>
        </FormContainer>
    );
};

export default Form;
