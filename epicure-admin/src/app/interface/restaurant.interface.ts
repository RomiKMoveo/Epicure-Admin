import { IChef } from "./chef.interface";
import { IDish } from "./dish.interface";


export interface IRestaurant extends Document {
    _id: string;
    title: string;
    image: string;
    stars: number;
    chef: IChef;
    dishes: IDish[];
    isPopular: boolean;
  }
  
  