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
import bgImg from '../assets/smallSizeBG.png';

function loginPage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [showPassword, setShowPassword] = useState('');

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function logDetails(){
        console.log(`email: ${email}\npassword: ${password}`);
    }

    function togglePassword(){
        setShowPassword(!showPassword);
    }

    return (
        <div className="bg-black h-screen md:h-screen md:bg-gradient-to-b md:from-cyan-200 md:via-cyan-100 md:to-white">
            {/* BACKGROUND STYLING */}
            <div className='hidden md:block md:backdrop-blur-[2px] md:h-screen md:w-screen md:absolute md:z-20'></div>
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
            <div className='md:hidden backdrop-blur-[2px] h-screen w-screen absolute z-20'></div>

            {/* LOGIN BOX */}
            <div className="flex flex-wrap justify-center items-end md:items-center h-full absloute z-20">
                {/* white box */}
                <div className="w-full h-[75%] rounded-tl-[200px] bg-white absolute z-30 md:mt-0 md:w-1/3 md:h-[68%] md:rounded-5xl md:shadow-lg">
                    
                    {/* logo and login section */}
                    <div className="flex justify-center flex-wrap mt-10 md:mt-3">
                        <div className="w-full flex justify-center"><img src={codeChefLogo} alt="" width={100} /></div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-5">LOGIN</h3>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-9/12 pl-0">
                            {/* email */}
                            <div className="w-full font-bold">Email ID</div>
                            <div className="flex flex-wrap border-black border-[1px] w-full h-8 mb-2 rounded-lg">
                                <img src={personLogo} alt="" className="ml-1" />
                                <input type="text" onChange={handleEmail} placeholder="some.mail@university.com" className="border-none focus:outline-none w-9/10 ml-2" />
                            </div>

                            {/* password */}
                            <div className="w-full font-bold">Password</div>
                            <div className="flex flex-wrap border-black border-[1px] w-full h-8 rounded-lg">
                                <img src={passwordLogo} alt="" className="ml-2" />
                                <input type={showPassword ? "text" : "password"}  onChange={handlePassword} placeholder="******" className="border-none focus:outline-none w-4/5 ml-2" />
                                <button><img onClick={togglePassword} src={eyeLogo} alt="" className="w-5 h-5 ml-5" /></button>
                            </div>
                        </div>
                    </div>

                    {/* remember me and forgot password section */}
                    <div className="flex justify-center">
                        <div className="flex flex-nowrap justify-center w-9/12">
                            <input type="checkbox" className="justify-self-start self-center" />
                            <div className="flex justify-between w-full">
                                <button className="justify-self-start self-center pl-1 text-blue-600"><span>Remember Me</span></button>
                                <button className="justify-self-end self-center text-blue-600"><span>Forgot Password?</span></button>
                            </div>
                        </div>
                    </div>

                    {/* login button */}
                    <div className="flex justify-center w-full">
                        <button onClick={logDetails} className="flex text-3xl font-bold text-white bg-blue-500 w-9/12 mt-5 mb-3 pt-2 pb-4 rounded-full justify-center items-start">Log in</button>
                    </div>

                    {/* sign up section */}
                    <div className="flex justify-center w-full">
                        <div className="flex justify-between w-9/12 text-lg">
                            <span>Don't have an account?</span>
                            <Link to="/SignUpPage" className='font-semibold text-blue-600'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default loginPage;
