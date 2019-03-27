# Rescue Me App - JavaScript for WordPress Hackathon

The Rescue Me app allows several dog rescue groups to band together to get more exposure for their dogs to find them homes. By combining available rescue dogs from multiple WordPress sites, The Rescue Me app makes it easy to find a match.

You can Browse dogs available for adoption and click on any one to find out more. If you are interested in a dog, there are contact details to put you in touch.

Finding your new dog is easy with our filtered search. You can filter dogs by a variety of attributes, such as good with cats, gender, size and age.

If you need more help finding a match, use our fun matching form. Answer a few simple questions, and we will list the dogs that are a match for you.

For more info on the rescue groups participating, visit the About page

[A working demo is available to try it out](https://rescue-me.netlify.com/) or [watch our intro video](https://vimeo.com/326870015)

Data on this app is for demo purposes only and the dogs are sadly not available. Please check your local rescue groups where you can find a wonderful dog.


## How it works

Each dog rescue group has a WordPress site and uploads our [Rescue Me plugin](https://github.com/KarenCodes/rescue-me-block). They will enter information about their available dogs using a customized Gutenberg block and using a custom post type - Dogs. Metadata added via the block (ex. size, gender, etc) will be used by the Rescue Me app to filter and find matching dogs.

Our App uses React and the WordPress rest API to get the Dog information from the WordPress sites. A list of dogs will be fetched from the sites and shuffled before being presented on Rescue Me, so no shelter gets priority.

There are three ways to find a dog for adoption on Rescue Me.
1. Browse.
 This is the default mode. Dogs from WordPress sites are displayed, and can be clicked on, to view their details. Each dog has a section with highlighted contact information.
2. Filter.
 Using metadata like size, gender etc, present in Dogs, our filter helps narrow down the search. Metadata is added on WordPress sites through the [Rescue Me Dog Gutenberg block](https://github.com/KarenCodes/rescue-me-block).
3. Match.
 Our form asks the visitor a set of questions. Visitor replies are matched with filters to narrow down the list. 

The About page lists the rescue groups and gives information about them. Information for each shelter comes from the home page on each WordPress site.

## Accessibility

App can be used on modern browsers. It can be used with a keyboard or a screen reader. It has a 100% score on Chrome Lighthouse Audit. We have used [React Helmet](https://github.com/nfl/react-helmet) to make page changes noticeable by screen readers.

## Mobile and desktop

Rescue Me app works with different screen sizes and devices.

-----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Below you will find some information on how to run scripts.

### `npm start`

- Use to compile and run the App in development mode.
- Watches for any changes and reports back any errors in your code.

### `npm run build`

- Use to build production code for your block.

## Changes

To add or change a WordPress site, edit Settings.js file and add/remove on SHELTERS const.
Adding or changing filter values can be done by modifying Rescue Me Dog Gutenberg block to add the metadata and then adding new values on Settings.js on FILTERS const.

## Scope
Rescue Me App is in English, it works on modern browsers and it pulls up to 100 dogs from each WordPress site.

——
