import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { User, useAuth0 } from "@auth0/auth0-react";
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const {isAuthenticated, user} = useAuth0();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://artify-teyv.onrender.com/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        Swal.fire("Your Text Is Inappropriate","Not able to generate image","error");
      } finally {
        setGeneratingImg(false);
      }
    }
    else {
      Swal.fire('Please provide proper prompt',"your input field's are empty",'warning');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('https://artify-teyv.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        Swal.fire('Your Creation is Successfully shared on community',"click on OK to view on community","success");
        navigate('/');
      } catch (err) {
        Swal.fire(err,"that's the problem","error");
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire('Please generate an image with proper details',"prompt not valid","info");
      
    }
  };

  return (
    <section className="pt-24 max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[5vw]"><span className="magic">
    <span className="magic-text">Text to Image with AI Generator</span>
  </span></h1>
        <p className="mt-2 text-[#fff] text-center text-[16px]">Generate an imaginative image through AIVANA - Artify and share it with the community</p>
      </div>

      <form className="mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 text-[#fff]">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder={ isAuthenticated ? user.name : 'Please enter your name'}
            value={form.name}
//             value={user.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Enter Your Prompt"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='justify-around glass'>
          <div className="relative neo border-2 text-[#fff] text-sm focus:ring-blue-500 focus:border-blue-500 sm:w-1/5 p-3 h-64 flex justify-center items-center w-full">
            { form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain" onClick={() => Swal.fire({
    imageUrl: form.photo,
    imageHeight: 512,
    imageAlt: form.prompt,
  })}
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
          <div className='w-4/5 px-4 sm:block hidden border-2 neo h-64 text-center overflow-auto pb-5 pt-5'><img src={form.photo} alt={form.prompt} onClick={() => Swal.fire({
    imageUrl: form.photo,
    imageHeight: 512,
    imageAlt: form.prompt,
  })} /></div>
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white w-full px-5 py-2.5 text-center button-86"
          >
            {generatingImg ? '⌚ Generating...' : 'Generate'}
          </button>
          <button
            type="submit"
            className="mt-3 button-86 w-full w-full px-5 py-2.5 text-center"
          >
            {loading ? '⌚ Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
      <div className="mt-10">
          <p className="mt-2 text-[#fff] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
        </div>
    </section>
  );
};

export default CreatePost;
