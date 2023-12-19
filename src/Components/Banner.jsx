import banner from "../images/banner.png";


export function Banner(){

    return <div>
        <div className={'h-[69px]'}></div>
        <img src={banner} alt={'banner'} className={'shadow-inner '} />
    </div>
}