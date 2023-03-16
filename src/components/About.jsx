import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I’m a nice fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills.
        I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.
        A motivated professional, good at problem-solving and data structures & algorithms, with an
        emphasis of writing clean and maintainable code and designing optimal solutions
        </p>
      </div>
    </div>
  );
};

export default About;
