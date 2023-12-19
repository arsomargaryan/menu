import axios from "axios";


async function getAllRestaurants(){
    const response = await axios.get('http://localhost:3000/restaurants')
    return response.data
}

async function getAllShop(){
    const response = await  axios.get('http://localhost:3000/shop')
    return response.data
}

async function getAllMeals(name){
    const response = await  axios.get('http://localhost:3000/'+name)
    return response.data
}


export {getAllRestaurants, getAllShop, getAllMeals}