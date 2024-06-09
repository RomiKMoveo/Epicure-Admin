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
  restaurants: 'multipleSelection',
  chefOfTheWeek: 'slideToggle'
};

export const columnDropdown: {
  restaurants: {
    value: string;
    viewValue: string;
  }[];
} = {
  restaurants: []
};