export interface ShelterProp {
  url: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: string;
  id: any;
}

export interface PetCardProps {
  url: string;
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
  id: any;
}
