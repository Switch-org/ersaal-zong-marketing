import dynamic from "next/dynamic";
import Image from "next/image";
import { headers } from "next/headers";

const ZongMarketingInputAndOtp = dynamic(
  () => import("../components/ZongMarketingInputAndOtp"),
  {
    ssr: "false",
  }
);

import { rc4 } from "../lib/rc4";
import crypto from "crypto";

export const metadata = {
  title: "Zong Ersaal",
  description: "A Zong Ersaal Application",
};

export function decryptMsisdn(encryptedMsisdn, password) {
  try {
    const decoded = Buffer.from(encryptedMsisdn, "base64");

    // MD5 hash the password
    const md5Password = crypto
      .createHash("md5")
      .update(password)
      .digest("binary");

    // Decrypt using RC4
    const decrypted = rc4(md5Password, decoded);

    console.log("Decrypted data:", decrypted);

    return decrypted.toString("utf8");
  } catch (err) {
    console.error("Decryption failed:", err.message);
    return "";
  }
}



const getHeaders = (headersX) => {
  let obj = {};
  for (let [x, y] of headersX) {
    obj[x] = y;
  }
  return obj;
};



export default async function home() {
 const headersX = await headers();
  const headersObj = getHeaders(headersX);
  const decryptedMsisdn = headersObj["msisdn"]
    ? decryptMsisdn(headersObj["msisdn"], "KidJo123@Ufone")
    : null;

  console.log("decrypted msisdn is :::", decryptedMsisdn);
  console.log("headers are :::", headersObj);




  return (
    <main className="h-[100svh] overflow-hidden font-sans md:h-auto md:overflow-visible">
      <section className="mx-auto grid  xs:min-h-screen w-full grid-cols-1 gap-4 overflow-hidden bg-white p-0 shadow-sm xs:relative xs:gap-0 xs:bg-[#d9e4c5] xs:px-3 md:min-h-screen md:h-auto md:grid-cols-[1fr_1.5fr] md:gap-7 md:overflow-visible md:bg-white md:p-4">
        <div className="relative overflow-hidden bg-[#d9e4c5] px-5 xs:bg-transparent xs:px-0 xs:pb-0 xs:pt-0 md:rounded-[22px] md:px-10 md:pb-10 md:pt-12">
          <div className="z-10 flex flex-col items-center justify-center text-center xs:hidden">
            <p className="text-base text-[#263238] xs:text-[18px] md:text-[22px]">
              Welcome to
            </p>
            <h1 className="mt-0 text-[28px] font-bold leading-tight text-[#263238]">
              Ersaal Hub
            </h1>
          </div>

          <div className="pointer-events-none mt-8 hidden justify-center md:mt-14 md:flex">
            <Image
              src="/mobile.png"
              alt="Hero Image"
              width={600}
              height={600}
              quality={75}
              priority
              className="h-[260px] w-[260px] object-contain md:h-[420px] md:w-[420px]"
            />
          </div>
        </div>

        <div className="relative flex items-start justify-center overflow-hidden px-4 pb-6 pt-2 xs:pt-0 xs:z-10 xs:-mt-1 xs:h-[calc(100svh-100px)] xs:flex-col xs:items-center xs:justify-center xs:px-0 md:px-0 md:pb-0 md:pt-0 md:h-auto md:overflow-visible">
          <div className="absolute left-0 top-0 items-center gap-4 xs:left-1/2 xs:-translate-x-1/2 md:left-0 md:translate-x-0">
            <Image
              src="/ersallogo.webp"
              width={100}
              height={100}
              alt="ersaal logo"
              className="h-auto w-28 xs:w-44"
              priority
            />
          </div>

          <div className="mt-40 w-full max-w-[500px] xs:mt-10 xs:mx-w-auto md:mt-0 md:pt-32">
            <ZongMarketingInputAndOtp decryptedMsisdn={decryptedMsisdn} />
          </div>
        </div>
      </section>
    </main>
  );
}

export async function genenateStaticParams(context) {
  console.log("context is ::;", context);
  return { context };
}
