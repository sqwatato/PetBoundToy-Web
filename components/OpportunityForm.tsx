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
<div className="bg-white p-4 md:p-8 rounded-md shadow-md w-full max-w-screen-xl mx-auto flex flex-wrap justify-between">
  <h1 className="w-full text-3xl md:text-4xl xl:text-5xl font-extrabold text-black leading-none tracking-tight text-center mb-6">
    Create Opportunity
  </h1>
  <div className="w-full md:w-1/2 pr-4 border-r border-gray-300">
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium text-black">
        Image
      </label>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />

      <label htmlFor="type" className="block text-sm font-medium text-black mt-4">
        Type
      </label>
      <select
        name="type"
        id="type"
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        required
      >
        <option hidden disabled value="tmp"> -- select an option -- </option>
        <option value="A">Adoption</option>
        <option value="F">Foster</option>
      </select>

      <label htmlFor="name" className="block text-sm font-medium text-black mt-4">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />

      <label htmlFor="species" className="block text-sm font-medium text-black mt-4">
        Species
      </label>
      <input
        type="text"
        name="species"
        id="species"
        value={formData.species}
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />
    </form>
  </div>
  
  <div className="w-full md:w-1/2 pl-4">
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="breed" className="block text-sm font-medium text-black">
        Breed
      </label>
      <input
        type="text"
        name="breed"
        id="breed"
        value={formData.breed}
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />

      <label htmlFor="age" className="block text-sm font-medium text-black mt-4">
        Age
      </label>
      <input
        type="number"
        name="age"
        id="age"
        value={formData.age}
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />

      <label htmlFor="gender" className="block text-sm font-medium text-black mt-4">
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        required
      >
        <option hidden disabled value="tmp"> -- select an option -- </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="size" className="block text-sm font-medium text-black mt-4">
        Size
      </label>
      <select
        name="size"
        id="size"
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        required
      >
        <option hidden disabled value="tmp"> -- select an option -- </option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <label htmlFor="description" className="block text-sm font-medium text-black mt-4">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />

      <label htmlFor="shelter" className="block text-sm font-medium text-black mt-4">
        Shelter
      </label>
      <select
        name="shelter"
        id="shelter"
        onChange={handleChange}
        className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        required
      >
        <option hidden disabled value="tmp"> -- select an option -- </option>
        {shelters.map((shelter) => (
          <option key={extractNumber(shelter.url)} value={extractNumber(shelter.url)}>
            {shelter.name}
          </option>
        ))}
      </select>
      
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  );
}
