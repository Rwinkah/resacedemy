import React from 'react'
import '../../styles/Enroll.scss'
import infinity from '../../assets/images/shapes/infinity.svg';
import periwinkle2 from'../../assets/images/shapes/periwinkle2.svg';
import union from'../../assets/images/shapes/union.svg';
import enrollpic from'../../assets/images/shapes/enrollPic.png';

function Enroll() {
  return (
    <div className="enroll">
    <div className="enroll__left">
        <div className="intro-text">
            <h2>Enroll with Us Today!</h2>
            <p>Take the first step towards a brighter future for your loved one. Learn more about our programs and begin the enrollment process.</p>
            <button>Get in touch</button>
        </div>

        <div className="enroll__left__contact">
            <div className="school">
                <h2 className="school__header">School</h2>
                <h6>About Us</h6>
                <h6>Enrollment</h6>
            </div>

            <div className="get-in-touch">
                <h2>Get in touch</h2>
                <h6>Contact us</h6>
                <h6>spneeds@gmail.com</h6>
                <h6>09012341235</h6>
            </div>

            <div className="address">
                <h2>Address</h2>
                <p>No 14, Isiuwa Street, Dausi, Benin City, Edo State, Nigeria.</p>


        </div>
    </div>


    
</div>
<div className="enroll__right">

        <div className="column-1">
            <img classname='unionimg' src={union} alt="union"/>
            <img classname='infinityimg'src={infinity} alt="infinity" />
        </div>
        
        <div className="column-2">
            <img classname='starimg' src={periwinkle2} alt="periwinkle"/>
            <img classname='enrollimg' src={enrollpic} alt="enroll" />
        </div>

    </div>
</div>

  )
}

export default Enroll
