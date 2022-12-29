import { pb } from "../PocketBase";
import { AppState } from "../AppState";
import { generateId } from "../utils/Helper";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";
import { Upload } from "../models/Upload";
import Compressor from "compressorjs";
import { pop } from "@vueuse/motion";

class PocketBaseService {
  async getFiles() {
    const record = await pb.collection("aug22Retreat").getFullList();
    logger.log(record);
    let test = [];
    record.forEach((r) => {
      test.push(r.url);
    });
    console.log(test);
  }

  async uploadFile(e, collection) {
   console.log(collection.name);
    const files = Array.from(e.target.files);
    AppState.loading = files.length;
    for await (const file of files) {
      let formData = new FormData();
      let compressed = await this.compress(file);
      formData.append("file", compressed);
      const createdFile = await this.createFile(formData, collection.name);
      const url = await pb.getFileUrl(createdFile, createdFile.file, {thumb: "500x500",});
      const getLastFile = await pb.collection(collection.name).update(createdFile.id, { url });
      logger.log({uncompressed: file.size / 1000000 + "mb",compressed: compressed.size / 1000 + "kb",url,});
      AppState.uploadedImgs.push(url);
      AppState.loading--;
    }
  }
  async compress(file) {
    let compressedFile = null;
    await new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.5,
        success(newFile) {
          compressedFile = newFile;
          resolve();
        }
      });
    });
    return compressedFile;
  }
  async createFile(formData, collectionName) {
    try {
      const file = await pb.collection(collectionName).create(formData);
      return file;
    } catch (error) {
      Pop.error(error, "please contact an admin");
    }
  }
  async getPastRetreats() {
    const res = await pb.collection("aug22Retreat").getFullList();
    res.forEach((r) => AppState.aug22RetreatImages.push(r.url));
    logger.log(AppState.aug22RetreatImages);
  }
  async createCollection(name) {
    const collection = await pb.collections.getOne("default");
    const newCollection = await pb.collections.create({
      name,
      type: collection.type,
      schema: collection.schema,
    });
    AppState.collections = [...AppState.collections, newCollection]
  }
  async getCollections() {
    let collections = await (await pb.collections.getList()).items;
    collections = collections.filter(c => c.name != "users")
    logger.log(collections)
    AppState.collections = collections
  }

  async transfer(){
    let transfer = AppState.FAQS
    for (const item of transfer) {
      const res = await api.post("/api/faqs")
    }
  }
}
export const pocketBaseService = new PocketBaseService();
