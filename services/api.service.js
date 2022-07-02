// import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWether = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("Ne zadan key API, zadaite ego comand => -t [API_KEY]");
  }

  const { data, headers } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric"
      }
    }
  );
  console.log(data)
  return data;

  //   const funck2 = async() => {

  // 	  const {data, headers} = await axios.get('http://135.181.35.61:2112/auth', {
  // 		  params: {
  // 			  user: 'Ffsd'
  // 			}
  // 		})
  // 		console.log(headers, 'console.log(headers2)', headers.authorization)
  // 	}
  // 	funck2()
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lang", "ru");
  //   url.searchParams.append("units", "metric");
  //   https.get(url, (response) => {
  //     let res = "";
  //     response.on("data", (chunk) => {
  //       res += chunk;
  //     });
  //     response.on("end", () => {
  //       console.log(res);
  //     });
  //   });
};

export { getWether };
