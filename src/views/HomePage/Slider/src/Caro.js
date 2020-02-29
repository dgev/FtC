import React, { useState } from "react";
import Carousel from "./Carousel";
import Grid from "@material-ui/core/Grid";
import "views/HomePage/Slider/one.jpg";

const HookedCarousel = () => {
  const imgList = [
    "https://cdn.pixabay.com/photo/2016/04/14/14/47/farmers-market-1329008_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/02/01/05/18/fresh-peppers-619132_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/14/14/47/farmers-market-1329008_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/02/01/05/18/fresh-peppers-619132_960_720.jpg",
  ];

  const [currentImgId, setImage] = useState(0);

  return (
    <div>
      <Grid container spacing={3} align-items-xs-center justify-xs-center>
        <h1>Farmers' Heaven</h1>
        <Carousel imgList={imgList} currentImgId={currentImgId} visibleImages={3} duration={750} />
      </Grid>
    </div>
  );
};

export default HookedCarousel;
