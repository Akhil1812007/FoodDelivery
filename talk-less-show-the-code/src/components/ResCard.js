import { PICTURE_URL } from "../utils/contents";

const ResCard=(probs)=>{
    console.log(probs);
    const {restuarnt}=probs;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=restuarnt.info;
    console.log(name +"name");
    const {res}=probs;
    //console.log(res.name);
    return (
      <div className="res-card">
         <img className="food-image"alt="biriyani" src={PICTURE_URL+cloudinaryImageId}></img>
         <h3>{name}</h3>
         <h4 className="cuisine">{cuisines?.join(",")}</h4>
         <div className="rate-time">
            <h4>{avgRating}⭐</h4>
            <h4>{sla?.deliveryTime} 🕰️</h4>
            <h4>{costForTwo}</h4>
         </div>
         
         
         
      </div>
        
    );
}
export default ResCard