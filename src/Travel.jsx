function Place(props){
    return(
        <div className="w-[400px]">
            <h4>{props.place}</h4>
            <img className="w-full object-contain" src={props.img}></img>
        </div>
    );
}

export default function Travel(){
    return(
        <div className="h-screen*2 bg-[#c5ccd1]">
            <h3 className="text-lg underline pt-14 ">Places i wanna go </h3>
            <div className="flex gap-6">
                <Place place="Japan" img="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2FGettyImages-1441083322"/>
                <Place place="Hawaii" img="https://media.mybnbwebsite.com/11934/hawaii_plane.jpg"/>
                <Place place="Singapore" img="https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_2x1.jpg"/>
            </div>
        </div>
    );
}