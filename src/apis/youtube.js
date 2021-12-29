import axios from "axios";

const KEY = "AIzaSyCsFl5TkplWg_nTUYAWGmlBXSNloT-vN9A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
