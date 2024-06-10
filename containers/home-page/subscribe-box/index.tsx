import { FC } from "react";

interface SubscribeBoxProps {}

const SubscribeBox: FC<SubscribeBoxProps> = ({}) => {
  return (
    <section>
      <div className="bg-[#202223] rounded-[26px] flex flex-col justify-center items-center  py-[65px] px-4">
        <div className="flex justify-between items-center mb-7  flex-col">
          <div className="mb-7">
            <h3 className="text-center text-2xl leading-7 font-bold text-white">
              New projects every 2 weeks.
            </h3>
            <p className="text-[#565656] text-center text-sm leading-7 font-bold">
              i will try, but no promises.
            </p>
          </div>
          <p className="text-white56 text-sm">
            I’m coding almost daily and I will be adding new projects here
          </p>
          <p className="text-white56 text-sm">
            bi weekly, some free and some paid.
          </p>
          <div className="flex items-center gap-x-1">
            <p className="text-[#FFFFFFE3] text-sm">Add your email</p>
            <p className="text-white56 text-sm"> to be notified when a </p>
            <p className="text-[#FFFFFFE3] text-sm">new projects is added.</p>
          </div>
        </div>
        <div className="relative w-full max-w-[430px]">
          <input
            type="email"
            className="bg-[#313131] text-white rounded-full py-[7px] pl-[25px] h-[37px] w-full  placeholder:text-[#909090] placeholder:font-bold placeholder:text-sm placeholder:leading-7 border-none outline-none"
          />
          <button className="text-sm leading-[23px] text-white font-bold py-[7px] px-[31px] rounded-[13px] bg-[#FF3939] border-none outline-none cursor-pointer absolute right-0 top-0">
            Notify me
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBox;
