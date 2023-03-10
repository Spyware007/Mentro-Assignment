import React, { useEffect, useState } from "react";
import "./App.css";
import Prankur from "./assets/Prankur.png";
import Keshav from "./assets/Keshav.png";
import Ankita from "./assets/Ankita.png";
import Saumya from "./assets/Saumya.png";
import Saurav from "./assets/Saurav.png";
import downArrow from "./assets/downArrow.svg";

// Array of 10 mentors as per the design as there are hidden circles below the upper layer
// It also makes the animation looks continuous
const mentors = [
  {
    name: "Prankur Gupta",
    designation: "SDE @Amazon",
    description:
      "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
    link: "",
    rating: "4.9",
    imageSrc: Prankur,
  },
  {
    name: "Saurav Pal",
    designation: "SDE @Amazon",
    description:
      "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
    link: "/",
    rating: "5.0",
    imageSrc: Saurav,
  },
  {
    name: "Saumya Singh",
    designation: "Software Engineer @Red Hat",
    description:
      "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
    link: "/",
    rating: "5.0",
    imageSrc: Saumya,
  },
  {
    name: "Keshav Bathla",
    designation: "SDE-1 @Groww",
    description:
      "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
    link: "/",
    rating: "5.0",
    imageSrc: Keshav,
  },
  {
    name: "Ankita",
    designation: "ML Engineer @Firework",
    description:
      "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
    link: "/",
    rating: "5.0",
    imageSrc: Ankita,
  },
  {
    name: "Prankur Gupta",
    designation: "SDE @Amazon",
    description:
      "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
    link: "",
    rating: "4.9",
    imageSrc: Prankur,
  },
  {
    name: "Saurav Pal",
    designation: "SDE @Amazon",
    description:
      "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
    link: "/",
    rating: "5.0",
    imageSrc: Saurav,
  },
  {
    name: "Saumya Singh",
    designation: "Software Engineer @Red Hat",
    description:
      "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
    link: "/",
    rating: "5.0",
    imageSrc: Saumya,
  },
  {
    name: "Keshav Bathla",
    designation: "SDE-1 @Groww",
    description:
      "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
    link: "/",
    rating: "5.0",
    imageSrc: Keshav,
  },
  {
    name: "Ankita",
    designation: "ML Engineer @Firework",
    description:
      "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
    link: "/",
    rating: "5.0",
    imageSrc: Ankita,
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [color, setColor] = useState("#609B6C");
  const [circleColor, setCircleColor] = useState("#C5F8C7");

  // Additional: When you click on any image in the slider it will become active
  const handleSlideClick = (index) => {
    setActiveIndex(index);
    setColor((prevValue) => (prevValue === "#609B6C" ? "#4caf50" : "#609B6C"));
    setCircleColor((prevValue) =>
      prevValue === "#C5F8C7" ? "#7ABD87" : "#C5F8C7"
    );
  };

  //   Automatic looping of mentors
  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === mentors.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, "7000");
  // }, []);

  // Handling previous click
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? mentors.length / 2 - 1 : prevIndex - 1
    );
    setColor((prevValue) => (prevValue === "#609B6C" ? "#4caf50" : "#609B6C"));
    setCircleColor((prevValue) =>
      prevValue === "#C5F8C7" ? "#7ABD87" : "#C5F8C7"
    );
  };

  // Handling next click
  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === mentors.length / 2 - 1 ? 0 : prevIndex + 1
    );
    setColor((prevValue) => (prevValue === "#609B6C" ? "#4caf50" : "#609B6C"));
    setCircleColor((prevValue) =>
      prevValue === "#C5F8C7" ? "#7ABD87" : "#C5F8C7"
    );
  };

  // Angle values
  const rotateAngle = -(180 / 5) * (activeIndex + 4);
  const circularSliderStyle = {
    transform: `rotateZ(${rotateAngle}deg)`,
  };

  //   const activeSlide = mentors[activeIndex];

  return (
    <>
      <div className="outer-container">
        <div style={{ backgroundColor: circleColor }} className="circle">
          {/* Circular Sllider Here */}
          <div className="slider-container">
            <div className="circular-slider flex-center">
              <ul className="wrapper flex-center" style={circularSliderStyle}>
                {mentors.map((mentor, index) => (
                  <li
                    className="slides"
                    key={index}
                    style={{ "--img-no": index }}
                    onClick={() => handleSlideClick(index)}
                  >
                    <img
                      src={mentor.imageSrc}
                      alt={mentor.name}
                      style={{ "--img-no": index }}
                      className={activeIndex === index ? "active" : ""}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mentor Info Div */}
        <div className="mentor-info">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={activeIndex === index ? "info active-info" : "info"}
            >
              <h2 className="mentor-rating" style={{ color: color }}>
                {mentor.rating}
              </h2>

              {/* Stars */}
              <div
                className="Stars"
                style={{
                  "--rating": +mentor.rating,
                  "--star-background": color,
                }}
              ></div>
              <div>
                <h1 className="mentor-name">{mentor.name}</h1>
                <p className="mentor-designation">{mentor.designation}</p>
              </div>
              <p className="mentor-description">{mentor.description}</p>
              <button className="book-btn" style={{ backgroundColor: color }}>
                Book a Session
              </button>
            </div>
          ))}
        </div>
        {/* Active mentor div */}
        <div className="active-mentor-div">
          <button className="circle-btn" onClick={handleNextClick}>
            <img className="down-arrow" src={downArrow} alt="downArrow" />
          </button>
          <div className="active-mentor">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={
                  activeIndex === index
                    ? "active-slide active-slide-active"
                    : "active-slide"
                }
              >
                <div className="active-mentor-image-container">
                  <img
                    className="active-mentor-image"
                    src={mentor.imageSrc}
                    alt={mentor.name}
                  />
                </div>
                <h2 className="active-mentor-name">{mentor.name}</h2>
              </div>
            ))}
          </div>
          <button className="circle-btn" onClick={handlePrevClick}>
            <img className="down-arrow" src={downArrow} alt="downArrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
