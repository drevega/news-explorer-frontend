import React from "react";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

// sample data
const sampleCards = [
  {
    link: "#",
    image:
      "https://images.unsplash.com/photo-1759403117912-94e07f918cf3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    date: "October 3, 2025",
    title: 'Everyone Needs a Special "Sit Spot" in Nature',
    text: 'Ever since I read Richard Louvs influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.',
    source: "Treehugger",
  },
  {
    link: "#",
    image:
      "https://images.unsplash.com/photo-1755148500048-d02a83ac433e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    date: "October 3, 2025",
    title: "Nature makes you better",
    text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    source: "National Geographic",
  },
  {
    link: "#",
    image:
      "https://images.unsplash.com/photo-1759054144138-a29eba0a18b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzl8fHxlbnwwfHx8fHw%3D",
    date: "October 3, 2025",
    title: "Grand Teton Renews Historic Crest Trail",
    text: "Creating together a collective impact partnership will increase the conservation resources.",
    source: "National Parks Traveler",
  },
];

function Main() {
  return (
    <main className="main">
      <Preloader />

      {/* 3. Replace the old results container with the new component */}
      <NewsCardList cards={sampleCards} />

      <About />
      {/* remove this later */}
    </main>
  );
}

export default Main;
