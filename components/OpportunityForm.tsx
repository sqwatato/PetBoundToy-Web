import { useEffect, useState } from "react";
import { PetCardProps, ShelterProp } from "./Props";
export default function Form({ shelters }: { shelters: ShelterProp[] }) {
  const [formData, setFormData] = useState({} as PetCardProps);

  const handleImageChange = (event:any) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({
          ...formData,
          image: e.target.result,
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    console.log(shelters);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
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
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
          Type
        </label>
        <input
          type="text"
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
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
        <label
          htmlFor="gender"
          className="block text-gray-700 font-medium mb-2"
        >
          Gender
        </label>
        <input
          type="text"
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-medium mb-2">
          Size
        </label>
        <input
          type="text"
          name="size"
          id="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
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
        >
          {shelters.map((shelter) => (
            <option key={shelter.id} value={shelter.id}>
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
