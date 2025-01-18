import HomeBanner from '../components/HomeBanner';
import about_img_1 from './../assets/images/about_img_1.jpg'
import about_img_2 from './../assets/images/about_img_2.jpg'
import bg_1 from './../assets/images/bg_1.jpg'
import cause_1 from './../assets/images/cause_1.jpg'
import cause_2 from './../assets/images/cause_2.jpg'
import cause_3 from './../assets/images/cause_3.jpg'
import cause_4 from './../assets/images/cause_4.jpg'
import brief_img from './../assets/images/brief_img_1.jpg'
import hands_bg from './../assets/images/hands_bg.png'
import team_1 from './../assets/images/team-1.jpg'
import team_2 from './../assets/images/team-2.jpg'
import team_3 from './../assets/images/team-3.jpg'
import team_4 from './../assets/images/team-4.jpg'
import { FaHandsHelping } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import ProjectSection from '../components/ProjectSection';
import { useState } from 'react';
import { SiPolkadot } from 'react-icons/si';



const Home = ()=>{
    const[loading, setLoading] = useState(false);
    const[done, setDone] = useState(false)
    const handleSubmit = async e=>{
        e.preventDefault();
        // let data = new FormData(e.target)
        // let jsonData = Object.fromEntries(data);
        // const res =  await fetch('http://127.0.0.1:5000/api/v1/transactions/donation', {
        //     // mode: 'no-cors',
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     credentials: "include", // If you need to include cookies for session handling
        //     body: JSON.stringify(jsonData),
        // });
        // console.log(res)
        // console.log(jsonData)

        setLoading(true);
        setDone(false)
        setTimeout(()=>{
            setLoading(false)
            setDone(true)
        }, 3000);
    }
    return(
       <div className=''>
            <HomeBanner />

            {/* Transactions start */}
           <div
                className="bg-white dark:bg-slate-950 max-w-6xl mx-auto relative top-[-30px] z-10 rounded dark:text-black"
                data-aos="fade-up"
            >
                <div className="block md:flex justify-center px-5 py-6 gap-x-5">
                    <div className="w-full lg:w-1/4 mb-5 lg:mb-0" data-aos="fade-right">
                        <div className="bg-[rgb(244,244,244)] p-4 rounded-lg text-center h-full">
                            <h3 className="text-primary my-3 text-lg font-medium">Total Credit</h3>
                            <p className="text-xl mb-1 font-bold">$248,069,508</p>
                            <Link className="text-primary">View Details</Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4  mb-5 lg:mb-0" data-aos="fade-up">
                        <div className="bg-[rgb(244,244,244)] p-4 rounded-lg text-center h-full">
                            <h3 className="text-primary my-3 text-lg font-medium">Total Debit</h3>
                            <p className="text-xl mb-1 font-bold">$17,400</p>
                            <Link className="text-primary">View Details</Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4  mb-5 lg:mb-0" data-aos="fade-down">
                        <div className="bg-[rgb(244,244,244)] p-4 rounded-lg text-center h-full">
                            <h3 className="text-primary my-3 text-lg font-medium">Current Balance</h3>
                            <p className="text-xl mb-1 font-bold">$248,052,108.00</p>
                            <Link className="text-primary">Bank Account Statement</Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4  mb-5 lg:mb-0" data-aos="fade-left">
                    <div className="bg-[rgb(244,244,244)] p-4 rounded-lg text-center h-full">
                        <h3 className="text-primary my-3 text-lg font-medium">Want to Support?</h3>
                        <ScrollLink
                            to="donation"
                            spy={true} smooth={true} offset={0} duration={1000}
                            className="text-center cursor-pointer block py-3 px-5 mx-2 md:mx-0 rounded w-full transition-all duration-100 bg-primary hover:bg-secondary text-white font-bold"
                        >
                        Donate
                        </ScrollLink>
                    </div>
                    </div>
                </div>
            </div>
            {/* Transactions End */}


            {/* Section About Start */}
            <section id='about' className='py-[50px] lg:py-[100px] px-7 lg:px-0 overflow-hidden'>
                <div className="max-w-6xl mx-auto">
                    <div className="flex  gap-x-12 flex-col lg:flex-row items-center">

                        {/* Left Hand Content */}
                        <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>
                            <div className=''>
                                <div className='mb-7' data-aos="fade-up">
                                    <a className='uppercase text-sm lg:text-base px-5 py-2 border-b border-primary rounded-full text-center font-medium'>Welcome to Victorious Non-Profit Charity</a>
                                </div>

                                <div className=''data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                                    <h1 className='heading-primary text-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[60px] font-extrabold text-[rgb(40,44,49)]'>Little steps bring significant transformations.</h1>
                                </div>

                                <div className='my-5 lg:my-7' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                                    <p className='text-my-grey-light'>
                                        That accounts for 14% of the global population, or roughly 1 in 8 people currently living without hope amid garbage,
                                        sewage, drugs, and abuse in unthinkable conditions.
                                        A life without stable housing is a life where basic needs go unmet.
                                    </p>
                                </div>

                                <div className='flex mb-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                                    <div className='flex-shrink-0 mr-5'>
                                        <FaHandsHelping className='text-primary text-2xl'/>
                                    </div>
                                    <div className='-mt-1'>
                                        <h3 className='text-my-grey text-lg font-semibold'>3,750 Volunteers</h3>
                                        <p className='pr-20 text-my-grey-light'>
                                            Our dedicated volunteers are passionate about driving change,
                                            uplifting communities, and making a lasting impact through selfless service.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex mb-10' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                                    <div className='flex-shrink-0 mr-5'>
                                        <FaLock className='text-primary text-2xl'/>
                                    </div>
                                    <div className='-mt-1'>
                                        <h3 className='text-my-grey text-lg font-semibold'>14,800 Trusted Funds</h3>
                                        <p className='pr-20 text-my-grey-light'>
                                            Our trusted funds ensure every contribution is managed transparently
                                            and directed toward meaningful projects that create lasting change.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-x-4' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                                    <ScrollLink to="causes" spy={true} smooth={true} offset={0} duration={1000} className='inline-block text-white bg-primary cursor-pointer rounded-full font-semibold px-4  py-2 transition-all duration-300 ease-in border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-black'>
                                        Learn More &rarr;
                                    </ScrollLink>
                                    <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000} className='inline-block  rounded-full font-semibold px-4 cursor-pointer border-2 border-primary  py-2 transition-all duration-300 ease-in hover:border-transparent hover:bg-primary hover:text-white'>
                                        Contact Us 
                                    </ScrollLink>
                                </div>
                            
                            </div>
                        </div>
                        
                    
                        {/* Right Hand Contents */}
                        <div className='w-full lg:w-2/4 flex-shrink-0'>
                            {/* About images Gallery Start */}
                            <div className='relative pb-32'>
                                <img src={about_img_1 } alt="" className='h-4/5 rounded-xl image-outline' data-aos='fade-left'/>
                                <img src={about_img_2 } alt="" className='w-2/4 -mt-20 absolute right-5 rounded-xl image-outline' data-aos='fade-up' data-aos-delay='1000'/>
                            </div>
                        {/* About images Gallery End */}
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Section About End */}

            {/* Brief Start */}
            <section className='py-[50px] lg:py-[100px] px-7 lg:px-0 bg-cover bg-center' style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${brief_img})`}}>
                <div className="max-w-6xl mx-auto"> 
                    <div className='flex flex-col items-center justify-center text-center'>
                        <div className='' data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                            <h2 className='text-[36px] leading-10 font-extrabold text-white'>We have helped over 200 vulnerable communities</h2>
                        </div>
                        <div className='max-w-2xl mx-auto mt-4' data-aos="fade-up" data-aos-delay="400"  data-aos-duration="500" >
                            <p className='text-white text-center mb-7'>
                                The secret to happiness lies in helping others. Never underestimate
                                the difference YOU can make in the lives of the poor,
                                the abused and the helpless. Spread sunshine in their
                                lives no matter what the weather may be.
                            </p>

                            <div className='text-center'>
                                <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000}  className="inline-block rounded-full cursor-pointer font-bold px-3 lg:px-5 py-3  mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Make Donation</ScrollLink>
                                <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={1000}  className="inline-block rounded-full ml-2 cursor-pointer md:ml-3 font-bold px-3 lg:px-5 border-2 border-primary  py-3  transition-all duration-300 ease-in hover:bg-primary text-white">About Victorious</ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Brief End */}

            {/* Section Cause Start */}
            <section id='causes' className='py-[50px] lg:py-[100px] px-7 lg:px-0'>
                <div className="max-w-6xl mx-auto">

                    <div className='mb-7' data-aos="fade-up">
                        <a className='uppercase text-sm lg:text-base px-5 py-2 border-b border-primary rounded-full text-center font-medium'>Help Us Now</a>
                    </div>

                    <div className='mb-7'data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                        <h1 className='heading-primary text-[35px] lg:text-[40px] leading-[51.8px] lg:leading-[60px] font-extrabold text-[rgb(40,44,49)]'>Explore Our Causes</h1>
                    </div>


                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                       
                        <div className='lg:mr-5'>
                            {/* 1 Cause Start */}
                            <section className='' data-aos="fade-up" data-aos-delay="500">
                                <div className='flex flex-col lg:flex-row'>
                                    {/* Cause Image Start */}
                                    <div className='w-full lg:w-2/4 flex flex-col'>
                                        <div className='bg-cover w-full h-[321px] lg:h-full relative bg-[39%_0px] flex flex-col justify-end items-center rounded-xl pb-10 px-5 pt-5 mb-5 lg:mb-0 lg:mr-4' style={{ backgroundImage: `url(${cause_1})` }}>
                                            <div className='background-overlay rounded-xl bg-transparent h-full w-full absolute top-0 left-0' style={{ backgroundImage: `linear-gradient(180deg,#00000000 60%,#000000 100%)` }}></div>
                                            <div className='mt-3 relative z-20'>
                                                <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full cursor-pointer font-bold px-5 py-3 mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Donate Now</ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Image End */}

                                    {/* Cause Info Start */}
                                    <div className='w-full lg:w-2/4'>
                                        <div className='lg:ml-4 flex flex-col'>
                                            <div className='mb-2'>
                                                <h5 className='font-medium text-primary'>Pure Water</h5>
                                            </div>

                                            <div className='mb-5'>
                                                <h3 className='text-xl font-medium text-slate-950'>Bring Clean Water</h3>
                                            </div>

                                            <div className='mb-5'>
                                                <p className='text-my-grey-light'>
                                                    Access to clean and safe drinking water is a basic human right.
                                                    Join us in our mission to provide sustainable water solutions to communities
                                                    facing water scarcity, ensuring health, dignity, and a better quality of life for all.
                                                </p>
                                            </div>

                                            <div className='mb-5'>
                                                <div className='bg-slate-300 rounded-[3px] h-[10px]'>
                                                    <div className='bg-primary w-[85%] rounded-[3px] h-[10px]'></div>
                                                </div>
                                            </div>

                                            {/* Statistic */}
                                            <div className='flex justify-between'>
                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Raised :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$10086</span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className=' bg-slate-200 w-[2px]'></div>

                                                <div className=''>
                                                    <div className=''>
                                                    <h6 className='my-2 font-semibold text-xs'>Goals :</h6>
                                                    <h3 className='mb-4 mt-2 font-semibold'>
                                                        <span className='text-[#439182]'>$15000</span>
                                                    </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Info End */}
                                </div>
                            </section>
                            {/* 1 Cause End */}

                            {/* 2 Cause Start */}
                            <section className='mt-8 lg:mt-10' data-aos="fade-up" data-aos-delay="700">
                                <div className='flex flex-col lg:flex-row'>
                                    {/* Cause Image Start */}
                                    <div className='w-full lg:w-2/4 flex flex-col'>
                                        <div className='bg-cover w-full h-[321px] lg:h-full relative bg-[39%_0px] flex flex-col justify-end items-center rounded-xl pb-10 px-5 pt-5 mb-5 lg:mb-0 lg:mr-4' style={{ backgroundImage: `url(${cause_2})` }}>
                                            <div className='background-overlay rounded-xl bg-transparent h-full w-full absolute top-0 left-0' style={{ backgroundImage: `linear-gradient(180deg,#00000000 60%,#000000 100%)` }}></div>
                                            <div className='mt-3 relative z-20'>
                                                <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full cursor-pointer font-bold px-5 py-3 mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Donate Now</ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Image End */}

                                    {/* Cause Info Start */}
                                    <div className='w-full lg:w-2/4'>
                                        <div className='lg:ml-4 flex flex-col'>
                                            <div className='mb-2'>
                                                <h5 className='font-medium text-primary'>Medical & Health</h5>
                                            </div>

                                            <div className='mb-5'>
                                                <h3 className='text-xl font-medium text-slate-950'>Fundraise for Health Care</h3>
                                            </div>

                                            <div className='mb-5'>
                                                <p className='text-my-grey-light'>
                                                    Health is wealth. We aim to provide critical medical support, raise funds for life-saving treatments,
                                                    and promote awareness to improve healthcare access for underserved populations.
                                                </p>
                                            </div>

                                            <div className='mb-5'>
                                                <div className='bg-slate-300 rounded-[3px] h-[10px]'>
                                                    <div className='bg-primary w-[65%] rounded-[3px] h-[10px]'></div>
                                                </div>
                                            </div>

                                            {/* Statistic */}
                                            <div className='flex justify-between'>
                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Raised :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$255.220</span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className=' bg-slate-200 w-[2px]'></div>

                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Goals :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$400.000</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Info End */}
                                </div>
                            </section>
                            {/* 2 Cause End */}
                        </div>
                      

                        <div className='lg:mr-5'>
                            {/* 3 Cause Start */}
                            <section className='' data-aos="fade-up" data-aos-delay="900">
                                <div className='flex flex-col lg:flex-row'>
                                    {/* Cause Image Start */}
                                    <div className='w-full lg:w-2/4 flex flex-col'>
                                        <div className='bg-cover w-full h-[321px] lg:h-full relative bg-[39%_0px] flex flex-col justify-end items-center rounded-xl pb-10 px-5 pt-5 mb-5 lg:mb-0 lg:mr-4' style={{ backgroundImage: `url(${cause_3})` }}>
                                            <div className='background-overlay rounded-xl bg-transparent h-full w-full absolute top-0 left-0' style={{ backgroundImage: `linear-gradient(180deg,#00000000 60%,#000000 100%)` }}></div>
                                            <div className='mt-3 relative z-20'>
                                                <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full cursor-pointer font-bold px-5 py-3 mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Donate Now</ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Image End */}

                                    {/* Cause Info Start */}
                                    <div className='w-full lg:w-2/4'>
                                        <div className='lg:ml-4 flex flex-col'>
                                            <div className='mb-2'>
                                                <h5 className='font-medium text-primary'>Education</h5>
                                            </div>

                                            <div className='mb-5'>
                                                <h3 className='text-xl font-medium text-slate-950'>Give Children's Education</h3>
                                            </div>

                                            <div className='mb-5'>
                                                <p className='text-my-grey-light'>
                                                    Every child deserves the chance to learn and grow. We work to break the cycle of poverty
                                                    by providing access to quality education, empowering children with knowledge,
                                                    skills, and opportunities to build brighter futures.
                                                </p>
                                            </div>

                                            <div className='mb-5'>
                                                <div className='bg-slate-300 rounded-[3px] h-[10px]'>
                                                    <div className='bg-primary w-[40%] rounded-[3px] h-[10px]'></div>
                                                </div>
                                            </div>

                                            {/* Statistic */}
                                            <div className='flex justify-between'>
                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Raised :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$255.220</span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className=' bg-slate-200 w-[2px]'></div>

                                                <div className=''>
                                                    <div className=''>
                                                    <h6 className='my-2 font-semibold text-xs'>Goals :</h6>
                                                    <h3 className='mb-4 mt-2 font-semibold'>
                                                        <span className='text-[#439182]'>$400.000</span>
                                                    </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Info End */}
                                </div>
                            </section>
                            {/* 3 Cause End */}


                            {/* 4 Cause Start */}
                            <section className='mt-8 lg:mt-10' data-aos="fade-up" data-aos-delay="1100">
                                <div className='flex flex-col lg:flex-row'>
                                    {/* Cause Image Start */}
                                    <div className='w-full lg:w-2/4 flex flex-col'>
                                        <div className='bg-cover w-full h-[321px] lg:h-full relative bg-[39%_0px] flex flex-col justify-end items-center rounded-xl pb-10 px-5 pt-5 mb-5 lg:mb-0 lg:mr-4' style={{ backgroundImage: `url(${cause_4})` }}>
                                            <div className='background-overlay rounded-xl bg-transparent h-full w-full absolute top-0 left-0' style={{ backgroundImage: `linear-gradient(180deg,#00000000 60%,#000000 100%)` }}></div>
                                            <div className='mt-3 relative z-20'>
                                                <ScrollLink to="donation" spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full cursor-pointer font-bold px-5 py-3 mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Donate Now</ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Image End */}

                                    {/* Cause Info Start */}
                                    <div className='w-full lg:w-2/4'>
                                        <div className='lg:ml-4 flex flex-col'>
                                            <div className='mb-2'>
                                                <h5 className='font-medium text-primary'>Healthy Food</h5>
                                            </div>

                                            <div className='mb-5'>
                                                <h3 className='text-xl font-medium text-slate-950'>One Meal a day</h3>
                                            </div>

                                            <div className='mb-5'>
                                                <p className='text-my-grey-light'>
                                                    No one should go to bed hungry. Our initiative ensures that vulnerable individuals and families
                                                    receive nutritious meals every day, fostering health, hope, and humanity in their lives.
                                                </p>
                                            </div>

                                            <div className='mb-5'>
                                                <div className='bg-slate-300 rounded-[3px] h-[10px]'>
                                                    <div className='bg-primary w-[85%] rounded-[3px] h-[10px]'></div>
                                                </div>
                                            </div>

                                            {/* Statistic */}
                                            <div className='flex justify-between'>
                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Raised :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$255.220</span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Vertical Line */}
                                                <div className=' bg-slate-200 w-[2px]'></div>

                                                <div className=''>
                                                    <div className=''>
                                                        <h6 className='my-2 font-semibold text-xs'>Goals :</h6>
                                                        <h3 className='mb-4 mt-2 font-semibold'>
                                                            <span className='text-[#439182]'>$400.000</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cause Info End */}
                                </div>
                            </section>
                            {/* 4 Cause End */}
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Cause End */}

            {/* Our Volunteers Start */}
            <section className='py-[50px] lg:py-[100px] px-7 lg:px-0 bg-contain bg-[#D9E7DB] bg-[bottom_center] bg-no-repeat ' style={{backgroundImage:`url(${hands_bg})`}}>
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <div className='flex flex-col lg:flex-row justify-between items-end'>
                        <div className='mb-7 lg:mb-0 w-full lg:w-1/3'>
                            <div className='mb-5' data-aos="fade-up">
                                <a className='uppercase px-5 py-2 border-b border-primary rounded-full text-center font-medium'>Team Members</a>
                            </div>

                            <div className='mb-7 max-w-2xl mx-auto lg:max-w-none'data-aos="fade-up" data-aos-delay="300"  data-aos-duration="500" >
                                <h1 className='heading-primary ext-[37px] lg:text-[50px] leading-[51.8px] lg:leading-[70px] font-extrabold text-[rgb(40,44,49)]'>Our Expert Volunteer</h1>
                            </div>
                        </div>

                        <div className='relative -top-12 w-full lg:w-2/3 lg:text-right'>
                            <Link href=""  className="inline-block rounded-full ml-2 md:ml-3 font-bold px-5 border-2 border-primary  py-3  transition-all duration-300 ease-in text-primary">Join With Us</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-x-5 lg:flex-row items-center">
                        {/* Card 1 Start */}
                        <div className='w-full lg:w-1/4 mb-5 lg:mb-0'>
                            <div className='bg-white rounded-lg p-5 lg:px-6 shadow-md'>
                                <div className='img green h-40 w-40 rounded-full text-center overflow-hidden mb-10 mt-6 mx-auto'>
                                    <img src={team_1} alt="" className='' />
                                </div>

                                <h4 className='font-extrabold text-primary mb-2 text-xl'>Adams Hobes</h4>
                                <h5 className='mb-4 text-[#6e7c90] font-medium'>Volunteer</h5>
                                <div className='text-right'>
                                    <a href="/" className='read-more-line '>
                                        <span className='inline-block relative ml-2'>
                                            Read More
                                        </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                        {/* Card 1 End */}


                        {/* Card 2 Start */}
                        <div className='w-full lg:w-1/4 mb-5 lg:mb-0'>
                            <div className='bg-white rounded-lg p-5 lg:px-6 shadow-md'>
                                <div className='img navy-blue h-40 w-40 rounded-full text-center overflow-hidden mb-10 mt-6 mx-auto'>
                                    <img src={team_2} alt="" className='' />
                                </div>

                                <h4 className='font-extrabold text-primary mb-2 text-xl'>Natasha Gamble</h4>
                                <h5 className='mb-4 text-[#6e7c90] font-medium'>Volunteer</h5>
                                <div className='text-right'>
                                    <a href="/" className='read-more-line '>
                                        <span className='inline-block relative ml-2'>
                                            Read More
                                        </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                        {/* Card 2 End */}


                        {/* Card 3 Start */}
                        <div className='w-full lg:w-1/4 mb-5 lg:mb-0'>
                            <div className='bg-white rounded-lg p-5 lg:px-6 shadow-md'>
                                <div className='img orange h-40 w-40 rounded-full text-center overflow-hidden mb-10 mt-6 mx-auto'>
                                    <img src={team_3} alt="" className='' />
                                </div>

                                <h4 className='font-extrabold text-primary mb-2 text-xl'>James Evans</h4>
                                <h5 className='mb-4 text-[#6e7c90] font-medium'>Volunteer</h5>
                                <div className='text-right'>
                                    <a href="/" className='read-more-line '>
                                        <span className='inline-block relative ml-2'>
                                            Read More
                                        </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                        {/* Card 3 End */}


                        {/* Card 4 Start */}
                        <div className='w-full lg:w-1/4 mb-5 lg:mb-0'>
                            <div className='bg-white rounded-lg p-5 lg:px-6 shadow-md'>
                                <div className='img beige h-40 w-40 rounded-full text-center overflow-hidden mb-10 mt-6 mx-auto'>
                                    <img src={team_4} alt="" className='' />
                                </div>

                                <h4 className='font-extrabold text-primary mb-2 text-xl'>Rick Dalton</h4>
                                <h5 className='mb-4 text-[#6e7c90] font-medium'>Volunteer</h5>
                                <div className='text-right'>
                                    <a href="/" className='read-more-line '>
                                        <span className='inline-block relative ml-2'>
                                            Read More
                                        </span>
                                    </a>

                                </div>

                            </div>
                        </div>
                        {/* Card 4 End */}
                    </div>
                </div>
            </section>
            {/* Our Volunteers Start */}


            {/* Our Projects Start */}
            <section id='projects' className='py-12 lg:py-14 px-7 lg:px-0'>
                <ProjectSection />
            </section>
            {/* Our Projects End */}

            {/* CTA Start */}
            <section className='py-[50px] lg:py-[100px] bg-fixed bg-[left_center] relative px-7 lg:px-0' style={{backgroundImage:`url(${bg_1})`}}>
                <div className='overlay absolute h-full w-full top-0 left-0 z-[1] bg-[#00000080]'></div>
                <div className="max-w-6xl mx-auto relative z-[2]">
                    <div className='flex items-center'>
                        <div className='w-full lg:w-7/12 px-3'>

                            <div className='mb-7' data-aos="fade-up">
                                <a className='uppercase text-sm lg:text-base px-5 py-2 border-b border-primary rounded-full text-center font-bold text-primary '>Help Other People</a>
                            </div>

                            <div className=''>
                                <h1 className='text-white text-[29.25px] lg:text-[44.8px] mb-5 lg:mb-12 font-extrabold leading-[35.1px] lg:leading-[50px]'>
                                    We Dream to Create A Bright Future Of The Underprivileged Children
                                </h1>

                                <div>
                                    <ScrollLink to='donation' spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full cursor-pointer font-bold px-5 py-3  mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Donate Now!</ScrollLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/* CTA Start */}

            {/* Donation Form Start */}
            <section id='donation' className='py-[50px] lg:py-[100px] bg-slate-50 px-7 lg:px-0'>
                <div className="max-w-6xl mx-auto">
                    <div className="flex  gap-x-12 flex-col lg:flex-row">

                        {/* Left Hand Content */}
                        <div className='w-full lg:w-2/4 flex-shrink-0 mb-10 lg:mb-0'>

                            <div className='bg-white shadow-lg rounded-lg  p-5 lg:p-10'>
                                <div className=''>
                                    <form onSubmit={handleSubmit}>
                                        <div className='flex flex-col lg:flex-row lg:gap-x-4 mb-4'>
                                            <div className='w-full lg:w-2/4'>
                                                <input type="text" required name='name' placeholder='Enter Your Name'  className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary'/>

                                            </div>

                                            <div className='w-full lg:w-2/4'>
                                                <input type="email" required name='email' placeholder='Enter Your Email'  className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary'/>
                                            </div>

                                        </div>

                                        <div className='flex flex-col lg:flex-row lg:gap-x-4 mb-4'>
                                            <div className='w-full lg:w-2/4'>
                                                <input type="text" required name='phone' placeholder='Enter Your Phone No.'  className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary'/>

                                            </div>

                                            <div className='w-full lg:w-2/4'>
                                                <input type="number" required name='amount' placeholder='Enter Amount'  className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary'/>
                                            </div>

                                        </div>

                                        <div className='w-full mb-4'>
                                            <select name="cause" required id="" className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary'>
                                                <option value="">--Select Cause--</option>
                                                <option value="Bring Clean Water">Bring Clean Water</option>
                                                <option value="Give Children's Education">Give Children's Education</option>
                                                <option value="Fundraise for Health Care">Fundraise for Health Care</option>
                                                <option value="One Meal a Day">One Meal a Day</option>
                                            </select>
                                        </div>

                                        <div className='w-full mb-4'>
                                            <label className='block text-slate-800 mb-1'>Payment Method</label>
                                            <input required type="radio" value='Cryptocurrency' name='pay_method' id='crypto'/> <label htmlFor="crypto">Cryptocurrency</label> <br />
                                            <input required type="radio" value='Gift Card'  name='pay_method' id='gift_card'/> <label htmlFor="gift_card">Gift Card</label> <br />
                                            <input required type="radio" value='Paypal'  name='pay_method'id='paypal'/> <label htmlFor="paypal">Paypal</label> <br />
                                            <input required type="radio" value='Bank Transfer'  name='pay_method' id='transfer'/> <label htmlFor="transfer">Bank Transfer</label>
                                        </div>

                                        <div className='w-full mb-4'>
                                            <textarea placeholder='Additional Details' name="additional_info" id="" className='w-full rounded px-[25px] py-[15px] border transition-all duration-300 focus-within:outline-0 focus:border-primary min-h-32'/>
                                        </div>

                                        {
                                            done &&(
                                                <div className='w-full mb-4'>
                                                    <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md">
                                                        Thank you for your generous donation! Your form has been successfully submitted. Our team will reach out to you shortly to proceed with the donation.
                                                    </p>
                                                </div>
                                            )
                                        }

                                        <div>
                                            <button className="inline-block rounded-full cursor-pointer font-bold px-5 py-3  mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">
                                               {loading ?  <SiPolkadot className={`animate-spin duration-1000 h-7 w-7`} /> : 'Make Donation'}
                                            </button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        
                        </div>

                        {/* Right Hand Contents */}
                        <div className='w-full lg:w-2/4 flex-shrink-0'>

                            <div className=''>
                                <div className='mb-5'>
                                    <h5 className='text-2xl text-primary'>Give Donation</h5>

                                </div>

                                <div className='mb-6'>
                                    <h2 className='text-lg lg:text-[40px] leading-8 lg:leading-[48px] font-bold'>We Help Thousands of children to get better lives</h2>

                                </div>

                                <div className='bg-white shadow-md h-[200px] rounded-lg p-5'>

                                    <div className='flex mb-4'>
                                        <div className='w-10 h-10 overflow-hidden rounded-full'>
                                            <img src={team_1} alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <h3 className='font-medium'>Adams Hobes</h3>
                                            <p className='text-gray-500'>Volunteer</p>
                                        </div>

                                    </div>

                                    <p>
                                        Volunteering is not just about giving; it's about growing.
                                        Each act of kindness helps build a better world and a better version of myself.
                                    </p>

                                </div>

                            </div>
                         
                         </div>
                    </div>
                </div>

            </section>
            {/* Donation Form End */}
       </div>
    );
};

export default Home