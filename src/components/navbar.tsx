import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserMd, faCalendarAlt, faClipboardList, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

export default function Navbar () {
  return (
    <nav className="bg-cyan-950 w-1/5 fixed top-0 left-0 bottom-0 overflow-y-auto p-4 m-4 rounded-2xl">
      <div className="mb-6">
        <div className="flex items-center space-x-3 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU"
            alt="User"
            className="w-12 h-12 rounded-xl"
          />
          <div>
            <p className="text-white font-semibold">Welcome back,</p>
            <p className="text-white">Username</p>
          </div>
        </div>
      </div>

      <hr className="border-b border-gray-600 mb-6" />

      <ul>
        <li className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faUserMd} className="text-white h-4 w-4" /> 
          <a href="#" className="text-white">Doctor Schedules</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-white h-4 w-4" /> 
          <a href="#" className="text-white">Patient Appointments</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <FontAwesomeIcon icon={faClipboardList} className="text-white h-4 w-4" /> 
          <a href="#" className="text-white">Forms</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <FontAwesomeIcon icon={faUserCircle} className="text-white h-4 w-4" /> 
          <a href="#" className="text-white">Profile</a>
        </li>
        <li className="flex items-center space-x-3 mt-4">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-white h-4 w-4" /> 
          <a href="#" className="text-white">Sign Out</a>
        </li>
      </ul>
    </nav>
  );
};
