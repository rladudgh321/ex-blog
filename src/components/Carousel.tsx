import { useState } from "react";

export default function Carousel() {
  const [activeButton, setActiveButton] = useState(1);

  const image_url_1 = 'https://plus.unsplash.com/premium_photo-1674331753968-faa2fc6648a9?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const image_url_2 = 'https://images.unsplash.com/photo-1537824598505-99ee03483384?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const image_url_3 = 'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="carousel">
      <div className="carousel__slides">
        <ul>
          { activeButton === 1 && <li className="carousel__slide">
            <input type="radio" readOnly checked={activeButton === 1} />
            <img src={image_url_1} alt="scanary_1" />
            <div className="carousel__control">
              <label onClick={() => setActiveButton(3)}>&lt;</label>
              <label onClick={() => setActiveButton(2)}>&gt;</label>
            </div>
          </li> 
          }
          { activeButton === 2 && <li className="carousel__slide">
            <input type="radio" readOnly checked={activeButton === 2} />
            <img src={image_url_2} alt="scanary_2" />
            <div className="carousel__control">
              <label onClick={() => setActiveButton(1)}>&lt;</label>
              <label onClick={() => setActiveButton(3)}>&gt;</label>
            </div>
          </li>}
         {activeButton === 3 && <li className="carousel__slide">
            <input type="radio" readOnly checked={activeButton === 3} />
            <img src={image_url_3} alt="scanary_3" />
            <div className="carousel__control">
              <label onClick={() => setActiveButton(2)}>&lt;</label>
              <label onClick={() => setActiveButton(1)}>&gt;</label>
            </div>
          </li>}
          {/* <div className="carousel__dots">
            <label className="carousel__dot" onClick={() => setActiveButton(1)} ></label>
            <label className="carousel__dot" onClick={() => setActiveButton(2)} ></label>
            <label className="carousel__dot" onClick={() => setActiveButton(3)} ></label>
          </div> */}
        </ul>
      </div>
    </div>
  );
}