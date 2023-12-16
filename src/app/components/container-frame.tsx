import Link from "next/link";

const ContainerFrame = () => {
  return (
    <div className="relative w-full">
      <div>
        <img
          className="w-full h-[60vh] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <b className="absolute top-[70px] left-[150px] text-13xl inline-block text-white w-[593px] h-[153px]">
          <p className="m-0">
            SOFTWARE DEVELOPMENT AND IT SERVICE COMPANY, BRINGING INNOVATIONS
            THAT ENABLES RAPID
          </p>
          <p className="m-0">{`DEVELOPMENT `}</p>
        </b>
        <b className="absolute top-[250px] left-[150px] text-5xl inline-block text-white w-[497px] h-[77px]">
          We provide cutting edge solutions for start ups and enterprises
        </b>
        <form>
        <b className="absolute top-[30px] left-[800px] text-5xl inline-block text-white w-[407px] h-[65px]">
          <p className="m-0">Need a software or IT Consultant?</p>
          <p className="m-0">Tell Us about Your Project</p>
        </b>
        <input className="absolute top-[100px] left-[800px] w-[435px] h-[46px] bg-white" placeholder="*Name"/>
        <input className="absolute top-[160px] left-[800px] w-[435px] h-[46px] bg-white" placeholder="*Email"/>
        <input className="absolute top-[220px] left-[800px] w-[435px] h-[79px] bg-white" placeholder="*Project Description"/>
        <div className="flex absolute text-base top-[320px] justify-center items-center text-white left-[800px] bg-darkgoldenrod w-[435px] h-[33px]">
          Submit
        </div>
        </form>
  </div>
    </div>
  );
};

export default ContainerFrame;
