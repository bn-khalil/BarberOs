import { SLOT_STATUS } from "appointment/appointment.enum";

export class Slot {
    barberId: string;
    day: string;
    slotStart: string;
    slotEnds: string;
    status: SLOT_STATUS;
}