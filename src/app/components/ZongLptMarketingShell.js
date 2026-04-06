"use client";

import { useState } from "react";
import Image from "next/image";
import ZongLptMarketingInputAndOtp from "./ZongLptMarketingInputAndOtp";

const HERO_CONTENT = {
  form: {
    eyebrow: "Welcome to",
    title: "Ersaal Hub",
  },
  otp: {
    eyebrow: "Instant",
    title: "Availability Alerts",
  },
  success: {
    eyebrow: "All Your Tools in",
    title: "One Place",
  },
};

const ZongLptMarketingShell = ({ decryptedMsisdn }) => {
  const [currentStep, setCurrentStep] = useState("form");

  const heroContent = HERO_CONTENT[currentStep] || HERO_CONTENT.form;

  return (
    <section className="mx-auto grid min-h-screen w-full xs:grid-cols-1 xsgap-4 bg-white p-0 shadow-sm xs:relative xs:min-h-screen xs:overflow-hidden xs:bg-[#d9e4c5] xs:px-3 xs:pt-6 grid-cols-[1fr_1.5fr] gap-7 md:bg-white md:p-4">
      <div className="relative overflow-hidden bg-[#d9e4c5] px-5 pb-8 pt-10 xs:bg-transparent xs:px-0 xs:pb-0 xs:pt-0 md:rounded-[22px] md:px-10 md:pb-10 md:pt-12">
        <div className="z-10 flex flex-col items-center justify-center text-center xs:mt-10">
          <p className="text-base text-[#263238] xs:text-[18px] md:text-[22px]">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-0 text-[28px] font-bold leading-tight text-[#263238] ">
            {heroContent.title}
          </h1>
        </div>

        <div className="pointer-events-none xs:mt-8 xs:hidden justify-center mt-14 ">
          <Image
            src="/mobile.png"
            alt="Hero Image"
            width={600}
            height={600}
            quality={75}
            priority
            className="xs:h-[260px] xs:w-[260px] object-contain h-[420px] w-[420px]"
          />
        </div>
      </div>

      <div className="relative flex items-start justify-center px-4 pb-8 pt-2 xs:z-10 xs:-mt-1 xs:min-h-[calc(100vh-160px)] xs:flex-col xs:items-center xs:justify-center xs:px-0 xs:pb-8 xs:pt-6 md:px-0 md:pb-0 md:pt-0">
        <div className="absolute left-0 top-0 xs:left-[40%] items-center gap-4">
          <Image
            src="/ersallogo.png"
            width={70}
            height={70}
            alt="kidjoLogo"
            className="h-auto w-24"
          />
        </div>

        <div className="w-full max-w-[500px] xs:mx-w-auto pt-32 xs:pt-0">
          <ZongLptMarketingInputAndOtp
            decryptedMsisdn={decryptedMsisdn}
            onStepChange={setCurrentStep}
          />
        </div>
      </div>
    </section>
  );
};

export default ZongLptMarketingShell;
