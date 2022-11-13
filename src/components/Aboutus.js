import {useState} from "react";
import howToUseApp from "../API/howToUse";
const Aboutus = () => {
    const [aboutData] = useState(howToUseApp);
    return (
        <>
            {/* First section of about us */}
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        {/* First section left side data */}
                        <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                            <img src='./images/hero3.jpg' alt='credit card' />
                        </div>

                        {/* First section right side data */}
                        <div className='col-12 col-lg-7 our-services-list'>
                            <h3 className='mini-title'>
                                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className='main-heading'>
                                How to use the App?
                            </h1>

                            {aboutData.map((curElem) => {
                                const {id, title, info} = curElem;
                                return (
                                    <div
                                        key={id}
                                        className='row our-services-info'
                                    >
                                        <div className='col-1 our-services-number'>
                                            {id}
                                        </div>
                                        <div className='col-10 our-services-data'>
                                            <h2>{title}</h2>
                                            <p className='main-hero-para'>
                                                {info}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            <br />
                            <button className='btn-style btn-style-border'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second section of about us */}
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        {/* Second section left side data */}
                        <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                            <h3 className='mini-title'>
                                -- SUPPORT IN ANY LANGUAGES
                            </h3>
                            <h1 className='main-heading'>
                                World class support is
                                <br /> available 24/7
                            </h1>

                            {aboutData.map((curElem) => {
                                const {id, title, info} = curElem;
                                return (
                                    <div
                                        key={id}
                                        className='row our-services-info'
                                    >
                                        <div className='col-1 our-services-number'>
                                            {id}
                                        </div>
                                        <div className='col-10 our-services-data'>
                                            <h2>{title}</h2>
                                            <p className='main-hero-para'>
                                                {info}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            <br />
                            <button className='btn-style btn-style-border'>
                                Learn more
                            </button>
                        </div>

                        {/* Second section right side data */}
                        <div className='col-12 col-lg-5 our-service-rightside-img'>
                            <img
                                src='./images/callcenter.jpg'
                                alt='about call center'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Aboutus;
