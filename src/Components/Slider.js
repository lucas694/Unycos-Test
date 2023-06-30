import React, { useState, useEffect } from "react";
import "./Slider.css";
import getNatacionPhotos from "../Components/Api";

const Slider = () => {
  const [mainImage, setMainImage] = useState(null);
  const [secondaryImages, setSecondaryImages] = useState([]);
  const [photos, setPhotos] = useState([]);

  const pegarFotos2 = () => {
    getNatacionPhotos()
      .then((resposta) => {
        const photos = resposta?.data?.spotlights ?? []
        if (photos.length >= 1) {
          setPhotos(photos);
          setMainImage(photos[0]); // Define a primeira foto como a principal
          setSecondaryImages(photos.slice(1)); // Define as outras fotos como secundárias
        }
        console.log('Fotos ==> ', resposta.data);
      })
      .catch((erro) => {
        console.log('Erro ao pegar fotos ==> ', erro);
      });
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  useEffect(() => {
    pegarFotos2(); // Obtem as fotos da API
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = secondaryImages.indexOf(mainImage);
      const nextIndex = (currentIndex + 1) % secondaryImages.length;
      setMainImage(secondaryImages[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [mainImage, secondaryImages]);

  return (
    <div className="SliderContainer">
      <div className="SliderContent">
        <div className="SliderLeft">
          {mainImage && (
            <img src={mainImage.image} alt="MainImg" className="SliderMainImg" />
          )}
        </div>
        <div className="SliderRight">
          <h1 className="SliderTitle">Entrenar para el éxito</h1>
          <p className="SliderDesc">
            Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus
            venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et
            euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam.
            Suspendisse potenti. Nunc faucibus vulputate neque.
          </p>
          <div className="SliderRightImgsContainer">
            {secondaryImages.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={`SecondaryImg${index}`}
                className="SliderSecondaryImg"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
