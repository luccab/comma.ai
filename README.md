This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app was made using react and Mapbox/[deck.gl](https://deck.gl/) (made based on this [example](https://deck.gl/#/examples/custom-layers/trip-routes)). The app is hosted on Heroku and can be found [here](https://react-comma.herokuapp.com/).

## JSON files

I uploaded all of them to S3 and then I took all the information I needed and converted to one JSON file through [this script](https://github.com/luccab/rawJSON/blob/master/aws.js).

I am further explaining the code in [this video](https://www.youtube.com/watch?v=2voHT4JjvMA).

## Getting Started

`git clone https://github.com/luccab/comma.ai.git`

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
* [Heroku](https://www.heroku.com/) - Hosting Platform
