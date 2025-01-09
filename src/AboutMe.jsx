function Images(){
    return(
        <div className="flex gap-4">
            <img className="w-1/4 object-contain" src="https://assets.teenvogue.com/photos/66706bf96e5f7cd6d606306d/master/w_1600%2Cc_limit/txt%2520snapshot8.jpg"></img>
            <img className="w-1/4 object-contain" src="https://cdn.shopify.com/s/files/1/0273/8382/4429/files/txt-temptation-farewell-members-hd-wallpaper-uhdpaper.com-480_0_i_1024x1024.jpg?v=1700749193"></img>
            <img className="w-1/4 object-contain" src="https://www.allkpop.com/upload/2024/10/content/251236/1729874191-header-photo.jpg"></img>
        </div>
    );
}

function Travel(props){
    return(
        <div className="w-[400px]">
            <h4>{props.place}</h4>
            <img className="w-full object-contain" src={props.img}></img>
        </div>
    );
}

export default function AboutMe(){
    return(
        <div className="pt-6">
            <h3>My favs</h3>
            <Images/>
            <h3 className="text-lg underline">Places i wanna go </h3>
            <div className="flex gap-4">
                <Travel place="Japan" img="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2FGettyImages-1441083322"/>
                <Travel place="Singapore" img="https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_2x1.jpg"/>
            </div>
        </div>
    );
}