import steakImg from "/images/jason-leung-O67LZfeyYBk-unsplash.jpg";

function homePage() {
    const content = document.getElementById("content");
    const contentBox = document.createElement("contentBox");
    contentBox.classList.add("contentBox");
    content.appendChild(contentBox);
    const homeTitle = document.createElement("homeTitle");
    homeTitle.innerText = "The Best Restaurant Ever";
    homeTitle.style.cssText = "font-size: 80px; font-weight: bold;";
    contentBox.appendChild(homeTitle);
    var steakPhoto = document.createElement("IMG");
    steakPhoto.src = steakImg;
    steakPhoto.style.cssText = "width: 80%; height:auto";
    contentBox.appendChild(steakPhoto);
    const homePara = document.createElement("homePara");
    homePara.innerText = "Welcome to The Best Restaurant Ever, where you will experience the best food you have ever eaten! What makes our food the best is our commitment to excellence. The Best Restaurant Ever offers 40 beers on tap along with many drink specials. At The Best Restaurant Ever we will treat you like family! Not really sure what else to write about this restaurant, words really can't describe what an amazing experience eating here is. I can keep going on and on and on and on and on about it.";
    homePara.style.cssText = "font-size: 30px; padding:50px";
    contentBox.appendChild(homePara);
}

export { homePage };

