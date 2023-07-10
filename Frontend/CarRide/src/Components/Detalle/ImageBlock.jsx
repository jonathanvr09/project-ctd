import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./ImageBlock.css";

const ImageBlock = ({ images, onViewMore, caracteristicas }) => {
  const mainImage = images[0];
  const additionalImages = images.slice(1);
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  const handleViewMore = () => {
    setShowCharacteristics(true);
    onViewMore();
  };

  return (
    <div className="image-block">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} className="main-image">
          <img src={mainImage.url} alt="Main" className="second-image" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className="additional-images">
            <Grid container spacing={2}>
              {additionalImages.map((image) => (
                <Grid item xs={6} sm={6} md={6} lg={6} key={image.id}>
                  <div className="grid-item">
                    <img src={image.url} alt={`Image ${image.id}`} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>

    
        <div className="caracteristicas">
          <Typography variant="h6">Características:</Typography>
          <Grid container spacing={2}>
            {caracteristicas.map((caracteristica, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <div className="linea-caracteristicas">
                  <div className="caracteristica">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {caracteristica}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  );
};

ImageBlock.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onViewMore: PropTypes.func.isRequired,
  caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageBlock;
