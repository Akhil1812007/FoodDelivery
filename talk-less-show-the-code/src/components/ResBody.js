import ResCard from "./ResCard";
import {useState,useEffect} from "react"
import { SWIGGY_API } from "../utils/contents";
import Shimmer from "./Shimmer";
import restuarants from "../utils/mock-data"
import { Link } from "react-router-dom";


const ResBody=()=>{
   
    const [listAllRestuarants,setListAllRestuarants]=useState([]);
    const[searchText,setSearchText]=useState("");
    const [searchRestuarants,setSearchRestuarants]=useState([]);
    //console.log(listAllRestuarants);

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData=async ()=>{
        try {
           console.log("test");
            const response = await fetch(SWIGGY_API);
            const responseData = await response.json();
            //console.log(responseData.data?.cards[4].card.card.gridElements);
            const resList=responseData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(resList);
            setListAllRestuarants(resList);
            setSearchRestuarants(resList);
           } catch (error) {
            console.log("from error");
          }
    }
    // if(listAllRestuarants.length===0){
    //     return(<Shimmer />);
    // }
    return (
        <div className="res-body">
            <div className="search">
                <div className="search-box">
                    <input className="search-input" text="text" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }
                    />
                    <button className="search-btn" onClick={()=>{
                       const searchFilter= listAllRestuarants.filter((res)=>{
                           return res.info.name.toLowerCase().includes(searchText);
                            //console.log(res.info.name.includes(searchText));
                            //console.log(res.info.name);
                            
                        });
                        console.log(searchText);
                        setSearchRestuarants(searchFilter);
                        
                    }}>search</button>
                </div>
                
                <button className="filter-btn" onClick={
                    ()=>{
                        
                        const filterResult=listAllRestuarants.filter((res)=>{
                        
                            return res.info.avgRating>4;
                        });
                       // filter(filterResult);
                        setSearchRestuarants(filterResult);
                    }
                    
                }>
                    Top Rated Restuarnats
                </button>
            </div>
            <div className="res-card-list">
               
            {
               
                searchRestuarants.map(
                    (res)=>{
                        
                        return(<Link to={"/restaurant/"+res.info.id} key={res.info.id}><ResCard  restuarnt={res}/></Link>);
                    }
                )
                
            }
           
            </div>
        </div>
    );
}

export default ResBody;