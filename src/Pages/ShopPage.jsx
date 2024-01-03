import {useEffect, useMemo, useState} from "react";
import {getAllRestaurants} from "../api";
import {Category} from "../Components/Category";
import {PropertyFilterShop} from "../ShopComponents/Filter/PropertyFilterShop";
import {ShopList} from "../ShopComponents/ShopList";
import {Banner} from "../Components/Banner";
import {Search} from "../Components/Search";
import {HasFilter} from "../Components/HasFilter";

export function ShopPage(){

    const [shop, setShop] = useState([])
    const [filters, setFilters] = useState(new Set())
    const [filteredBySearch, setFilteredBySearch] = useState([])

    useEffect(() => {
        getAllRestaurants("shop",null, null).then(data=>{
            setShop(data)
        })
    }, []);

    const filteredShop = useMemo(()=>{
        if(!shop.length){
            return [];
        }
        if(!filters.size){
            return shop;
        }
        return shop.filter(shopItem=>{
            return [...filters.values()].every(prop=>shopItem.props.includes(prop))
        })
    },[filters, shop])

    const filteredShopFunc =(item)=>{
        const filtersCopy = new Set(filters)
        if(filtersCopy.has(item)){
            filtersCopy.delete(item)
        }else {
            filtersCopy.add(item)
        }
        setFilters(filtersCopy)
    }


    const searchFunc =(value)=>{
        const arr = shop.filter(el=> el.shopName.toLowerCase().includes(value.toLowerCase()))
        setFilteredBySearch(arr)

    }



    return <div>
        <Banner />
        <div className={'flex ml-6 mt-10'}>
            <div>
                <Category />
                <PropertyFilterShop filteredShopFunc={filteredShopFunc}/>
            </div>
            <div className={'ml-7'}>
                <Search searchFunc={searchFunc} />
                <HasFilter filters={filters}/>
                <ShopList shop={filteredBySearch.length>0?filteredBySearch : filteredShop} />
            </div>
        </div>
    </div>
}