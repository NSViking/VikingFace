export class CurriculumData {
  filename: string;
  data: Blob

  constructor(name: string, dataObject: Blob) {
    this.filename = name;
    this.data = dataObject;
  }
}
