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
    this.image = new Image(width, height);
    if (this.vehicleID === 56) this.image.src = '../resources/img/res.png';
  }
}
