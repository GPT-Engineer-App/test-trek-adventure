import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatFacts from "./CatFacts";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const CatBreed = ({ name, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="mb-4 overflow-hidden h-full">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [catName, setCatName] = useState("");
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots or marbling.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and large ears.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const carouselImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1280px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const generateCatName = () => {
    const prefixes = ["Mr.", "Mrs.", "Sir", "Lady", "Prince", "Princess", "Lord", "Captain"];
    const names = ["Whiskers", "Mittens", "Socks", "Fluffy", "Luna", "Oreo", "Simba", "Nala", "Leo", "Milo"];
    const suffixes = ["the Great", "von Purrington", "Pawsome", "Meowgnificent", "Fluffinator"];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    setCatName(`${randomPrefix} ${randomName} ${randomSuffix}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[300px] mb-12 overflow-hidden rounded-xl shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg')",
              transform: `translateY(${currentSlide * 10}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white text-center shadow-lg">Feline Fascination</h1>
          </div>
        </motion.div>
        <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Cat ${index + 1}`} className="w-full h-[500px] object-cover" />
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-3 py-1 rounded">
                  {currentSlide + 1} / {carouselImages.length}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-white bg-opacity-75 rounded-lg p-6 mb-8 shadow-lg">
          <p className="text-xl text-gray-800 mb-4">
            Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
            independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
            characteristics and personalities.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CatFacts />
          </motion.div>
        </div>

        <div className="bg-white bg-opacity-75 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Cat Name Generator</h2>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Your cat's fancy name"
              value={catName}
              readOnly
              className="flex-grow"
            />
            <Button onClick={generateCatName} className="bg-purple-600 hover:bg-purple-700">
              Generate Name
            </Button>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-800">Popular Cat Breeds</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds.map((breed, index) => (
              <CatBreed key={index} name={breed.name} description={breed.description} image={breed.image} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
