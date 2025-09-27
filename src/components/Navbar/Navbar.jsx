export default function Navbar() {
  return (
    <div>
      <div className="navbar text-black shadow-sm p-2  rounded-full">
        <div className="navbar-start m-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>
                  <img src="/src/assets/1.svg" alt="" />
                  Overview
                </a>
              </li>
              <li>
                <a>
                  <img src="/src/assets/2.svg" alt="" />
                  Patient{" "}
                </a>
              </li>
              <li>
                <a>
                  <img src="/src/assets/3.svg" alt="" />
                  Schadule
                </a>
              </li>
              <li>
                <a>
                  <img src="/src/assets/4.svg" alt="" />
                  Massage
                </a>
              </li>
              <li>
                <a>
                  <img src="/src/assets/5.svg" alt="" />
                  Transection
                </a>
              </li>
            </ul>
          </div>
          <a className="w-30" href="">
            <img src="/src/assets/TestLogo.svg" alt="" />
          </a>
        </div>

        <div className="navbar-end p-4">
          <div className="flex gap-3">
            <img
              src="/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
              alt=""
            />
            <div>
              <p className="font-bold">Dr. Jose Simmons</p>
              <p>General Practitioner</p>
            </div>
            <hr className="" />
            <div className="flex gap-3 mt-3">
              <a href="">
                <img src="/src/assets/6.svg" alt="" />
              </a>
              <a href="">
                <img src="/src/assets/7.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
