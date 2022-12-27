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
    const record = await pb.collection("images").getFullList();
    logger.log(record);
  }

  async uploadFile(e) {
    // const imgs = [];
    const files = Array.from(e.target.files);
    AppState.loading = files.length
    //  console.log(files);
    //     let hi = await this.compressImages(files, imgs)
    //   console.log(hi);
    for await (const file of files) {
      let formData = new FormData();
      // console.log(file.size);
      let compressed = await this.compress(file);
      // console.log(compressed.size);

        formData.append("file", compressed);
        const createdFile = await this.createFile(formData);
        // console.log(createdFile);
        const url = await pb.getFileUrl(createdFile, createdFile.file);
        // console.log(url);
        const getLastFile = await pb
          .collection("aug22Retreat")
          .update(createdFile.id, { url });
          logger.log({uncompressed: (file.size/100000) + "mb", compressed: (compressed.size/1000) + "kb", url})
        AppState.uploadedImgs.push(url);
        AppState.loading--
    }
    // logger.log(imgs);
    // return imgs;
  }
  async compress(file) {
    let hi = null;
    await new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: .2,
        success(result) {
          hi = result;
          resolve();
        },
      });
    });
    return hi;
  }

  async createFile(formData) {
    try {
      const file = await pb.collection("aug22Retreat").create(formData);
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
