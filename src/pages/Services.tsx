import React from 'react'
import "../style/Services.css";
import services1 from "../assets/images/services-1.jpg"
import services2 from "../assets/images/services-2.jpg"
import services3 from "../assets/images/services-3.jpg"
import services4 from "../assets/images/services-4.jpg"
export default function Services() {
    return (
        <div className='services'>

            <h1 className="heading">premium services</h1>

            <div className="box-container">

                <div className="box">
                    <img src={services1} alt="IMG" />
                    <div className="content">
                        <h3>Haircare Consultation</h3>
                    </div>
                </div>

                <div className="box">
                    <img src={services2} alt="IMG" />
                    <div className="content">
                        <h3>Product Recommendation</h3>
                    </div>
                </div>

                <div className="box">
                    <img src={services3} alt="IMG" />
                    <div className="content">
                        <h3>Customer support</h3>
                    </div>
                </div>

                <div className="box">
                    <img src={services4} alt="IMG" />
                    <div className="content">
                        <h3>Education</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
