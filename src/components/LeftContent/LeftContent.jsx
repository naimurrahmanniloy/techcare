import { useEffect, useState } from "react";

function handler({ props }) {
  console.log(props);
}

export default function LeftContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/api/api.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="p-8 mx-6 border text-black bg-white border-gray-200 rounded-lg shadow sm:p-6 dark:border-gray-700">
      <div className="W-2">
        <div
          className="
           flex justify-between items-center"
        >
          <h1 className="font-bold text-2xl">Patients</h1>
          <a href="">
            <img src="/src/assets/search.svg" alt="" />
          </a>
        </div>
      </div>
      <ul>
        {data.map((item) => (
          <div className="my-3 ">
            <div className="p-2 card card-side shadow-sm">
              <figure>
                <img
                  className="h-30 w-30"
                  src={item.profile_picture}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 onClick={handler} className="card-title">
                  {item.name}
                </h2>
                <p>{item.gender}</p> <span>{item.age}</span>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
