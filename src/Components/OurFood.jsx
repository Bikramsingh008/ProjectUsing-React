import React from 'react'
import { foodSlider } from '../Data/data';
import './OurFood.css';
const OurFood = ({handleCart}) => {
  return (
    <>
    <div style={{textAlign:'center', color:'rgb(233, 162, 22)', fontSize:'60px', position:'relative', top:'200px'}}><b>OUR FOOD</b></div>
      <div className="food-grid">
  {foodSlider.map((item) => (
    <div key={item.id} className="food-item">
      <img
        src={item.img}
        alt={item.title}
        className="food-image"
      />
      <p className="food-title">
        <b>{item.title}</b>
      </p>
      <p className="food-price">
        <b>{item.price}</b>
      </p>
      <button className="foodCart" onClick={handleCart}>Add to Cart</button>
    </div>
  ))}
</div>

    </>
  )
}

export default OurFood
