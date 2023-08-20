let mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
mainContainer.style.backgroundImage = `url(products/background.jpg)`;
document.body.appendChild(mainContainer);

let mainContainerText = document.createElement("div");
mainContainerText.classList.add("main-container-text");
let mainContainerTextH1 = document.createElement(`h1`);
mainContainerTextH1.textContent = `FASHION`;

let mainContainerTextH3 = document.createElement(`h3`);
mainContainerTextH3.textContent = `Week`;

let mainContainerTextParaghraph = document.createElement(`p`);
mainContainerTextParaghraph.textContent = `lorem ipsum dolor sit amet, \n 
    consectetur adipiscing elit, sed do eiusmod tempor incidid \n 
    lorem ipsum dolor sit amet, consectetur adipiscing elit,\n 
    sed do eiusmod tempor incidid lorem ipsum dolor sit amet,\n 
    consectetur adipiscing elit, sed do eiusmod tempor incidid.
    `;

mainContainerText.append(
  mainContainerTextH1,
  mainContainerTextH3,
  mainContainerTextParaghraph
);
mainContainer.appendChild(mainContainerText);

// --------------------- End Main Containre ---------------------

//---------------------- Category Images ------------------------

let mainImageContainer = document.createElement("div");
mainImageContainer.classList.add("main-image-container");
mainImageContainer.style.cssText = `
    height: 29rem;
    margin: 17rem 0rem 0rem;
    padding: 1rem 7rem;
    display: flex; 
    justify-content: space-evenly;
    alige-item: center;
    `;

let chooseCategoryTextContainer = document.createElement("div");
chooseCategoryTextContainer.classList.add("choose-category-text-container");
chooseCategoryTextContainer.style.cssText = `
    margin-top: 25rem;
    `;

let chooseCategoryText = document.createElement(`h2`);
chooseCategoryText.textContent = `Choose By Category`;
chooseCategoryTextContainer.appendChild(chooseCategoryText);
mainContainer.append(chooseCategoryTextContainer);
chooseCategoryText.style.cssText = `
    font-size: 2rem;
    `;

