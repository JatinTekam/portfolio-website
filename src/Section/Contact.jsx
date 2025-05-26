import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Success from "../Components/Success";
import demoGif from "../utils/images/loading-buffering.gif"

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1b035ad1-b04a-4b92-9628-a46184eb8c0a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true)
    }
  };
  return (
    <section className="w-full  mt-10 px-80 pb-3 section ">
      <h1 className="text-white text-2xl pb-4">Contact Me</h1>
      <div className="flex justify-around mobile-contact">
        <div className="h-20 pt-10 mt-5 contact-h1">
          <h2 className="text-white text-bold text-5xl">Let's get started.</h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-140 text-white text-2xl pb-3 duration-1000"
          method="post"
        >
          {isSuccess == true ? (
            <Success />
          ) : (
            <div>
              <span>My name is</span>{" "}
              <input
                type="text"
                className="focus:bg-[#181818] outline-none  border-b-1 border-[#6D6D6E] focus:border-none focus:p-2 duration-500"
                placeholder="Enter Your Name"
                name="name"
                required
                autoComplete="false"
              />
              and i have a{" "}
              <input
                type="text"
                className="focus:bg-[#181818] outline-none mt-2  border-b-1 border-[#6D6D6E] focus:border-none focus:p-2 duration-500"
                placeholder="Project And Website"
                name="message"
                required
                autoComplete="false"
              />{" "}
              that need help.You can reach me at{" "}
              <input
                type="email"
                className="focus:bg-[#181818] outline-none mt-2  border-b-1 border-[#6D6D6E] focus:border-none focus:p-2 duration-500"
                name="email"
                placeholder="Your Email Address"
                required
                autoComplete="false"
              />
              to get things started.
              <div className="mt-3 text-xl ">
                <button className="rounded bg-[#181818]  rounded-xl cursor-pointer p-3 cursor-pointer flex items-center gap-3">
                  Send <FaArrowRightLong className=" " type="submit" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
