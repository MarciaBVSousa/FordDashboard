export interface VeiculosData extends Array<VeiculoData> {
  vin: string
}

export interface VeiculoData{
  id: number | string
  vin: string
  odometer: number | string
  tirePressure: string
  status: string
  batteryStatus: string
  fuelLevel: number | string
  lat: number
  long: number
}

export interface VeiculosDataAPI {
  vehicleData: VeiculosData;
}