//------------- stare for loop  -----------
let j = 0;
for (let i = 0; i < 3; i++) {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.style.cssText = `
    width: 29rem; 
    height: 29rem; 
    margin: 1rem 3rem;
    transition: width 0.5s, height 0.5s;
    transition-timing-function: ease;
    `;

  let _image = document.createElement("img");
  _image.classList.add("image");
  _image.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        `;

  imageContainer.appendChild(_image);
  mainImageContainer.appendChild(imageContainer);

  //----------------------------- event ------------------------

  imageContainer.addEventListener("mouseover", function () {
    functionTransitionMouseover(imageContainer);
  });
  imageContainer.addEventListener("mouseout", function () {
    functionTransitionMouseout(imageContainer);
  });

  let imageShow = [
    `products/img19.jpg`,
    `products/img6.jpg`,
    `products/img40.jpg`,
  ];
  _image.src = imageShow[j];
  j++;
} // end for loop

document.body.appendChild(mainImageContainer);

//-------- Event Functions  Mouseover - Mouseout -----------

function functionTransitionMouseover(img_container) {
  let img = img_container;
  img.style.cssText = `
        width: 39rem; 
        height: 39rem; 
        margin: 0rem;
        padding: 0rem;
        `;
}

function functionTransitionMouseout(img_container) {
  let img = img_container;
  img.style.cssText = `
        width: 29rem; 
        height: 29rem; 
        margin: 1rem 3rem;
        `;
}
// -------------------- End Event Functions Mouseover - Mouseout -----------

//---------------------------------End Category Images -----------------------------

//---------------------- product Details ------------------------

let productDetailsArray = [
  {
    product_picture: `products/img17.jpg`,
    product_description: `Suit, black`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `120$`,
  },
  {
    product_picture: `products/img28.jpg`,
    product_description: `Shirt, blue`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `130$`,
  },
  {
    product_picture: `products/img30.jpg`,
    product_description: `T-Shirt, black`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `140$`,
  },
  {
    product_picture: `products/img18.jpg`,
    product_description: `Suit, navy blue`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `126$`,
  },
  {
    product_picture: `products/img21.jpg`,
    product_description: `Dress, Pink`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `160$`,
  },
  {
    product_picture: `products/img22.jpg`,
    product_description: `Blouse, white`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `170$`,
  },
  {
    product_picture: `products/img50.jpg`,
    product_description: `Blouse, Pants`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `122$`,
  },
  {
    product_picture: `products/img52.jpg`,
    product_description: `Suit, Jeans`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `126$`,
  },
  {
    product_picture: `products/img34.jpg`,
    product_description: `Sweater, blue`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `177$`,
  },
  {
    product_picture: `products/img36.jpg`,
    product_description: `Dress, Heavenly`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `158$`,
  },
  {
    product_picture: `products/img33.jpg`,
    product_description: `T-Shirt, white`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `164$`,
  },
  {
    product_picture: `products/img35.jpg`,
    product_description: `Dress, Pink`,
    product_details: `The latest fashion news, beauty coverage, fashion week updates.`,
    product_Price: `189$`,
  },
];
//----------------------

//---------------------Start Categories content ------------------------

let categoriesContainer = document.createElement("div");
categoriesContainer.classList.add("categories-container");
categoriesContainer.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3rem ;
    margin: 7rem auto 2rem;
    padding: 0rem 3rem ;
    `;

//---------------------------------------------------------------------
productDetailsArray.forEach((element) => {
  let productDetailsContainer = document.createElement("div");
  productDetailsContainer.classList.add(`product-details-container`);
  productDetailsContainer.style.cssText = `
        width: 15rem;
        height: 25rem;
        margin: 2rem 1rem;
        `;

  // productDetailsContainer  Add - Event----------

  productDetailsContainer.onclick = () => {
    productDetailsContainer.classList.toggle("change-boxshadow");
  };

  //------------image of product -----------
  let productPicture = document.createElement("div");
  productPicture.classList.add("product-picture");
  productPicture.style.backgroundImage = element.product_picture;
  productPicture.style.cssText = `
        max-width: 100%; 
        height:15rem; 
        background-image: url(${element.product_picture});
        background-size: cover;
        background-repeat: no-repeat;
        `;

  let productDetailsTextContainer = document.createElement("div");
  productDetailsTextContainer.classList.add("product-details-text-container");
  productDetailsTextContainer.style.cssText = `
        padding: 0.7rem 0.5rem;
        `;

  let productDescription = document.createElement("h3");
  productDescription.textContent = element.product_description;
  productDescription.style.cssText = `
    font-size: x-large;
    font-weight: 600;
    `;

  let productDetails = document.createElement("p");
  productDetails.textContent = element.product_details;
  productDetails.style.cssText = `
        margin: 0.8rem 0rem;s
        font-size: small;
        color: #69707D;
        `;

  let productPrice = document.createElement("strong");
  productPrice.textContent = element.product_Price;

  productDetailsTextContainer.appendChild(productDescription);
  productDetailsTextContainer.appendChild(productDetails);
  productDetailsTextContainer.appendChild(productPrice);
  productDetailsContainer.appendChild(productPicture);
  productDetailsContainer.appendChild(productDetailsTextContainer);
  categoriesContainer.appendChild(productDetailsContainer);
}); // End forEach

document.body.appendChild(categoriesContainer);

//---------------------End Categories content ------------------------

//-------------------- Start Buttom scroll -----------
let buttomScrollY = document.createElement("buttom");
buttomScrollY.classList.add("buttom-scroll-y");
buttomScrollY.setAttribute("type", "buttom");
buttomScrollY.textContent = " ";
buttomScrollY.style.cssText = `
    display: none;
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-image: url(products/icons_arrow.png);
    background-repeat: no-repeat;
    background-size: cover;
    
    `;
document.body.appendChild(buttomScrollY);

window.onscroll = () => {
  if (window.scrollY > 1000) {
    buttomScrollY.style.display = "block";
    buttomScrollY.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  } else buttomScrollY.style.display = "none";
};

//----------------------- End Buttom scroll -----------
