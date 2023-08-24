import { useEffect, useState } from "react";
import { PetCardProps, ShelterProp } from "./Props";
import api from "@/api";
import formapi from "@/apiform";

function extractNumber(url: string): number {
    const match = /(\d+)/.exec(url);
    if (match === null) {
      return -1;
    }
    return Number(match[1]);
  }
  
export default function Form({ shelters }: { shelters: ShelterProp[] }) {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    description: "",
    shelter: 0,
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  }
//   async function fetchData(username: string, password: string): Promise<TokenProps> {
//     try {
//       const response = await api.post('api-token-auth/', {
//         "username": username,
//         "password": password
//       });
//       const data = response.data;
//       return data;
//     } catch (error) {
//       console.error(error);
//       return {token: ""};
//     }
//   }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Token 043ac7dda62905f56ca9d0029ccf9dff922dd54d",
        "Accept": "application/json",
      },
    }

    const form = event.target;
    console.log("event", form);

    const data = new FormData();

    // check if form is filled
    if (!form.name.value || !form.species.value || !form.breed.value || !form.age.value || !form.gender.value || !form.size.value || !form.description.value || !form.shelter.value) {
      return;
    }

    console.log("formData", formData);
    formData.shelter = Number(formData.shelter);
    formapi.post("opportunities/", formData, config).then((response) => {
      console.log(response);
    })
  };

  useEffect(() => {
    console.log(shelters);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow w-full max-w-lg mx-aut text-black"
    >
      <div className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
          Type
        </label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option hidden disabled selected value="tmp"> -- select an option -- </option>
          <option value="A">Adoption</option>
          <option value="F">Foster</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="species"
          className="block text-gray-700 font-medium mb-2"
        >
          Species
        </label>
        <input
          type="text"
          name="species"
          id="species"
          value={formData.species}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="breed" className="block text-gray-700 font-medium mb-2">
          Breed
        </label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={formData.breed}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
          Gender
        </label>
        <select
            name="gender"
            id="gender"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
        >
            <option hidden disabled selected value="tmp"> -- select an option -- </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-medium mb-2">
          Size
        </label>
        <select
          name="size"
          id="size"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option hidden disabled selected value="tmp"> -- select an option -- </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="shelter"
          className="block text-gray-700 font-medium mb-2"
        >
          Shelter
        </label>
        <select
          name="shelter"
          id="shelter"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option hidden disabled selected value="tmp"> -- select an option -- </option>
          {shelters.map((shelter) => (
            // extract number from url
            <option key={extractNumber(shelter.url)} value={extractNumber(shelter.url)}>
              {shelter.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
