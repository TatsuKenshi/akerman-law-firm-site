import React from "react";
import useText from "../hooks/useText";

const DropDownMenuItem = React.lazy(
  () => import("../components/DropDownMenuItem")
);

const DropDownMenu = () => {
  const {
    textSr1: TextSr1,
    textEng1: TextEng1,
    textSr2: TextSr2,
    textEng2: TextEng2,
    textSr3: TextSr3,
    textEng3: TextEng3,
    textSr4: TextSr4,
    textEng4: TextEng4,
    textSr5: TextSr5,
    textEng5: TextEng5,
    textSr6: TextSr6,
    textEng6: TextEng6,
    textSr7: TextSr7,
    textEng7: TextEng7,
  } = useText();

  return (
    <section>
      <div className="h-max max-w-[1200px] mx-auto justify-center lg:justify-evenly mt-4 px-4 pt-4 mb-16">
        <DropDownMenuItem
          titleSr="KOMPANIJSKO PRAVO"
          titleEng="COMPANY LAW"
          TextSr={<TextSr1 />}
          TextEng={<TextEng1 />}
        />
        <DropDownMenuItem
          titleSr="IZVRŠENJE"
          titleEng="ENFORCEMENT"
          TextSr={<TextSr2 />}
          TextEng={<TextEng2 />}
        />
        <DropDownMenuItem
          titleSr="NEPOKRETNOSTI"
          titleEng="PROPERTY LAW"
          TextSr={<TextSr3 />}
          TextEng={<TextEng3 />}
        />
        <DropDownMenuItem
          titleSr="RADNO PRAVO"
          titleEng="LABOUR LAW"
          TextSr={<TextSr4 />}
          TextEng={<TextEng4 />}
        />
        <DropDownMenuItem
          titleSr="ZASTUPANJE KLIJENATA PRED SUDOVIMA I DRUGIM DRŽAVNIM ORGANIMA"
          titleEng="REPRESENTING CLIENTS BEFORE THE COURTS AND OTHER STATE BODIES"
          TextSr={<TextSr5 />}
          TextEng={<TextEng5 />}
        />
        <DropDownMenuItem
          titleSr="NASLEDNO I PORODIČNO PRAVO"
          titleEng="FAMILY AND INHERITANCE LAW"
          TextSr={<TextSr6 />}
          TextEng={<TextEng6 />}
        />
        <DropDownMenuItem
          titleSr="UPRAVNO PRAVO"
          titleEng="ADMINISTRATION LAW"
          TextSr={<TextSr7 />}
          TextEng={<TextEng7 />}
        />
      </div>
    </section>
  );
};

export default DropDownMenu;
