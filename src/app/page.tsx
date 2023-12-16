import AboutUsCard from "./components/about-us-card";
import ContainerFrame from "./components/container-frame";
import GameDevelopmentContainer from "./components/game-development-container";
import HeaderCard from "./components/header-card";
import MVPFormContainer from "./components/m-v-p-form-container";
import RetailWholesaleForm from "./components/retail-wholesale-form";
import TechnologyPlatformsContainer from "./components/technology-platforms-container";
import WebDevelopmentContainer from "./components/web-development-container";

export default function Home (){
  return (
    <div className="relative bg-gainsboro w-full h-[2796px] overflow-hidden flex flex-col items-center justify-start gap-[7px] text-left text-13xl text-black font-inter">
      <HeaderCard/>
      <ContainerFrame/>
      <div className="relative w-[1440px] h-[2108px] overflow-hidden">
        <div className="absolute top-[-10px] left-[605px] w-[300px] overflow-hidden flex flex-col items-end justify-center">
        <div className="text-17xl font-semibold text-gray-100 inline-block w-[231px] h-[35px] shrink-0 ml-[11px]">
        Our Services
       </div>
          <div className="relative mx-auto bg-darkgoldenrod w-[109px] h-[7px]" />
        </div>
        <div className="absolute top-[26px] left-[223px] w-[994px] overflow-hidden flex flex-col items-end justify-center">
          <b className="relative inline-block w-[869px] h-[61px] shrink-0">
            <span>{`We provide `}</span>
            <span className="text-royalblue">{`Software IT solutions `}</span>
            <span>for your business</span>
          </b>
        </div>
        <WebDevelopmentContainer />
        <MVPFormContainer />
        <TechnologyPlatformsContainer />
        <div className="absolute top-[1302px] left-[406px] w-[628px] overflow-hidden flex flex-col items-start justify-center text-5xl">
          <b className="relative inline-block w-[549px] h-[23px] shrink-0">
            VARIOUS INDUSTRIES FOR OUR ICT SERVICES
          </b>
        </div>
        <GameDevelopmentContainer
          category="Game Development"
          industryCategory={`Travel & Hospitality`}
          businessCategory={`Media & Entertainment`}
          propTop="1472px"
          propTop1="21px"
          propLeft="492px"
          propTop2="13px"
          propLeft1="930px"
        />
        <GameDevelopmentContainer
          category="Sport"
          industryCategory="Education"
          businessCategory="Logistics"
          propTop="1472px"
          propTop1="21px"
          propLeft="492px"
          propTop2="13px"
          propLeft1="930px"
        />
        <AboutUsCard />
        <RetailWholesaleForm />
      </div>
    </div>
  );
};

