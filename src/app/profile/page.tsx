'use client';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Navbar from '../../widgets/navbar';
import { Calendar, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

function InputField(
  {
    isEditable, label, name, required, type,
  }: { label: string, name: string, type: string, required: boolean, isEditable: boolean }
) {
  return (
    <div className="mb-4 text-gray-700">
      <label htmlFor={name}>{label} {required ? '(required)' : '(optional)'}</label>
      <Field
        type={type}
        id={name}
        name={name}
        className="bg-gray-200 border border-gray-300 rounded-md mt-1 py-2 px-4 w-5/6"
        disabled={!isEditable}
      />
    </div>
  )
}

const genderOptions = [
  { label: 'Select your gender', value: '', disabled: true },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

export default function Profile() {

  const initialFormValues = {
    username: 'john_doe',
    email: 'johndoe@gmail.com',
    firstName: 'John',
    middleName: '',
    lastName: 'Doe',
    streetNumber: '110',
    streetName: 'Liverpool Street',
    suburb: 'Moonah',
    state: 'TAS',
    country: 'Australia',
    postcode: '7010',
    gender: 'male',
  };

  const [isEditable, setIsEditable] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);

  function toggleEditMode() {
    setIsEditable((prevState) => !prevState);
    setIsIconVisible(false);
  };

  function handleCancelChanges() {
    setFormValues(initialFormValues);
    setIsEditable(false);
    setIsIconVisible(true);
  };

  function handleSaveChanges () {
    setIsEditable(false);
    setIsIconVisible(true);
  };

  return (
    <div className="flex">
      <div className="hidden lg:block lg:w-1/4 overflow-y-auto">
        <Navbar />
      </div>

      <div className="min-h-screen h-full w-full md:w-full lg:ml-6 lg:mt-5">
        <div
          className="h-64 lg:h-56 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1077026512/photo/nature-inspired-table.jpg?s=612x612&w=0&k=20&c=TthBCamXFsPZt2CaCfd2EzuzeImWiwKTUZJTMEIKFcI=')",
          }}
        />

        <div className="bg-slate-100 p-8 mx-2 lg:mx-10 -translate-y-12 rounded-lg">
          <div className="flex justify-end">
            <div onClick={toggleEditMode} className="cursor-pointer">
              {isIconVisible && (
                <EditOutlined/>
              )}
            </div>
          </div>
          <Formik
            initialValues={formValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:px-4">
                  <h1 className="text-xl font-semibold mb-4 flex items-center justify-between">
                    Authorisation and Name
                  </h1>
                  <div>
                    <InputField
                      label='Username'
                      name='username'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Email'
                      name='email'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='First Name'
                      name='firstName'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Middle Name'
                      name='middleName'
                      type='text'
                      required={false}
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Last Name'
                      name='lastName'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>
                  </div>
                </div>

                <div className="lg:w-1/2 lg:px-4">
                  <h1 className="text-xl font-semibold mb-4 flex items-center justify-between">
                    Address
                  </h1>
                  <div>
                    <InputField
                      label='Street Number'
                      name='streetNumber'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Street Name'
                      name='streetName'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Suburb'
                      name='suburb'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='State'
                      name='state'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Country'
                      name='country'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>

                    <InputField
                      label='Postcode'
                      name='postcode'
                      type='text'
                      required
                      isEditable={isEditable}
                    ></InputField>
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:mt-8">
                <div className="lg:w-1/2 lg:pr-4">
                  <h1 className="text-xl font-semibold mb-4 flex items-center justify-between">
                    Extra Details
                  </h1>
                  <div className="mb-4 text-gray-700">
                    <label htmlFor="gender">Gender (required)</label>
                    <Field as="select" id="gender" name="gender" className="bg-gray-100 border border-gray-300 rounded-md my-1 py-2 px-4 w-5/6" disabled={!isEditable}>
                      {genderOptions.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.disabled}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm font-semibold">Date of Birth:</p>
                    <Calendar className='max-w-[300px]' fullscreen={false} />
                  </div>
                </div>
              </div>
              {isEditable && (
                <div className="flex justify-center my-4">
                  <Button type="primary" className="text-black bg-yellow-500 mx-1" onClick={handleCancelChanges}>Cancel Changes</Button>
                  <Button type="primary" className="text-black bg-green-500 mx-1" onClick={handleSaveChanges}>Save Changes</Button>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
