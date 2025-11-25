let myDishes = [
    {
    "name": "Spaghetti Carbonara",
    "price": 12.99,
    "description": " Cremige Pasta mit Speck und Parmesan, verfeinert mit Sahne"
    },
    {"name": "Margherita Pizza",
    "price": 10.99,
    "description": "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum"
    },
    {"name": "Caesar Salad",
    "price": 8.99,
    "description": "Frischer Römersalat mit Caesar-Dressing, Croutons und Parmesan"
    },
    {"name": "Grilled Chicken",
    "price": 14.99,
    "description": "Saftiges gegrilltes Hähnchenbrustfilet mit Kräutern und Gewürzen"
    },
    {"name": "Chocolate Lava Cake",
    "price": 6.99,
    "description": "Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit Vanilleeis"
    }

];


let shoppingBasket = [];
let prices = [];

function addToBasket(name, price) {
    names.push(name);
}

function updateShoppingBasket () {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
       sum += prices[i];
    }
    let finalSum = sum + 4.95;
    
    document.getElementById('').innerHTML = sum;
}