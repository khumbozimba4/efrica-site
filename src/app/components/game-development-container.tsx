import { useMemo } from "react";

const GameDevelopmentContainer = ({
  category,
  industryCategory,
  businessCategory,
  propTop,
  propTop1,
  propLeft,
  propTop2,
  propLeft1,
}) => {
  const frameStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const gameDevelopmentStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const travelHospitalityStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const mediaEntertainmentStyle = useMemo(() => {
    return {
      top: propTop2,
      left: propLeft1,
    };
  }, [propTop2, propLeft1]);

  return (
    <div
      className="absolute top-[1374px] left-[53px] w-[1334px] overflow-hidden flex flex-col items-start justify-center text-left text-base text-black font-inter"
      style={frameStyle}
    >
      <div className="relative w-[1320px] h-[62px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[403px] h-[62px] border-[3px] border-solid border-royalblue" />
        <div
          className="absolute top-[25px] left-[34px] font-medium"
          style={gameDevelopmentStyle}
        >
          {category}
        </div>
        <div className="absolute top-[0px] left-[464px] rounded-8xs bg-white box-border w-[403px] h-[62px] border-[3px] border-solid border-royalblue" />
        <div className="absolute top-[0px] left-[917px] rounded-8xs bg-white box-border w-[403px] h-[62px] border-[3px] border-solid border-royalblue" />
        <div
          className="absolute top-[25px] left-[930px] font-medium"
          style={travelHospitalityStyle}
        >
          {industryCategory}
        </div>
        <div
          className="absolute top-[21px] left-[492px] font-medium"
          style={mediaEntertainmentStyle}
        >
          {businessCategory}
        </div>
      </div>
    </div>
  );
};

export default GameDevelopmentContainer;
