export class Unit {
  public mb_status: boolean;

  constructor(
    public X: number,
    public Y: number,
    public own: number,
    public vehicleID: number
  ) {
    this.mb_status = true;
  }
}
