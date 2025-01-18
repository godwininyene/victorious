import React from 'react'
import logo from '../assets/images/logo.png';
import {FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import bannerBg from '../assets/images/footer_img.jpg'
import { Link } from 'react-router-dom'
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className={`pt-10 bg-slate-900 dark:bg-slate-950 text-white min-h-[300px]`}>
      <div className="mx-auto max-w-6xl h-auto lg:h-96  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        <div className="md:col-span-2 overflow-hidden">
          <div className='mb-4 lg:mb-0 ml-5 lg:ml-0'>

            <Link href="/" className='block text-left mb-6'>
              <img src={logo} className='w-auto h-24 inline'/>
            </Link>

            <p className='text-sm leading-6 text-[#B6B6B6] pr-5'>
                Your trusted source for top-quality electrical and electronics services. 
                Whether you need expert installation, reliable repairs, or comprehensive maintenance, 
                our team of skilled professionals is here to meet your needs.
            </p>
            <div className='mt-5'>
              <img src={bannerBg} className='w-full object-cover rounded-md'/>
            </div>
          </div>
        </div>

        <div className="ml-5 lg:ml-0">
          <h3 className='text-left font-semibold text-white mb-5 pb-5 border-b border-b-slate-200'>Quick Links</h3>

          <ul className='footer-nav-list list-none'>
            <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                <Link to='/' className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Home</Link>
            </li>
            <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                <Link to='about' className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">About</Link>
            </li>
            <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                <Link  to='services' className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Services</Link>
            </li>
            <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                <Link to='contact' className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Contact</Link>
            </li>
            {/* <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                <Link to='' className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Faq</Link>
            </li> */}
          </ul>
        </div>

        <div className="ml-5">
          
          <h3 className='text-left font-semibold text-white mb-5 pb-5 border-b border-b-slate-200'>Contact Us</h3>
          <div className='flex gap-x-3 items-center mb-5'>
            <div className=' h-9 w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
             <MdLocationPin className={`inline text-sm`} />
            </div>
            <p className='text-[#B6B6B6]'>
                Opposite Salvation Ministry, Nekede, Owerri
            </p>
          </div>

          <div className='flex gap-x-3 items-center mb-5'>
            <div className=' h-9 w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
             <FaEnvelope className={`inline text-sm`} />
            </div>
            <p className='text-[#B6B6B6] transition-all duration-300 hover:text-slate-100 flex-shrink-0'>
              <a href="mailto:support@massive-wealthfinance.com">support@allbrighttech.com</a>
            </p>
          </div>

          <div className='flex gap-x-3 items-center mb-5'>
            <div className=' h-9 w-9 rounded-full border-[2px] border-primary flex-shrink-0 flex justify-center items-center'>
             <FaPhoneAlt className={`inline text-sm`} />
            </div>
            <p className='text-[#B6B6B6] transition-all duration-300 hover:text-slate-100 flex-shrink-0'>
                <a  href="tel:+2348144098649">08144098649</a> ||   <a  href="tel:+2348144098649">08144098649</a>
            </p>
          </div>
        </div>
      </div>
      <div className='font-medium text-[#999] text-center text-sm py-5'>
        <span className=''>
        All rights reserved. copyright {year} 
        <Link href='/' className='text-primary'> allbrighttech.com</Link>
        </span>
      </div>

      <p className="text-center text-slate-400 text-xs lg:text-base mt-5 py-2 px-5 lg:px-0">Design and Developed by <span className='text-slate-300'>Godwin Inyene: </span>Signature will be remove upon client's purchase</p>
    </div>
  )
}

export default Footer