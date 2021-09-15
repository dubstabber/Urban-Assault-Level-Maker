export abstract class Unit {
  public mb_status = false;
  public image: HTMLImageElement | undefined;

  constructor(
    public pos_x: number,
    public pos_y: number,
    public owner: number,
    public vehicleID: number
  ) {}

  updateImage(width: number, height: number): void {
    try {
      this.image = new Image(width, height);
      let imageData;
      if (this.vehicleID === 56)
        imageData = require('../resources/img/res.png');

      this.image.src = imageData.default;
    } catch (ex) {
      console.dir('image could not be loaded');
    }
  }
}
