import Image from "next/image";
import React, { useState, useEffect } from "react";
import JazzLogo from "../../../public/images/jazzlogo.webp";
import FitflexLogo from "../../../public/images/FitflexLogo.svg";
import BusuuLogo from "../../../public/images/BusuuLogo.webp";
import JazzDriveLogo from "../../../public/images/jazzDrive.svg";
import { crossProductMarketingApi } from "../apis/requests";

const Modal = (props) => {
  const [crossProductData, setCrossProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    const crossProduct = async () => {
      const response = await crossProductMarketingApi();
      console.log("first response is :;;", response);
      if (response.status === 200) {
        console.log("response is :::", response);
        setCrossProductData(response.data);
        setLoading(false);
      }
    };
    props.crossProduct === true && crossProduct();
  }, []);

  const { title, terms, close } = props;
  console.log("terms are :::", terms);

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


  useEffect(() => {
    let timer;
    if ((props.isopen === true || props.isopen === "true") && terms === "") {
      timer = setTimeout(() => {
        window.location.href = "https://jazzkidjo.com/";
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [props.isopen, terms]);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-[90%]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center items-center w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 id="confirmation-title" className="text-2xl font-semibold">
                {title}
              </h3>
            </div>
            {/*body*/}
            {terms === "" ? (
              <>
                <div className="relative p-6 flex-auto">
                  <p
                    id="confirmation-text"
                    className="my-4 text-blueGray-500 text-base text-center leading-relaxed"
                  >
                    Your request for subscription has been received. You will
                    receive a confirmation message soon.
                  </p>
                </div>
                {props.crossProduct === true && loading ? (
                  <Loader />
                ) : (
                  crossProductData.length > 0 && (
                    <div
                      className="flex flex-row justify-between cursor-pointer items-center w-[80%] p-4 border-[1px] border-[#707070] rounded-[9px] xs:flex-col xs:justify-center"
                      onClick={() => {
                        window.location.href = crossProductData[0].link;
                      }}
                    >
                      <div className="flex flex-row justify-around items-center w-[30%] xs:justify-center xs:mb-2">
                        <Image
                          src={
                            crossProductData[0].name === "Busuu"
                              ? BusuuLogo
                              : crossProductData[0].name === "Fitflex"
                              ? FitflexLogo
                              : crossProductData[0].name === "Jazzdrive"
                              ? JazzDriveLogo
                              : ""
                          }
                          width={60}
                          height={40}
                          alt="productLogo"
                        />
                        <div className="h-[50px] border-[1px] border-[#E9E9E9] font-manrope xs:mr-2 xs:h-[70px] xs:ml-2"></div>
                        <Image
                          src={JazzLogo}
                          width={60}
                          height={40}
                          alt="productLogo"
                        />
                      </div>
                      <div className="flex flex-col justify-between items-start w-[65%] font-manrope xs:w-[100%] text-center">
                        <p className="font-[700] text-[18px] text-center xs:w-[100%]">
                          {crossProductData[0].title}
                        </p>
                        <p className="text-[14px]">
                          {crossProductData[0].descriptions}
                        </p>
                        <button className="text-[#116EEE] text-[12px] xs:text-center xs:mt-2 xs:w-[100%]">
                          Click here
                        </button>
                      </div>
                    </div>
                  )
                )}
              </>
            ) : (
              <div className="relative p-6 flex-auto">
                {terms.map((item, index) => {
                  return (
                    <>
                      <ul className="list-disc px-6">
                        <li className="my-4 text-blueGray-500 text-sm leading-relaxed">
                          {item}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                id="confirmation-btn"
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.close}
                // onClick={() => {
                //   props.operator === "ufone"
                //     ? setTimeout(() => {
                //         window.location.href = "https://account.kidjo.tv/login";
                //       }, 2500)
                //     : setTimeout(() => {
                //         window.location.href = "https://account.kidjo.tv/login";
                //       }, 2500),
                //     close();
                // }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
