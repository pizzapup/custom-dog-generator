# Custom Portrait App (custom-portrait-app)

## Table of Contents
- [Custom Portrait App (custom-portrait-app)](#custom-portrait-app-custom-portrait-app)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features/Tools](#featurestools)
  - [Pages](#pages)
    - [Home](#home)
      - [Home | Desktop View](#home--desktop-view)
      - [Home | Mobile View](#home--mobile-view)
      - [Open Mobile Navigation Menu](#open-mobile-navigation-menu)
    - [Customize Dog Form](#customize-dog-form)
      - [Features](#features)
      - [Steps](#steps)
        - [Body Type \& Coat Color | Desktop View](#body-type--coat-color--desktop-view)
        - [Eye Type \& Color | Desktop View](#eye-type--color--desktop-view)
        - [Snout: Nose \& Mouth | Desktop View](#snout-nose--mouth--desktop-view)
        - [Body Type \& Coat Color | Mobile View](#body-type--coat-color--mobile-view)
        - [Eye Type \& Color | Mobile View](#eye-type--color--mobile-view)
        - [Snout: Nose \& Mouth | Mobile View](#snout-nose--mouth--mobile-view)
    - [Resume](#resume)

## About

> Visit Site: [custom-portrait-app.firebaseapp.com](https://custom-portrait-app.firebaseapp.com/createdog)

Generate your own custom pizzapup dog illustration. Choose the type of body, eyes, nose, and mouth for your pup. Choose from a curated collection of eye and coat colors, or create your own! 

## Features/Tools
- React.js - Open-source front-end JavaScript library | [React.dev](https://react.dev/)
- React Router - Enables client-side routing | [reactrouter.com](https://reactrouter.com/en/main)
  - Code-splitting 
    - Lazy loading - Design pattern used to increase applications performance by reducing initial loading time. 
      - [`lazy`](https://reactrouter.com/en/main/route/lazy) - reactrouter.com
      - [The Benefits of Lazy Loading](https://www.imperva.com/learn/performance/lazy-loading/#:~:text=The%20benefits%20of%20lazy%20loading,users%20only%20if%20it's%20requested.) - imperva.com
- Firebase
  - Hosting - application uses firebase hosting. [firebase hosting docs](https://firebase.google.com/docs/hosting)
  - Realtime database - data for application is stored in firebase realtime database. Data submitted through the create-dog-form is stored in firebase. [realtime database docs](https://firebase.google.com/docs/database)
- CSS - good ol classic css

## Pages

### Home

| Home (Desktop)                                                     | Home (Mobile)                                                    | Mobile Nav Menu                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| <img alt='home desktop view' src="preview-imgs/home-desktop.png"/> | <img alt='home mobile view' src="preview-imgs/home-mobile.png"/> | <img alt='home mobile view' src="preview-imgs/home-mobile-nav.png"/> |


<details><summary>Home Page</summary>

#### Home | Desktop View
![Home page desktop view](preview-imgs/home-desktop.png)
#### Home | Mobile View
![home page mobile view](preview-imgs/home-mobile.png)
#### Open Mobile Navigation Menu
![home page mobile nav menu preview](preview-imgs/home-mobile-nav.png)

</details>

### Customize Dog Form

#### Features

Choose from a collection of dog coat and eye colors based on colors found in various dog breeds. 
- HexColorToColorName | [GitHub Repository](https://github.com/jeff3754/HexColorToColorName#readme)

#### Steps

| [Body](#body-type--coat-color)                                      | [Eyes](#eye-type--color)                                            | [Snout](#snout-nose--mouth)                                           |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <img alt="customize dog body" src="preview-imgs/body-desktop.png"/> | <img alt="customize dog eyes" src="preview-imgs/eyes-desktop.png"/> | <img alt="customize dog snout" src="preview-imgs/snout-desktop.png"/> |

<details><summary>Desktop View</summary>

| [Body](#body-type--coat-color)                                      | [Eyes](#eye-type--color)                                            | [Snout](#snout-nose--mouth)                                           |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <img alt="customize dog body" src="preview-imgs/body-desktop.png"/> | <img alt="customize dog eyes" src="preview-imgs/eyes-desktop.png"/> | <img alt="customize dog snout" src="preview-imgs/snout-desktop.png"/> |



##### Body Type & Coat Color | Desktop View
<!-- ![customize dog body](preview-imgs/dog-body.png) -->
![body options mobile](preview-imgs/body-mobile.png)
![body options desktop](preview-imgs/body-desktop.png)

##### Eye Type & Color | Desktop View
![customize dog eyes](preview-imgs/dog-eyes.png)
##### Snout: Nose & Mouth | Desktop View
![snout options](preview-imgs/dog-nose.png)


</details>

<details><summary>Mobile View</summary>

| [Body](#body-type--coat-color)                                     | [Eyes](#eye-type--coat-color)                                      | [Snout](#snout-nose--mouth)                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| <img alt="customize dog body" src="preview-imgs/body-mobile.png"/> | <img alt="customize dog eyes" src="preview-imgs/eyes-mobile.png"/> | <img alt="customize dog snout" src="preview-imgs/snout-mobile.png"/> |

##### Body Type & Coat Color | Mobile View
<!-- ![customize dog body](preview-imgs/dog-body.png) -->
![body options mobile](preview-imgs/body-mobile.png)
![body options desktop](preview-imgs/body-desktop.png)

##### Eye Type & Color | Mobile View
![customize dog eyes](preview-imgs/dog-eyes.png)
##### Snout: Nose & Mouth | Mobile View
![snout options](preview-imgs/dog-nose.png)

</details>



### Resume

Design based off of resume PDF. Download the [original resume PDF](preview-imgs/Hardwick-2022.pdf)

<!-- #### Resume Desktop View -->

<details>
<summary><h4>Resume Desktop View</h4></summary>

![resume desktop view](preview-imgs/resume-desktop.png)

</details>

<!-- #### Resume Mobile View -->

<details><summary><h4>Resume Mobile View</h4></summary>

![resume mobile view](preview-imgs/resume-mobile.png)

</details>



