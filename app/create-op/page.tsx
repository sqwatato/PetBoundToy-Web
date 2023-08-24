"use client"
import React, { useState, useEffect } from 'react';
import PetCard from '@/components/PetCard';
import Image from "next/image";
import api from "@/api";
import Cookies from 'js-cookie'
import { PetCardProps, ShelterProp } from "@/components/Props";
import Form from '@/components/OpportunityForm';

async function fetchData(): Promise<ShelterProp[]> {
  try {
    const response = await api.get('shelters/');
    const data = response.data;
    console.log(data)
    console.log(response)
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Opportunities() {
  const [shelters, setShelters] = useState<ShelterProp[]>([]);

  useEffect(() => {
    fetchData().then((data) => setShelters(data));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500 pt-[5%]">
      <Form shelters={shelters} />
    </div>
  )
}
