export default function RightContent() {
  return (
    <div>
      <div className="card bg-white text-black w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="/src/assets/HealthCare Dashboard/Layer 1@2x.png"
            alt="Shoes"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Jessica Tailor</h2>
        </div>
        <div className="flex items-center p-3">
          <div className="p-3">
            <img src="/src/assets/date.svg" alt="" />
          </div>
          <div>
            <p>Date Of Birth</p>
            <p>August 23,1996</p>
          </div>
        </div>
        <div className="flex items-center p-3">
          <div className="p-3">
            <img src="/src/assets/gender.svg" alt="" />
          </div>
          <div>
            <p>Gender</p>
            <p>Female</p>
          </div>
        </div>
        <div className="flex items-center p-3">
          <div className="p-3">
            <img src="/src/assets/contact.svg" alt="" />
          </div>
          <div>
            <p>Contact Info</p>
            <p>(415) 555-1234</p>
          </div>
        </div>
        <div className="flex items-center p-3">
          <div className="p-3">
            <img src="/src/assets/contact.svg" alt="" />
          </div>
          <div>
            <p>Emergency Contacts</p>
            <p>(415) 555-1234</p>
          </div>
        </div>
        <div className="flex items-center p-3">
          <div className="p-3">
            <img src="/src/assets/InsuranceIcon.svg" alt="" />
          </div>
          <div>
            <p>Insurance Provider</p>
            <p>Sunrise Health Assurance</p>
          </div>
        </div>
        <div>
          <button className="btn ml-25 m-10 bg-blue-500 border-0 hover:bg-blue-700 rounded-2xl p-5">
            Show All Information
          </button>
        </div>
      </div>
    </div>
  );
}
