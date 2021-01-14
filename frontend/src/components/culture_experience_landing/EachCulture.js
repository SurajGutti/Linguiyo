import React from 'react'

function EachCulture({ title, description, price }) {
    return (
        <div className=" col-md-3 col-xs-10 m-2">
            <div className="cultural_image_container">
                <div className="row d-flex justify-content-center btn_cont">
                    <div className="btn btn-success">
                        Book Now
                    </div>
                </div>
            </div>

            <div className="p-2 mt-3">
                <div className="card_bottom">
                    <h4 className="text-center culture_title mt-3">
                        {title}
                    </h4>
                    <p className="text-center price my-2">${price}</p>
                    <p className="text-center culture_description">{description}</p>
                    <div className="row d-flex justify-content-center">
                        <div className="btn btn-light mt-2">
                            Read More
                         </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EachCulture
