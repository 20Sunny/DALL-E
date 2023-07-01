<p align="center">
  <img width="180" src="https://aivanaart.vercel.app/assets/logo-76f396b8.png" alt="AIVANA">
  <h1 align="center">AIVANA - Artify
  <br><h6 align="center">I have not active api that why it not work on live site</h6>
  </h1>
</p>

AIVANA - Artify is a web application that lets you generate unique and creative artwork from textual prompts, using OpenAI's DALL-E API. With AIVANA - Artify, you can explore the possibilities of generative art and see your words come to life in stunning images that are both unexpected and delightful.

## Table of contents :

- [Features](#features)
- [Getting started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- **TEXT-TO-IMAGE GENERATE**: AIVANA - Artify allows you to enter any text prompt and generate a corresponding image using the DALL-E API.
- **INTERACTIVE INTERFACE**: AIVANA - Artify's user-friendly interface lets you easily enter text, preview and download the generated images, and share them on social media.
- **CUSTONIZABLE OPTIONS**: AIVANA - Artify gives you control over various parameters, such as image size, background color, and number of image samples, to tailor your art generation experience to your liking.
- **MERN STACK**: AIVANA - Artify is built using the MERN stack, a popular web development framework that combines MongoDB, Express, React, and Node.js, to provide a fast and scalable application that can handle a large number of users and requests.

## Getting started

To get started with AIVANA - Artify, you will need to have a valid OpenAI API key, which you can obtain from the OpenAI website. Once you have your API key, follow these steps:

1. Clone or download this repository to your local machine.
2. Install the necessary dependencies using `npm install` in both 'server' & 'client'.
3. Create a `.env` file in the server directory of the project and add your API keys as :- <br>
    OPENAI_API_KEY="<api here>"<br>
    MONGODB_URL="<api key >"<br>
    CLOUDINARY_CLOUD_NAME="<api here>"<br>
    CLOUDINARY_API_KEY="<api her>"<br>
    CLOUDINARY_API_SECRET="<api here>"<br>
    CLOUDINARY_URL="<api here>"<br>
4. Replace `https://artify-teyv.onrender.com` in client's CreatePost.jsx and Home.jsx by `https://localhost:8080`.
5. Start the server using `npm start` & client using `npm run dev`.
6. Open your web browser and navigate to `http://localhost:5173` to see the AIVANA - Artify app in action.

## Getting API's
1. Create account and get api from CLOUDINARY `https://cloudinary.com/`
2. Create account and get api from MONGODB `https://www.mongodb.com/atlas/database`
3. Create account and get api from OPENAI `https://platform.openai.com/account/api-keys`

## Contributing

We welcome contributions from the community to help improve AIVANA - Artify and make it even more amazing. Whether you're a developer, designer, or artist, you can contribute in various ways, such as:

- Reporting bugs and issues
- Suggesting new features and improvements
- Creating pull requests to fix bugs or add new features
- Sharing your generated art on social media and spreading the word about AIVANA - Artify


## License

AIVANA - Artify is open-source software licensed under the Apache-2.0 license, which allows for free use, modification, and distribution of the codebase, subject to certain conditions. By contributing to AIVANA - Artify, you agree to abide by the terms of this license and to respect the intellectual property of the original authors and contributors.

## Screenshots

### Home Page (you can access this page even without login)
![Image Generation App](https://res.cloudinary.com/dhbyg08yc/image/upload/h_1600/v1683000284/aivanaart.vercel.app__dqrlpw.png)


### Login Page
![Image Generation App](https://res.cloudinary.com/dhbyg08yc/image/upload/v1683000277/login_hjqdlh.png)


### Create Page (only accessable after login)
![Image Generation App](https://res.cloudinary.com/dhbyg08yc/image/upload/v1683000277/create_fhs71c.png)

### 404 Page (when you enter wrong url with the domain)
![Image Generation App](https://res.cloudinary.com/dhbyg08yc/image/upload/v1684560603/404_qgnskw.png)
