import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";

export default function MainContent() {


    return(
        <div className="p-4 border text-black bg-white border-gray-200 rounded-lg shadow sm:p-6 dark:border-gray-700">
            <h1>Diagonosis History</h1>
            <div>
                <BloodPressureChart/>
               <div className="grid grid-cols-3 gap-4 mt-10 h-50px">
                
               </div>
            </div>
        </div>  
    )
}