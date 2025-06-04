import React from "react";
import './Delivery.css'

const Delivery = () => {
  return (
    <>
      <div style={{ width: "100%", padding: "16px 4px", position:'relative', top:'180px' }}>
        <h3 style={{ color: "rgb(233, 162, 22)", fontSize: "40px", textAlign: "center" }}>
          <b>Quick Delivery App</b>
        </h3>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "750px", position: "relative", left: "400px" }}
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          />
          <div
            style={{
              position: "relative",
              top: "290px",
              left: "420px",
              fontSize: "20px",
            }}
          >
            <p
              style={{ color: "green", fontSize: "35px", marginBottom: "5px" }}
            >
              <b>Get The App</b>
            </p>
            <h1 style={{ fontSize: "50px", marginTop: "0" }}>
              <b>Limitless Convenience on demand</b>
            </h1>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
