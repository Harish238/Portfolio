import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Details:
          </p>
          <p className="py-10 decoration-solid text-3xl">Name: Harish Gupta Nukala<br/>Email: gupta.harish238@gmail.com<br/>Adress: H.no:2-3-69/A1<br/> Street: Vepurigeri <br/> Town: Mahabubnagar<br/>Pincode: 509001<br/>Phone no: 8309422507</p>
      </div>
     </div>
    </div>
  );
};

export default Contact;
