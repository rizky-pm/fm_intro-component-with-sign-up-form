import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import iconError from '../../images/icon-error.svg';

import { handleSubmit } from '../../utils/handleSubmit';
import { handleChange } from '../../utils/handleChange';

const AnimationIn = keyframes`
    0% {
        transform: translateY(20px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: ${(props) => props.theme.colors.darkBlue};
    animation: ${AnimationIn} 2s ease;
    width: 100%;
    height: 100%;
    margin-top: 1.5625rem;
    padding: 1.5625rem;
    border-radius: 0.625rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.1875rem 0.375rem,
        rgba(0, 0, 0, 0.23) 0rem 0.1875rem 0.375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: form;
        width: 33.75rem;
        height: 90%;
        margin-top: 0;
    }
`;

const Space = styled.span`
    position: relative;
    margin-bottom: 1.5625rem;
    width: 100%;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        margin-bottom: 0.9375rem;
    }
`;

const HiddenLabel = styled.label`
    border-width: 0 !important;
    clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem) !important;
    height: 0.0625rem !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 0.0625rem !important;
`;

const InputField = styled.input`
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: 0.0625rem solid
        ${(props) =>
            props.border ? 'hsl(0, 100%, 74%)' : 'hsl(246, 25%, 77%)'};
    width: 100%;
    height: 3.4375rem;
    padding: 1.25rem;
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontweights.semiBold};
    border-radius: 0.3125rem;

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

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        height: 2.5rem;
    }
`;

const InputWrapper = styled.div`
    position: relative;
`;

const ErrorMessage = styled.em`
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.75rem;
    text-align: right;
    display: block;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        margin-top: 0.3125rem;
    }
`;

const ErrorIcon = styled.img`
    display: ${(props) => (props.isError ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    right: 0.625rem;
    transform: translateY(-50%);

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    border: none;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 3.125rem;
    border-radius: 0.3125rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.1875rem 0.375rem,
        ${(props) => props.theme.colors.secondary} 0rem 0.1875rem 0.375rem;
    font-size: 1rem;
    font-weight: 500;
`;

const Terms = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.grayishBlue};
    width: 85%;
    margin-top: 0.9375rem;
    font-size: 0.75rem;
    font-weight: 700;
`;

const HighlightedText = styled.a`
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
`;

const Form = () => {
    const [validInput, setValidInput] = useState({
        errors: {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
        },
    });

    const { errors } = validInput;
    console.log(errors.firstName);

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
                <InputWrapper>
                    <InputField
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='First Name'
                        border={errors.firstName === false}
                        onChange={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        onBlur={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        noValidate
                    />
                    <ErrorIcon
                        src={iconError}
                        isError={errors.firstName === false}
                    />
                </InputWrapper>
                <ErrorMessage show={errors.firstName === false}>
                    First Name cannot be empty
                </ErrorMessage>
            </Space>
            <Space>
                <HiddenLabel htmlFor='lastname'>Last Name :</HiddenLabel>
                <InputWrapper>
                    <InputField
                        type='text'
                        name='lastname'
                        id='lastname'
                        placeholder='Last Name'
                        border={errors.lastName === false}
                        onChange={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        onBlur={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        noValidate
                    />
                    <ErrorIcon
                        src={iconError}
                        isError={errors.lastName === false}
                    />
                </InputWrapper>
                <ErrorMessage show={errors.lastName === false}>
                    Last Name cannot be empty
                </ErrorMessage>
            </Space>
            <Space>
                <HiddenLabel htmlFor='email'>Email Address :</HiddenLabel>
                <InputWrapper>
                    <InputField
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email Address'
                        border={errors.email === false}
                        onChange={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        onBlur={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        noValidate
                    />
                    <ErrorIcon
                        src={iconError}
                        isError={errors.email === false}
                    />
                </InputWrapper>
                <ErrorMessage show={errors.email === false}>
                    This looks like not an email
                </ErrorMessage>
            </Space>
            <Space>
                <HiddenLabel htmlFor='password'>Password :</HiddenLabel>
                <InputWrapper>
                    <InputField
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        border={errors.password === false}
                        onChange={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        onBlur={(e) => {
                            handleChange(e, validInput, setValidInput);
                        }}
                        noValidate
                    />
                    <ErrorIcon
                        src={iconError}
                        isError={errors.password === false}
                    />
                </InputWrapper>
                <ErrorMessage show={errors.password === false}>
                    Password cant be empty
                </ErrorMessage>
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
