import { type Room, type Prisma, type AirConditioner } from '@prisma/client'

export interface RoomRepository {
  getRooms: () => Promise<Room[]>
  createRoom: (room: Prisma.RoomCreateInput) => Promise<Room>
  addAirConditionerToRoom: (roomId: number, airConditioner: Prisma.AirConditionerCreateInput) => Promise<AirConditioner>
  getAirConditionersFromRoom: (roomId: number) => Promise<AirConditioner[]>
}
