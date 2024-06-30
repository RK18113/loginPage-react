import { Link } from 'react-router-dom';
import { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import eyeLogo from '../assets/eye.png';
import htmlImg from '../assets/html.svg';
import reactImg from '../assets/react.svg';
import nodeImg from '../assets/node.png';
import codeChefLogo from '../assets/codeChefLogo.png';
import personLogo from '../assets/profileLogo.svg';
import passwordLogo from '../assets/passwordLogo.svg';
import phoneIcon from '../assets/phoneIcon.svg';
import bgImg from '../assets/smallSizeBG.png';

function signUpPage() {

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [showPassword, setShowPassword] = useState(false);

    function handleFirstName(event){
        setFirstName(event.target.value);
    }

    function handleLastName(event){
        setLastName(event.target.value);
    }

    function handlePhoenNumber(event){
        setPhoneNumber(event.target.value);
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }

    function togglePassword(){
        setShowPassword(!showPassword);
    }

    function logDetails(){
        console.log(`first name: ${firstName}\nlast name: ${lastName}\nemail: ${email}\nphone number: ${phoneNumber}\npassword: ${password}`);
    }

    return (
        <div className="bg-black h-screen w-screen bg-gradient-to-b from-cyan-200 via-cyan-100 to-white">
            {/* BACKGROUND STYLING */}
            <div className='backdrop-blur-[2px] h-screen w-screen absolute z-20'></div>
            <div className='hidden md:block'>
                {/* node img */}
                <img src={nodeImg} alt="" className='h-20 w-28 absolute top-[12rem] left-[25.5rem] z-10 -rotate-12' />

                {/* computer with people img */}
                <img src={image1} alt="" className='h-[8rem] w-[10.5rem] absolute top-[21rem] left-[23rem] z-10 -rotate-12' />

                {/* react logo */}
                <img src={reactImg} alt="" className='h-28 w-28 absolute top-[32rem] left-[26.75rem] z-10 -rotate-12' />

                {/* html logo */}
                <img src={htmlImg} alt="" className='h-14 w-14 absolute top-[10rem] right-[28.75rem] z-10' />

                {/* boy using computer img */}
                <img src={image3} alt="" className='h-24 w-24 absolute top-[18rem] right-[26.5rem] z-10 rotate-45' />

                {/* big computer img */}
                <img src={image2} alt="" className='h-[12.5rem] w-[12.5rem] absolute top-[25rem] right-[22.5rem] z-10 rotate-45' />
            </div>

            <img src={bgImg} alt="" className='absolute h-screen z-10 w-full md:hidden top-0' />
            <div className='md:hidden backdrop-blur-[2px] h-screen w-full absolute z-20'></div>

            {/* LOGIN BOX */}
            <div className="flex flex-wrap justify-center items-end md:items-center h-full w-full relative z-30">
                {/* white box */}
                <div className="w-full h-[85%] rounded-tl-[200px] bg-white absolute z-30 md:w-1/3 md:h-[84%] md:rounded-5xl md:shadow-lg">
                    
                    {/* logo and login section */}
                    <div className="flex justify-center flex-wrap mt-3">
                        <div className="w-full flex justify-center"><img src={codeChefLogo} alt="" width={100} /></div>
                        <h3 className='text-2xl font-bold text-blue-500'>SIGN UP</h3>
                    </div>

                    {/* name, email, phone no, password section */}
                    <div className="flex justify-center">
                        <div className="md:w-9/12 md:pl-0">
                            {/* name */}
                            <div className="w-full md:font-bold">Name</div>
                            <div className="flex justify-between">
                                <input type="text" onChange={handleFirstName} placeholder='First Name' className="border-black border-[1px] focus:outline-2 rounded-lg pl-1 w-[48%] h-8" />
                                <input type="text" onChange={handleLastName} placeholder='Last Name' className="border-black border-[1px] focus:outline-2 rounded-lg pl-1 w-[48%] h-8" />
                            </div>

                            {/* email */}
                            <div className="w-full font-bold mt-2">Email</div>
                            <div className="flex flex-wrap border-black border-[1px] h-8 w-full rounded-lg">
                                <img src={personLogo} alt="" className="ml-1" />
                                <input type="text" onChange={handleEmail} placeholder="some.mail@university.com" className="border-none focus:outline-none w-9/10 ml-2" />
                            </div>

                            {/* phone no */}
                            <div className="w-full font-bold mt-2">Phone Number</div>
                            <div className="flex flex-wrap border-black border-[1px] h-8 w-full rounded-lg">
                                <img src={phoneIcon} alt="" className="ml-1" />
                                <input type="text" onChange={handlePhoenNumber} placeholder="+91 ****** ******" className="border-none focus:outline-none w-9/10 ml-2" />
                            </div>

                            {/* password */}
                            <div className="w-full font-bold mt-2">Password</div>
                            <div className="flex flex-wrap border-black border-[1px] h-8 w-full rounded-lg">
                                <img src={passwordLogo} alt="" className="ml-2" />
                                <input type={showPassword ? "text" : "password"} onChange={handlePassword} placeholder="******" className="border-none focus:outline-none w-4/5 ml-2" />
                                <button><img onClick={togglePassword} src={eyeLogo} alt="" className="w-5 h-5 ml-4" /></button>
                            </div>

                            {/* confirm password */}
                            <div className="w-full font-bold mt-2">Confirm Password</div>
                            <div className="flex flex-wrap border-black border-[1px] h-8 w-full rounded-lg">
                                <img src={passwordLogo} alt="" className="ml-2" />
                                <input type={showPassword ? "text" : "password"} onChange={handleConfirmPassword} placeholder="******" className="border-none focus:outline-none w-4/5 ml-2" />
                            </div>
                        </div>
                    </div>

                    {/* sign up button */}
                    <div className="flex justify-center w-full">
                        <button onClick={logDetails} className="flex text-3xl font-bold text-white bg-blue-500 w-4/5 mt-5 mb-3 pt-2 pb-4 rounded-full justify-center items-center">Sign Up</button>
                    </div>

                    {/* login section */}
                    <div className="flex justify-center w-full">
                        <div className="flex justify-between w-4/5 text-lg">
                            <span>Already have an account?</span>
                            <Link to="/" className='font-semibold text-blue-600'>Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default signUpPage;
