function contact() {
    const content = document.getElementById("content");

    const contactTitle = document.createElement("contactTitle");
    contactTitle.innerText = "Contact Us";
    contactTitle.style.cssText = "font-size: 70px; font-weight: bold; text-align: center";
    content.appendChild(contactTitle);
    const contactName = document.createElement("contactName");
    contactName.innerText = "The Best Restaurant Ever";
    contactName.style.cssText = "font-size: 50px; font-weight: bold; text-align: center";
    content.appendChild(contactName);
    const contactInfo = document.createElement("contactInfo");
    contactInfo.innerText = `Location: 1234 56th Avenue
     Kenowhere, Wisconsin 12345
     Phone Number: (123) 456-7890`;
    contactInfo.style.cssText = "font-size: 30px; text-align: center";
    content.appendChild(contactInfo);
    const contactHours = document.createElement("contactHours");
    contactHours.innerText = `Hours 
    Monday: 11am-9pm
    Tuesday: 11am-9pm
    Wednesday: 11am-9pm
    Thursday: 11am-9pm
    Friday: 11am-10pm
    Saturday 10am-10pm 
    Sunday 10am-11pm`;
    contactHours.style.cssText = "font-size: 30px; font-weight: bold; text-align: center";
    content.appendChild(contactHours);
}

export { contact };