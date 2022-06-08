---
title: 'There’s a chat for that: Apple’s biggest platform opportunity yet'
date: '2015-06-09T00:00:00.000Z'
tags: ['ideas']
---

**Preface**: This post continues to get a lot of attention, especially following Facebook’s Messenger Platform announcement. It should be noted this was published **June 2015**. It’s exciting to know that less than a year after I wrote this, much of what was conceptualized found its way into the Messenger Platform, identically in some cases. Though I’d still love to see Apple build out iMessage as a platform I’m glad to know the idea has legs elsewhere.

---

There’s already been a fair amount written on the subject on the future of texting and of messaging-as-an-interface. Jonathan Libov had a pretty comprehensive set of ideas that established how a lightweight texting option could replace many of the apps that we deal with today. In the post title “[Futures of Text](http://whoo.ps/2015/02/23/futures-of-text)” he says:

> In contrast to a GUI that defines rules for each interaction — rules which, frustratingly, change from app to app — text-based, conversational interactions are liberating in their familiarity. There’s only really only one way to skin this cat: The text I type is displayed on the right, the text someone else typed is on the left, and there’s an input field on bottom for me to compose a message.

App overload is a real thing. Personally I have 109 apps installed on my iPhone right now, and that’s even after a massive purge about a month ago. I can’t possibly use more than 20% of them on a regular basis. For example, Airbnb, TripIt, Sprig, Lyft, Uber, and Venmo are just a handful of the many apps I need on my phone but don’t use them on a daily basis.

_Just yesterday, during the 2015 WWDC keynote, Apple _[_announced_](http://www.buzzfeed.com/matthewzeitlin/apples-wwdc-by-the-numbers#.bvyJWY48J)_ that the average iPhone has 119 apps on it. That’s insane!_

With that in consideration, the “app” as the sole way I can interface with a service feels unnecessarily heavy handed but rich alternatives don’t exist. As Libov used as an example, [NYC’s MTA Bus Time](http://bustime.mta.info) service makes it easy to just text a number and get bus times without need for a dedicated interface. It’s spartan, though it gets the basic job done. However, if you want anything more than just text you’re shit out of luck.

Therein lies the opportunity.

## The end of the graphical user interface

Do we really believe that the [GUI](http://en.wikipedia.org/wiki/Graphical_user_interface) is the end-all-be-all way to interface with a computer? With each new app we need to learn how to use it. Sometimes this can be quick, and intuitive, but oftentimes there is a learning curve associated with it.

Two years ago Ron Kaplan [wrote an article](http://www.wired.com/2013/03/conversational-user-interface/) that begged the same question, and made a suggestion that the next evolution of our interaction with computers is the Conversational User Interface. The article itself was ahead of its time but seems to be extremely prescient for today.

## There’s a chat for that

What if instead of installing an app, we might instead allow a service to chat with us via iMessage? From that point on, they’re just like any contact in your phone, enabling a two-way conversation to get things done. With each new conversation you’d give relevant permissions for contact and the moment you’d like to end it then the “app” could no longer message you. Easy!

_It should be noted that when I say “conversation” I don’t mean that you’re just texting with a service (e.g. Magic, Luka, etc.). Likewise a “conversational user interface” isn’t limited to just text._
![](__GHOST_URL__/content/images/downloaded_images/There-s-a-chat-for-that--Apple-s-biggest-platform-opportunity-yet/1-Z84a8BFv8lXeRWLDUoL60g.png)Example of apps as chats
In the above mockup you can see three different examples of experiences that are currently just apps. At their core, they’re all just handling transactions so why do we need a whole app and a ton of chrome to use their services?

**Lyft**
Request a ride, confirm the driver, hop in the car, and pay all through a single message stream.

**Sprig**
Request tonight’s dishes with a button, place an order, and pay all via conversation.

**OpenTable**
“Can I get a table for two at Namu Gaji tonight?” and boom, it’s done. Isn’t that so much easier than jumping through all of the hoops of navigating an app?

Obviously there are so many more examples of services that would work beautifully in this experience. For all of those apps that you might otherwise use just once or twice, you might instead just bring up a conversation.

Additionally, this kind of experience would make onboarding customers dramatically faster and easier. Each conversation would prompt iOS to ask what kind of information be shared, including perhaps your name, photo, and maybe your address. Payment would all be done through Apple Pay, making for ultra fast and seamless transactions.

**MessageKit** would be similar to Apple’s other \*Kits in that it would enable developers to quickly build out an experience based on guides. It would include a permission stack, the ability to create unique input methods, and a way to enable discovery. From a user’s perspective the entire thing would be opt-in. Apps wouldn’t be able to just start messaging you without initiating.

## Imagining what it might look like…

![](__GHOST_URL__/content/images/downloaded_images/There-s-a-chat-for-that--Apple-s-biggest-platform-opportunity-yet/1-StuWkQKniQz9UL2RoTvRCw.png)Mockup of what Lyft might look like in a conversational interface, built into the Messages app. The nav bar and response bubbles appear in pink, providing an opportunity for branding.
In the above example you can see the user opening up a Lyft conversation for the first time. By tapping the built-in “Request a ride” button it brings up a unique interactive experience that takes up the area that would otherwise have a keyboard. This would be programmed by the app developers themselves to enable whatever kind of input function they’d like. In this case it’s a UI that helps a user identify their location and quickly request a Lyft.

From there Lyft could send them a message when their ride is on the way and better yet, have a live updating map that shows where they’re at.

All of this functionality is built into the Lyft app today, but when you strip away all of the chrome, the package it comes in, the use case is quite simple. Installing an app is sometimes a laborious process. Starting a conversation could make things much simpler.

There are a couple of other things that would be necessary to make this whole thing work: First, we need to assume that NLP (natural language processing) is not yet quite good enough to enable humans to converse with computers effectively. Second we need to assume that the vast majority of companies out there wouldn’t want NLP to become a core competency. Thirdly we need to ensure that the end user can have the best possible experience and enable delight.

So where does that leave us? Here are some ideas:

## Mad Libs

![](__GHOST_URL__/content/images/downloaded_images/There-s-a-chat-for-that--Apple-s-biggest-platform-opportunity-yet/1--i97l3xkz-bhk5k0YgvBEg.jpeg)Mad Libs® example
Do you remember these things? You’d add your own words in to a story, guided by suggestions of using nouns, adjectives, verbs, etc. What if instead of expecting that a user will know the exact way to communicate with a bot, we help them learn the commands via “Mad Libs” like experiences? While typing a message a small suggestion box might pop up to guide the phrase a user may be typing out. That way, when on the receiving end of the message, the bot would be able to have a high probability of parsing the message and succeeding at its task.

## Bubbles with buttons

Messages with built-in options that would activate certain commands would make the conversation even richer. In the above example with Lyft, you can see a “Request a ride” button directly within a message. It would be easy to imagine a guided experience that might go something like this:

> Customer: I’d like a pizza delivered right now
> **_Dominos: How big? [Small] [Medium] [Large]_**
> Customer: _selects Medium_ > **_Dominos: What kind of toppings? [Pepperoni] [Sausage] [See More]_**

You get the picture…just a series of pointed questions with a series of taps to get where you need to. Dead simple. Understood by all and no need to build a complicated app to get the job done.

Eventually the buttons might go beyond just text and include more complex interactions, but simple phrases are probably a good start.

## Siri

Whether we realize it or not, some of us are already having a conversation with our iPhones: with Siri. So what if developers could plug directly into Siri by way of MessageKit and enable users to just dictate what they want!

> User: Siri, get me a Lyft
> **_Siri: Where would you like to be picked up? [Brings up a map]_**
> User: Here
> **_Siri: Great! Lyft will let you know when your ride is on its way._**

## Conclusion

Obviously much of this is blue sky thinking, but to me it just seems inevitable. Why in the world do I need hundreds of apps on my phone just to get some simple things done? Why do each of those apps need a completely unique experience that might hinder my ability to even do what the app intends? Instead, pulling up a conversation and getting something done quickly and efficiently seems like a more delightful experience to me.

I’ve said in a [previous post](https://medium.com/@mg/the-graphical-user-interface-will-soon-give-way-to-the-rise-of-the-conversational-user-interface-ba8cc52f945b) that I believe the folks that inhabit the messaging space and those that embrace the conversational user interface will be big winners in the future — folks like [Facebook](https://developers.facebook.com/blog/post/2015/03/25/introducing-messenger-platform-and-businesses-on-messenger/), [Layer](https://layer.com), [Assist](http://joinassist.com)\*. But the big opportunity here could be Apple enabling an entirely new class of experiences, breaking down barriers and focusing on delight. MessageKit can and should be Apple’s next big platform play.

\*_Of note: I’m an advisor to Assist_
