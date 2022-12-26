import { pb } from "../PocketBase";
import { AppState } from "../AppState";
import { generateId } from "../utils/Helper";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";
import { Upload } from "../models/Upload";

class PocketBaseService {
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
      const createdFile = await this.createFile(formData);
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
      return file;
    } catch (error) {
      Pop.error(e, "please contact an admin");
    }
  }
  async getPastRetreats() {
    const res = await pb.collection("aug22Retreat").getFullList();
    // let urls=[]
    // AppState.aug22RetreatImages= res
    res.forEach((r) => AppState.aug22RetreatImages.push(r.url));
    // console.log(res);
    logger.log(AppState.aug22RetreatImages);
  }
  async createCollection() {
    const hi = AppState.admin;
    const collection = await pb.collections.getOne("aug22Retreat");
    const newCollection = await pb.collections.create({
      name: "aug25Retreat",
      type: collection.type,
      schema: collection.schema,
    });
    logger.log(newCollection);
  }
  async transferToMongo() {
    // let imgs = []
    const yes = await Pop.confirm();
    if (!yes) {
      return;
    } else {
      return;
    }
    const collections = await pb.collections.getList();
    // console.log(collections);
    for await (const collection of collections.items) {
      const images = await pb.collection(`${collection.name}`).getFullList();
      for await (const image of images) {
        let data = new Upload(image);
        const res = await api.post("/api/uploads", data);
        console.log(res.data);
      }
      // imgs.push(imgs?.url)
    }
    // logger.log(imgs)
  }
}
export const pocketBaseService = new PocketBaseService();
