export type FleetShipStatus = 'stored' | 'in_service' | 'in_repair'

export interface FleetShipRecord {
  id: string
  shipCode: string
  vehicleName: string
  infoLabel: string
  locationLabel: string
  statusLabel: FleetShipStatus
  focusLabel: string
  cargo: number
  crew: number
  isTracked: boolean
}
