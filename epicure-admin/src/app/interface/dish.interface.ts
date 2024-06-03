import { IRestaurant } from "./restaurant.interface";

export interface IDish extends Document {
    _id: string;
    title: string;
    image: string;
    price: string;
    ingredients: String;
    tag: IconMeaning,
    restaurant?: IRestaurant;
    isSignature: Boolean;
  
  }
  
  export enum IconMeaning {
    SPICY = "spicy",
    VEGI = "vegi",
    VEGAN = "vegan"
};