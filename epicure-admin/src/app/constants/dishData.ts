import { IconMeaning } from "../interface/dish.interface";

export const columns: string[] = ['_id', 'title', 'image', 'price', 'ingredients', 'tag', 'isSignature', 'restaurant', 'actions'];

export const columnDefs = {
  _id: 'ID',
  title: 'Title',
  image: 'Image',
  price: 'Price',
  ingredients: 'Ingredients',
  tag: 'Tag',
  isSignature: 'IsSignature',
  restaurant: 'Restaurant',
  actions: 'Actions'
};

export const columnTypes = {
  title: 'text',
  image: 'text',
  restaurant: 'dropdown',
  tag: 'dropdown',
  price: 'number',
  ingredients: 'text',
  isSignature: 'slideToggle',
};

const tagOptions = [
  { value: IconMeaning.SPICY, viewValue: "Spicy" },
  { value: IconMeaning.VEGAN, viewValue: "Vegan" },
  { value: IconMeaning.VEGI, viewValue: "Vegi" },
];

export const columnDropdown: {
  tagOptions: {
    value: string;
    viewValue: string;
  }[];
  restaurant: {
    value: string;
    viewValue: string;
  }[];
} = {
  tagOptions: [],
  restaurant: []
};