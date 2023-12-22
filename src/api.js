import axios from "axios";

// async function getAllRestaurants(){
//     const response = await axios.get('http://localhost:3000/restaurants')
//     return response.data
// }

async function getAllShop(){
    const response = await  axios.get('http://localhost:3000/shop')
    return response.data
}

async function getAllRestaurants(category, name, query, endpoint ='http://localhost:3000'){
    try{
        query ? (query = `?${query}`) :(query='');
        name ? (name = `/${name}`) :(name='');
        category ? (category = `/${category}`) :(category='');


        const response = await  axios.get(`${endpoint}${category}${name}${query}`)
        if(!response.statusText === "OK") throw new Error((response.statusText))

        return response.data

    }catch (err){
        console.log(err || err)
    }
}



export {getAllRestaurants, getAllShop, }