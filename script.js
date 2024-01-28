let products={
    data:[
        {
            ProductName: "regular ehite T-shirt",
            category:"Topwear",
            price:"30",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Being short skirt",
            category:"Bottomwear",
            price:"49",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Sporty SmartWatch",
            category:"Watch",
            price:"99",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "basic Knitted Top",
            category:"Topwear",
            price:"30",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Black Leather Jacket",
            category:"Jacket",
            price:"129",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Stylish Pink Trouser",
            category:"Bottomwear",
            price:"89",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Brown Men's Jacket ",
            category:"Jacket",
            price:"189",
            image: "https://source.unsplash.com/random?veggies",
             
        },
        {
            ProductName: "Comfy Gray Pants",
            category:"Bottomwear",
            price:"77",
            image: "https://source.unsplash.com/random?veggies",
             
        },
    ],
};

for(let i of products.data){
    //Create Card

    let card =document.createElement("div");
    //Card should have category and should stay hidden initialy
    card.classList.add("card", i.category,"hide");
    //image div
    let imagecontainer=document.createElement("div");
    imagecontainer.classList.add("image-container");
    //img tag
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imagecontainer.appendChild(image);
    card.appendChild(imagecontainer);

    //container
    let container=document.createElement("div")
   container.classList.add("container")

   //product name
   let name=document.createElement("h5");
   name.classList.add("product-name");
   name.innerText=i.ProductName.toUpperCase();
   container.appendChild(name);

   //price
   let price=document.createElement("h6");
   price.innerText="$ "+i.price;
   container.appendChild(price)

   card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
/////////////////////////////////////
//parameter passed from button (Parameter same as category)
function filterProduct(value){
    //Button class code
    let buttons=document.querySelectorAll(".button-value");
buttons.forEach(button=>{
    //check if value equals innerText
    if(value.toUpperCase()==button.innerText.toUpperCase()){
        button.classList.add("active");
    }else{
        button.classList.remove("active");
    }
})

//select all card
let elements=document.querySelectorAll(".card");
//loop through all cards
elements.forEach((element)=>{
    //display all cards on 'all' button click
    if(value=="all"){
        element.classList.remove("hide");
    }else{
        //check if element contains category class
        if(element.classList.contains(value)){
            //display element based on category
            element.classList.remove("hide");
        }else{
            //hide other elements
            element.classList.add("hide");
        }
    }
});

}

//Search button click
document.getElementById("search").addEventListener("click",()=>{
    //initialization
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");
    console.log(searchInput);


    //loop through all elements
    elements.forEach((element,index)=>{
        // check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display maching card
            cards[index].classList.remove("hide");
        }else{
            //hide others
            cards[index].classList.add("hide");
        }

    })
})
 //Initially display all products
 window.onload=()=>{
    filterProduct("all");
 };