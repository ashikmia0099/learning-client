import React, { useContext } from 'react';
import { FaLightbulb } from "react-icons/fa";
import bannerImg1 from '../../assets/bannerPageImage/banner1_1.avif';
import bannerImg2 from '../../assets/bannerPageImage/banner1_2.jpg';
import trackingproblem1 from '../../assets/bannerPageImage/trackingproblem1.jpeg';
import trackingproblem2 from '../../assets/bannerPageImage/trackingproblem2.jpeg';
import versity from '../../../src/assets/bannerPageImage/versity.jpg';
import bannerImg3 from '../../assets/bannerPageImage/banner1_3.webp';
import { FaBuilding } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { PiBuildingApartment } from "react-icons/pi";
import { LuUniversity } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";


import { IoPersonCircleSharp } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BannerCard from '../BannerCard/BannerCard';
import { Link } from 'react-router-dom';
import LangCategory from '../LangCategory/LangCategory';



import logo1 from '../../../src/assets/partner/1_partner_logo_1663044437.png'
import logo2 from '../../../src/assets/partner/3_partner_logo_1663044437.png'
import logo3 from '../../../src/assets/partner/5_partner_logo_1663044423.png'
import logo4 from '../../../src/assets/partner/6_partner_logo_1663044423.png'
import logo5 from '../../../src/assets/partner/7_partner_logo_1663044423.png'
import logo6 from '../../../src/assets/partner/6_partner_logo_1663044437.png'
import logo7 from '../../../src/assets/partner/8_partner_logo_1663044423.png'
import logo8 from '../../../src/assets/partner/9_partner_logo_1663044423.png'
import logo9 from '../../../src/assets/partner/10_partner_logo_1663044423.png'
import logo10 from '../../../src/assets/partner/11_partner_logo_1663044423.png'
import logo11 from '../../../src/assets/partner/12_partner_logo_1663044423.png'
import logo12 from '../../../src/assets/partner/13_partner_logo_1663044423.png'
import logo13 from '../../../src/assets/partner/15_partner_logo_1663044423.png'



