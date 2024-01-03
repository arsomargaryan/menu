import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps';


export function ModalMaps({setShowModal}){


    return <div>
        <div className={'bg-black/50 fixed left-0 top-0 right-0 bottom-0 z-20 cursor-default'} onClick={()=>setShowModal(false)}></div>
        <div
            className={'bg-white w-[1000px] h-[650px] rounded-xl fixed top-[5%] left-[50%] translate-x-[-50%] shadow-2xl z-30 cursor-default'}>
            <div className={'text-center text-black/75 text-2xl mt-4'}>Նշեք Ձեր հասցեն՝ <span className={'font-bold'}>ԱՄԵՆԱԱՐԱԳ ԱՌԱՔՈՒՄ</span> առաջարկելու
                համար
            </div>
            <form className={'m-5'}>
                <input type={"text"} className={'w-[800px] mb-4 p-2 rounded-xl border outline-gray-500 '}
                       placeholder={'Մուտքագրեք ձեր հասցեն'}/>
                <button
                    className={'mt-2 ml-3 pr-7 pl-7 bg-red-600 rounded-xl h-11 text-white font-bold text-sm'}>Հաստատել
                </button>
                <div className={'w-full h-[470px] bg-black'}>
                    <YMaps>
                        <Map defaultState={
                            {
                                center: [40.1789682527666, 44.51391820331986],
                                zoom: 14,
                                controls: ["zoomControl", "fullscreenControl"]
                            }}
                             width={'960px'}
                             height={'470px'}
                             modules={["control.ZoomControl", "control.FullscreenControl","geocode", "SuggestView"]}
                             defaultOptions={{ suppressMapOpenBlock: true }}>
                            <Placemark
                                modules={["geoObject.addon.balloon"]}
                                defaultGeometry={[40.1789682527666, 44.51391820331986]}
                                properties={{
                                    balloonContentBody:
                                        "This is balloon loaded by the Yandex.Maps API module system",
                                }}/>
                            <GeolocationControl options={{ float: "left" }}
                                                defaultOptions={ { maxWidth: 128 }}
                            />
                        </Map>
                    </YMaps>

                </div>
            </form>

        </div>

    </div>
}