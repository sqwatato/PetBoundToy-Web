import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Search from "@/components/Search"
import Contact from "@/components/Contact"

const animalsToAdopt = [
  "Species (Any)",	
  "Dogs",
  "Cats",
  "Rabbits",
  "Guinea Pigs",
  "Hamsters",
  "Gerbils",
  "Ferrets",
  "Parrots",
  "Canaries",
  "Finches",
  "Budgies",
  "Reptiles (e.g., Snakes, Lizards)",
  "Amphibians (e.g., Frogs, Newts)",
  "Small Birds (e.g., Cockatiels, Lovebirds)",
  "Small Rodents (e.g., Mice, Rats)",
  "Hermit Crabs"
];

const dogBreeds = [
  "Breed (Any)",
  "American Bulldog",
  "Australian Shepherd",
  "Basset Hound",
  "Beagle",
  "Bernese Mountain Dog",
  "Boxer",
  "Brittany",
  "Bulldog",
  "Boston Terrier",
  "Cavalier King Charles Spaniel",
  "Chihuahua",
  "Cocker Spaniel",
  "Collie",
  "Dachshund",
  "Doberman Pinscher",
  "English Springer Spaniel",
  "French Bulldog",
  "German Shepherd",
  "German Shorthaired Pointer",
  "Golden Retriever",
  "Great Dane",
  "Havanese",
  "Husky",
  "Labrador Retriever",
  "Maltese",
  "Mastiff",
  "Miniature American Shepherd",
  "Miniature Schnauzer",
  "Pembroke Welsh Corgi",
  "Pomeranian",
  "Poodle",
  "Pug",
  "Rottweiler",
  "Siberian Husky",
  "Shetland Sheepdog",
  "Shih Tzu",
  "Vizsla",
  "West Highland White Terrier",
  "Yorkshire Terrier"
];

const catBreeds = [
  "Breed (Any)",
  "Siamese",
  "Maine Coon",
  "Persian",
  "Bengal",
  "Russian Blue",
  "Ragdoll",
  "Sphynx",
  "British Shorthair",
  "Abyssinian",
  "Scottish Fold",
  "Exotic Shorthair",
  "American Shorthair",
  "Norwegian Forest Cat",
  "Birman",
  "Oriental Shorthair"
];

const rabbitBreeds = [
  "Breed (Any)",
  "Holland Lop",
  "Netherland Dwarf",
  "Mini Rex",
  "Lionhead",
  "Flemish Giant",
  "Rex",
  "Mini Lop",
  "English Angora",
  "Dutch",
  "American Fuzzy Lop",
  "Jersey Wooly"
];

const guineaPigBreeds = [
  "Breed (Any)",
  "American",
  "Abyssinian",
  "Peruvian",
  "Silkie",
  "Teddy",
  "Coronet",
  "Texel",
  "White Crested",
  "Himalayan",
  "Crested",
  "Rex"
];

const hamsterBreeds = [
  "Breed (Any)",
  "Syrian Hamster",
  "Dwarf Campbell Russian Hamster",
  "Dwarf Winter White Russian Hamster",
  "Roborovski Hamster",
  "Chinese Hamster"
];

const gerbilBreeds = [
  "Breed (Any)",
  "Mongolian Gerbil"
];

const ferretBreeds = [
  "Breed (Any)",
  "European Polecat",
  "Sable",
  "Albino",
  "Black Sable",
  "Champagne",
  "Chocolate",
  "Cinnamon",
  "Silver",
  "White"
];

const parrotBreeds = [
  "Breed (Any)",
  "Budgerigar (Budgie)",
  "Cockatiel",
  "African Grey Parrot",
  "Macaw",
  "Cockatoo",
  "Lovebird",
  "Conure",
  "Amazon Parrot",
  "Eclectus Parrot"
];

const canaryBreeds = [
  "Breed (Any)",
  "American Singer Canary",
  "Russian Singer Canary",
  "Spanish Timbrado Canary",
  "Gloster Canary",
  "Border Canary",
  "Norwich Canary"
];

const finchBreeds = [
  "Breed (Any)",
  "Zebra Finch",
  "Society Finch",
  "Gouldian Finch",
  "Bengalese Finch",
  "Java Finch",
  "Diamond Dove"
];

const budgieBreeds = [
  "Breed (Any)",
  "Budgerigar (Budgie)"
];

const reptileBreeds = [
  "Breed (Any)",
  "Corn Snake",
  "Ball Python",
  "Bearded Dragon",
  "Leopard Gecko",
  "Crested Gecko",
  "Russian Tortoise",
  "Red-Eared Slider Turtle",
  "Green Anole",
  "Veiled Chameleon"
];

const amphibianBreeds = [
  "Breed (Any)",
  "American Green Tree Frog",
  "Fire-Bellied Toad",
  "Axolotl"
];

const smallBirdBreeds = [
  "Breed (Any)",
  "Budgerigar (Budgie)",
  "Cockatiel",
  "Canary",
  "Finch",
  "Lovebird"
];

const smallRodentBreeds = [
  "Breed (Any)",
  "Syrian Hamster",
  "Dwarf Hamster",
  "Gerbil",
  "Mouse",
  "Rat"
];

const hermitCrabBreeds = [
  "Breed (Any)",
  "Coenobita clypeatus (Caribbean Hermit Crab)",
  "Coenobita compressus (Ecuadorian Hermit Crab)"
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Search 
        animalsToAdopt={animalsToAdopt}
        dogBreeds={dogBreeds}
        catBreeds={catBreeds}
        rabbitBreeds={rabbitBreeds}
        guineaPigBreeds={guineaPigBreeds}
        hamsterBreeds={hamsterBreeds}
        gerbilBreeds={gerbilBreeds}
        ferretBreeds={ferretBreeds}
        parrotBreeds={parrotBreeds}
        canaryBreeds={canaryBreeds}
        finchBreeds={finchBreeds}
        budgieBreeds={budgieBreeds}
        reptileBreeds={reptileBreeds}
        amphibianBreeds={amphibianBreeds}
        smallBirdBreeds={smallBirdBreeds}
        smallRodentBreeds={smallRodentBreeds}
        hermitCrabBreeds={hermitCrabBreeds}
      />
      <Contact />
    </main>
  )
}
