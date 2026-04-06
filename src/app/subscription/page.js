import Image from "next/image";
import dynamic from "next/dynamic";
import KidjoLogo from "../../../public/images/kidjoLogo.webp";
import Stroke from "../../../public/images/stroke.svg";
import FiremenImg from "../../../public/images/firemenPic.webp";
import { headers } from "next/headers";
const InputAndOtp = dynamic(() => import("../components/InputAndOtp.js"), {
  ssr: "false",
});

export default async function home(packages) {
  console.log("packages are for subscription page :::", packages);
  const headerList = headers();
  // console.log("headers are :::", headerList);
  return (
    <div
      style={{
        backgroundPosition: "90% 50%",
        backgroundColor: "rgba(48,194,248,1)",
      }}
      className="flex flex-col font-poppins justify-start items-center w-screen bg-skyBlueOne bg-no-repeat h-screen bg-[url('../../public/images/subscriptionBackground.webp')] xs:bg-[url('../../public/images/subscriptionBackgroundMobile.webp')] xs:!bg-[left_calc(50%)_top_calc(30%)] xs:relative xs:justify-start xs:h-screen xs:min-h-full xs:overflow-auto bg-center xs:flex-1"
    >
      <div className="w-5/6">
        <Image src={KidjoLogo} width={50} height={50} alt="kidjoLogo" />
      </div>

      <div className="flex flex-row justify-start items-center w-5/6 xs:w-5/6 xs:flex-col-reverse">
        <div className="flex flex-col justify-start items-start w-2/4 xs:w-full xs-items-center xs-justify-center xs:relative xs:mb-10">
          <p className="font-medium w-2/3 text-white text-5xl uppercase mt-10 xs:text-2xl xs:-top-80 xs:absolute">
            Kids Videos to{" "}
            <span className="font-medium w-2/3 text-white text-5xl uppercase flex flex-row xs:text-2xl">
              learn{" "}
              <Image
                src={Stroke}
                width={120}
                height={120}
                alt="stroke"
                className="ml-10"
              />
            </span>
          </p>
          <InputAndOtp
            headerList={headerList}
            packageId={packages.searchParams.package_id}
            packageType={packages.searchParams.packageType}
            packageName={packages.searchParams.packageName}
            networkType={packages.searchParams.networkType}
            packagePrice={packages.searchParams.package_price}
            terms={packages.searchParams.terms}
          />
        </div>
        <div
          className="w-1/2 bg-[url('../../public/images/firemenPic.webp')] bg-contain bg-no-repeat h-full xs:bg-contain xs:w-80 xs:h-64 xs:mt-16"
          style={{ backgroundPosition: "50% 50%" }}
        >
          {/* <Image src={FiremenImg} height={100} width={100} alt="firemenPic" /> */}
        </div>
      </div>
    </div>
  );
}

export async function genenateStaticParams(context) {
  console.log("context is ::;", context);
  return { context };
}
