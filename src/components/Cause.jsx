const Cause = ({ image, title, subtitle, description, raised, goal }) => (
    <div className="flex mb-8 lg:mb-10">
      {/* Cause Image */}
      <div className="w-full lg:w-2/4 flex flex-col">
        <div
          className="bg-cover w-full h-full relative flex flex-col justify-end items-center rounded-xl pb-10 px-5 pt-5 lg:mr-4"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="background-overlay rounded-xl bg-transparent h-full w-full absolute top-0 left-0"
            style={{
              backgroundImage: `linear-gradient(180deg,#00000000 60%,#000000 100%)`,
            }}
          ></div>
          <div className="mt-3 relative z-20">
            <a
              href="/register"
              target="_blank"
              className="inline-block rounded-full cursor-pointer font-bold px-5 py-3 transition-all duration-300 ease-in bg-primary text-white hover:bg-primary-light"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
      {/* Cause Info */}
      <div className="w-full lg:w-2/4">
        <div className="lg:ml-4 flex flex-col">
          <h5 className="text-xl font-medium text-primary mb-5">{title}</h5>
          <h3 className="text-xl font-medium text-slate-950 mb-5">{subtitle}</h3>
          <p className="text-my-grey-light mb-5">{description}</p>
          <div className="bg-slate-300 rounded-[3px] h-[10px] mb-5">
            <div
              className="bg-primary rounded-[3px] h-[10px]"
              style={{ width: `${(raised / goal) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between">
            <div>
              <h6 className="my-2 font-semibold text-xs">Raised :</h6>
              <h3 className="mb-4 mt-2 font-semibold">
                <span className="text-[#439182]">${raised.toLocaleString()}</span>
              </h3>
            </div>
            <div className="bg-slate-200 w-[2px]"></div>
            <div>
              <h6 className="my-2 font-semibold text-xs">Goals :</h6>
              <h3 className="mb-4 mt-2 font-semibold">
                <span className="text-[#439182]">${goal.toLocaleString()}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  