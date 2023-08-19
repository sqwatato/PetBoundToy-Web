"use client"
import React, { useState, useEffect } from 'react';
import PetCard from '@/components/PetCard';
import Image from "next/image";
import api from "@/api";
import Cookies from 'js-cookie'

interface PetCardProps {
  name: string;
  age: number;
  species: string;
  breed: string;
  url: string;
}

async function fetchData(): Promise<PetCardProps[]> {
  try {
    const response = await api.get('opportunities/');
    const data = response.data;
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
        <PetCard key={pet.url} name={pet.name} age={pet.age} species={pet.species} breed={pet.breed} />
      ))}
    </div>
  )
}
