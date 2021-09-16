export abstract class Unit {
  public mb_status = false;
  public image: HTMLImageElement | undefined;

  constructor(
    public pos_x: number,
    public pos_y: number,
    public owner: number,
    public vehicleID: number
  ) {}

  updateImage(): void {
    try {
      this.image = new Image();
      let imageData;
      if (this.vehicleID === 56)
        imageData = require('../resources/img/res.png');
      else if (
        this.vehicleID === 59 ||
        this.vehicleID === 57 ||
        this.vehicleID === 176 ||
        this.vehicleID === 177
      )
        imageData = require('../resources/img/Ghor.png');
      else if (this.vehicleID === 60 || this.vehicleID === 178)
        imageData = require('../resources/img/Taer.png');
      else if (this.vehicleID === 58)
        imageData = require('../resources/img/Myko.png');
      else if (this.vehicleID === 61)
        imageData = require('../resources/img/Sulg.png');
      else if (this.vehicleID === 62)
        imageData = require('../resources/img/Blacksect.png');
      else if (this.vehicleID === 132)
        imageData = require('../resources/img/Training.png');

      this.image.src = imageData.default;
    } catch (ex) {
      console.dir('image could not be loaded');
    }
  }
}
