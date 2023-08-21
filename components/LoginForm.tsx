"use client";
import api from "@/api";
import { useState } from "react";
import Router, { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RouterContext } from "next/dist/shared/lib/router-context";

interface TokenProps {
    token: string;
}

async function fetchData(username: string, password: string): Promise<TokenProps> {
    try {
      const response = await api.post('api-token-auth/', {
        "username": username,
        "password": password
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return {token: ""};
    }
  }

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
    <form onSubmit={handleSubmit} className="text-gray-50 p-4 rounded-md">
      <div className="mb-4">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM0 8.25a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"/>
              <path d="M13.5 13.5l4.5 4.5"/>
            </svg>
          </div>
          <input
            id="username"
            name="username"
            className="block w-full py-3 pl-10 pr-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Username"
            type="text"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM0 8.25a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"/>
              <path d="M13.5 13.5l4.5 4.5"/>
            </svg>
          </div>
          <input
            id="password"
            name="password"
            className="block w-full py-3 pl-10 pr-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password"
            type="password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-green-500 border border-green-600 rounded-lg sm:w-auto focus:ring-4 focus:ring-green-300"
      >
        Login <i className="fas fa-arrow-right ml-1"></i>
      </button>
    </form>
  );
}
