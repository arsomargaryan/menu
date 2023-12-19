import {Routes, Route, useLocation } from "react-router-dom";
import {getAllRestaurants} from "../api";
import {useState, useEffect, useMemo} from "react";
import {RestaurantsList} from "../RestaurantsComponents/RestaurantsList";
import {Category} from "../Components/Category";
import {PropertyFilterRestaurant} from "../RestaurantsComponents/Filter/PropertyFilterRestaurant";
import {Banner} from "../Components/Banner";
import {Search} from "../Components/Search";
import {HasFilter} from "../Components/HasFilter";



export function HomePage() {
    const [restaurants, setRestaurants] = useState([])
    const [filteredBySearch, setFilteredBySearch] = useState([])
    const [filters, setFilters] = useState(new Set());


    const filteredRestaurants = useMemo(() => {
        if(!restaurants.length) {
            return [];
        }
        if(!filters.size) {
            return restaurants;
        }
        return restaurants.filter(restaurantItem => {
            return [...filters.values()].every(prop => restaurantItem.props.includes(prop))
        })
    }, [filters, restaurants]);



    useEffect(() => {
        getAllRestaurants().then(data => {
            setRestaurants(data)
        })
    }, []);

    const filteredRestaurantFunc = (item)=> {
        const filtersCopy = new Set(filters);
        if(filtersCopy.has(item)) {
            filtersCopy.delete(item);
        } else {
            filtersCopy.add(item);
        }
        setFilters(filtersCopy);
    }

    const searchFunc =(value)=>{
        const arr = restaurants.filter(el=> el.restaurantName.toLowerCase().includes(value.toLowerCase()))
        setFilteredBySearch(arr)

    }



    return <div>

        <Banner/>
        <div className={'flex ml-6 mt-10'}>
            <div>
                <Category/>
                <PropertyFilterRestaurant filteredRestaurantFunc={filteredRestaurantFunc}/>
            </div>
            <div className={'ml-7'}>
                <Search searchFunc={searchFunc} />
                <HasFilter filters={filters}/>
                <RestaurantsList restaurants={filteredRestaurants}/>
            </div>
        </div>
    </div>

}