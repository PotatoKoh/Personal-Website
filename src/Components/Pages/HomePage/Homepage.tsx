import { NavBar } from "../../Navbar";
import ProfilePicture from "../../../assets/ProfilePicture.png";
import LtoR from "../../../assets/LtoR.png";
import RtoL from "../../../assets/RtoL.png";
import DisplaySettings from "../../../assets/DisplaySettings.png";
import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
}

export const HomePage = () => {
  const Images = [DisplaySettings, LtoR, RtoL];

  const Carousell = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleDotClick = (index: number) => {
      setCurrentIndex(index);
    };
    return (
      <div className="flex-1 relative w-auto h-auto">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-contain rounded-xl transition-opacity duration-300 ease-in-out"
        />

        {/* Left and Right navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>

        {/* Dots for selecting image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-screen min-h-screen">
      <NavBar />
      <div className="w-full px-5 lg:px-40 pt-10 pb-10 " data-aos="fade-down">
        {/* Introduction */}
        <p className="titles">About Me</p>
        <div className="flex flex-row items-center justify-center pb-20">
          <div className="flex flex-col card-styling mr-5  lg:w-[40%] text-start gap-y-5 font-light">
            <span>Hi!</span>
            <span>
              I'm Gabriel, A Computer Engineering Diploma Graduate from 2022 in
              Temasek Polytechnic.
            </span>
            <span>
              I had my first experience on Web Development during my Final Year
              Project, where I was tasked to work in a team of 3 to make a
              Management Contribution System called growlah.
            </span>
            <span>
              Since then, my interest in the field grew which led me to take on
              this internship at Horizon Labs as a Front-End Developer Intern.
            </span>
          </div>
          <img
            src={ProfilePicture}
            className="max-h-auto max-w-[150px] md:max-w-[300px] rounded-xl"
          />
        </div>

        {/* Work Done */}
        <p className="titles">Past work experiences</p>
        <div className="flex flex-col gap-y-5 items-center justify-center text-start font-light ">
          {/* First Work Experience */}
          <div className="flex flex-row lg:max-w-[40%] font-light">
            <div className="flex-1 card-styling mr-5 ">
              <p className="mb-5">
                My first Internship was actually as a Software Engineer at
                Inspiraz Technology where I helped make tools for their next
                generation Machine Vision Software.
              </p>
              <p>
                It was done using Halcon Libraries, C++. One of the tools I made
                was a screw measurement tool that measured the pitch, major and
                minor diameters.
              </p>
            </div>
            {/*Carousell */}
            <Carousell images={Images} />
          </div>

          {/* Second Work Experience */}
          <div className=" lg:max-w-[40%]">
            <div className="card-styling ">
              <p className="mb-5">
                After my internship, for my Final Year Project, I worked on a
                vegetable management system.
              </p>
              <p className="mb-5">
                Users would submit their contributions online and it would be
                sent to a database to update the data on what they have
                submitted and for the manager their individual and overall
                community contributions.
              </p>
              <span>You can refer to the</span>
              <span
                className="cursor-pointer underline inline mx-1 font-semibold"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1QWQA2df90fKibFnsOqsLYb-SbYKvRzpB?usp=drive_link",
                    "_blank"
                  )
                }
                rel="noopener noreferrer"
              >
                link
              </span>
              <span className="">
                to a google drive where all the code and a video explaining how
                it works is stored.
              </span>
            </div>
          </div>
          {/* Third Experience */}
          <div className="flex flex-row lg:max-w-[40%]">
            <div className="flex-1 card-styling  ">
              <p className="mb-5">
                My Second Internship is the one I am currently At, Horizon Labs.
                I am there as a Front-End Developer Intern.
              </p>
              <span className="">
                Here is the list of the pages I have done so far
              </span>
              <ul className="list-disc pl-5 pt-5 font-semibold">
                <li>Our Tests Page</li>
                <li>Creators Form</li>
                <li>Dashboard Home Page And Redesign</li>
                <li>Dashboard Add-tests Page with another intern</li>
                <li>Off the Waitlist Page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
