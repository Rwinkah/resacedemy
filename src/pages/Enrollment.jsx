import React from 'react'
import '../styles/Enrollment.scss'
function Enrollment() {
  return (
    <div className='enrollment'>
        <div className='enrollment__top-text'>
            <h6>Enrollment</h6>
            <p>We accept admissions all through the year</p>
        </div>
        <div className='enrollment__middle'>
            <div className='enrollment__middle__column1'>
                <img />
                <h3>Individualized Evaluation</h3>
                <p>This evaluation is conducted by our specialists who assess various aspects, including academic skills, cognitive abilities, communication skills, social-emotional development, and any specific areas of concern.</p>
            </div>
            <div className='enrollment__middle__column2'>
                <img />
                <h3>Medical and Psychological Assessment</h3>
                <p>The purpose of this assessment is to identify any specific needs, medical conditions, or psychological considerations that may require additional support or accommodations.</p>
            </div>
            <div className='enrollment__middle__column3'>
                <img />
                <h3>Customized Learning Plans</h3>
                <p>The results of the evaluation are used in developing  learning plans for every student enrolled in our school. These plans are tailored to address their individual needs, learning styles, and academic goals.</p>
            </div>
        </div>
        <div className='enrollment__faq'>
            
        </div>
    </div>
  )
}

export default Enrollment
