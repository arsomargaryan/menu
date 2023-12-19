import {HasFilterItem} from "./HasFilterItem";


export function HasFilter({filters}){

    return <div className={'mb-4 flex-row'}>
        {
            [...filters.values()].map((el,index)=> <HasFilterItem key={index} item={el}/>)
        }

    </div>
}