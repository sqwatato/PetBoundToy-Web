import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PetCardProps } from "@/components/Props";

const PetCard = ({ type, name, species, breed, age, gender, size, description, shelter, image }: PetCardProps) => {

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt="hero image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">{name}</div>
          <p className="text-gray-700 text-base">
            {description.length > 100 ? description.substring(0, 100) + "..." : description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type == 'A' ? 'Adoption' : 'Foster' }</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{age} years old</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{breed}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{gender}</span>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-sm">
            {shelter.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
