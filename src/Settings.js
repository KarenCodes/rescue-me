// Consts and helpers functions

// Array with WordPress site URLS
export const WP_URLS = [
  'https://hackathonkarenandbrezo.wpcomstaging.com/wp-json/wp/v2/rescue_me_dogs?per_page=100&_embed',
  'https://hackathonkarenandbrezo.mystagingwebsite.com/wp-json/wp/v2/rescue_me_dogs?per_page=100&_embed'
];
export const DOGS_CUSTOM_POST_TYPE = `rescue_me_dogs`;
export const DOGS_FETCH_LIMIT = '?per_page=100';
export const SHELTERS = [
  {
    url: 'https://hackathonkarenandbrezo.wpcomstaging.com/',
    aboutID: 162
  },
  {
    url: 'https://hackathonkarenandbrezo.mystagingwebsite.com/',
    aboutID: 181
  }
];
// Filters to filter Dogs list. "Good with kids", "Good with cats" and "Good with dogs". These are true-false values.
export const SINGLE_FILTERS = [
  {
    label: 'Kids',
    name: 'rescue_me_meta_good_with_kids',
    values: [
      {
        label: 'Kids',
        name: true
      }
    ]
  },
  {
    label: 'Cats',
    name: 'rescue_me_meta_good_with_cats',
    values: [
      {
        label: 'Cats',
        name: true
      }
    ]
  },
  {
    label: 'Dogs',
    name: 'rescue_me_meta_good_with_dogs',
    values: [
      {
        label: 'Dogs',
        name: true
      }
    ]
  }
];
// Filters to filter Dogs list. "Gender", "Size" and "Age". They can have multiple values.
export const FILTERS = [
  {
    label: 'Gender',
    name: 'rescue_me_meta_gender',
    values: [
      {
        label: 'Male',
        name: 'Male'
      },
      {
        label: 'Female',
        name: 'Female'
      }
    ]
  },
  {
    label: 'Size',
    name: 'rescue_me_meta_size',
    values: [
      {
        label: 'Small',
        name: 'Small'
      },
      {
        label: 'Medium',
        name: 'Medium'
      },
      {
        label: 'Large',
        name: 'Large'
      },
      {
        label: 'Extra Large',
        name: 'Extra Large'
      }
    ]
  },
  {
    label: 'Age',
    name: 'rescue_me_meta_age',
    values: [
      {
        label: 'Puppy',
        name: 'Puppy'
      },
      {
        label: 'Young',
        name: 'Young'
      },
      {
        label: 'Adult',
        name: 'Adult'
      },
      {
        label: 'Senior',
        name: 'Senior'
      }
    ]
  }
];
export const shuffle = function(arr) {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
export default WP_URLS;
