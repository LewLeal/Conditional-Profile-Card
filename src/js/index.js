import "../style/index.scss";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name === null) variables.name = "Lucy ";
  if (variables.lastname === null) variables.lastname = "Boilett";
  if (variables.role === null) variables.role = "Web Developer";
  if (variables.city === null) variables.city = "Miami";
  if (variables.country === null) variables.country = "USA";
  if (variables.socialMediaPosition === "left")
    variables.socialMediaPosition = "left";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
         <div></>

          <h1>${variables.name} - ${variables.lastname}</h1>
          
          <h2>${variables.role}</h2>
          <h3>${variables.city} - ${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
          <li><a href="https://twitter.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.socialMediaPosition.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
