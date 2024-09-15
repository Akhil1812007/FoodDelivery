import ResCard from "./ResCard";
import restuarants from "../utils/mock-data";
import {useState} from "react"

const allRestuarants=restuarants;
const ResBody=()=>{
    //console.log(restuarants)
    const [listAllRestuarants,setListAllRestuarants]=useState(allRestuarants);

    return (
        <div className="res-body">
            <div className="search">
            <button className="filter-btn" onClick={
                ()=>{
                    
                    const filterResult=listAllRestuarants.filter((res)=>{
                        console.log(res);
                        return res.info.avgRating>4;
                    });
                    setListAllRestuarants(filterResult);
                }
                
            }>
                Top Rated Restuarnats
            </button>
            </div>
            <div className="res-card-list">
               
            {
                listAllRestuarants.map(
                    (res)=>{
                        return(<ResCard key={res.info.id} restuarnt={res}/>);
                    }
                )
            }
           
            </div>
        </div>
    );
}

export default ResBody;