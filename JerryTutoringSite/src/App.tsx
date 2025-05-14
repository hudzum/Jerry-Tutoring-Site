import Navbar from "./components/Navbar";
import "./App.css";
import { Button } from "./components/ui/button";
import Squares from "./components/ui/Squares";
import RotatingText from "./components/ui/RotatingText";
function App() {
  return (
    <>
      <div className="fixed inset-1 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#D3D3D3"
          hoverFillColor="#fff"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-row justify-around mt-10">
          <div className="flex flex-col justify-center items-start w-2/3 p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4  ">
              <span className="inline-flex items-center gap-2">
                👋 Hello, I am Jerry Chen{" "}
                <RotatingText
                  texts={[
                    "Perfect ACT Scorer",
                    "National Merit Finalist",
                    "Experienced Tutor",
                    "LGBTQ+ Advocate",
                  ]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-amber-400 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  rotationInterval={2000}
                />
              </span>
            </h1>
            <p className="text-xl mb-6">
              I am a Tulane Student Studing Political Science and Mathmatetics
              with 5+ Years in Tutoring Experience, focusing on the ACT, Math,
              and English
            </p>
          </div>
          <div className="w-1/3">
            <img
              src="./JerryChen.jpeg"
              alt="Picture of Jerry Chen"
              className="w-full h-auto mb-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
