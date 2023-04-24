AIVANA - Artify
AIVANA - Artify is a web application that lets you generate unique and creative artwork from textual prompts, using OpenAI's DALL-E API. With AIVANA - Artify, you can explore the possibilities of generative art and see your words come to life in stunning images that are both unexpected and delightful.

Table of Contents
Features
Getting Started
Prerequisites
Installation
Running the Application
Contributing
License
Features
AIVANA - Artify offers the following features:

Text-to-image generation: AIVANA - Artify allows you to enter any text prompt and generate a corresponding image using the DALL-E API.
Interactive interface: AIVANA - Artify's user-friendly interface lets you easily enter text, preview and download the generated images, and share them on social media.
Customizable options: AIVANA - Artify gives you control over various parameters, such as image size, background color, and number of image samples, to tailor your art generation experience to your liking.
MERN stack: AIVANA - Artify is built using the MERN stack, a popular web development framework that combines MongoDB, Express, React, and Node.js, to provide a fast and scalable application that can handle a large number of users and requests.
Getting Started
To get started with AIVANA - Artify, follow these steps:

Prerequisites
Before you can install and run AIVANA - Artify, you need to have the following software installed on your system:

Node.js (v14 or later)
npm (v6 or later)
MongoDB (v4 or later)
OpenAI API key (you need to create an account and subscribe to the API)
Installation
To install AIVANA - Artify, clone this repository to your local machine and run the following command in the root directory:

npm install
This will install all the necessary dependencies for the application, as specified in the package.json file.

Running the Application
To run AIVANA - Artify, you need to start both the frontend and backend servers. In the root directory, run the following command:

npm run dev
This will start both the backend server (using nodemon) and the frontend server (using react-scripts) concurrently. The application should open automatically in your default web browser at http://localhost:3000/.

Note that you also need to set the following environment variables for the application to work:

REACT_APP_OPENAI_API_KEY: your OpenAI API key
MONGODB_URI: the URI of your MongoDB database
You can set these variables either in a .env file in the root directory, or in your system environment variables.

Contributing
We welcome contributions from the community to help improve AIVANA - Artify and make it even more amazing. Whether you're a developer, designer, or artist, you can contribute in various ways, such as reporting bugs, suggesting features, creating pull requests, or sharing your generated art on social media
