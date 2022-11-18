require("babel-register")({
  presets: ["es2015", "react"],
});

require.extensions[".jpg"] = () => {};
require.extensions[".jpeg"] = () => {};
require.extensions[".webp"] = () => {};
require.extensions[".png"] = () => {};
require.extensions[".svg"] = () => {};
require.extensions[".pdf"] = () => {};

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

const generateSitemap = () =>
  new Sitemap(router)
    .build("https://www.adityavsingh.com")
    .save("./public/sitemap.xml");

generateSitemap();
