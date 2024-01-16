// AJAX

// (function(){
//   let req= new XMLHttpRequest();
//   req.open("get" , `https://forkify-api.herokuapp.com/api/get?rId=47746`);
//   req.send();
//   req.addEventListener('loadend' , function(){
//     if(req.status >= 200 ){
//       console.log(JSON.parse(req.response));
//     }
// })
// })();

//fetch
let finalData;

async function getData(typeFood) {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${typeFood}`
  );
  let responseData = await response.json();
  finalData = responseData.recipes;
  console.log(finalData);

  displayData();
}
getData("pizza");

function displayData() {
  let cartoona = "";

  for (let i = 0; i < finalData.length; i++) {
    cartoona += `<div class="col-lg-3">
        <div class="item p-2 text-white rounded-4 bg-dark">
          <figure class="overflow-hidden">
            <img class="w-100 rounded-4" src="${finalData[i].image_url}" alt="" />
          </figure>
          <figcaption>
            <div class="headCaption d-flex justify-content-between align-items-center px-1 my-2">
              <h2 class="fw-bold text-capitalize">${finalData[i].title}</h2>
              <button class="detailsBtn btn btn-outline-info py-1" data-recipeID="${finalData[i].recipe_id}">Detais</button>
            </div>
            <p class="text-secondary overflow-y-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              architecto veniam odit vel provident eveniet doloremque quidem.
              Delectus, quia blanditiis! architecto veniam odit vel provident eveniet doloremque quidem.
              Delectus, quia blanditiis!
            </p>
          </figcaption>
        </div>
      </div>`;
  }
  document.getElementById("itemRow").innerHTML = cartoona;
  // document.querySelector('.row').innerHTML= cartoona;

  let box = "";
  for (let i = 0; i < avaliableFoodSearch.length; i++) {
    box += `<option value="${avaliableFoodSearch[i]}" class="bg-dark text-secondary fs-5">
    ${avaliableFoodSearch[i]}</option>`;
  }
  document.getElementById("foodType").innerHTML = box;

  getIdDetails();
}
//search
let searchInput = document.querySelector(".search");
searchInput.addEventListener("change", function (e) {
  // typeFood= e.target.value;
  typeFood = this.value;
  getData(typeFood);
});

//select
let avaliableFoodSearch = [
  "mango",
  "potato",
  "carrot",
  "broccoli",
  "asparagus",
  "cauliflower",
  "corn",
  "cucumber",
  "green pepper",
  "lettuce",
  "mushrooms",
  "onion",
  "pumpkin",
  "red pepper",
  "tomato",
  "beetroot",
  "brussel sprouts",
  "peas",
  "zucchini",
  "radish",
  "sweet potato",
  "artichoke",
  "leek",
  "cabbage",
  "celery",
  "chili",
  "garlic",
  "basil",
  "coriander",
  "parsley",
  "dill",
  "rosemary",
  "oregano",
  "cinnamon",
  "saffron",
  "green bean",
  "bean",
  "chickpea",
  "lentil",
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blackcurrant",
  "blueberry",
  "boysenberry",
  "cherry",
  "coconut",
  "fig",
  "grape",
  "grapefruit",
  "kiwifruit",
  "lemon",
  "lime",
  "lychee",
  "mandarin",
  "melon",
  "nectarine",
  "orange",
  "papaya",
  "passion fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "quince",
  "raspberry",
  "strawberry",
  "watermelon",
  "salad",
  "pizza",
  "pasta",
  "popcorn",
  "lobster",
  "steak",
  "bbq",
  "pudding",
  "hamburger",
  "pie",
  "cake",
  "sausage",
  "tacos",
  "kebab",
  "poutine",
  "seafood",
  "chips",
  "fries",
  "masala",
  "paella",
  "som tam",
  "chicken",
  "toast",
  "marzipan",
  "tofu",
  "ketchup",
  "hummus",
  "chili",
  "maple syrup",
  "parma ham",
  "fajitas",
  "champ",
  "lasagna",
  "poke",
  "chocolate",
  "croissant",
  "arepas",
  "bunny chow",
  "pierogi",
  "donuts",
  "rendang",
  "sushi",
  "ice cream",
  "duck",
  "curry",
  "beef",
  "goat",
  "lamb",
  "turkey",
  "pork",
  "fish",
  "crab",
  "bacon",
  "ham",
  "pepperoni",
  "salami",
  "ribs",
];
let selectInput = document.querySelector("select");
// console.log(selectInput);
selectInput.addEventListener("change", function (e) {
  typeFood= e.target.value;
  // typeFood = this.value;
  searchInput.value = "";
  getData(typeFood);
  // selectInput.value= e.target.value;
});

// navbar

let link = document.querySelectorAll(".navbar-nav li .nav-link");
let linkActive = document.querySelector(".navbar-nav li .nav-link.active");
// console.log(linkActive);
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (e) {
    //
    // linkValue = e.target.innerText;
    let linkValue = this;

    // use innerText to get value in html for the element
    getData(linkValue.innerText);
    // console.log(linkValue.innerText);

    //to change ative link style
    linkActive.classList.remove("active");
    linkValue.classList.add("active");
    linkActive = linkValue;
  });
}
let CloseBtn = document.getElementById("CloseBtn");
let detailsSection = document.getElementById("details");
function getIdDetails() {
  //detailsBtn , CloseBtn
  // let detailsSection= document.getElementById('details')
  let mainDetails = document.getElementById("mainDetails");
  let detailsBtn = document.querySelectorAll(".detailsBtn");
  // let CloseBtn= document.getElementById('CloseBtn');

  // console.log(detailsBtn);
  // let  detailsBtnArr= Array.from(detailsBtn)

  for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", async function (e) {


      detailsSection.classList.remove("d-none");

      let recipeID = detailsBtn[i].getAttribute("data-recipeID");
      mainDetails.innerHTML = await fetchRecipe(recipeID);

      // console.log(e.pageY);
      // console.log(e.clientY + 100);
      detailsSection.style.top = `${e.pageY - 300}px `;

      // console.log(recipeID);
    });
  }
  //if clicked in closeBtn or out detailsSection --> exit
  CloseBtn.addEventListener("click", closeDetails);
  if (!detailsSection.classList.contains("d-none")) {
    document.addEventListener("click", closeDetails);
  }
}

async function fetchRecipe(rId) {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${rId}`
  );
  let responseData = await response.json();
  // console.log(responseData);

  // console.log(responseData.recipe.recipe_id);
  // console.log(responseData.recipe.ingredients);
  let recipeList = document.querySelector(".recipeList");
  let cartoona = "";
  for (let i = 0; i < responseData.recipe.ingredients.length; i++) {
    // console.log(responseData.recipe.ingredients[i]);

    cartoona += `<li>${responseData.recipe.ingredients[i]}</li>`;
  }
  // recipeList.innerHTML= cartoona;

  return (
    `<div id="mainDetails" class="row">
  <div class="col-md-4">
    <figure>
      <img class="w-100 bg-danger rounded-3" src="${responseData.recipe.image_url}" alt="" />
    </figure>
  </div>
  <div class="col-md-8 text-light fw-bold ps-4">
    <h2>
      Title:
      <span class="badge bg-info text-black text-uppercase p-2 fs-6">${responseData.recipe.title}</span>
    </h2>
    <p>Publisher: <span class="badge bg-info text-black text-uppercase p-2">${responseData.recipe.publisher}</span></p>
    <p>
      social rank:
      <span class="badge bg-info text-black p-2">${responseData.recipe.social_rank}</span>
    </p>
    <p class="mb-1">
      Recipe ingredients: 
      <ul class="list-unstyled text-secondary">` +
    `${cartoona}` +
    `</ul>
    </p>

    <a href="${responseData.recipe.source_url}" target="_Blank" class="btn btn-info text-white mb-5">Od5ol 4o0of</a>

  </div>
</div>`
  );
}
fetchRecipe("47746");

function closeDetails() {
  detailsSection.classList.add("d-none");
}
