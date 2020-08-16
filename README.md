# Comma.ai React Map

<img src="/screenshots/website.png" alt="drawing" width="800"/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app was made using react and Mapbox/[deck.gl](https://deck.gl/) (made based on this [example](https://deck.gl/#/examples/custom-layers/trip-routes)). The app is hosted on Netlify and can be found [here](https://nervous-murdock-9d54e7.netlify.app).

## Getting Started

`git clone https://github.com/luccabb/comma.ai.git`

`cd comma.ai`

`npm install`

`touch .env`

Add 'SKIP_PREFLIGHT_CHECK=true' to the newly created .env file on the root directory

Add 'REACT_APP_MAP_BOX={InsertYour[Mapbox](https://www.mapbox.com/account/access-tokens)APIKeyHere}' to the same .env file

`npm run start`

## Build With

* [React](https://reactjs.org/) - The web framework used
* [Mapbox](https://www.mapbox.com/) - Map API
* [deck.gl](https://deck.gl/#/) - Used together with Mapbox for visuals
* [Netlify](https://www.netlify.com/) - Hosting Platform
