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
export const instagramAPI = Axios.create({
  baseURL: " https://graph.instagram.com/",
  timeout: 8000,
  params: {
    access_token:
      "EAAM6LP8nbfgBANgHgWrZC9Mz7uWe5vERNKLqLEUIq8xs1NcpLNQZCWu35AQM1hHrshtm3Bf6ZCJzK4hoqSYtAmZAfeyBYrGgjRZC1aSr5txirP3nPaD8vGDJG3Jh0uVnKH0cgWdnvpZBCOqAjJPxFEUnN4yI0SPt663eZBQqD6gZC9FjAgzQvdBEVjIRifpZAl46NAy9EKj2MIQZDZD",
  },
});

export const ghostAPI = Axios.create({
  baseURL: "https://blogs.samadhiyogaidaho.com/members/",
  timeout:8000,
  params:{

  }
});