const Homepage = () => {



    const { Learning, setLearning, filterData, setFilterData, SingleLanguge, handleFilterCard } = useContext(AuthContext)



    return (
        <div className='max-w-7xl mx-auto'>
            {/* section 1 */}


            <div className='grid md:grid-cols-2 bg-black'>
                <div className='space-x-10  items-center  mt-20'>
                    <h1 className='text-4xl font-bold  my-5 text-white text-center lg:text-left md:mx-10 sm:mx-0'>Become fluent in any language </h1>
                    <ul className='p-3'>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Take customizable 1-on-1 lessons trusted by millions of users</li>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Learn from certified teachers that fit your budget and schedule</li>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Connect with a global community of language learners</li>

                    </ul>
                    <div className=' lg:text-left my-9 mx-auto flex md:justify-start justify-center  '>
                        <Link to={'/findTutors'}><button className='btn px-10 bg-red-500 text-white font-semibold text-lg hover:bg-orange-400'>Start Now</button></Link>

                    </div>
                </div>
                <div className='my-20 mx-10'>
                    <img src={bannerImg3} className='' alt="" />
                </div>
            </div>



            {/* section 2 */}

            <div className='bg-black py-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4  text-white mx-auto justify-center items-center  text-center'>
                    <div className='mt-5'>
                        <h4 className='text-4xl font-bold'>50,000+</h4>
                        <p className='text-lg font-semibold'>Experienced tutors</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-4xl font-bold'>150+</h4>
                        <p className='text-lg font-semibold'>Tutor nationalities</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-4xl font-bold'>120+</h4>
                        <p className='text-lg font-semibold'>Subjects taught</p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-4xl font-bold'>50,000+</h4>
                        <p className='text-lg font-semibold'>5-star tutor reviews</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-6 mt-14 '>
                    {SingleLanguge.slice(0, 9).map((language, index) => (
                        <LangCategory key={index} language={language}></LangCategory>
                    ))}
                </div>
            </div>

            {/* section 3 */}

            <div className='bg-black py-10'>
                <h1 className='text-white  md:text-5xl font-bold text-3xl text-center'>See Our Professonal Teacher</h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-16 '>
                    {
                        Learning.slice(0, 6).map(learn => <BannerCard key={learn._id} learn={learn}></BannerCard>)
                    }


                </div>
            </div>




            {/* section 4 */}

            <div className='bg-[#1E293B] py-14'>
                <h1 className=' text-4xl md:text-5xl font-bold text-white text-center'>Tackling the Problem</h1>

                <div className=' grid lg:grid-cols-2 px-10 py-5 lg:py-14 leading-10'>
                    <div className=' flex items-center'>
                        <p className=' text-lg font-light text-white px-2 md:px-10 leading-6 md:leading-10 text-center lg:text-left'>Often, students struggle with their work and rely on tutoring, but tuition classes have become very expensive. Especially during COVID, many schools went online and even completely virtual leaving students to learn content on their own. We've created a program that connects students aged 7-13 to high school and college tutors around the world. These tutors teach their students subjects like Science, Math, and English.</p>
                    </div>
                    <div>
                        <img src={trackingproblem1} alt=""className=' mt-4' />
                    </div>
                </div>

                <div className=' grid lg:grid-cols-2 px-10 lg:py-14 py-5 md:block hidden'>
                    <div>
                        <img src={trackingproblem2} alt="" />
                    </div>
                    <div className=' flex items-center'>
                        <p className=' text-lg font-light text-white px-10 leading-10'>Education is one of the most important aspects of success, and it is becoming more expensive and less accessible which is unacceptable and it needs to change. All of our bright tutors are very qualified and are willing to help students out with any subjects they are having trouble with <span className=' font-bold'>Educationist supports the UN's Development Goal Four of "[ensuring] inclusive and equitable quality education and [promoting] lifelong learning opportunities for all"</span></p>
                    </div>

                </div>
            </div>





            {/* section 5 */}

            <div className='lg:grid lg:grid-cols-2 bg-[#1E293B] py-14'>
                <div className='mx-10'>
                    <img src={bannerImg1} alt="" className='h-96 w-full' />
                </div>
                <div className='text-white mt-6 lg:mt-0 mx-5 text-center  lg:text-left'>
                    <h1 className=' text-4xl lg:text-7xl font-bold text-red-300 lg:w-2/3'>Become A Tutor</h1>
                    <p className='mt-5 text-lg font-semibold my-5'>Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Preply.</p>
                    <ul>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Take customizable 1-on-1 lessons trusted by millions of users</li>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Learn from certified teachers that fit your budget and schedule</li>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Connect with a global community of language learners</li>

                    </ul>

                    <Link to={'/findTutors'}><button className='btn my-5 w-full hover:bg-red-500 bg-red-500 border-none text-white text-xl gap-10'><span>Become A tutor</span> <span> <FaArrowRight className='text-4xl' /> </span> </button></Link>

                </div>
            </div>



            {/* section 6 */}

            <div
                className="hero h-full lg:h-[600px]"
                style={{
                    backgroundImage: `url(${versity})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold"> The Importance of Learning a Language</h1>
                        <p className="mb-5 text-xl leading-8 md:leading-10" >
                        Learning a new language enhances cognitive abilities, improves memory, and strengthens problem-solving skills. It opens doors to new cultures, allowing better communication and deeper understanding. Language learning boosts career opportunities, as multilingual individuals are highly valued in global industries. It also improves brain health, delaying cognitive decline. Immersive learning methods, like speaking with native speakers, reading, and practicing daily, accelerate fluency. Consistency and patience are key. Language skills build confidence and expand social connections worldwide. Whether for travel, work, or personal growth, mastering a new language is a rewarding and lifelong journey. Keep practicing and stay motivated! 🌍📚
                        </p>
                        
                    </div>
                </div>
            </div>


        {/* section 7 */}

        <div className='bg-[#1E293B] py-14'>
            <h1 className=' text-white text-3xl md:text-5xl font-bold text-center'> We Are Connected</h1>

            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5 px-3 md:px-10 py-14 space-y-3'>
                <img className=' h-40 pt-10' src={logo1} alt="" />
                <img className=' h-40 pt-10' src={logo2} alt="" />
                <img className=' h-40 pt-10' src={logo3} alt="" />
                <img className=' h-40 pt-10' src={logo4} alt="" />
                <img className=' h-40 pt-10' src={logo5} alt="" />
                <img className=' h-40 pt-10' src={logo6} alt="" />
                <img className=' h-40 pt-10' src={logo7} alt="" />
                <img className=' h-40 pt-10' src={logo8} alt="" />
                <img className=' h-40 pt-10' src={logo9} alt="" />
                <img className=' h-40 pt-10' src={logo10} alt="" />
                <img className=' h-40 pt-10' src={logo11} alt="" />
                <img className=' h-40 pt-10' src={logo12} alt="" />

            </div>
        </div>



        </div>
    );
};

export default Homepage; 