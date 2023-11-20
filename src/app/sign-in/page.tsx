'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';

const SignInForm: React.FC = () => {
  const handleSignIn = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/elevated-view-clay-pot-with-herbal-teacups-wooden-desk_23-2148186315.jpg')` }}>
      <div className="bg-white p-8 rounded-3xl shadow-md sm:w-96 relative">
        <div className="absolute inset-x-0 top-0 h-24 bg-cyan-950 -mt-4 flex justify-center items-center text-white font-sans text-3xl w-5/6 rounded-lg z-10 left-1/2 transform -translate-x-1/2">
          Vendure
        </div>
        <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSignIn}>
          <Form>
            <div className="mt-20 mb-4">
              <Field
                id="username"
                name="username"
                type="text"
                className="block w-full rounded-md border mt-5 p-2 border-gray-300 shadow-md"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <Field
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border mt-1 p-2 border-gray-300 shadow-md"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-cyan-950 text-white py-2 px-4 rounded-md hover:bg-cyan-800 transition-colors"
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <div className="mt-4 text-center text-amber-800">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="mt-2 text-center">
          <p className="text-gray-600 inline-block mr-1">Don't have an account?</p>
          <a href="#" className="text-amber-600 inline-block">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

