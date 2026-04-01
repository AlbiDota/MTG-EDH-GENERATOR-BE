# MTG-EDH-GENERATOR-BE

Backend for MTG-EDH-GENERATOR-FE using NodeTS + Express!

<br/><br/>

## Important guidelines
I will be using the scryfall API to fetch mtg cards.

As a part of the Wizards of the Coast Fan Content Policy, Scryfall provides their card data and image database free of charge for the primary purpose of creating additional MTG software, community content or research.

I will do my best to follow their guidelines:

- I will not be using Scryfall logos or names in a way that implies my work/product is endorsed by Scryfall.
- I will not "paywall" access, or require anyone to make payments, take surveys, rate content, join chats etc.
- I will not use Scryfall data to create new games, or to imply the information and images are from any other game than MTG.
- I will not simply repackage, republish or proxy scryfall data. The software must create additional value for end-users.


### Rate Limits and Good Citizenship
From Scryfall's documentation:

>We kindly ask that you insert 50 – 100 milliseconds of delay between the requests you send to the server at api.scryfall.com. (i.e., 10 requests per second on average).
>
>Submitting excessive requests to the server may result in a HTTP 429 Too Many Requests status code. Overloading the API after this point may result in a temporary or permanent ban of your IP address. Applications that continuously receive rate limit warnings over a longer period may also be blocked.

## Current goal to provide "additional value to end-users"

The goal of this project is to make an easy-to-use commander deck generator with user inputs probably not being any more than which colors they want to include, or a specific commander.

<br/><br/>

# Additional info
The frontend part of this project is in a separate github repo @ [MTG-EDH-GENERATOR-FE](https://github.com/AlbiDota/MTG-EDH-GENERATOR-FE).

I suggest you check it out as well if you consider running this thingy locally.

<br/><br/>

## Run locally

## Install dependencies
``` in root directory
npm i
```
### Run server
``` in root directory
npm start
```

<br/><br/>

## Author
**GitHub:** [AlbiDota](https://github.com/AlbiDota)  