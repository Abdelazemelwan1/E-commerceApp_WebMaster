import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: 'Web Masters',
    address: 'AlMansoura',
    phone: '01096392102'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saved data:', formData);
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 mb-10 bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-700"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleEdit}
          disabled={isEditing}
          className={`px-4 py-2 rounded-md text-white ${
            isEditing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Edit
        </button>
        <button
          onClick={handleSave}
          disabled={!isEditing}
          className={`px-4 py-2 rounded-md text-white ${
            !isEditing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Profile;
