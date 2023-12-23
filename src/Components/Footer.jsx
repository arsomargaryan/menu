import appStore from '../images/AppStore.png'
import playMarket from '../images/GooglePlay.png'
import {Link} from "react-router-dom";


export function Footer(){

    return <div className={'mt-1 w-full border-t border-t-200 shadow-[0px_-2px_5px_0px_#e2e8f0]'}>
        <div className={'flex justify-between pl-6 pr-16 pb-8 mt-7 text-base/8'}>
            <div>
                <h6>Հաճախորդներ</h6>
                <ul>
                    <Link to={'/how-to-order'}><li>Ինչպես պատվիրել</li></Link>
                </ul>
            </div>
            <div className={'pl-4'}>
                <h6>Գործընկերներ</h6>
                <ul>
                    <a href={'https://job.menu.am/'} target={'_blank'}>Դարձիր առաքիչ-գործընկեր</a>
                </ul>
            </div>
            <div className={'pr-3'}>
                <h6>Կազմակերպություն</h6>
                <ul>
                    <div><Link to={'/about-us'}> <li>Մեր մասին</li> </Link></div>
                    <div><Link to={'/news'}> <li>Նորություններ</li> </Link></div>
                    <div><Link to={'/careers'}>Աշխատանք</Link></div>
                    <div><Link to={'/contact-us'}>Հետադարձ կապ</Link></div>
                </ul>
            </div>
            <div className={'pr-8'}>
                <h6>Օգտակար հղումներ</h6>
                <ul>
                    <Link to={'/terms-and-conditions'}>Ընդհանուր դրույթները և պայմաններ</Link>
                </ul>
            </div>
        </div>
        <div className={'flex justify-between pl-6 pr-16 pb-12'}>
            <div>
                <h6>Հետևեք մեզ սոցիալական կայքերում</h6>
                <div className={'flex justify-between pr-14 pt-2 pl-1 '}>
                    <a href={'https://www.linkedin.com/showcase/menu-am'} target={"_blank"}> <i className="fa-brands fa-linkedin-in text-2xl text-red-600"></i></a>
                    <a href={'https://www.instagram.com/menu.am/'} target={"_blank"}> <i className="fa-brands fa-instagram text-2xl text-red-600"></i></a>
                    <a href={'https://www.facebook.com/wwwmenuam'} target={"_blank"}><i className="fa-brands fa-facebook text-2xl text-red-600"></i></a>
                    <a href={'https://www.facebook.com/wwwmenuam'} target={"_blank"}> <i className="fa-brands fa-tiktok text-2xl text-red-600"></i></a>
                    <a href={'https://www.facebook.com/wwwmenuam'} target={"_blank"}> <i className="fa-brands fa-youtube text-2xl text-red-600"></i></a>
                </div>
            </div>
            <div className={'pl-5'}>
                <h6>Վճարման եղանակները</h6>
                <div className={'flex justify-between  pl-1 pt-2'}>
                    <i className="fa-brands fa-cc-visa text-3xl mr-2 text-red-600"></i>
                    <i className="fa-brands fa-cc-mastercard text-3xl mr-2 text-red-600"></i>
                    <i className="fa-brands fa-cc-amex text-3xl mr-2 text-red-600"></i>
                    <i className="fa-solid fa-credit-card text-3xl mr-2 text-red-600"></i>
                    <i className="fa-brands fa-cc-paypal text-3xl mr-2 text-red-600"></i>
                    <i className="fa-brands fa-cc-apple-pay text-3xl text-red-600"></i>
                </div>
            </div>
            <div className={'w-2/5 flex justify-center items-center pt-8'}>
                <img src={appStore} alt="app-stor" className={'h-[35px] mr-4'}/>
                <img src={playMarket} alt="play-market" className={'h-[35px] pr-44'}/>
            </div>

        </div>
        <div className={'bg-red-700 w-full text-xs pl-5 pt-2.5 pb-2.5 text-white'}><span>© Բոլոր իրավունքները պաշտպանված են MenuGroup UK LTD</span></div>
    </div>
}