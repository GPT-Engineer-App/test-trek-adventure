import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Oops! Couldn't fetch a cat fact right now. Try again later!");
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-inner">
      <h3 className="text-2xl font-semibold mb-2 text-purple-800">Did You Know?</h3>
      <AnimatePresence mode="wait">
        <motion.p
          key={fact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 mb-4"
        >
          {fact}
        </motion.p>
      </AnimatePresence>
      <Button onClick={fetchCatFact} className="bg-purple-600 hover:bg-purple-700">
        New Fact
      </Button>
    </div>
  );
};

export default CatFacts;
