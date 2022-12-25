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
    console.log(files);
  }
}
export const pocketBaseService = new PocketBaseService();
