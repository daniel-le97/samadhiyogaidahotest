import { pb } from "../PocketBase";
import { AppState } from "../AppState";
import { generateId } from "../utils/Helper";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";
import { Upload } from "../models/Upload";
import Compressor from "compressorjs";

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

  async uploadFile(e) {
    const files = Array.from(e.target.files);
    AppState.loading = files.length;
    for await (const file of files) {
      let formData = new FormData();
      let compressed = await this.compress(file);
      formData.append("file", compressed);
      const createdFile = await this.createFile(formData, "aug22Retreat");
      const url = await pb.getFileUrl(createdFile, createdFile.file, {thumb: "500x500",});
      const getLastFile = await pb.collection("aug22Retreat").update(createdFile.id, { url });
      logger.log({uncompressed: file.size / 1000000 + "mb",compressed: compressed.size / 1000 + "kb",url,});
      AppState.uploadedImgs.push(url);
      AppState.loading--;
    }
  }
  /**
   * 
   * @param {File | Blob} file 
   * @returns a compressed file
   */
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
  async createFile(formData, collection) {
    try {
      const file = await pb.collection(collection).create(formData);
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
  async createCollection() {
    const hi = AppState.admin;
    const collection = await pb.collections.getOne("aug22Retreat");
    const newCollection = await pb.collections.create({
      name: "aug25Retreat",
      type: collection.type,
      schema: collection.schema,
    });
  }
  async transferToMongo() {
    const collections = await pb.collections.getList();
    for await (const collection of collections.items) {
      const images = await pb.collection(`${collection.name}`).getFullList();
      for await (const image of images) {
        let data = new Upload(image);
        const res = await api.post("/api/uploads", data);
        console.log(res.data);
      }
    }
  }
}
export const pocketBaseService = new PocketBaseService();
