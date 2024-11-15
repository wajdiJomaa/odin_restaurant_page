const content = document.getElementById("content");

const createItem = (title, description, price) => {
    const item = document.createElement("div");
    
    const itemtitle = document.createElement("h2");
    itemtitle.innerText = title;
    item.appendChild(itemtitle);

    const itemdescription = document.createElement("p");
    itemdescription.innerText = description;
    item.appendChild(itemdescription);

    const itemprice = document.createElement("p");
    itemprice.innerText = price;
    item.appendChild(itemprice);

    return item;
}


const createContent = () => {
    content.innerHTML = "";


    // title
    const title = document.createElement("h1");
    title.innerText = "Menu";
    content.appendChild(title);


    // menu items
    const items = document.createElement("div");
    items.appendChild(createItem("Honey Tea", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", "$2"));
    items.appendChild(createItem("Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", "$3"));
    items.appendChild(createItem("Toast and Jam", "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", "$1"));
    content.append(items);
}





export default createContent;