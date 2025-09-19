import BloodPressureChart from "../BloodPressureChart/BloodPressureChart";
import img1 from "../../assets/lung.svg";
import img2 from "../../assets/heart.svg";
import img3 from "../../assets/temp.svg";

export default function MainContent() {
  return (
    <div className="p-4 border text-black bg-white border-gray-200 rounded-lg shadow sm:p-6 dark:border-gray-700">
      <h1>Diagonosis History</h1>
      <div>
        <BloodPressureChart />
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div>
            <div className=" bg-blue-300 card w-60 shadow-sm">
              <figure className="px-10 pt-10">
                <img src={img1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <p>Respiratory Rate</p>
                <h2 className="card-title">20 bpm</h2>
                <small>Normal</small>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-300 card w-60  shadow-sm">
              <figure className="px-10 pt-10">
                <img src={img3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <p>Temperature</p>
                <h2 className="card-title">98.6°F</h2>
                <small>Normal</small>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-400 card w-60  shadow-sm">
              <figure className="px-10 pt-10">
                <img src={img2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <p>Heart Rate</p>
                <h2 className="card-title">78 bpm</h2>
                <small>
                  <img src="../../assets/" alt="" />
                  Lower than Average
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
