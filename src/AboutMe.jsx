function Images(){
    return(
        <div className="flex gap-4">
            <img className="w-1/6 object-contain" src="https://www.craftycookbook.com/wp-content/uploads/2023/04/tonkotsu.jpg"></img>
            <img className="w-1/4 object-contain" src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg"></img>
            <img className="w-1/4 object-contain" src="https://www.allkpop.com/upload/2024/10/content/251236/1729874191-header-photo.jpg"></img>
        </div>
    );
}

export default function AboutMe(){
    return(
        <div className="pt-10">
            <h3>My favs</h3>
            <Images/>
        </div>
    );
}