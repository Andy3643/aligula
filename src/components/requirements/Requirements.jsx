import { TiTick } from 'react-icons/ti';
import './requirements.css'
import {phoneSpecs} from './data'
 import {laptopSpecs} from './data'


const Requirements = () => {
  return (
    <>
    <h2 className='section-tittle'>Recommendations for learning</h2>
    <div className='container'>
        <p id='cambridge_p'>We proudly present a versatile learning solution that includes both online courses and on-site tutoring. To ensure optimal performance and seamless interaction with our advanced learning platform, we recommend that users employ smartphones 
            and laptops with the following specifications and configurations:</p>
            <div className="requirement_cards-container">
            <div className="requirement_cards">
                    <div class="card">
                        <div class="card-header">
                            <h3 id='specs_header'>Learning Resources</h3>
                        </div>
                        <div class="card-body">
                            <div className="phone-specs-card">
                                {phoneSpecs.map((spec, index) => (
                                    <div key={index} className="phone-spec">
                                        <TiTick className="phone-spec-icon" />
                                        <p className="phone-spec-text" id='cambridge_p'>{spec}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </div>
        <div className="requirement_cards">
                    <div class="card">
                        <div class="card-header">
                            <h3 id='specs_header'>Laptop Specifications</h3>
                        </div>
                        <div class="card-body">
                            <div className="phone-specs-card">
                                {laptopSpecs.map((spec, index) => (
                                    <div key={index} className="phone-spec">
                                        <TiTick className="phone-spec-icon" />
                                        <p className="phone-spec-text" id='cambridge_p'>{spec}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Requirements