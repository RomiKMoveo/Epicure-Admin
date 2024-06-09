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
  dishes: 'multipleSelection',
  restaurants: 'multipleSelection',
  chefOfTheWeek: 'slideToggle'
};

const restaurantsOptions = [
  { value: 1, viewValue: "1" },
  { value: 2, viewValue: "2" },
  { value: 3, viewValue: "3" },
]

export const columnDropdown = {
  restaurants: restaurantsOptions,


}