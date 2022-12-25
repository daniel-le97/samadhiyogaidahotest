import { pop } from "@vueuse/motion";
import { pb } from "../../lib/pocketBase";
import { AppState } from "../AppState";
import { generateId } from "../utils/Helper";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

class PocketBaseService {


  async getCollections(){
    const collections = await pb.collections.
  }
  async getFiles() {
    const record = await pb.collection("images").getFullList();
    logger.log(record);
  }

  async uploadFile(e) {
    const imgs = [];
    const files = Array.from(e.target.files);
    // console.log(files);

    // hi
    for await (const file of files) {
      let formData = new FormData();
      formData.append("file", file);
      const createdFile = await this.createFile(formData)
      const url = await pb.getFileUrl(createdFile, createdFile.file);
      const getLastFile = await pb
        .collection("images")
        .update(createdFile.id, { url });
      imgs.push(url);
    }
    logger.log(imgs);
    return imgs;
  }
  async createFile(formData) {
    try {
      const file = await pb.collection("images").create(formData);
      return file
    } catch (error) {
      Pop.error(e, "please contact an admin");
    }
  }
  async getPastRetreats() {
    const res = await pb.collection("images").getFullList();
  }
  async transferToMongo(){
    const files = await pb.collection("images").getFullList(200)

    console.log(res);
    return await this.createCollection()
  }
  async createCollection(){
   const collection = await pb.admins.authWithPassword(
      "daniel97.le@gmail.com",
      "2MSOBk4SXEY4yYuhsxuQ3atZiVSaShtE"
    );
    // const collection = await pb.collections.getOne("aug22Retreat")
    console.log(collection);
  }
}
export const pocketBaseService = new PocketBaseService();
