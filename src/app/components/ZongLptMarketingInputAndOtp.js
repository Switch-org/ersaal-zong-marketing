"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import {
  sendOtp,
  verifyOtp,
  getHeApi,
  
} from "../apis/requests";
import CongratsBox from "../../../public/CongratulationBox.webp";
import Image from "next/image";
import Link from "next/link";

const UfoneLptMarketingInputAndOtp = ({
  decryptedMsisdn,
}) => {
  const searchParams = useSearchParams();
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [isOtp, setIsOtp] = useState("");
  const [isCongrats, setIsCongrats] = useState(false);
  const [network, setNetwork] = useState("");
  const [sendDisabled, setSendDisabled] = useState(false);
  const [verifyDisabled, setVerifyDisabled] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [resendStatus, setResendStatus] = useState(false);
  const [sendOtpToken, setSendOtpToken] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [autoVerifyTriggered, setAutoVerifyTriggered] = useState(false);
  const ref = searchParams.get("ref") || "web";

  const formatDisplayNumber = (value) => {
    const rawNumber = String(value || "").replace(/\D/g, "");

    if (!rawNumber) return "03xx xxxxxx";

    const normalized = rawNumber.startsWith("92")
      ? `0${rawNumber.slice(2)}`
      : rawNumber.startsWith("3")
        ? `0${rawNumber}`
        : rawNumber;

    if (normalized.length < 5) return normalized;

    return `${normalized.slice(0, 4)} ${"x".repeat(
      Math.max(normalized.length - 4, 0)
    )}`;
  };

  

  const tiktokUfoneScript = `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('CSVHLBBC77UDA0827J80');
  ttq.page();
}(window, document, 'ttq');`;

  const gtagScriptUfone = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17559523591');`;

  const gtagUfoneSource = `https://www.googletagmanager.com/gtag/js?id=AW-17559523591`;

  useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendStatus(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [otpTimer]);

  useEffect(() => {
    // if (ref === "" || ref === undefined) {
    //   return;
    // } else {
    if (ref === "tiktok") {
      const script = document.createElement("script");
      script.innerHTML = tiktokUfoneScript;
      document.head.appendChild(script);
      // }
    } else {
      if (ref === "inhousegoogle") {
        const script = document.createElement("script");
        script.src = gtagUfoneSource;
        script.async = true;
        document.head.appendChild(script);
        const gtag = document.createElement("script");
        gtag.innerHTML = gtagScriptUfone;
        document.head.appendChild(gtag);
      }
    }
    }, []);
  

  useEffect(() => {
    window.ttq?.track("Pageview");
    // if (ref === "jazz-snapchat") {
    //   snaptr("track", "PAGE_VIEW");
    // }
  }, []);

  const getOtpFromResponse = (response) => {
    return (
      response?.pin ||
      response?.otp ||
      response?.data?.pin ||
      response?.data?.otp ||
      ""
    );
  };

  const getHe = async () => {
    try {
      const response = await getHeApi();
      if (response?.status === 200 && response?.data) {
        const heNumber = String(response.data);
        console.log("number is ::", heNumber);
        setNumber(heNumber);
        userSendOtp(heNumber, true);
      }
    } catch (error) {
      console.log("error is ::", error);
    }
  };

  useEffect(() => {
    if (decryptedMsisdn) {
      const headerNumber = String(decryptedMsisdn);
      setNumber(headerNumber);
      userSendOtp(headerNumber, true);
    } else {
      getHe();
    }
  }, []);

  useEffect(() => {
    if (!isOtp || isCongrats || otp.length !== 4 || autoVerifyTriggered) {
      return;
    }

    const timer = setTimeout(() => {
      setAutoVerifyTriggered(true);
      userVerifyOtp(number, otp);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [autoVerifyTriggered, isCongrats, isOtp, number, otp]);


  const sendUfoneOtp = async (body) => {
    // const timeout = new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve({
    //       status: true,
    //       code: 200,
    //       message: "OTP sent successfully",
    //       network_type: 1,
    //       operator: "Ufone",
    //     }); // Default values
    //   }, 1000)
    // );

    // const apiCall = (async () => {
    try {
      const response = await fetch(`https://api.jazzkidjo.com/sendOTPUfone`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: "Basic S2lkam9QUk9EQVBJczoxMjNAS2lkam9QUk9E",
          // body: JSON.stringify(body),
        },
        body: JSON.stringify(body),
      });

      return response.json();
    } catch (error) {
      console.log("send otp api error is :::", error);
    }
    // })();

    // Use Promise.race to return the first response between the API call and the timeout
    // return Promise.race([apiCall, timeout]);
  };

  // console.log("headers object are :::", headers);
  const userSendOtp = async (number, isAutoFlow = false) => {
    let numberLength = number.startsWith("92")
      ? 12
      : number.startsWith("03")
        ? 11
        : number.startsWith("3")
          ? 10
          : 12;
    setError("");
    setLoading(true);
    setSendDisabled(true);

    if (!isTermsChecked) {
      setError("Please accept Terms and Conditions");
      setLoading(false);
      setSendDisabled(false);
    } else if (number === "") {
      setError("Please Enter Your Number");
      setLoading(false);
      setSendDisabled(false);
    } else if (number.length < numberLength) {
      setError("Please Enter Complete Number");
      setLoading(false);
      setSendDisabled(false);
    
    } else {
      let body = {
        msisdn: number,
        companyName: "web",
        package_id: 1,
      };

      try {
        const sendOtpResponse = await sendOtp(body);
        console.log("send otp response is :::", sendOtpResponse);
        if (sendOtpResponse?.success || sendOtpResponse?.code === 200) {
          setIsOtp(true);
          setAutoVerifyTriggered(false);
          setLoading(false);
          setNetwork(sendOtpResponse?.network_type === 1 ? "Prepaid" : "");
          setSendDisabled(false);
          setOtpTimer(60);
          setResendStatus(false);
          setError("");
          setSendOtpToken(sendOtpResponse?.token || "");
          const returnedOtp = getOtpFromResponse(sendOtpResponse);
          if (returnedOtp) {
            setOtp(String(returnedOtp).slice(0, 4));
          } else if (!isAutoFlow) {
            setOtp("");
          }
          console.log("marketing send otp response is :::", sendOtpResponse);
        } else if (!sendOtpResponse) {
          setError("Unable to send OTP");
          setLoading(false);
          setSendDisabled(false);
        } else {
          console.log("hello world awais");
          if (sendOtpResponse.message === "Only for Ufone users!") {
            setError(sendOtpResponse.message);
            setLoading(false);
            setSendDisabled(false);
          } else if (
            sendOtpResponse.message === "Only for Ufone Prepaid users!"
          ) {
            setError("Service Unavailable");
            setLoading(false);
            setSendDisabled(false);
          } else {
            setError(sendOtpResponse.message=== "Already subscribed");
            setError(sendOtpResponse.message);
            setLoading(false);
            // setTimeout(() => {
            //   window.location.href = "https://account.kidjo.tv/login";
            // }, 1000);
            setSendDisabled(false);
          }
        }
      } catch (error) {
        console.log("error is :::", error);
        setError("Unable to send OTP");
        setLoading(false);
        setSendDisabled(false);
      }
    }
  };

  console.log("ref is :::", ref);

  const userVerifyOtp = async (number, otp) => {
    setAutoVerifyTriggered(true);
    setLoading(true);
    setVerifyDisabled(true);
    if (otp.length < 4) {
      setError("Please Enter the full Otp");
      setLoading(false);
      setVerifyDisabled(false);
    } else if (otp === "") {
      setError("Please Enter Your Otp");
      setLoading(false);
      setVerifyDisabled(false);
    }  else {
      let body = {
        number: number,
        otp: otp,
        // token: sendOtpToken,
        package_id: 1 ,
          // packages === "monthly"
          //   ? "3"
          //   : packageName === "daily"
          //     ? "1"
          //     : packageName === "monthly"
          //       ? "3"
          //       : "1",
        // method: "web",
        // networkType: network,
        // channel: ref,
      };
      console.log("verify otp body is :::", body);
      try {
        const response = await verifyOtp(body);
        console.log("verify otp response is :::", response);
        if (response.code === 200) {
          // setIsCongrats(true);
          // setUsername(response.data.username);
          // setPassword(response.data.password);
          //   setTimeout(() => {
          setIsCongrats(true);
          setLoading(false);
          if (ref === "tiktok") {
            window.ttq?.track("Subscribe");
          } else if (ref === "inhousegoogle") {
            gtag("event", "conversion", {
              send_to: "AW-17559523591/UobSCKv21cUbEIeihLVB",
            });
          }
          //   }, 500);
          setError("");
          setVerifyDisabled(false);
        } else {
          setError(response.message);
          setLoading(false);
          setVerifyDisabled(false);
        }
      } catch (error) {
        console.log("error is :::", error);
      }
    }
  };

  const Loader = () => {
    return (
      <div
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  };

  return (
    <>
      <div
        className={`w-full rounded-[26px] bg-[#f5f7ee] xs:bg-white  p-5 shadow-sm md:rounded-[34px] md:p-9 ${
          isCongrats ? "items-start" : "items-center"
        }`}
      >
        {isCongrats ? (
          <>
            <div className="mx-auto w-full max-w-[380px] pt-2 ">
              <h2 className="text-center text-[24px] font-semibold leading-tight text-[#2d3940] md:text-[28px]">
                Congratulations!
              </h2>
              <p className="mt-3 text-center text-[14px] leading-6 text-[#8d959b] md:text-base">
                You&apos;ve successfully subscribed with Ersaal Pro
              </p>
            </div>
            <Image
              src={CongratsBox}
              width={220}
              height={220}
              className="mx-auto  h-auto w-[100px] object-contain  md:w-[120px] mt-6"
              alt="congratulations"
            />
            <Link
              href={"https://account.kidjo.tv/login"}
              className="mt-10 flex h-12 w-full items-center justify-center rounded-[10px] bg-[#9dd61a] text-xl font-semibold text-[#22350e] transition hover:brightness-95"
            >
              Continue
            </Link>
          </>
        ) : (
          <>
            {isOtp ? (
              <>
                <div className="mx-auto w-full max-w-[370px] pt-4 md:pt-6">
                  <h2 className="text-center text-[24px] font-semibold leading-tight text-[#2d3940] md:text-[28px]">
                    Verify Your Number
                  </h2>
                  <p className="mx-auto mt-3 max-w-[280px] text-center text-[15px] leading-6 text-[#5d6970]">
                    Please enter the 4-digit code sent to{" "}
                    {formatDisplayNumber(number)}.
                  </p>

                  <div className="mt-10 w-full">
                    <p className="text-center text-[15px] text-[#5d6970] md:text-base">
                      Enter <span className="font-semibold text-[#ff5b7f]">OTP</span>{" "}
                      sent to your number
                    </p>
                    <input
                      id={"otp-input"}
                      disabled={isOtp ? false : true}
                      value={otp}
                      type="number"
                      onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (
                          e.target.value === "" ||
                          (regex.test(e.target.value) &&
                            e.target.value.length <= 4)
                        ) {
                          setOtp(e.target.value.slice(0, 4));
                        }
                      }}
                      className="sr-only"
                      placeholder="XXXX"
                    />
                    <label
                      htmlFor="otp-input"
                      className="mt-5 flex cursor-text justify-center gap-3"
                    >
                      {[0, 1, 2, 3].map((index) => (
                        <span
                          key={index}
                          className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#d7dce0] bg-white text-xl font-medium text-[#81858a] shadow-[0_2px_8px_rgba(20,20,20,0.05)]"
                        >
                          {otp[index] || "-"}
                        </span>
                      ))}
                    </label>
                  </div>

                  {resendStatus ? (
                    <p className="mt-4 w-full text-center text-[12px] font-medium text-[#5f5f67]">
                      Did not get a code?{" "}
                      <button
                        onClick={() => userSendOtp(number)}
                        className="font-bold text-[#ff4770]"
                      >
                        Resend code
                      </button>
                    </p>
                  ) : (
                    <p className="mt-4 w-full text-center text-[12px] font-medium text-[#7b8085]">
                      The OTP will expire in{" "}
                      <span className="text-[#ff4770]">{otpTimer}sec</span>
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center text-[24px] font-semibold text-[#2d3940]">
                  Subscribe Now
                </h2>
                <p className="mt-1 text-center text-base text-[#5d6970]">
                  Enjoy Zong&apos;s Premium Offers
                </p>

                <div className="mt-6 rounded-[12px] bg-white xs:bg-[#F9FBF4] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center border-r border-[#f06f87] pr-3 text-lg text-[#4a565d]">
                      +92
                    </span>
                    <input
                      id={"number-input"}
                      onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        let numberLength = e.target.value.startsWith("92")
                          ? 12
                          : e.target.value.startsWith("03")
                            ? 11
                            : e.target.value.startsWith("3")
                              ? 10
                              : 12;
                        if (
                          e.target.value === "" ||
                          (regex.test(e.target.value) &&
                            e.target.value.length <= numberLength)
                        ) {
                          setNumber(e.target.value.slice(0, numberLength));
                        }
                      }}
                      value={number}
                      className="min-w-0 flex-1 bg-transparent text-lg tracking-wide text-[#4a565d] outline-none placeholder:text-[#9aa3a8]"
                      placeholder="3XXXXXXXXX"
                    />
                    <span className="ml-auto">
                      <Image
                        src="/zonglogo.svg"
                        width={80}
                        height={80}
                        alt="zongLogoInline"
                        className="inline-block h-auto w-20"
                      />
                    </span>
                  </div>
                </div>
              </>
            )}
            <p className="mt-2 w-full text-center text-xs font-medium text-red-600">
              {error}
            </p>
            {isOtp ? (
              <button
                id={"verify-otp-button"}
                disabled={verifyDisabled}
                onClick={() => userVerifyOtp(number, otp)}
                className="mt-7 h-12 w-full rounded-[10px] bg-[#9dd61a] text-xl font-semibold text-[#22350e] transition hover:brightness-95"
              >
                {loading ? <Loader /> : "Verify"}
              </button>
            ) : (
              <button
                id={"send-otp-button"}
                disabled={sendDisabled}
                onClick={() => userSendOtp(number)}
                className="mt-6 h-12 w-full rounded-[10px] bg-[#9dd61a] text-xl font-semibold text-[#22350e] transition hover:brightness-95"
              >
                {loading ? <Loader /> : "Submit"}
              </button>
            )}

            {!isOtp ? (
              <label className="mt-5 flex items-center justify-center gap-2 text-sm text-[#5d6970]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-[#c5c5c5]"
                  checked={isTermsChecked}
                  onChange={(e) => {
                    setIsTermsChecked(e.target.checked);
                    if (e.target.checked) {
                      setError("");
                    }
                  }}
                />
                <span>
                  I agree to{" "}
                  <Link
                    href={"/terms"}
                    target="_blank"
                    className="font-medium text-[#ff4770]"
                  >
                    Terms and Conditions.
                  </Link>
                </span>
              </label>
            ) : null}

            <p className="mt-7 text-center text-[20px] font-semibold text-[#2d3940]">
             Daily Plan
            </p>
            <p className="mt-4 text-center text-[12px]  text-[#A6A6A6]">Subscription charges: In Just Rs. 4/Day (Incl.Tax)</p>
          </>
        )}
      </div>
     
        
      
    </>
  );
};

export default UfoneLptMarketingInputAndOtp;
