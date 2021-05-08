<!-- - hide Maps API key in config.js need to send it in submission -->
<!-- - https://flopreynat.com/blog/2015-09-08-make-google-charts-responsive
- https://www.favicon-generator.org/

issues: x  in modal not displaying --> 


<h1 align="center">--- COVID-19 Tracker ---</h1>
<h1 align="center"><img src="./assets/images/C19T-logo.png" /></h1>

## :link:[ Live Website on Netlify](https://objective-lumiere-b6295b.netlify.app/)

# 
# Table of Contents
1. [About](#AboutCOVID-19Tracker)
2. [Example2](#example2)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)


# About COVID-19 Tracker 

With the global pandemic situation it is very important to have reliable sources of information and stay up to date with the development of the disease.
COVID-19 Tracker is a website developed with that premise in mind, and it is a useful tool for anyone who needs to travel to a foreign country and needs a panorama of how this country is doing. It is also perfect for anyone who wants out of interest or curiosity to learn the stats of a specific country or even just a quick glance at the global situation.
 
## User Interface / User Experience (UI/UX)
<h1 align="center"><img src="./assets/images/readme/MOCKUP.jpg" /></h1>

### Design
Most of the design elements of this project were built using [Bootstrap 5](https://getbootstrap.com/) framework, so every element looks beautiful, intuitively placed and responsive to the different screen sizes.

#### UI
COVID-19 Tracker is not meant to be a source of extensive data content, but a quick to use page that instantly gives you a general awareness of the disease's evolution by highlighting the main stats.
So the initial approach was to build a single page 'in-your-face' design with all the information clearly displaying on screen, complemented with visually rich images and interactive charts.

##### UI Refactoring
During the development stage, while testing different display options I realized that in small screens could become somehow packed with lots of visual elements, mainly due to both the geo chart and timeline chart being displayed at the same time.
So the solution found was to move all the search content to inside a pop-up modal box that displays the interactive search results and also all the specific stats and chart for the selected country.
This makes for a much more visually appealing result while making the overall experience a lot better  for the user.

#### Wireframes
The wireframes that layed out the ground for the design were made using Adobe's [XD](https://www.adobe.com/products/xd.html), even though some aspects were changed and adapted during development.
All the views can be accessed [here](./design-files/wireframes.pdf) and checked bellow:

<h1 align="center"><img src="./assets/images/readme/WIREFRAMES.jpg" /></h1>

##### Mobile View
<h1 align="center"><img src="./assets/images/readme/WIREFRAMES-mobile.jpg" /></h1>

##### Tablet View
<h1 align="center"><img src="./assets/images/readme/WIREFRAMES-tablet.jpg" /></h1>

##### Desktop View
<h1 align="center"><img src="./assets/images/readme/WIREFRAMES-desktop.jpg" /></h1>

#### Style Refactoring

Whilst the initial approach was to achieve the desired result using CSS Flexbox, this was making it a bit code heavy and time consuming on the CSS side, which was not the focus of this project. So in the middle of the road all the CSS and HTML were refactored to use [Bootstrap](https://getbootstrap.com/).

#### Colours
<h1 align="center"><img src="./assets/images/readme/COLOURS.jpg" /></h1>

As the data presented to the user is the most important part of the project, everything containing data is presented using a combination of vivid colours, whilst the navigation and page elements use various shades of grey. 
Making sure that all these colours combined with each other as well as picking the right shade for each was achieved using [Coolors](https://coolors.co/)


During the development process I felt that something was lacking in terms of colour, so I added a very light blue (#e3f2fd) to the top navbar and footer, and this made the whole page feel more alive and pleasing to the eyes.


#### Typography
<h1 align="center"><img src="./assets/images/readme/FONT.png" /></h1>

The font chosen is Google's [Roboto](https://fonts.google.com/specimen/Roboto) as it allows letters to take up as much space as it needs and ultimately, making for an improved experience for the reader while looking very good in a wide range of devices.

#### Charts
<h1 align="center"><img src="./assets/images/readme/CHART.jpg" /></h1>

The page has a timeline chart and a geo-chart both from [Google Charts](https://developers.google.com/chart/). Both are interactive and display a good amount of aditional information while hovering its elements.


#### Logo
The [Logo](./assets/images/C19T-logo.png) was custom designed for this project using [Logomaker](https://www.logomaker.com/), and it transmits the idea of 'track' and 'focus' on the right piece of information.


#### Icons
To make the users' experience more pleasant and the navigation more intuitive a number of [Font Awesome](https://fontawesome.com/) icons were used.

### User Stories
<h1 align="center"><img src="./assets/images/readme/USER.jpg" /></h1>


- #### As a user
    1. I want to be able to understand the purpose of the site.
    2. I want to the website to be visually pleasing.
    3. I want to the website look good no matter the device I'm using.
    4. I want to get a global overview instantly.
    5. I want to quickly have information about a specific country.
    6. I want to be able to search for any country in order to get aditional information.
    7. I want the search to easy.
    8. I want the data to be displayed in images so I can understand it easily.
    9. I want to be able to know the pandemic evolution in a specific country. 
    10. I want to intuitively navigate through the site to browse the content.
    11. I want to quickly get the information I'm looking for.
    12. I liked the website so much that I want to know more about the developer.

## Features

This is a short description of the main features implemented in the project, and the main ones left to implement.
 
### Existing Features
- **Responsiveness** - the whole website and its components adjust to the size of the screen
- **Navbar** - allows users easily the search functionality
- **Fixed Footer** -  it's fixed at the bottom of the screen and allows users to get in touch with the developer
- **Search** - allows user to search a specific country
- **Interactive Search Results** - whenever a character is typed in the search functionality displays a list of clickable country buttons, narrowing down the list as more characters are entered.
- **Geo Chart** - a visual display with colours of the number of cases in countries around the world.
- **Geo Chart Hover** - displays the number of cases in the hovered country.
- **Timeline Chart** - a visual display of the pandemic evolution through time in the selected country.
- **Timeline Chart Hover** - displays the number of cases at that day when hovering the chart line.
- **Timeline Chart Dual Y scale** - has 2 scales on the Y axis, to better represent the impact of new cases in the global evolution.
- **Real time information** - all the information displayed is updated when the page is loaded.
- **Custom Favicon** - the website displays a custom favicon in the browser tab 


### Features Left to Implement
- **HTTP Error Handling** - add pages and messages for the different HTTP errors.
- **Use a different API** - the chosen API isn't the most reliable (see details in the API section).
- **Add links to local COVID pages** - provide links for more in depth information of selected countries.

## API

<h1 align="center"><img src="./assets/images/readme/API.jpg" /></h1>

This project project uses the free version of the [Covid 19 API](https://covid19api.com/) which is a REST API that provides responses in JSON format for easy integration.
This version doesn't give access to all the data sources and is rate limited, but what it provides should be enough for the completion of this project. 

Despite that, I had a number of issues with the data retrieved, which are detailed below.

### Issue #1 - 0 Active cases in many countries

<h1 align="center"><img src="./assets/images/readme/API-bug-noActiveCases.jpg" /></h1>

This doesn't happen all the time, but it happens lots of times in many countries that have thousands of active cases.
It could be because of the rate limitations, but it happens always in the active field and no other, and always in the same countries.

### Issue #2 - Decrease in the number of total cases in some countries

<h1 align="center"><img src="./assets/images/readme/API-bug-Australia.jpg" /></h1>

Several countries show a decrease in the total cases number, which cannot be right. This leads to a display of negative new cases in the graph, which has been addressed by not showing negative scale.


### Issue #3 - Abnormal new cases number

<h1 align="center"><img src="./assets/images/readme/API-abnormal-newcases-number.jpg" /></h1>

A few countries abnormal spikes in the new cases number. There are only a few countries where this happens, and it could be coherent with the country's official data, I haven't checked that fact.

## Technologies Used

In this section there is a list of all the technologies used to build this project.

- [HTML](https://dev.w3.org/html5/spec-LC/) - to build the templates.
- [Javascript](https://www.javascript.com/) - javaScript and JQuery initialize some Materialize components like modals and sidenav. 
- [Jquery](https://jquery.com/)
- [CSS](https://www.w3.org/Style/CSS/specs.en.html) - to add  aditional styling.
- [Bootstrap 5](https://getbootstrap.com/) - CSS & JS library.
- [FontAwesome](https://fontawesom.com/) - for icons.
- [Git](https://git-scm.com/) - for version control.
- [GitHub](https://github.com) - for cloud repository storage.
- [Netlify](https://www.netlify.com/) - for deployment of production application.
- [Covid 19 API](https://covid19api.com/) - for data source.
- [VS Code](https://code.visualstudio.com/) - IDE of choice.
- [Adobe XD](https://www.adobe.com/products/xd.html) - for wireframes.
- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) - for image manipulation.
- [Logomaker](https://www.logomaker.com/) - for logo design.
- [Coolors](https://coolors.co/) - for colour scheme.
- [Favicon Generator](https://www.favicon-generator.org/) - to generate the favicons from the logo.
- [TIDAL](https://tidal.com/) - For countless hours of streamed Hi-Fi music. Couldn't have done it without this :musical_note: :satisfied::notes:

## Testing

 This section details all the testing that was made to ensure the good performance of the website.
 
 ### User Stories testing

 - #### Common user stories

- #### As a first time visitor
    
- #### As a returning user
- #### As an admin
 
### Manual Testing

### Code testing

The following tests were performed to the code:

#### JavaScript JSHint validation

Result: No errors. Got undefined variable warnings because of jQuery and Google Charts, and unused variable warnings for functions that are being used.

<h1 align="center"><img src="./assets/images/readme/JSHINT-covid19api-validation.jpg" /></h1>
<h1 align="center"><img src="./assets/images/readme/JSHINT-geo-chart-validation.jpg" /></h1>

#### HTML W3C validation

Result: Tested all HTML files, and apart from Jinja related errors, no other errors were found.
<h1 align="center"><img src="./assets/images/readme/W3C-HTML-validation.jpg" /></h1>

#### CSS W3C validation

Result: No errors found.

<h1 align="center"><img src="./assets/images/readme/W3C-CSS-validation.jpg" /></h1>

### Lighthouse Performance testing

Result: The performance rating was 93 in local deployment testing, while scoring slightly lower in the Netlify deployment.

<h1 align="center"><img src="./assets/images/readme/LIGHTHOUSE-report-local.jpg" /></h1>
<h1 align="center"><img src="./assets/images/readme/LIGHTHOUSE-report-netlify.jpg" /></h1>

### Known issues

#### HTTP Error 429 (too many requests)

<h1 align="center"><img src="./assets/images/readme/ISSUE-429.jpg" /></h1>

It's common, due to the API's rate limitation, to get a 429 error response. The HTTP error handling is not yet implemented, and this can lead to an unexpected behavior.

#### Modal close icon not displaying correctly

<h1 align="center"><img src="./assets/images/readme/ISSUE-modalcloseicon.jpg" /></h1>

It has been this way since I pasted the raw code from Bootstrap's documentation page, and I still haven't figured out what is causing this.

## Deployment

This project was deployed locally while on development for testing purposes, and then deployed to Netlify for production mode.
Netlify was chosen instead of Github Pages because it is easier to deal with the Google Maps API key.

### Security

Google Maps' API key was stored in a config.js file not uploaded to Github. For this project to run, it needs a config.js file inside the scripts folder containing a valid key.

    const config = { 
    MAPS_API_KEY : '[YOUR_API_KEY]'
    };

This is not the ideal way to deal with this security issue, the correct way is to use Node.js, but this is outside the scope of this project, and I made sure that I cannot be charged by Google because some ill intentioned mind would misuse this key.

### Local Deployment

The website was locally deployed using VS Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, following the steps below:

1. Go to Extensions tab in VS Code
2. Search for Live Server and install the extension
3. After it is installed, go back to the Explorer tab
4. Right-click on index.html file and select 'Open with Live Server'
5. The webpage will automatically open on your default web browser

### Netlifiy Deployment

Netlify deployment steps, including the ones that deal with the Maps key, are listed below:

1. Create an account and sign in to [Netlify](https://www.netlify.com/)
2. Click on the 'New Site from Git' button
3. Click on the 'Github' button and authorize Netlify to access your Github account
4. Select the repository
5. Select the master branch
6. On 'Build command' insert the following command:
```
    cd assets/scripts && echo -e "const config = {\n MAPS_API_KEY : '[YOUR_API_KEY]'\n};" > config.js
```
7. Click on the 'Deploy' button
8. After the deployment processis complete you can click the 'Preview' buton to access the deplyed website


## Credits

### Content

- The data source for this project is [Covid 19 API](https://covid19api.com/).

### Acknowledgements

- To make Google Charts and Maps responsive to windows resize I used the code in [Flo's](https://flopreynat.com/blog/2015-09-08-make-google-charts-responsive) blog post
- [Stack Overflow](https://pt.stackoverflow.com/) was used numerous times to better understand and implement code, especially with async await Javacript functions.


### Thank yous :pray:
- The developer community in general for the willingness to help others and making an infinite ammount of content available online and the Code Institute's Slack community in particular
- The numerous and too many to mention content creators that produce valuable guides an tutorials
- My Mentor Maranatha Ilesanmi for always pointing me to the right direction
