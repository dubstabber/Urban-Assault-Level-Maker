import { Unit } from './Unit';

export class Hoststation extends Unit {
  public pos_z = 300;
  public energy = 800;
  public view_angle: number | null = null;
  public reload_const: number | null = null;
  public con_budget = 30;
  public con_delay = 0;
  public def_budget = 90;
  public def_delay = 0;
  public rec_budget = 80;
  public rec_delay = 0;
  public rob_budget = 100;
  public rob_delay = 0;
  public pow_budget = 50;
  public pow_delay = 0;
  public rad_budget = 30;
  public rad_delay = 0;
  public saf_budget = 50;
  public saf_delay = 0;
  public cpl_budget = 100;
  public cpl_delay = 0;
}
