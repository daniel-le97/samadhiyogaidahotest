import {pb} from "../../lib/pocketBase"
import { generateId } from "../utils/Helper";
import { logger } from "../utils/Logger"

class PocketBaseService {
  async getFiles() {
    const record = await pb.collection("images").getFullList();
    logger.log(record);
  }

  async uploadFile(e) {
    const imgs = [];
    const files = Array.from(e.target.files);
    // console.log(files);
    for await(const file of files) {
      let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e =>{
      imgs.push(e)
    }
  }
  console.log(imgs);

    // for await (const file of files) {
    //   let formData = new FormData()
    //   formData.append("file", file)
    //   const createdFile = await pb.collection('images').create(formData)
    //   const url = await pb.getFileUrl(createdFile, createdFile.file)
    //   const getLastFile = await pb.collection("images").update(createdFile.id, {url})
    //   imgs.push(url);
    // }
    // // await pb.collection("images").subscribe("*",function(data))
    // logger.log(imgs)
    // return imgs;
  }

  async getPastRetreats() {
    const res = await pb.collection("images").getFullList();
  }
}
export const pocketBaseService = new PocketBaseService()