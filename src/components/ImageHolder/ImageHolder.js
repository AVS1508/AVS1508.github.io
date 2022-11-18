import React from "react";

const ImageHolder = (props) => {
  return (
    <picture>
      <source srcSet={props?.primarySource} type="image/webp" />
      <img
        className={props?.className}
        src={props?.secondarySource}
        alt={props?.alt}
      />
    </picture>
  );
};

export default ImageHolder;
