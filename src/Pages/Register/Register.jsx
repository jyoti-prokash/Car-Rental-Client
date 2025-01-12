import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import banner from "../../assets/others/login.jpg";

const Register = () => {
  const navigate = useNavigate();
  const {
    createUser,
    googleLogin,
    updateUserProfile,
    setErrorText,
    errorText,
  } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          // console.log('user profile update')
        });
        navigate("/");
      })
      .catch((err) => {
        setErrorText(err.message);
      });
  };
  // gmail login
  const googleUserLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Welcome");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      className="w-full bg-center bg-cover lg:p-40 p-10"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="w-full max-w-xl mx-auto space-y-3 rounded-xl text-white bg-[#1b1b1b7b] p-5">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block">Username</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="URL"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-between text-xs">
              <p className="text-red-600">{errorText}</p>
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-gradient-to-r from-blue-500 to-green-500">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={googleUserLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <p className="font-bold">Login</p>
        </div>
        <p className="text-lg text-center sm:px-6">
          Have an account?
          <Link
            to="/login"
            href="#"
            className="underline text-red-500 ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
