import { googleAPI } from "./AxiosService.js"

class YoutubeService{
async getPlayList(){
const res = await googleAPI.get("channels", {
  params: {
    forUsername: "Samadhiyogaidaho"
  },
});
     console.log('[youtubeplaylist]',res.data);

}
}
export const youtubeService = new YoutubeService()