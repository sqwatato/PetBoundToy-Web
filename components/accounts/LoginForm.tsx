"use client";
import api from "@/api";
import { useState } from "react";
import Router, { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";

interface TokenProps {
  token: string;
}

async function fetchData(
  username: string,
  password: string
): Promise<TokenProps> {
  try {
    const response = await api.post("api-token-auth/", {
      username: username,
      password: password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { token: "" };
  }
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await fetchData(username, password);
      if (response.token) {
        const token = response.token;
        console.log(token);
        Cookies.set("token", token, { expires: 1 });
        router.push("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-96">
      <div className="mb-6">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <Input
          id="username"
          name="username"
          className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder="username"
          type="text"
        />
      </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <Input
            id="password"
            name="password"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password"
            type={showPassword ? "text" : "password"} // Use showPassword state here
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
        >
          Login
          <i className="fas fa-arrow-right ml-1"></i>
        </button>
        <p className="mt-4 text-center text-gray-600 font__poppins">
          Not Registered? <a href="/register" className="text-green-500">Create an account</a>
        </p>
      </form>
    </div>
  );
}