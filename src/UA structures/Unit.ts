import UAdata from '../UAdata.json';

export abstract class Unit {
  public mb_status = false;
  public image: HTMLImageElement | undefined;

  constructor(
    public pos_x: number,
    public pos_y: number,
    public owner: number,
    public vehicleID: number
  ) { }

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
      else {
        let unitData;
        for (let unit of UAdata.original.resistance.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }
        for (let unit of UAdata.original.ghorkov.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }
        for (let unit of UAdata.original.taerkasten.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }
        for (let unit of UAdata.original.mykonian.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }
        for (let unit of UAdata.original.sulgogar.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }
        for (let unit of UAdata.original.training.units) {
          if (this.vehicleID === unit.id) unitData = unit;
        }

        switch (this.owner) {
          case 1:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/BlueUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/BlueUnit1.png`);
            break;
          case 2:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/GreenUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/GreenUnit1.png`);
            break;
          case 3:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/WhiteUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/WhiteUnit1.png`);
            break;
          case 4:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/YellowUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/YellowUnit1.png`);
            break;
          case 5:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/GrayUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/GrayUnit1.png`);
            break;
          case 6:
            imageData =
              unitData && unitData.mapIcon
                ? require(`../resources/img/RedUnit${unitData.mapIcon}.png`)
                : require(`../resources/img/RedUnit1.png`);
            break;
          case 7:
            imageData = require(`../resources/img/TrainingUnit.png`);
            break;
        }
      }

      this.image.src = imageData;
      this.image.draggable = true;
    } catch (ex) {
      console.error('image could not be loaded');
    }
  }
}
