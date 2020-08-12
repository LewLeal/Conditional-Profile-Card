# Conditional Profile Card

To begin using this project (after reading the instructions) please clone this repository as a boilerplate.

As a web developer, you will be creatings lots and lots of dynamic HTML using Javascript based algorithms.

In this exercise you have to create the HTML code needed to render a profile card based on a series of variables that could change in value during runtime. Here is an example of the profile card:

![Conditional Profile Card](https://github.com/breatheco-de/exercise-conditional-profile-card/blob/master/preview.gif?raw=true)

Inside the src/index.js file there is a `render` function that receives variables and contains the logic to create most of the website HTML code.

```js
function render(variables = {}) {
  document.querySelector("#widget_content").innerHTML = `<div>Website code</div>`;
}
```

You can see the `variables` that are being generated by typing on the developer console: 

```js
console.log(window.variables);
/*
{
    includeCover: true, // if includeCover is true the algorithm should
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
    socialMediaPosition: "left", // social media bar position (left or right)
    
    twitter: null, // social media usernames
    github: "alesanchezr",
    linkedin: null,
    instagram: null,

    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
}
*/
```

## 📝Instructions

These instructions come with a video for better understanding: https://youtu.be/gaVm8eyCqlM

1. Read and understand the render function and the value of the `variables` variable that it receives.
2. Change the content of the render function to make it render the variables on the card.

## Initial Variable Values

| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| includeCover | boolean | true | it determins if the cover shoud be visible with an image or not |
| background | string | null | the url of the image that will used as background for the profile cover |
| avatarURL | string | null | the url for the profile avatar |
| socialMediaPosition | string | "right" | it can be `left` or `right` and it determines where to place the social media bar |
| twitter | string | null | the twitter username to be displayed on the profile |
| github | string | null | the github username to be displayed on the profile |
| linkedin | string | null | the linkedin username to be displayed on the profile |
| instagram | string | null | the instagram username to be displayed on the profile |
| name | string | null | The name of the user to be displayed on the profile |
| lastname | string | null | The name of the user to be displayed on the profile |
| role | string | null | The name of the user to be displayed on the profile |
| country | string | null | The name of the user to be displayed on the profile |
| city | string | null | the twitter username to be displayed on the profile |

## Hard-Coded HTML

This is an example of a possible HTML output, you will have to replace the name, lastname, etc. With the values that these variables may have.
```html
<div class="widget">
  <div class="cover"><img src="https://the_url.com/for_the_background.png" /></div>
  <img src="https://the_url.com/for_the_image.png" class="photo" />
  <h1>Ryan Boylett</h1>
  <h2>Web Developer</h2>
  <h3>Miami, USA</h3>
  <ul class="position-right">
    <li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>
    <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
  </ul>
</div>
```

## Installation

1. Clone this repository to download the initial boilerplate: 

`git clone https://github.com/breatheco-de/exercise-conditional-profile-card`

2. Get into the project folder: 

`cd exercise-conditional-profile-card`

3. Install NPM packages: `npm install`
Note: if you're using c9 make sure you are running in the latest version of node: 

4. Buid for the first time: `npm run start`

5. Start updating the `render` function inside the `index.js` file.
