// Consts and helpers functions

// WordPress site URL
const WP_URL =
  'https://hackathonkarenandbrezo.wpcomstaging.com/wp-json/wp/v2/rescue_me_dogs?_embed';
// Metadata
//TODO: Convert Array into array of objects to add display name for meta
export const FILTERS = [
  // { name: 'good_with',
  //   values: ['dogs', 'cats','kids'],
  // },
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
export default WP_URL;
