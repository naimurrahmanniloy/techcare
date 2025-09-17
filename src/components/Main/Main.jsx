import LeftContent from "../LeftContent/LeftContent";
import MainContent from "../MainContent/MainContent";
import RightContent from "../RIghtContent/RightContent";

export default function Main() {


    return(
        <div className="grid grid-flow-col grid-rows-3 gap-4 p-10">
            <div className="row-span-4 row-start-1 ..."><LeftContent/></div>
  <div className="col-span-2 row-span-2..."><MainContent/></div>
  <div className="row-start-2 row-end-1 ..."><RightContent/></div>
                       
        </div>
    )
}