import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const googleAPI = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 8000,
  params: {
    key: "AIzaSyDUYz0F_yueltLcFXsvVrjViiiC9JBC35Q",
  },
});