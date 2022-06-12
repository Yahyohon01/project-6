
const info = document.querySelector('.info')

const input = document.querySelector('#input')

let elem = []

const cocktailElements = async() =>{
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    let fruits = await response.json();
    elem = fruits.drinks;
    console.log(elem);
    cocktails(elem)
}


input.addEventListener('keyup', (event) =>{
    const filterData = elem.filter( (obj) =>{
        return obj.strDrink.includes(event.target.value)
    } )
    console.log(elem);
    console.log(event.target.value);
    cocktails(filterData)
} )





const cocktails = (exotic) =>{

    let html = ``
    
    exotic.map( (apple) =>{
        html +=`
                <div class ="father">
                    <div class ="img--cocktails">
                        <img class ="img-cocktail" src="${apple.strDrinkThumb}" alt="">
                    </div>
                    <div class="cocktail--title">
                        <h3>${apple.strDrink}</h3>
                        <h4>${apple.strAlcoholic}</h4>
                        <p>${apple.strGlass}</p>
                        <button class="btn btn-details">DETAILS</button>
                    </div>
                </div>
        `
    } )

    info.innerHTML = html
}



cocktailElements()




























// const info = document.querySelector('.info')

// const input = document.querySelector('#input')

// let fruits = []

// const cocktails = async() => {
//     let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
//     let fruits = await response.json()

//     cocktailElements(fruits.drinks)
// }



// const cocktailElements = () => {

//     fruits.drinks.map((glass) =>{
//         return glass.idDrink
//     } )

// }
// info.innerHTML = 

// cocktails()








