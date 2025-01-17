function Fav(props){
    return(
        <div className="flex gap-4 justify-center w-3/5">
            <img className="w-1/2 object-contain" src={props.img}></img>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-5vw">{props.title}</h3>
                <h4>{props.description1}</h4>
                <h4>{props.description2}</h4>
            </div>
        </div>
    );
}

export default function AboutMe(){
    return(
        <div className="pt-16 flex flex-col items-center gap-4 bg-[#c5ccd1] p-7">
            <h2 className="text-3xl mb-4 font-bold">MY FAVS!</h2>
            <Fav img="https://www.allkpop.com/upload/2024/10/content/251236/1729874191-header-photo.jpg"
                title="ARTIST"
                description1="I got into Tomorrow X Together (TXT) at the start of last year! They were my top listened to artist
                on Spotify Wrapped and all top 5 songs were by them :)"
                description2="My favorite songs by them are No Rules, Miracle, We'll Never Change, and Tinnitus :D"/>
            <Fav img="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg"
                title="VIDEO GAME"
                description1="I started playing Hollow Knight around 3 years ago during my junior year of high school! "
                description2="I love the storyline and cute characters, somehow it was able to make bugs (which i HATE) look cute lol"
                />
            <Fav img="https://www.souschef.co.uk/cdn/shop/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760"
                title="FOOD"
                description1="The first week I came back to school I ate ramen for 4 days straight 
                because I missed it so much :DDD I personally prefer miso broth or tonkotsu!"
                description2="My favorite place in the area is HiroNori but the line is SO LONG at dinnertime"/>
        </div>
    );
}