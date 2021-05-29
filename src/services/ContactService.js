const axios = require("axios");

export async function sendMessage(payload) {
  //turn on timeout when u get famous and people want to contact you.
  //   timeout(
  //     5000,
  let responseStatus;
  console.log(payload);
  await axios
    .post("https://louislisingnodemail.azurewebsites.net/contact", {
      payload,
    })
    //   )
    .then((response) => {
      responseStatus = response.status;
    })
    .catch((error) => {
      throw error;
    });

  if (responseStatus === 200) {
    return true;
  }
  return false;
}

//This is my own implementation of a timeout for requests.
//but dont use because azure goes to sleep.
// function timeout(ms, promise) {
//   return new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//       reject(new Error("TIMEOUT"));
//     }, ms);
//     promise
//       .then((value) => {
//         clearTimeout(timer);
//         resolve(value);
//       })
//       .catch((reason) => {
//         clearTimeout(timer);
//         reject(reason);
//       });
//   });
// }
