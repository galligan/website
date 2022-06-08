---
title: WTF is an NFT? A (relative) beginner's guide to non-fungible tokens and why they matter
date: '2021-03-03'
tags: ['nfts', 'crypto', 'howto', 'ideas']
summary: Everyone seems to be talking about them right now, but what the hell are they? Let's dig in on what they are, as well as some practical use cases.
---

First, the fact that three of the last three posts (here's [one](__GHOST_URL__/membership-nfts/) and [two](__GHOST_URL__/how-i-accidentally-created-and-sold-an-nft/)) on this blog should be a good indicator that there are a lot of exciting things going on with NFTs these days. In both of those posts I referenced some outside links as a primer, but have also found myself explaining to friends as of late what they're all about. So I thought maybe it might be time to just write up my quick perspective on what they are, what they mean for the crypto space, and for the future of the web.

Note that this post assumes you've got at least some passing familiarity for what cryptocurrencies are, and a bit about how they operate. If you're not there yet, go check out [Coinbase's article on the subject](https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency).

## What's in the name?

NFT stands for "non-fungible token." Fungibility essentially means that something can be broken down and that its subdivided parts are indistinguishable from each other. A bar of gold is fungible because it can be melted down and its remains would be impossible to identify what bar it came from.

Non-fungible represents something that is in and of itself unique—something that cannot be broken down further without destroying what _makes_ it unique.

### Digital scarcity

Aside from the advent of trustless stores of value, the single biggest contribution to the digital world that [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin), [blockchains](https://en.wikipedia.org/wiki/Blockchain), and the like gave us is the concept of digital scarcity. When something is scarce there is a finite supply to go around—like all the gold ore in the world, or clean water.

It used to be that when something got turned into 1's and 0's it could be infinitely copied with otherwise indistinguishable results. But blockchains and other [distributed ledgers](https://en.wikipedia.org/wiki/Distributed_ledger) solved core problems around [double spending](https://en.wikipedia.org/wiki/Double-spending) where the same digital money is spent twice. Furthermore their distributed nature meant that there was no centralized authority who could change the rules, or alter some sort of historical log of transactions.

Without going into all of the specifics the above innovations mean that despite something existing in a purely digital space one could cryptographically prove that there are no copies.

I came in relatively late to the crypto game in 2017, but though I didn't understand all of it at the time this concept alone blew my mind. Here's a little [tweet storm](https://twitter.com/mg/status/887738534202716160) I sent out back then after brainstorming on the possibilities with a friend:
![](__GHOST_URL__/content/images/2021/03/2017-nft-tweetstorm-mg@2x.png)

## How can something digital be truly unique?

Don't worry if you're already scratching your head on this one. We've been operating with the same core principles in the digital world for a long time, and they're only recently being upended. But here we go:

Images can be copied easily. I can send a picture to you, and by the time you receive it there are now two copies. When you send it to someone else now there are three, etc. etc. While I may have taken the original photo, the copies are largely indistinguishable from each other and therefore _not_ unique even though the original may have been at one point.

Turning a photo into an NFT means that you're embuing it with certain properties to help identify its [provenance](https://www.merriam-webster.com/dictionary/provenance) and establishing [immutable](https://en.wikipedia.org/wiki/Immutable_object) proof of its existence and history. This gets back into the idea of something being scarce—you're giving that photo new and special properties to help idenfity it.

So now if that same photo is non-fungible, even though I can make many copies of its pixels, it would be possible to prove what the original is—this precisely is the thing that's new and particularly exciting.
![](__GHOST_URL__/content/images/2021/03/Starry-Night-Van-Gogh-retouched-medium.jpg)Van Gogh's "Starry Night"
To bring this back to the real world, while you can purchase a print, postcard, or mousepad (old school, right?) of Van Gogh's "Starry Night", we all know that there is just one original, which happens to be in the NYC MoMA's permanent collection. The fact that there are copies of the original doesn't make it any less valuable or unappealing, in fact one might argue the opposite.
![](__GHOST_URL__/content/images/2021/03/The-Furry-Night_4096x4096_Muartive.jpg)Murat Yıldırım's "Furry Night"
So too we have [Murat Yıldırım](https://www.behance.net/muratyildirim)'s "[Furry Night](https://superrare.co/artwork-v2/furry-night-19345)" as seen above. While Van Gogh's medium was paint, Murat's was pixels—what you see has never existed in the physical space. Quite obviously I've posted a copy above, but because he's turned it into an NFT, it's now much more special and scarce—with only "1 of 1" existing as its true original. [Its record](https://etherscan.io/tx/0x9eae69c8f439857842d25f284987404fc97ff53386109291f1defd4ef6eb9931) on the Ethereum blockchain is available for all to see—including its creator, time of creation, current owner, and entire history of its movement throughout the digital world:
![](__GHOST_URL__/content/images/2021/03/CleanShot-2021-03-02-at-08.45.15@2x.png)

## What the heck does all this mean?

There's a lot going on in the above graphic, but here's a quick primer on what each of the things mean:

- **Wallet: **A unique address where cryptocurrency and tokens are held, typically secured by a private key. Basically think of this as your "login," with the wallet address as your username, and your private key the password. Wallets like [Rainbow Wallet](https://rainbow.me) are making an otherwise rather complex experience quite simple.
- **Transaction Hash:** Think of this as a receipt. It's the cryptographic proof that this transaction happened.
- **Block:** Which spot in the distributed ledger (in this case a blockchain) the transaction happens to appear. Many transactions are included in a single block.
- **Timestamp:** When this transaction occurred
- **From:** Which wallet (think of this like a bank account, or a web login of sorts) sent this transaction
- **Interacted With (To):** This is where the object went. In this case it was sent to [SuperRare](https://superrare.co), a marketplace of other NFTs, so that it could be listed. In cases when ETH (Ethereum's native currency) is transferred between parties, it would simply show the receiving party's wallet.
- **Contract:** This is a [Smart Contract](https://en.wikipedia.org/wiki/Smart_contract) on the Ethereum blockchain—essentially just some code with special instructions for how to handle a transaction. In this case it was to "mint" this object.
- **Tokens Transferred:** In the case of a fungible token, you would see the amount of tokens moving within the transaction. But because the above is an NFT contract, you're seeing which specific token (the Token ID) moved. You will also see the destination (To) if it's an NFT being moving.
- **ERC-721 Token:** Simplistically, this is the code standard or instructions on how a given token should operate. The [ERC-721 token standard](http://erc721.org) is what has been popularized for NFTs on the Ethereum network. A newer entrant, the [ERC-1155 token standard](https://enjin.io/about/erc-1155) adds some nifty new features and has seen some recent adoption.
- **Minting:** The process of turning something into an NFT. Many of the marketplaces such as [OpenSea](https://opensea.io) and [Rarible](https://app.rarible.com) make it easy for anyone to mint.
- **Transaction Fee:** How much it costs to **mint** the object. Running code is not free on the Ethereum network—computers the world over are performing those instructions and "**gas**" is spent to make it happen. In the example above it cost $55.30 to "mint" Murat's NFT.
- **Gas Price: **Transactions on the Ethereum network cost "gas" to go through. The gas price goes up or down over time depending on the supply and demand of computing power on the network—the obvious analogy being the sale of gasoline in the "real world."
- **Ether Price:** How much 1 ETH roughly cost at the moment of the transaction

## What can be an NFT?

Anything really—or at least anything that can have a digital representation. Here is a short list of examples, though by no means comprehensive:

- **Art:** Like you saw above with "Furry Night" or perhaps [Beeple's](https://www.beeple-collect.com) groundbreaking [auction of an NFT](https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924) with Christie's action house. What's special here is that artists can capture value in secondary sales as well…more on that below.
- **Collectibles:** Think trading cards, figurines, or just about anything that is of a limited edition. Some of the best NFT examples today include [NBA Top Shot](https://www.nbatopshot.com), [Sorare](https://sorare.com), and [CryptoPunks](https://www.larvalabs.com/cryptopunks/details/6472). In Top Shot's case you collect limited edition video clips of special moments in the NBA.
- **Music:** This could mean unique works that are limited edition, or perhaps stems that an original work is comprised of. A recent example is 3LAU's (pronounced Blau) [NFT release](https://nft.3lau.com/). Another is [EulerBeats](https://eulerbeats.com), a collection of just 27 music originals generated by an algorithm, and released in a particularly unique format.
- **Tickets: **This could be a great example because currently tickets to events are vulnerable to fraud, and exploitative scalping. Folks like Mark Cuban are [taking a serious look at making tickets into NFTs](https://decrypt.co/59760/mark-cuban-dallas-mavericks-blockchain-for-ticketing), which could also enable the ticket issuer to take advantage of secondary sales.
- **Membership:** I wrote about this in a [previous post](__GHOST_URL__/membership-nfts/https://mattgalligan.com/membership-nfts/), but the idea is that you could have a token that represents membership in something—and its presence in your wallet could be proof without need for logins, etc.

## How do they have value?

In an open market, things are valued simply by what the market will bear (what someone is willing to pay). What makes NFTs special is that they are verifiably scarce (the obvious counterfeit question is addressed below). That's why something like [CryptoPunks](https://www.larvalabs.com/cryptopunks) is seeing such high resale value—there's only 10,000 of them in the world and they are all unique. The total sale value of all of the 8-bit punks at this point is over a _staggering_ $114M.

Even more interesting is that even when works are given away by the artist, such as in the case of [Beeple's $1 raffle with MakersPlace](https://makersplace.com/beeple/5000-days-selects/), that hasn't seemed to affect the resale value in the least.

> OOOF! HELLS FUCKING YES. $1➡️$150k in less than a day. someone is getting fuckkkkked up tonight!!1 🥳🥳🥳
>
> and huge congrats to [@Crypto888crypto](https://twitter.com/Crypto888crypto?ref_src=twsrc%5Etfw) !!!111 🙏🙏🙏 [pic.twitter.com/oo7l7m4Awl](https://t.co/oo7l7m4Awl) > &mdash; beeple (@beeple) [March 2, 2021](https://twitter.com/beeple/status/1366872448566714371?ref_src=twsrc%5Etfw)

### What about counterfeit works?

I should call out that yes, objects could certainly be minted that are exact copies of something else. However, in the case of NFTs the value is in the contract and its explicit scarcity—verified with the wallet address that it originated from. For instance, **Beeple's wallet** is at `0xc6b0562605d35ee710138402b878ffe6f2e23807` and can also be identified with the Ethereum Name Service as `beeple.eth`.

So if there was a counterfeit Beeple floating around out there—and I'm certain there is—it's **extremely** easy to look at the source address and discover that no, it didn't come from the one-and-only.

## Will they hold their value?

I have no idea. Plenty of the assets will likely go down, maybe even as much as 99% of them. But the scarcity will remain, and the concepts are here forever now. Not all projects and artists will see mega-high valuations, but some assets like Top Shot's moments or Beeple's art feel like they could have some real staying power.

## Does this help artists and other creatives?

Without a doubt. For those artists, musicians, storytellers, and other creatives that are willing to put in the effort to make something special and authentically engage with their communities, they will be rewarded handsomly. Beeple's example is proof—he has shared hundreds of works on [his Instagram](https://www.instagram.com/beeple_crap/) over the years but up until recently it was primarily Facebook that would have reaped the economic benefit of his contributions. By allowing creators to monetize directly, and continue to receive residuals after the fact, they will begin to have a greater control of their economic story.

Furthermore, the royalty model alone could enable a new kind of success story for creatives that decide to play the long game. It's conceivable that an artist could enter the space by giving away all works for free, but with scarcity of those works in mind. As that artist gains in popularity, others will begin to bid on the originally free works and ascribe a monetary value to them. That value then return as residuals to the artist. So while in a traditional sense it's hard for creatives to gain economic value from their earliest works that might have been free initially, the NFT space will flip that on its head where the earliest works could be the **most** valuable ones.

## Have you made any?

In the interest of getting my hands dirty with this, I've now since minted a few different objects to see what the process is like from inception to execution and listing. While I have no idea if someone will find them interesting enough to purchase on their own, it felt important to try my hand at the process so that I have direct knowledge of what's going on.

So far I've created and listed:

### A 1 of 1 video commemorating 3LAU's NFT auction:

[

20210227: 3LAU MAKES HISTORY | Foundation

@MG (Matt Galligan, b. 1984)The Internets, c. 2021Mixed media This moment captures 3LAU’s groundbreaking and record-setting NFT auction of his album Ultravio…

![](https://foundation.app/apple-touch-icon.png)Foundation

![](https://image.mux.com/OMADVJFIbR7At4Lhb00iRQabo0210200y3t75Yp1IjpiOPQ/thumbnail.jpg)
](https://foundation.app/mg/20210227-3lau-makes-history-1790)

### A cheeky set of old school 16x16 favicons with modern themes:

Each favicon is a 1 of 100. [Check out the collection here](https://app.rarible.com/favicons)
![](__GHOST_URL__/content/images/2021/03/CleanShot-2021-03-03-at-07.32.02@2x.png)

## What's newly enabled by this stuff?

The fact that these NFTs exist in digital space, with their sale and transfer governed by software, means that they can be embued with some really interesting characteristics. Entirely new things that aren't possible in the "real world" will be enabled here.

1. When minted, **it's possible to set a royalty fee for subsequent transfers **of the token. This is a groundbreaking change because it means that artists and purveyors of other digital goods can continue to reap the rewards of an object after it's left their hands. So while an artist getting off the ground may only sell a piece for a small sum, should they get popular later on, they can still earn a percentage of subsequent sales. e.g. when [a Beeple piece was sold for $6.6M](https://cointelegraph.com/news/beeple-nft-sells-for-record-6-6m-as-bidding-for-everydays-at-christie-s-hits-2-2m), Beeple himself received $660,000 with no additional effort. Incredible.
2. As underscored above, the mere concept of digital scarcity is extremely new—with countless possibilities that I couldn't even begin to enumerate here. This will open up whole new worlds of functionality and interesting behavior for digital objects.
3. Someone's wallet address acts as both their personal collection, and verifiable proof of ownership of a given asset or assets. Therefore it's conceivable that your wallet address could be used as a wholly owned and sovereign, decentralized authentication method to identify onesself (so long as the keys are retained…which can certainly be an issue). Simply the existance of a "membership token" in ones wallet would be verifiable proof of their membership, requiring no centralized authority to confirm.
4. Direct transfer between two parties that otherwise do not need to know or understand anything about each other, while trusting the transaction will still go through. It's impossible to trust an unknown party you may be transacting with on Craigslist, but Ethereum enables transfer without having to trust the other party at all.

> The novelty of this moment is not lost on me: just had my first NFT sale to someone I _don’t know_ whose identity is just an address. Whatever their motivation, I didn’t even have to meet this person to buy the piece and that’s really freaking cool.[https://t.co/Kvs4CDkp4k](https://t.co/Kvs4CDkp4k) > &mdash; Matt Galligan (@mg) [March 3, 2021](https://twitter.com/mg/status/1366916581519990785?ref_src=twsrc%5Etfw)

While I later found out who the buyer for this NFT was, it was incredible to me that I didn't need to or have any idea at the time of sale, yet it went off without a hitch

## Wrapping up…

Though this space has been slowly building for years now, the interest and fervor around it has just begun. With every day that passes there seems to be some new development—and it's overwhelming to take it all in. I will continue to write more on the subject when new and interesting things come about, as I truly believe that we're at the beginning of something special here—a sea change in what's possible in the digital world.
