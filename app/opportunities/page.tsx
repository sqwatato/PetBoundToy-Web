"use client"
import React, { useState, useEffect } from 'react';
import PetCard from '@/components/PetCard';
import Image from "next/image";
import api from "@/api";
import Cookies from 'js-cookie'
interface ShelterProp {
  url: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: string;
}
interface PetCardProps {
  type: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  description: string;
  shelter: ShelterProp;
  image: string;
  url: string;
}

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

export default function Opportunities() {
  const [pets, setPets] = useState<PetCardProps[]>([]);

  useEffect(() => {
    fetchData().then((data) => setPets(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pets.map((pet) => (
        <PetCard key={pet.url} type={pet.type} name={pet.name} age={pet.age} species={pet.species} breed={pet.breed} gender={pet.gender} size={pet.size} description={pet.description} shelter={pet.shelter} image={pet.image} />
      ))}
    </div>
  )
}
