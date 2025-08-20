import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import TextType from "./components/TextType";
import AnimatedContent from "./components/AnimatedContent";
import DarkVeil from "./components/DarkVeil";
import GlarHover from "./components/GlarHover";

function App() {
  return (
    <div className="w-full min-h-screen flex items-start justify-center overflow-auto py-8">
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
        <DarkVeil />
      </div>

      <GlarHover
        width="clamp(300px, 80vw, 1000px)"
        height="auto"
        background="rgba(255, 255, 255, 0.1)"
        borderRadius="20px"
        borderColor="rgba(255, 255, 255, 0.2)"
        glareColor="#ffffff"
        glareOpacity={0.1}
        className="p-8 my-auto"
      >
        <header className="text-white text-center mb-8">
          <TextType
            text="Weather App"
            className="text-5xl font-bold mb-4"
            typingSpeed={100}
            initialDelay={500}
            pauseDuration={2000}
            deletingSpeed={50}
            loop
          />
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            threshold={0.2}
            delay={0.3}
          >
            <p className="text-lg">Get the latest weather updates</p>
          </AnimatedContent>
        </header>

        <main className="flex flex-col items-center gap-8">
          <SearchBar />
          <WeatherDisplay />
        </main>
      </GlarHover>
    </div>
  );
}

export default App;