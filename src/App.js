import React, { useState } from "react";
import "./Image.css"; 

const ImageGallery = ({ imageUrls }) => {
  return (
    <div className="img1">
      {imageUrls.map((imageUrl, index) => (
        <div className="img2" key={index}>
          <img src={imageUrl} alt={`${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

const AddImageButton = ({ onImageSelected }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    onImageSelected(imageUrl);
  };

  return (
    <div className="bt1">
      <input type="file" accept="image/*"onChange={handleImageChange} />
    </div>
  );
};

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageSelected = (imageUrl) => {
    setImageUrls((prevUrls) => [...prevUrls, imageUrl]);
  };

  return (
    <div>
      <ImageGallery imageUrls={imageUrls} />
      <AddImageButton onImageSelected={handleImageSelected} />
    </div>
  );
};

export default App;
