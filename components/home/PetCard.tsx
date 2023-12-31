import { useState } from "react";
import { PetCardProps } from "@/components/home/Props";

const PetCard = ({ type, name, breed, age, gender, description, shelter, image }: PetCardProps) => {
  const [isHeartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!isHeartActive);
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-sm w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-300 border-opacity-50 relative">
        <div className="relative h-40 bg-gray-100">
          <img className="object-contain w-full h-full" src={image} alt="Pet" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">{name}</div>
          <p className="text-gray-700 text-base">
            {description.length > 100 ? description.substring(0, 100) + "..." : description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type === 'A' ? 'Adoption' : 'Foster'}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{age} y/o</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{breed}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{gender}</span>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-sm">
            {shelter.name}
          </p>
        </div>
        {/* <div className="absolute bottom-0 right-0 flex space-x-2 p-4">
          <Heart active={isHeartActive} onClick={handleHeartClick}/>
        </div> */}
      </div>
    </div>
  );
};

export default PetCard;
