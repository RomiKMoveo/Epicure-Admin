export const columns: string[] = ['_id', 'title', 'image', 'stars', 'dishes', 'chef', 'isPopular', 'actions'];

export const columnDefs = {
  _id: 'ID',
  title: 'Title',
  image: 'Image',
  stars: 'Stars',
  dishes: 'Dishes',
  chef: 'Chef',
  isPopular: 'Popular',
  actions: 'Actions'
};

export const columnTypes = {
  title: 'text',
  image: 'text',
  stars: 'dropdown',
  chef: 'dropdown',
  dishes: 'multipleSelection',
  restaurant: 'dropdown',
  isPopular: 'slideToggle',
};

const starsOptions = [
  { value: 1, viewValue: "1" },
  { value: 2, viewValue: "2" },
  { value: 3, viewValue: "2" },
  { value: 4, viewValue: "3" },
  { value: 5, viewValue: "4" },

];


export const columnDropdown: {
  stars: {
    value: number;
    viewValue: string;
  }[];
  chef: {
    value: string;
    viewValue: string;
  }[];
  dishes: {
    value: string;
    viewValue: string;
  }[];
} = {
  stars: starsOptions,
  chef: [],
  dishes: [],

};
