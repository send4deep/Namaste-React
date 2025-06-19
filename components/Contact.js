import React from "react";

const Contact = () => {
  return (
    <div className="flex w-6/12 m-auto flex-col text-center">
      <h1 className="font-bold text-xl mb-3">Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="input1">Name:</label>
          <input type="text" id="input1" className="border px-2 m-2" />
        </div>
        <div className="mb-3">
          <label htmlFor="input2">Surname:</label>
          <input type="text" id="input2" className="border px-2 m-2" />
        </div>
        <button
          type="submit"
          className="border-gray-500 bg-gray-300 border px-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
