import dynamic from "next/dynamic";
import { headers } from "next/headers";

const ZongLptMarketingShell = dynamic(
  () => import("../components/ZongLptMarketingShell"),
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




  return (
    <main className="font-sans">
      <ZongLptMarketingShell decryptedMsisdn={decryptedMsisdn} />
    </main>
  );
}

export async function genenateStaticParams(context) {
  console.log("context is ::;", context);
  return { context };
}
