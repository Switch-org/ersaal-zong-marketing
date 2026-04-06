const url = "http://nodezong.ersaal.pk";


export const getPackages = async () => {
  try {
    const response = await fetch(`${url}/getPackages`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Basic S2lkam9QUk9EQVBJczoxMjNAS2lkam9QUk9E",
      },
      // body: JSON.stringify(body),
      // cache:"no-store",
    });

    return response.json();
  } catch (error) {
    console.log("Packages api error is :::", error);
  }
};

export const networkCheck = async (body) => {
  try {
    let response = await fetch(`${url}/checkNetworkAndStatus?msisdn=${body.msisdn}`, {      
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
         Authorization: "Basic S2lkam9QUk9EQVBJczoxMjNAS2lkam9QUk9E",
      },
    
    });
    return response.json();
  } catch (error) {
    console.log("error is :::", error);
  }
};

export const verifyOtp = async (body) => {
  try {
    let response = await fetch(`${url}/verify-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Basic S2lkam9QUk9EQVBJczoxMjNAS2lkam9QUk9E",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  } catch (error) {
    console.log("verify otp api error is :::", error);
  }
};

export const sendOtp = async (body) => {
  try {
    const response = await fetch(`${url}/subscriberFromLandingPage`, {
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
};

export const getHeApi = async () => {
  try {
    let response = await fetch(
      "http://fitflexapp.com/api/get_head_enrichment.php",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log("error is :::", error);
  }
};