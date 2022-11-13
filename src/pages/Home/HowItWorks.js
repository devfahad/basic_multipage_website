import {useState} from "react";
import workApi from "../../API/workApi";
const HowItWorks = () => {
    const [workData] = useState(workApi);
    return (
        <>
            <section>
                <div className='container work-container'>
                    <h1 className='main-heading text-center'>
                        How does it Work
                    </h1>
                    <div className='row'>
                        {workData.map((curElem) => {
                            const {id, logo, title, info} = curElem;
                            return (
                                <div
                                    key={id}
                                    className='col-12 col-lg-4 text-center work-container-subdiv'
                                >
                                    <i
                                        className={`fontawesome-style ${logo}`}
                                    ></i>
                                    <h2 className='sub-heading'>{title}</h2>
                                    <p className='main-hero-para w-100'>
                                        {info}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
export default HowItWorks;
