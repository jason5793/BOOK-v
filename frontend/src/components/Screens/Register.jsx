import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !email || !password || !confirmPassword || !address || !phone) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Phone number must be 10 digits');
      return;
    }

    if (parseInt(age) <= 0 || isNaN(parseInt(age))) {
      setError('Age must be a positive number');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log({ name, age, email, password, phone, address });

    // You can now call an API to register the user
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white">Contact No.</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Re-enter your password"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-white">Address</label>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              placeholder="Enter your address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
          >
            Register
          </button>
        </form>

        <p className="text-center mb-4 text-white">Already have an account?</p>
        <Link to="/login">
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Register;