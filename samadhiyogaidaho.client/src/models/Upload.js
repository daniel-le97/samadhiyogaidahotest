export class Upload {
  constructor(data) {
    this.pocketId = data.id,
    this.pocketCollectionId = data.collectionId,
    this.url = data.url,
    this.name = data.collectionName
  }
}
