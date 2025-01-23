import {motion} from 'framer-motion'

function TopArtist(){
    return(
        <motion.img className="w-[20%]"
            src="https://kpopfromjapan.com/cdn/shop/collections/TXT.jpg?v=1700154958"
            animate={{ 
                y: [30,40,30], // moves from 30px to 40px back to 30px
                // rotate: [0,10,0] <- rotates from 0 degrees to 10 degrees to 0 degrees
              }} 
              transition={{ 
                duration: 2, // animation lasts 2 seconds
                repeat: Infinity , // keep moving while the page is open
                ease: 'easeInOut' // eases when changing direction
              }}
        />
    );
}

function Top5(props){
    return(
        <div>
            <h1 className="font-bold text-3xl mb-4">{props.title}</h1>
            <ol className="text-xl pl-4 list-decimal">
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
                <li>{props.fifth}</li>
            </ol>
        </div>
    );
}


export default function Wrapped(){
    return(
        <div className="bg-[url('https://storage.googleapis.com/pr-newsroom-wp/1/2023/11/Spotify_Holiday2023_Social_1920x1080_Green_2_BG-1440x733.jpg')]
                        flex flex-col h-screen w-screen pt-12 items-center bg-repeat-round">
            <TopArtist className="w-[20%] pt-16"/>
            <div className="flex gap-40 mt-24">
                <Top5 title="TOP ARTISTS"
                    first="TOMORROW BY TOGETHER"
                    second="BTS"
                    third="ENHYPEN"
                    fourth="Joe Hisaishi"
                    fifth="fromis_9"></Top5>
                <Top5 title="TOP SONGS"
                    first="No Rules"
                    second="Tinnitus (Wanna Be a Rock)"
                    third="0X1=LOVESONG"
                    fourth="LO$ER=LOVER"
                    fifth="Fairy of Shampoo"/>
            </div>
        </div>
    );
}