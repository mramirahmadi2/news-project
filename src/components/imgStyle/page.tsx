import React from "react";
import Image from "next/image";
import clsx from "clsx"; // Import clsx
import Style from "@/Style/Style.module.scss";

const Page = () => {
  return (
    //   <div className={clsx({'w-[100px] h-[80px] bg-red-600 rounded-full inline-block align-middle overflow-hidden':circle}, { [Style.imgCircle]: circle })}>
    //   <Image src={SRC} alt={ALT} width={WIDTH} height={HEIGHT} className={`${ClassName} ${Style.img} rounded-full max-w-full h-auto align-middle border-none`} />
    //   </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-6/12 sm:w-4/12 px-4" >
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
          alt="..."
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
  //({ SRC, ALT, WIDTH, HEIGHT, ClassName, circle }: { SRC: string; ALT: string; WIDTH: number; HEIGHT: number; ClassName: string; circle: boolean }
};

export default Page;
