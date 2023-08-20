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
    <form onSubmit={handleSubmit} className="text-gray-500">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="border-2 border-gray-300"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        className="border-2 border-gray-300"
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
