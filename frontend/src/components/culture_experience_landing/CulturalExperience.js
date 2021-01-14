import React from 'react'
import './CulturalExperience.css'
import EachCulture from './EachCulture'
function CulturalExperience() {
    return (
        <div className="container-fluid mt-4">
            <div className="row d-flex justify-content-center">
                <EachCulture title="Turkish Coffee Fortune Reading" price={45} description="Turkish coffee fortune reading is an authentic tradition dating back to the Ottoman empire of the 1600s."/>
                <EachCulture title=" Masala Chai and Pakoda the Indian Way" price={15} description="Learn the intricacies of the preparation of Indian food & some of India’s best-known dishes by taking part in a fun electronic class."/>   
            </div>
        </div>
    )
}

export default CulturalExperience
