'use client';

import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import { Calendar, theme, Button } from 'antd';
import type { Dayjs } from 'dayjs';

const onChange = (value: Dayjs) => {
    console.log(value.format('YYYY-MM-DD'));
};

const inputField = (label: string, name: string, type: string) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-gray-700 text-sm font-semibold mb-1">
            {label} (required):
        </label>
        <Field type={type} id={name} name={name} className="sign-box" />
    </div>
);


export default function SignUpPage() {

    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };


    const handleSubmit = (values: any) => {
        console.log(values);
    };

    const genderOptions = [
        { value: '', label: 'Select your gender', disabled: true },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-24 sm:bg-no-repeat" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1077026512/photo/nature-inspired-table.jpg?s=612x612&w=0&k=20&c=TthBCamXFsPZt2CaCfd2EzuzeImWiwKTUZJTMEIKFcI=')" }}>
            <div className="bg-white bg-opacity-90 px-12 py-6 rounded-lg shadow-md relative">
                <div className="h-24 w-5/6 bg-cyan-950 absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-lg flex items-center justify-center">
                    <p className="text-white font-mono font-semibold tracking-widest text-4xl">Vendure</p>
                </div>

                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        firstName: '',
                        middleName: '',
                        lastName: '',
                        streetNumber: '',
                        streetName: '',
                        suburb: '',
                        state: '',
                        country: '',
                        postcode: '',
                        gender: '',
                        birthDate: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className="lg:flex mt-24 w-full">
                        {/* Column 1: Authorization & Name */}
                        <div className="flex flex-col space-y-6 pr-10">

                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-bold">AUTHORIZATION</p>
                                {inputField('Username', 'username', 'text')}
                                {inputField('Email', 'email', 'email')}
                                {inputField('Password', 'password', 'password')}
                                {inputField('Confirm Password', 'confirmPassword', 'password')}
                            </div>


                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-bold">NAME</p>
                                {inputField('First Name', 'firstName', 'text')}
                                {inputField('Middle Name', 'middleName', 'text')}
                                {inputField('Last Name', 'lastName', 'text')}
                            </div>
                        </div>

                        {/* Column 2: Address */}
                        <div className="flex flex-col space-y-6 pr-10">
                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-bold">ADDRESS</p>
                                {inputField('Street Number', 'streetNumber', 'text')}
                                {inputField('Street Name', 'streetName', 'text')}
                                {inputField('Suburb', 'suburb', 'text')}
                                {inputField('State', 'state', 'text')}
                                {inputField('Country', 'country', 'text')}
                                {inputField('Postcode', 'postcode', 'text')}
                            </div>
                        </div>


                        {/* Column 3: Extra Details */}
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-bold">EXTRA DETAILS</p>
                                <div className="flex flex-col">
                                    <label htmlFor="gender" className="text-gray-700 text-sm font-semibold mb-1">
                                        Gender (required):
                                    </label>
                                    <Field as="select" name="gender" id="gender" className="sign-box">
                                        {genderOptions.map((option, index) => (
                                            <option key={index} value={option.value} disabled={option.disabled && index === 0}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <p className="text-gray-700 text-sm font-semibold">Date of Birth:</p>
                                <div style={wrapperStyle}>
                                    <Calendar fullscreen={false} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>

                <div className="flex flex-col items-center space-y-2 mt-6">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="border-gray-300 rounded-md h-4 w-4" />
                        <span className="text-md">I agree with the terms and conditions</span>
                    </label>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-1/3"
                    >
                        Sign Up
                    </Button>

                    <div className="text-md">
                        Already have an account? <a href="/sign-in" className="text-lime-500 font-semibold">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

