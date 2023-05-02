import React from 'react';
import Swal from 'sweetalert2';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import google from './assets/google.svg';
import { logo } from './assets';
import { Home, CreatePost } from './page';
import { User, useAuth0 } from "@auth0/auth0-react";

const CreateButton = () => {
  const {isAuthenticated} = useAuth0();
  if (isAuthenticated){
    return <Link to="/create-post" className="font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl">🖋️ Create</Link>;
  }
  return <Link  className="font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl cursor-not-allowed">🔒 Create</Link>;
};

const LogButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();
  if (isAuthenticated){
    return <button className="flex gap-x-2 gap-y-0 font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    <abbr title={user.name}><img className='rounded-3xl h-6' src={user.picture} alt="Profile" /></abbr><abbr title={user.email}>Log Out</abbr>
  </button>;
  }
  return <button className="flex gap-x-2 gap-y-0 font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl" onClick={() => loginWithRedirect()}><img src={google} alt="Google" />Log In</button>;
};

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :("
});
window.addEventListener("focus", () => {
    document.title = docTitle
});

window.ononline = function() {
    Swal.fire("! ! !  YOU BACK TO ONLINE  ! ! !", "YOU ARE CONNECTED TO INTERNET ","success");
    document.getElementById('amca').hidden = false;
    return false;
}


window.onoffline = function() {
    Swal.fire(" ! ! !  YOU ARE NOT CONNECTED TO THE INTERNET  ! ! ! ","","info");
    document.getElementById('amca').hidden = true;
    return false;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        Swal.fire("Taking screenshots is not allowed on this website!","you can't save this file","warning");
    }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "p" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      Swal.fire("Taking print is not allowed on this website!","you can't print this file","warning");
  }
});
document.addEventListener("keydown", function(e) {
  if (e.key === "a" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      Swal.fire("Selecting all text is not allowed on this website!","you can't select text on this file","warning");
  }
});
document.addEventListener("keydown", function(e) {
  if (e.key === "x" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      Swal.fire("Taking content text is not allowed on this website!","you can't cut the this file","warning");
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "u" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      Swal.fire("Taking Source Coode is not allowed on this website!","You can't view source code","warning");
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "c" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      Swal.fire("Taking copy, is not allowed on this website!","you can't copy text on this file","warning");
  }
});

document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
    document.addEventListener("copy", function(e) {
        e.preventDefault();
    });


const App = () => (
  
  <BrowserRouter>
    <header className="w-full flex justify-between items-center sm:px-40 px-4 py-2">
      <a href='https://20sunny.netlify.app'>
        <img src={logo} alt="logo" className="h-10 object-contain" />
      </a>
      <div className='flex gap-x-5 gap-y-0'>

      <Link to="/" className="font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl">🏠 Home</Link>
      {/* <Link to="/create-post" className="font-inter font-medium border-2 border-white text-white px-4 py-2 rounded-3xl">Create</Link> */}
      <CreateButton />
      <LogButton />
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/*" element={<Home />} />
        <Route path="/create-post" element={<Home />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
