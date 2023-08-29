'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api";
import PetCard from "@/components/home/PetCard";
import { PetCardProps } from "@/components/home/Props";

async function fetchData(): Promise<PetCardProps[]> {
  try {
    const response = await api.get('opportunities/');
    const data = response.data;
    console.log(data)
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Search = (props: any) => {
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

  let [selectedAnimal, setSelectedAnimal] = useState("Species (Any)");
  let [selectedBreed, setSelectedBreed] = useState("Breed (Any)");
  let [selectedAge, setSelectedAge] = useState("Age (Any)");
  const [pets, setPets] = useState<PetCardProps[]>([]);

  useEffect(() => {
    fetchData().then((data) => setPets(data));
  }, []);

  function getBreeds(animal: string) {
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
        return ["Breed (Any)"];
    }
  }

  function sortPets(pet: PetCardProps) {
    //Testing Statements
    // console.log("Selected Animal: " + selectedAnimal + " | Pet Species: " + pet.species);
    // console.log("Selected Breed: " + selectedBreed + " | Pet Breed: " + pet.breed);
    // console.log("Selected Age: " + selectedAge + " | Pet Age: " + pet.age.toString());

    //Fixing Selected Animal Formatting
    let testingSelectedAnimal = selectedAnimal.trim();
    if (selectedAnimal.indexOf(")") !== -1) { testingSelectedAnimal = testingSelectedAnimal.substring(0, testingSelectedAnimal.indexOf("(")).trim() }
    testingSelectedAnimal = testingSelectedAnimal.substring(0, testingSelectedAnimal.lastIndexOf("s"));



    console.log("Testing Selected Animal: " + testingSelectedAnimal); 
    if (
      (selectedAnimal === "Species (Any)" || testingSelectedAnimal === pet.species) &&
      (selectedBreed === "Breed (Any)" || selectedBreed === pet.breed) &&
      (selectedAge === "Age (Any)" || selectedAge === pet.age.toString())
    ) {
      return (
        <div key={pet.id} className="flex justify-center">
          <PetCard
            key={pet.id}
            type={pet.type}
            name={pet.name}
            age={pet.age}
            species={pet.species}
            breed={pet.breed}
            gender={pet.gender}
            size={pet.size}
            description={pet.description}
            shelter={pet.shelter}
            image={pet.image}
            id={pet.id}
            url={pet.url}
          />
        </div>
      );
    }
    return null;
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
        <h1 className="text-black font-bold font__poppins">Filters</h1>
          <form className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-3 relative">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.5a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM0 8.25a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"/>
                  <path d="M13.5 13.5l4.5 4.5"/>
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full py-3 pl-10 pr-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Search by city, state, or zip code"
                type="search"
              />
            </div>
          </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="species" className="sr-only">Species</label>
              <select onChange={(event) => setSelectedAnimal(event.target.value)} id="species" name="species" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                {
                  animalsList.map((animal: string, index: number) => {
                    return <option key={index}>{animal}</option>
                  })
                }
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label htmlFor="breed" className="sr-only">Breed</label>
              <select onChange={(event) => setSelectedBreed(event.target.value)} id="breed" name="breed" className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                {
                  selectedAnimal !== "None" ? (
                    getBreeds(selectedAnimal).map((breed: string, index: number) => (
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
              <input
                type="text"
                pattern="[0-9]*"
                onChange={(event) => {
                  const input = event.target.value;
                  const numericInput = input.replace(/\D/g, "");
                  if (numericInput === "") {
                    setSelectedAge("Age (Any)");
                  } else {
                    setSelectedAge(numericInput);
                  }
                }}
                id="age"
                name="age"
                placeholder="Age (Any)"
                className="block w-full py-3 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {
            pets.map((pet) => (
              sortPets(pet)
            ))
          }
        </div>
      </div>
    </section>
  );
}
 
export default Search;