import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-b9562.cloudfunctions.net/api", //THE API (cloud function) URL
});
//for debuging replace with this link -> http://127.0.0.1:5001/fir-b9562/us-central1/api
export default instance;
