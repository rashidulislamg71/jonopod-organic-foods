import React from "react";

function AboutPage() {
  return (
    <>
      <div className="bg-green-600 flex items-center justify-center h-[200px]">
        <h1 className="text-4xl font-bold text-center text-white">
          About Jonopod Organic Foods
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>

        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-green-700">Jonopod Organic Foods</span> is dedicated to offering
            high-quality, 100% natural food products directly from rural sources across Bangladesh. Our goal is to
            promote healthy living by providing chemical-free and preservative-free organic items.
          </p>

          <p>
            We sell a wide range of organic products including <strong>Gawa Ghee</strong>, <strong>Raw Honey</strong>,
            <strong> Mustard Oil</strong>, <strong>Olive Oil</strong>, <strong>Fresh Cow Milk</strong>,
            <strong> Sweet & Sour Yogurt</strong>, and more. Every item is collected and processed in the most
            traditional and authentic way to preserve nutrition and taste.
          </p>

          <p>
            Whether you are looking to cook delicious meals, boost your immunity, or maintain a healthy lifestyle —
            Jonopod Organic Foods has the purest options for you.
          </p>

          <p>
            This project is built as a simple React E-commerce demo app to showcase these products using modern frontend
            technologies like React, React Router, Context API, and Tailwind CSS.
          </p>

          <div>
            <h2 className="text-2xl font-bold mt-8 text-green-700">Technologies Used</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>React (Functional Components)</li>
              <li>React Router DOM</li>
              <li>Context API for State Management</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-8 text-green-700">Our Vision</h2>
            <p className="text-lg mt-2 text-gray-700">
              To make organic living accessible to every household in Bangladesh.
            </p>
          </div>

          <p className="italic text-sm text-gray-500 mt-8">
            Made with love by Jonopod Organic Foods Team 💚
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
