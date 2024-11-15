const content = document.getElementById("content")

const createContent = () => {
    content.innerHTML = "";


    // title
    const title = document.createElement("h1");
    title.innerText = "Welcome to Mom's Patisserie";
    content.appendChild(title);


    // quote
    const quote = document.createElement("p");
    quote.innerText = "At Mom's Patisserie, we believe in baking with love, just like mom used to. Every treat is crafted with the finest ingredients, a touch of tradition, and a whole lot of care, bringing the warmth of home to every bite. Indulge in the sweet moments that taste like family"
    content.appendChild(quote);

    // hours
    const hours = document.createElement("div");
    
    const monday = document.createElement("p");
    monday.innerText = "Monday: 8am-4pm";
    hours.appendChild(monday);

    const tuesday = document.createElement("p");
    tuesday.innerText = "Tuesday: 8am-4pm";
    hours.appendChild(tuesday);


    const wednesday = document.createElement("p");
    wednesday.innerHTML = "Wednesday: 8am-5pm";
    hours.appendChild(wednesday);
   
    const thursday = document.createElement("p");
    thursday.innerText = "Thursday: 8am-4pm";
    hours.appendChild(thursday);
    
    const friday = document.createElement("p");
    friday.innerText = "Friday: 8am-5pm";
    hours.appendChild(friday);

    const saturday = document.createElement("p");
    saturday.innerText = "Saturday: 8am-4pm";
    hours.appendChild(friday);

    const sunday = document.createElement("p");
    sunday.innerText = "Sunday: 8am-4pm";
    hours.appendChild(sunday);

    content.appendChild(hours)

    // location
    const location = document.createElement("p");
    location.innerText = "Kalamoun, Haret Al-afran, AbulHamid Building";
    content.appendChild(location);
}



export default createContent;