// alert("It's workin!");

/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src 
alt - the alt tag for the image
description - a description of the CSSFontFaceRule
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee
*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
    <img src="${coffee.pic}" alt="${coffee.pic}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special: </strong>${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc} This is one of our top sellers!
    </p>
    `;

    return myReturn;
} 


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = ""; 


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){
    myDay = urlParams.get("day");
}

// converts to integer as its a string from query string
myDay = parseInt(myDay);

switch(myDay){

    case 0:
			coffee = {
				name:"Mocha",
				pic: "images/mocha.jpg",
				alt: "Mocha",
				color: "oldlace",
				day: "Sunday",
				desc: `Our mochas are the best!`
			};
		break;
	
	case 1:
			coffee = {
				name:"Bubble Tea",
				pic: "images/bubble-tea.jpg",
				alt: "Bubble Tea",
				color: "cream",
				day: "Monday",
				desc: `Bobas are yummy!`
			};
		break;

		case 2:
			coffee = {
				name:"Drip",
				pic: "images/drip.jpg",
				alt: "Drip Coffee",
				color: "brown",
				day: "Tuesday",
				desc: `So much drip!`
			};
		break;

		case 3:
			coffee = {
				name:"Caramel Latte",
				pic: "images/caramel-latte.jpg",
				alt: "Caramel latte",
				color: "chocolate",
				day: "Wednesday",
				desc: `Caramel goodness!`
			};
		break;

		case 4:
			coffee = {
				name:"Pumpkin Spice Latte",
				pic: "images/pumpkin-spice-latte.jpg",
				alt: "Pumpkin Spice Latte",
				color: "orange",
				day: "Thursday",
				desc: `A lil overrated but it sells!`
			};
		break;
			
		case 5:
			coffee = {
				name:"Cold Brew",
				pic: "images/cold-brew.jpg",
				alt: "Cold Brew",
				color: "saddlebrown",
				day: "Friday",
				desc: `Brews that are nice n cold!`
			};
		break;
		
		case 6:
			coffee = {
				name:"Frappaccino",
				pic: "images/frappaccino.jpg",
				alt: "frappaccino",
				color: "sandybrown",
				day: "Saturday",
				desc: `it'll cool you off on a hot summer day!`
			};
		break;

	}

// let coffeeData = coffeeTemplate(coffee);
// alert(coffee.pic);


// Loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);