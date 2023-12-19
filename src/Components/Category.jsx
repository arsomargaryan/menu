import {NavLink as Link} from "react-router-dom";

export function Category(){

    return <div className={'border rounded-lg w-[355px] forShadow'}>
        <ul>
            <Link to={'/'} ><li className={'hover:bg-gray-100'}><button className={'p-2 pl-6 pt-4  font-serif'}><i className="fa-solid fa-utensils mr-3"></i> <span>Ռեստորաններ</span></button></li></Link>
            <Link to={'/shop'}><li className={'hover:bg-gray-100'}><button className={'p-2 pl-6  font-serif'}><i className="fa-solid fa-store mr-2"></i> <span>Խանութներ</span></button></li></Link>
            <Link to={'/offers'}> <li className={'hover:bg-gray-100'}><button className={'p-2 pl-6 pb-4 font-serif'}><i className="fa-solid fa-fire mr-3"></i> <span>Առաջարկներ</span></button></li></Link>
        </ul>
    </div>
}