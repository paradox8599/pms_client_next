'use client';

import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import { Calendar, theme } from 'antd';
import type { Dayjs } from 'dayjs';


const onChange = (value: Dayjs) => {
    console.log(value.format('YYYY-MM-DD')); 
};

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
        { value: '', label: 'Gender (required)', disabled: true },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-24" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1077026512/photo/nature-inspired-table.jpg?s=612x612&w=0&k=20&c=TthBCamXFsPZt2CaCfd2EzuzeImWiwKTUZJTMEIKFcI=')" }}>
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
                    <Form className="flex mt-24 w-full">
                        {/* Column 1: Authorization & Name */}
                        <div className="flex-1 flex flex-col space-y-6 pr-10">

                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-semibold">AUTHORIZATION</p>
                                <Field type="text" name="username" placeholder="Username (required)" className="sign-box " />
                                <Field type="email" name="email" placeholder="Email (required)" className="sign-box" />
                                <Field type="password" name="password" placeholder="Password (required)" className="sign-box" />
                                <Field type="password" name="confirmPassword" placeholder="Confirm Password (required)" className="sign-box" />
                            </div>

                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-semibold">NAME</p>
                                <Field type="text" name="firstName" placeholder="First Name (required)" className="sign-box" />
                                <Field type="text" name="middleName" placeholder="Middle Name (optional)" className="sign-box" />
                                <Field type="text" name="lastName" placeholder="Last Name (required)" className="sign-box" />
                            </div>
                        </div>

                        {/* Column 2: Address */}
                        <div className="flex-1 flex flex-col space-y-6 pr-10">
                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-semibold">ADDRESS</p>
                                <Field type="text" name="streetNumber" placeholder="Street Number (required)" className="sign-box" />
                                <Field type="text" name="streetName" placeholder="Street Name (required)" className="sign-box" />
                                <Field type="text" name="suburb" placeholder="Suburb (required)" className="sign-box" />
                                <Field type="text" name="state" placeholder="State (required)" className="sign-box" />
                                <Field type="text" name="country" placeholder="Country (required)" className="sign-box" />
                                <Field type="text" name="postcode" placeholder="Postcode (required)" className="sign-box" />
                            </div>
                        </div>

                        {/* Column 3: Extra Details */}
                        <div className="flex-1 flex flex-col space-y-6">
                            <div className="flex flex-col space-y-4">
                                <p className="text-xl font-semibold">EXTRA DETAILS</p>
                                <Field as="select" name="gender" placeholder="Gender (required)" className="sign-box">
                                    {genderOptions.map((option, index) => (
                                        <option key={index} value={option.value} disabled={option.disabled && index === 0}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="text-sm">Date of Birth</p>
                                <div style={wrapperStyle}>
                                    <Calendar fullscreen={false} onChange={onChange}/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>

                <div className="flex flex-col items-center space-y-2 mt-10">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="border-gray-300 rounded-md h-4 w-4" />
                        <span className="text-md">I agree with the terms and conditions</span>
                    </label>

                    <button type="submit" className="w-1/3 bg-cyan-950 text-white rounded-md py-2 mt-4 hover:bg-blue-600 transition duration-300">
                        Sign Up
                    </button>

                    <div className="text-md">
                        Already have an account? <a href="/sign-in" className="text-lime-500 font-semibold">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

