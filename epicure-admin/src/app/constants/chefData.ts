export const columns: string[] = ['_id', 'title', 'image', 'description', 'restaurants', 'chefOfTheWeek', 'actions'];

export const columnDefs = {
_id: 'ID',
title: 'Title',
image: 'Image',
description: 'Description',
restaurants: 'Restaurants',
chefOfTheWeek: 'ChefOfTheWeek',
actions: 'Actions'
};

 export const columnTypes = {
  title: 'text',
  image: 'text',
  description: 'text',
  restaurants: 'dontInclude',
  chefOfTheWeek: 'slideToggle'
};

const chefOfTheWeekOption = [
{ value: 'true', viewValue: "yes" },
{ value: 'false', viewValue: "no" }
];
export const columnDropdown: {
  chefOfTheWeek: {
    value: string;
    viewValue: string;
  }[];
} = {
  chefOfTheWeek: chefOfTheWeekOption,
};