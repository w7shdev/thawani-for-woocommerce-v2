const { postCss } = require("laravel-mix");
const mix = require("laravel-mix");

mix.js('js/app.js', "dist")
.postCss(
    './js/style.css','dist',
    [require("tailwindcss")]
).vue();
