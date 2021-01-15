import React from 'react'
import './CulturalExperience.css'
import EachCulture from './EachCulture'
import TurkishCoffeeImage from './Turkish-images/turkish.webp';
import MasalaChaiImage from './Indian-Chai-Images/Neha.webp'
function CulturalExperience() {
    return (
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-center">
                <EachCulture image={TurkishCoffeeImage} title="Turkish Coffee Fortune Reading" price={45} description="Turkish coffee fortune reading is an authentic tradition dating back to the Ottoman empire of the 1600s."/>
                <EachCulture image={MasalaChaiImage} title=" Masala Chai and Pakoda the Indian Way" price={15} description="Learn the intricacies of the preparation of Indian food & some of India’s best-known dishes by taking part in a fun electronic class."/>   
            </div>
        </div>
    )
}

export default CulturalExperience
