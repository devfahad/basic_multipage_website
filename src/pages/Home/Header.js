const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                            <h1 className='display-2'>
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className='main-hero-para'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit fugit molestias,
                                dignissimos sint fuga ipsum asperiores molestiae
                                impedit, exercitationem aliquid dicta dolorum
                                numquam quam blanditiis suscipit modi, iusto
                                illo. Quis!
                            </p>

                            <div className='input-group mt-3 email-div'>
                                <input
                                    type='text'
                                    className='rounded-pill w-75 p-2 w-75 form-control-text'
                                    placeholder='Enter your email'
                                />
                                <button className='input-group-button'>
                                    Get it now
                                </button>
                            </div>
                        </div>

                        {/* Main header right side */}
                        <div className='co-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first'>
                            <img
                                className='img-fluid'
                                src='./images/hero1.jpg'
                                alt='Hero img'
                            />
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};
export default Header;
