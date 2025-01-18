import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { heroData as slideData } from '../data/data';

const HomeBanner  = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideData.length); // Loop through slides
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Slide Container */}
      <div className="relative h-full w-full">
        {slideData.map((data, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute top-0 left-0 w-full h-full inset-0 transition-opacity duration-1000 ease-in-out ${
              index === slideIndex ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="h-full bg-gradient-to-r from-black/70 to-black/30 text-white flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Text Content */}
                <div className="max-w-2xl">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
                    {data.title}
                  </h1>

                  <h2
                    className="text-2xl lg:text-3xl font-medium italic mb-4 animate-fadeIn text-gray-300"
                    style={{ animationDelay: '200ms' }}
                  >
                    {data.sub_title}
                  </h2>
                  <p
                    className="lg:text-xl mb-8 animate-fadeIn"
                    style={{ animationDelay: '200ms' }}
                  >
                    {data.desc}
                  </p>
                  <div className="flex gap-4">
                    <Link to="donation" spy={true} smooth={true} offset={0} duration={1000}  className="inline-block rounded-full cursor-pointer font-bold px-5 py-3  mb-3 lg:mb-0 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light">Make Donation</Link>
                    <Link to='causes' spy={true} smooth={true} offset={0} duration={1000}  className="inline-block rounded-full ml-2 cursor-pointer md:ml-3 font-bold px-5 border-2 border-primary  py-3  transition-all duration-300 ease-in hover:bg-primary text-white">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5  lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:flex gap-2">
        {slideData.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => setIndex(slideIndex)}
            className={`w-3 h-3 rounded-full ${
              index === slideIndex ? 'bg-primary' : 'bg-white/50'
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner ;
