import pizzaImg from "/images/pexels-brettjordan-825661.jpg";
import ribImg from "/images/pexels-george-piskov-289673052-15047513.jpg";
import brisketImg from "/images/pexels-haydenplus1-9397270.jpg";
import tacoImg from "/images/pexels-jeswin-5454019.jpg";
import flanImg from "/images/pexels-pixabay-302468.jpg";
import burgerImg from "/images/pexels-valeriya-1639557.jpg";
import cheesecakeImg from "/images/pexels-wendywei-3071821.jpg";


function myMenu() {
    function food(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }

    const foodOne = new food(pizzaImg, "Pizza", "This is our delicious pizza made with the best toppings!");
    const foodTwo = new food(ribImg, "Ribs", "These ribs are the most tender ribs you'll ever eat!");
    const foodThree = new food(brisketImg, "Brisket", "Our brisket is the best brisket you'll ever have!");
    const foodFour = new food(tacoImg, "3 Tacos", "Order our tacos with either beef, steak, or chicken!");
    const foodFive = new food(burgerImg, "Burger", "Try our burger with many options of cheese, lettuce, and tomato!");
    const foodSix = new food(flanImg, "Flan", "Try our world famous flan!");
    const foodSeven = new food(cheesecakeImg, "Cheesecake", "Personally my favorite dessert, our cheesecake is out of this world!");

    const foodItems = [foodOne, foodTwo, foodThree, foodFour, foodFive, foodSix, foodSeven];
    const content = document.getElementById("content");
    
    const menuTitle = document.createElement('menuTitle');
    menuTitle.innerText = "Menu";
    menuTitle.style.cssText = "font-size: 70px; font-weight: bold; text-align: center";
    content.appendChild(menuTitle);

    foodItems.forEach((i) => {
        const imageContainer = document.createElement('ImageContainer');
        imageContainer.classList.add("imageContainer");
        content.appendChild(imageContainer);
        const imageElement = document.createElement('img');
        imageElement.classList.add('content');
        imageElement.src = i.image;
        imageElement.style.cssText = "width: 20%; height: 300px";
        imageContainer.appendChild(imageElement);
        const imageText = document.createElement('ImageText');
        imageText.classList.add("imageText");
        imageContainer.appendChild(imageText);
        const imageHeader = document.createElement("imageHeader");
        imageHeader.innerText = i.title;
        imageHeader.style.cssText = "font-size: 50px; font-weight: bold;";
        imageText.appendChild(imageHeader);
        const imageDescription = document.createElement("imageDescription");
        imageDescription.innerText = i.description;
        imageDescription.style.cssText = "font-size: 24px";
        imageText.appendChild(imageDescription);
  
    })





}




export { myMenu };