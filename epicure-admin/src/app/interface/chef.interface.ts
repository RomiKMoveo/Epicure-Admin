import { IRestaurant } from "./restaurant.interface";

export interface IChef extends Document {
    _id: string;
    title: string;
    image: string;
    description: string;
    restaurants?: IRestaurant[];
    chefOfTheWeek: boolean;
  }
  