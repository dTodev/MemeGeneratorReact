import { useEffect, useState } from "react";

export default function Meme() {
  let [allMemeImages, setAllMemeImages] = useState([]);
  let [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "",
  });
  let URL = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setAllMemeImages(json.data.memes));
  }, []);

  function getMemeImage() {
    setMemeObj((prevObj) => {
      return {
        ...prevObj,
        imageUrl: allMemeImages[Math.floor(Math.random() * 100)].url,
      };
    });
  }

  function handleTextInput(event) {
    let { name, value } = event.target;
    setMemeObj((prevObj) => {
      return {
        ...prevObj,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          onChange={handleTextInput}
          name="topText"
          placeholder="Enter top text"
          className="form-input"
          value={memeObj.topText}
        />
        <input
          type="text"
          onChange={handleTextInput}
          name="bottomText"
          placeholder="Enter bottom text"
          className="form-input"
          value={memeObj.bottomText}
        />
        <button onClick={getMemeImage} className="get-meme-button">
          Get a new meme image 🖼
        </button>
        <div className="meme-container">
          <img className="meme-image" src={memeObj.imageUrl} alt="" />
          <h1 className="topText">{memeObj.topText}</h1>
          <h1 className="bottomText">{memeObj.bottomText}</h1>
        </div>
      </div>
    </main>
  );
}
