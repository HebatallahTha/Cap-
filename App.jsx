import React, { useState } from 'react';
const ACCESS_KEY = "44c81e0cf0c44a1fb28d100f93e8a261";
import APIForm from './APIForm';
import Gallery from './Gallery';

export function App(props) {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  // Add state to hold the returned image URL
  const [currentImage, setCurrentImage] = useState(null);

  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    callAPI(query).catch(console.error);
  }

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: "",
    });
  }

  const submitForm = (e) => {
  e.preventDefault(); // 🛑 Prevent page reload

  if (inputs.url === "" || inputs.url === " ") {
    alert("You forgot to submit a URL!");
  } else {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };
    for (const [key, value] of Object.entries(inputs)) {
      if (value === "") {
        inputs[key] = defaultValues[key];
      }
    }
    makeQuery();
  }
};


  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json.url == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    }
    else {
  setCurrentImage(json.url);
  setPrevImages((images) => [...images, json.url]);
  reset();
}
  }
const [prevImages, setPrevImages] = useState([]);

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />

      <br />

      {/* ✅ Conditional rendering for result */}
      {currentImage ? (
        <img
          className="screenshot"
          src={currentImage}
          alt="Screenshot returned"
        />
      ) : (
        <div></div>
      )}

      <div className="container">
        <h3> Current Query Status: </h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br />
          &url={inputs.url} <br />
          &format={inputs.format} <br />
          &width={inputs.width} <br />
          &height={inputs.height} <br />
          &no_cookie_banners={inputs.no_cookie_banners} <br />
          &no_ads={inputs.no_ads} <br />
        </p>
      </div>
      <div className="container">
  <Gallery images={prevImages} />
</div>

      <br />
    </div>
  );
}

export default App;
