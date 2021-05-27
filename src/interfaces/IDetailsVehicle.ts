export interface IDetailsVehicle {
  detail_vehicles: IVehicles[];
}

export interface IVehicles {
  device_imei: string;
  odometer: number;
  horometer: number;
  model: string;
  description_short: string;
  description_long: string;
  vehicle_use: string;
  traction: string;
  engine: string;
  vehicle_manufacturer: string;
  vehicle_engine_manufacturer: string;
  power: number;
  power_unit: string;
  torque: number;
  torque_unit: string;
  engine_displacement: number;
  tonnage: number;
  gearbox: string;
  transmission: string;
  transmission_type: string;
  axis_capacity: string;
  suspension: string;
  payload: null;
  chassis_length: null;
  emission_norm: string;
}
