'use client'
import { useState } from "react";
import Image from "next/image";

const Search = (props) => {
  const animalsList = props.animalsToAdopt;
  const dogBreeds = props.dogBreeds;
  const catBreeds = props.catBreeds;
  const rabbitBreeds = props.rabbitBreeds;
  const guineaPigBreeds = props.guineaPigBreeds;
  const hamsterBreeds = props.hamsterBreeds;
  const gerbilBreeds = props.gerbilBreeds;
  const ferretBreeds = props.ferretBreeds;
  const parrotBreeds = props.parrotBreeds;
  const canaryBreeds = props.canaryBreeds;
  const finchBreeds = props.finchBreeds;
  const budgieBreeds = props.budgieBreeds;
  const reptileBreeds = props.reptileBreeds;
  const amphibianBreeds = props.amphibianBreeds;
  const smallBirdBreeds = props.smallBirdBreeds;
  const smallRodentBreeds = props.smallRodentBreeds;
  const hermitCrabBreeds = props.hermitCrabBreeds;
  const ageTypes = props.ageTypes;

  let [selectedAnimal, setSelectedAnimal] = useState("None");

  function getBreeds(animal) {
    switch (animal) {
      case "Dogs":
        return dogBreeds;
      case "Cats":
        return catBreeds;
      case "Rabbits":
        return rabbitBreeds;
      case "Guinea Pigs":
        return guineaPigBreeds;
      case "Hamsters":
        return hamsterBreeds;
      case "Gerbils":
        return gerbilBreeds;
      case "Ferrets":
        return ferretBreeds;
      case "Parrots":
        return parrotBreeds;
      case "Canaries":
        return canaryBreeds;
      case "Finches":
        return finchBreeds;
      case "Budgies":
        return budgieBreeds;
      case "Reptiles (e.g., Snakes, Lizards)":
        return reptileBreeds;
      case "Amphibians (e.g., Frogs, Newts)":
        return amphibianBreeds;
      case "Small Birds (e.g., Cockatiels, Lovebirds)":
        return smallBirdBreeds;
      case "Small Rodents (e.g., Mice, Rats)":
        return smallRodentBreeds;
      case "Hermit Crabs":
        return hermitCrabBreeds;
      default:
        return [];
    }
  }
  
  return ( 
    <section className="bg-white font__poppins" id="Search">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">Search</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Find Animals Near You
          </p>
        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2 lg:col-span-3">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM0 8.25a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"/>
                    <path d="M13.5 13.5l4.5 4.5"/>
                  </svg>
                </div>
                <input id="search" name="search" className="block w-full py-3 pl-10 pr-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Search by city, state, or zip code" type="search" />
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="species" className="sr-only">Species</label>
              <select onChange={(event) => setSelectedAnimal(event.target.value)} id="species" name="species" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                {
                  animalsList.map((animal) => {
                    return <option>{animal}</option>
                  })
                }
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="breed" className="sr-only">Breed</label>
              <select id="breed" name="breed" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
              {
                selectedAnimal !== "None" ? (
                  getBreeds(selectedAnimal).map((breed, index) => (
                    <option key={index}>{breed}</option>
                  ))
                ) : (
                  <option>Breed (Any)</option>
                )
              }
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="age" className="sr-only">Age</label>
              <select id="age" name="age" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                <option>Age (Any)</option>
                <option>Baby</option>
                <option>Young</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg h-[50%] w-[50%]">
          <img src="/images/dog.jpg" alt="hero image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Title</div>
            <p className="text-gray-700 text-base">
              Custom Dog Description
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#location</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#age</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animal_type</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#breed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Search;