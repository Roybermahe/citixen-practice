import { colorTap } from "../types/colorTap.type";

export interface task {
    title: string;
    description: string;
    color: colorTap;
    state: boolean; // true => Completed, False => Created
}