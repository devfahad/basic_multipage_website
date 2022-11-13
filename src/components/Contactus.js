import {useState} from "react";
const Contactus = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const inputHandler = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]: value});
    };

    // Connect with firebase
    const submitData = async (e) => {
        e.preventDefault();
        const {firstName, lastName, phone, email, address, message} = userData;

        if (firstName && lastName && phone && email && address && message) {
            const res = await fetch(
                "https://multipagereactsite-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }
            );
            if (res) {
                alert("Data Stored!");
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
            } else {
                alert("Please fill the data");
            }
        } else {
            alert("Please fill the data");
        }
    };

    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                {/* Left side contact details */}
                                <div className='col-12 col-lg-5 contact-leftside'>
                                    <h1 className='main-heading fw-bold'>
                                        Connect With Our
                                        <br /> Sales Team.
                                    </h1>
                                    <p className='main-hero-para'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Laudantium aliquid
                                        quaerat minima suscipit commodi.
                                    </p>
                                    <figure>
                                        <img
                                            src='./images/hero1.jpg'
                                            alt='contact us'
                                            className='img-fluid'
                                        />
                                    </figure>
                                </div>

                                {/* Right side contact form */}
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form
                                        method='POST'
                                        className='d-flex justify-content-center flex-column h-100'
                                    >
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='firstName'
                                                    id=''
                                                    placeholder='First Name'
                                                    value={userData.firstName}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='lastName'
                                                    id=''
                                                    placeholder='Last Name'
                                                    value={userData.lastName}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='phone'
                                                    id=''
                                                    placeholder='Phone Number'
                                                    value={userData.phone}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='email'
                                                    id=''
                                                    placeholder='Email ID'
                                                    value={userData.email}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-feild'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='address'
                                                    id=''
                                                    placeholder='Add Address'
                                                    value={userData.address}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='message'
                                                    id=''
                                                    placeholder='Enter Your Message'
                                                    value={userData.message}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-check form-checkbox-style'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                name=''
                                                id='ischecked'
                                            />
                                            <label
                                                htmlFor='ischecked'
                                                className='main-hero-para'
                                            >
                                                I agree to the terms and
                                                conditions
                                            </label>
                                        </div>
                                        <button
                                            type='submit'
                                            className='btn-style w-100'
                                            onClick={submitData}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contactus;
