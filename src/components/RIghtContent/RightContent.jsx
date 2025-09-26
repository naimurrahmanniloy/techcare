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
      <div>
        <div className="card card-border bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
