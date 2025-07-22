import React from "react";

const Curtain = () => {
  return (
    <div class="group relative w-80 overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"
        alt="Blog Image"
        class="w-full h-52 object-cover transition-opacity duration-500 group-hover:opacity-80"
      />
      <div class="absolute inset-0 after-effect"></div>
      <div class="p-4 bg-white">
        <h2 class="text-xl font-semibold">Blog Title</h2>
        <p class="text-sm text-gray-600">Short description of the blog...</p>
      </div>
    </div>
  );
};

export default Curtain;
