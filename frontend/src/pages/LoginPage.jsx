import React, { useState } from 'react';

// Import toastify untuk notifikasi login
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Supaya user gabisa klik tombol login ketika proses login lagi berjalan
    setError(''); // Reset error sebelum memulai proses login

    try {
      if (username === '' || password === '') {
        setError('Username atau password masih kosong');
        showLoginFailedToast('Username atau password masih kosong.');
        setIsSubmitting(false);
        return;
      }

      // Use toast.promise directly for handling login process
      toast.promise(login(username, password), {
        pending: 'Mencoba login...',
        success: 'Login berhasil!',
        error: 'Login gagal'
      }, {
        pauseOnHover: false,
      }).finally(() => {
          setIsSubmitting(false)
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'valid' || password === 'valid') {
            resolve('Login berhasil!');  // Simulasi login berhasil
        } else {
            reject('Login gagal');  // Simulasi login gagal
        }
      }, 2000);  // Simulasi delay 2 detik proses login
    });
  };

  const showLoginFailedToast = (message) => { // Notifikasi apabila username atau password kosong ketika user submit login
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ToastContainer /> {/* Notifikasi toast */}
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Masuk</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-700 placeholder-gray-400"
              placeholder="Masukkan username anda"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-700 placeholder-gray-400"
              placeholder="Masukkan password anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Mencoba login...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
}
