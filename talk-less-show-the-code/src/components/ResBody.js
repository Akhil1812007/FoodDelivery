import ResCard from "./ResCard";
import restuarants from "../utils/mock-data";

const allRestuarants=restuarants;
const ResBody=()=>{
    //console.log(allRestuarants);

    return (
        <div className="res-body">
            <div className="search">
                search
            </div>
            <div className="res-card-list">
               
            {
                allRestuarants.map(
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