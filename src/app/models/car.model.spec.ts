export interface Job {
  key?: string | null;
  brand?: string;
  model?: string;
  trim?:string;
  year?: number;
  country?: string;
  manufactureLocation?:string;
  cc?:number;
  hp?:number;
  hpAt?:number;
  torque?:number;
  torqueAt?:number;
  cylinders?:number;
  cylinderArrangement?:string;
  fuel?:string;
  fuelQuality?:string;
  transmissionType?:string;
  transmissionGears?:number;
  intake?:string;
  mpgCity?:number;
  mpgHighway?:number;
  traction?:string;
  fuelTankCapacity?:number;
  curbWeight?:number;
  length?:number;
  carType?:string; //bike, kei, compact, sedan, hatchback, suv, truck, minivan, bus
  bodyType?:string; //coupe, sedan
  isSport?:boolean;
  problems?:Array<any>;
  recalls?:Array<any>;
  options?:Array<any>; //heated seats, 
  msrp?:number;
  doors?:number;
  reliabilityScore?:number; //4.5
  safetyScore?:number;
  totalAirbags?:number;
  isFamilyCar?:boolean;
  totalSeats?:number; //5
  description?:string; //brief history of the car
  abs?:boolean;
  infotainment?:string; //android auto, apple carplay
  navigation?:boolean;
  paddleShifts?:boolean;
  triptonic?:boolean;
  headlights?:string;
  hud?:boolean;
}