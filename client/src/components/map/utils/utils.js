import axios from "axios";

async function getCityCoords() {
  try {
    let response = await axios.get("https://ipapi.co/json/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getCityCoords;
