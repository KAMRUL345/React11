import React from 'react'

import aboutImg01 from '../../assets/aboutImg/IMG_20220917_143446.jpg'

const About = () => {
    return (
        <section>
            <h1>About Us</h1>
            <div className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center">
                style={{ backgroundImage: `url(${aboutImg01})`}}
                {/* <img src={aboutImg01} alt="About Us" /> */}
                <h1>Kamrul Hasan</h1>

            </div>
        </section>
    )
}

export default About