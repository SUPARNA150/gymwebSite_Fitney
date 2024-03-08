import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="pl-11 lg:flex lg:flex-row lg:items-center bg-slate-100">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Start your fitness journey today with us
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              We are a gym that is committed to helping people reach their fitness goals. We offer a variety of programs and services to fit your needs. We believe that everyone should have access to the benefits of exercise make it happen.
            </p>
            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <button
                    type="button"
                    className="rounded-md bg-yellow px-5 py-3 text-sm font-bold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Join Today
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-90">
          <img
            src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ManWith Laptop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
