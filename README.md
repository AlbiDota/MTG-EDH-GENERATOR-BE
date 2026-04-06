# MTG-EDH-GENERATOR-BE

Backend for MTG-EDH-GENERATOR-FE using NodeTS + Express!

**This MTG EDH deck generator is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.**

<br/><br/>
## Important guidelines from Scryfall

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

>The Scryfall API (api.scryfall.com) has the following hard rate limits:
>
>/cards/search — 2/second (500ms)
>/cards/named — 2/second (500ms)
>/cards/random — 2/second (500ms)
>/cards/collection — 2/second (500ms)
>All other methods — 10/second (100ms)

<br/><br/>
### Current goal to provide "additional value to end-users"

The goal of this project is to make an easy-to-use commander deck generator with user inputs probably not being any more than which colors they want to include, or a specific commander.

<br/><br/>
## Important guidelines from Wizards of the coast

we ask you follow these rules:

1. **One word: F-R-E-E.** You can use Wizards’ IP (except for the restrictions listed in #3) to make Fan Content that you share with the community for free. Free means FREE:
    - You can’t require payments, surveys, downloads, subscriptions, or email registration to access your Fan Content;
    - You can’t sell or license your Fan Content to any third parties for any type of compensation; and
    - Your Fan Content must be free for others (including Wizards) to view, access, share, and use without paying you anything, obtaining your approval, or giving you credit.
You can, however, subsidize your Fan Content by taking advantage of sponsorships, ad revenue, and donations—so long as it doesn’t interfere with the Community’s access to your Fan Content.

2. **Tell the Community it’s unofficial.** Make it clear that your Fan Content is not endorsed or sponsored by Wizards—i.e., unofficial. Please include a note with your Fan Content explaining that:
“[Title of your Fan Content] is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.”

3. **Don’t hurt others.** Please respect other people’s IP. If you don’t have the rights to use another person’s stuff in your Fan Content—don’t. If we learn that your Fan Content also includes other people’s IP (e.g., crossovers/mashups) without their permission, we may ask you to take it down.

4. **Don’t hurt Wizards.** We ask that you refrain from doing any of the following:

    - **Don’t use Wizards’ logos and trademarks.** We’ve included a list of our most frequently asked-about trademarks in the FAQ;
    - **Don’t mess with the legal notices in our stuff.** If the Wizards IP you are incorporating into your Fan Content already has copyright notices, logos, trademarks, or other notices existing within it, don’t remove them;
    - **Don’t use Wizards’ IP in other games.** This includes your own or other people’s games or game components (e.g., rule books, tokens, figures), regardless of whether it is distributed for free;
    - **Don’t use Wizards’ Video or Music in your Fan Content.** We know our video trailers are awesome, but use of our videos and music are governed by contracts with third parties. Please don’t use any of our video or music content, unless you’re embedding a video from an authorized third-party’s website (e.g., Twitch or YouTube);
5. **No bad stuff.** We have the right to stop or restrict your use of Wizards’ IP at any time—for any reason or no reason—including when we think your use is inappropriate, offensive, damaging, or disparaging (and we’ll make that call in our sole discretion). If this happens, you must immediately take down your Fan Content or face the Demogorgon (yeah, the big bad is back from being on loan).

6. **Practice safe sponsorship.** We understand that great Fan Content can sometimes require special equipment (e.g., videos, podcasts, prop fabrication). We are OK with you using third-party sponsors to subsidize costs if you follow a few rules:

    - Don’t use a sponsor that would be harmful to Wizards. Please don’t promote our competitors or endorse inappropriate or offensive sponsors;
    - Make it clear (verbally or visually) that they are acting as a sponsor only;
    - Keep any shout-outs, mentions, and credits to a reasonable length; and
    - Do not associate Wizards with your sponsor in any way.
7. **Follow the law of the land.** It’s your Fan Content, so you are solely responsible for ensuring that your creations don’t violate the laws of your region, country, plane, or dimension. In addition to this Policy, your use of any Wizards’ IP must also comply with Wizards’ Terms of Use and Code of Conduct (together, the “Wizards Terms”). If there’s a conflict between anything in this Policy and the Wizards Terms, the Wizards Terms win. Those agreements include important legal terms (such as limitations of lability, indemnification, and dispute resolution), so please review them carefully.

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