import React from "react";
import "./Work.css";

export const STATISTIC = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <section class="text-gray-600 body-font m-3 backcoll">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Track My Journey
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Dive into my portfolio to discover a collection of projects that
              highlight my skills, creativity, and passion for design and
              development. From web applications to design samples, explore the
              diverse range of work I've created.
            </p>
          </div>
          <div class="align-middle flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div
                style={{ fontSize: "50px" }}
                class="hoverforstc border-2 border-gray-200 px-4 py-6 rounded-lg"
              >
                <i class="fa-solid fa-graduation-cap"></i>

                <p style={{ textAlignL: "center" }} class="leading-relaxed">
                  Collage
                </p>
              </div>
            </div>
            <div class="hoverforstc p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                style={{ fontSize: "50px" }}
                class="border-2 border-gray-200 px-4 py-6 rounded-lg"
              >
                <i class="fa-solid fa-code"></i>

                <p class="leading-relaxed">Sharping My Coding Skills</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class=" hoverforstc border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i
                  style={{ fontSize: "50px" }}
                  class="fa-solid fa-computer"
                ></i>

                <p class="leading-relaxed">Tranning Time</p>
              </div>
            </div>
            <div class="hoverforstc p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 mb-2 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>

                <p class="leading-relaxed">Working Professonal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
