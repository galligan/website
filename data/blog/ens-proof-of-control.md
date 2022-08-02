---
title: 'A decentralized method for proving ownership and control of social accounts'
date: '2022-08-02'
tags: ['crypto', 'web3', 'ideas']
draft: false
images: ['/static/images/ens-proof-of-control/github-claim.png']
summary: Using off-the-shelf solutions to self-verify and prove ownership and control over social media handles and URLs.
---

In recent months we've seen a huge rise of scams targeting crypto projects where an actor on social media purports themselves be someone they are not. More specifically, projects like Moonbirds saw countless Twitter profiles claiming to be a founder or the project itself—and worse yet, [these profiles were verified](https://thenextweb.com/news/twitter-verified-profiles-moonbirds-nft-scam). This was made possible by a hacker hijacking a legitimate verified profile, and then changing the display name, avatar, and bio to appear as though they are the legitimate project or associated person.

As a co-founder of a web3 project, this freaks me out.

~~What if~~ [when] someone creates a fake social media profile of [XMTP](https://twitter.com/xmtp_), myself, my co-founder Shane, or anyone associated with the project, with the intent of defrauding someone, I can't help but feel partially responsible. Obviously it would be no fault of our own, but just by sheer association, if someone were harmed by such a thing, that would certainly make me feel terrible.

So this left me thinking about solutions. There _has_ to be a way to start building up defenses for this sort of scam.

## Early ideas and concerns…

In thinking through possible solutions many either seemed:

- Too centralized: reliant on a singular authority to verify, maintain, enforce, and abolish bad actors
  - This is pretty much what Twitter already does today—and we've already seen how this is problematic
- Too costly: creating a new, independent authority to certify and police verification
  - Seems impossible to keep afloat—how in the world would it get funded??
- Too slow: too much harm can be inflicted before bad actors can be taken down
  - As we've already seen many times, unsuspecting victims can be easily harmed before they can notice, or any official resource or authority can warn of a scam

## Possible solution

This left me wondering if it was possible to create a method of **self-verification** that could also be **sufficiently decentralized**—as in wouldn't rely on just a handful of companies to make such a thing possible. Through a bit of experimentation, it became clear that there may be a solution—one that starts by leveraging [ENS](https://ens.domains), the Ethereum Name System. At least for the web3 community, this seemed like a great fit.

What follows is a sort-of [verifiable credential](https://en.wikipedia.org/wiki/Verifiable_credentials). I'm not as up-to-speed with their specific format, so what I describe below is more of a proof-of-concept. If you're familiar with VC formats and your interest is piqued by the concept below, [DM me](https://twitter.com/mg) and let's chat about it!

### What's ENS?

ENS, like its Web 1.0/2.0 sibling DNS, is a means to translate difficult to remember strings into something more human-readable. With DNS we have `mattgalligan.com` instead of `151.101.67.7`. And with ENS we can have `matt.galligan.eth` instead of `0x2b0D29fFA81fa6Bf35D31db7C3bc11a5913B45ef`. There's plenty more to ENS though, which [this post](https://www.ledger.com/academy/what-is-ethereum-name-service-ens) does a great job of digging into.

For the purposes of this thought experiment, we're going to focus on the records within an ENS domain, which are similar to DNS records in that each can describe the association of the domain to another service or entity.

By default ENS supports adding things like a Twitter profile, to easily associate it with the domain. But that alone doesn't prove that the ENS domain holder actually owns or controls said Twitter profile…it's just a reference. In fact, a spoofer could still establish an ENS domain that contains otherwise legitimate account references, so that inspired me to explore something that was more secure and verifiable.

### Domain-based Account Authentication (DAuth)

In taking inspiration from [DMARC](https://en.wikipedia.org/wiki/DMARC), the DNS-based email authentication protocol. With DMARC, you establish a specific email provider from within the DNS record, so that emails sent that might spoof the domain may get rejected, because they can't be authenticated.

This concept that I call "**Domain-based Account Authentication**" or **DAuth** for short, uses a similar records-based attestation proving ownership or control of something outside of ENS.

DAuth is simple: it establishes that someone is currently in control of a given `domain name` and an associated `service account`, each association represented by a unique TXT record in an ENS domain. With this proof of control established, solutions could be built into browsers or browser extensions, wallets, apps, and websites to warn users that they may be interacting with a fraudulent account or website.

### Specification design

- The system MUST enable someone to create their own proofs without requiring a third-party to be involved
- The system SHOULD allow for proofs to be made simply, and without requiring new tools beyond what is already available (ENS, and Ethereum signatures)
- The system MUST record proofs in a decentralized manner\*
  - This is why ENS is a great candidate
- The proofs MUST be examinable directly with existing tools
  - e.g. how we are able to look up a DNS record
- The system SHOULD incur a cost to establish the proof\*
  - This is to discourage bad actors looking to create confusion
  - In the below example, the cost is expressed in registration of the DNS domain within ENS, and gas fees incurred from changing records

\* _Note these specific parts would be unique to this implementation, and augment a verifiable credential_

### Definitions

- `DAuth`: Domain-based Account Authentication
- `claim`: An assertion of control over a given set of accounts
- `claim data`: JSON-formatted data that will be used for the claim
- `proof`: An immutable and verifiable claim
- `record`: Arbitrary key-value text data associated with a domain, in this case a TXT record within an ENS domain

## How does it work?

### Step 1: Establishing a DNS domain name with ENS

The first step is to register a DNS domain inside of ENS. By doing this, the attestations would be available to the traditional web and Ethereum, on-chain.

To set up my domain `galligan.xyz` I followed [this guide](https://docs.ens.domains/dns-registrar-guide). Basically it establishes the account that you'll register the ENS domain with from within a DNS record. In my case that looked like:

| Type  | Name   | Content                                        |
| ----- | ------ | ---------------------------------------------- |
| `TXT` | `_ens` | `a=0x3B29Ad23f65b5dC3846E6a8CC38F2139fBF6eE1C` |

The `0x3B…eE1C` in the record was the account that I was registering the ENS name with.

Setting this up requires an Ethereum transaction that's a non-trivial cost because of the computation required. In my case the [transaction](https://etherscan.io/tx/0x906c96d9d809755a46e79ca7d77b8e434c89cb2b5315f2393f90523dd550f93c) cost ~0.1466 ETH or $288.53 at the time.

Once the transaction was complete, I could now set up records for `galligan.xyz` from within ENS.

## Step 2: Constructing the claims

Next, I wanted to come up with a syntax for how to describe the content I wanted to prove. I settled on the following key-value pairs:

### Claim syntax

- `domain`: the ENS domain that will be used (e.g. `galligan.xyz`)
- `controller`: the ETH address that was the controller of the ENS domain (the account that may edit the records of a name)
- `service`: the name of the service I'm proving an identity for (e.g. `github`, `twitter`, etc.)
- `id`: the user ID for the service's user account, usually accessible by the service's API
- `username`: the username for the service's user account

Note that both `id` and `username` are present. This is because while `id` remains consistent, the `username` may change. If either changes within the service, we should consider the proof as no longer viable.

### Example claims

Putting the above keys together with my unique values, and formatting them with JSON, results in what we can call `claim data`. Note that the `claim` is not a `proof` until it has been signed with the account mentioned within the claim, or hashed and published in an immutable way.

Here is an example of claim data connecting my domain, and **GitHub** account:

```json
{
  "domain": "galligan.xyz",
  "controller": "0x3b29ad23f65b5dc3846e6a8cc38f2139fbf6ee1c",
  "service": "github",
  "id": "25037981",
  "username": "galligan"
}
```

In the above example, I use lowercase for all characters as otherwise when we go to sign or hash the data, it would be inconsistent with the same data with varying letter cases.

As another example, here is my **Twitter** claim data:

```json
{
  "domain": "galligan.xyz",
  "controller": "0x3b29ad23f65b5dc3846e6a8cc38f2139fbf6ee1c",
  "service": "twitter",
  "id": "607",
  "username": "mg"
}
```

### Hashing or signing claim data

Depending on where it will be posted, we either want to hash the claim data, or sign it with the Ethereum account listed as controller. Which method we use depends on if the underlying content is immutable (not editable) on the service it's published to. For example:

| Service | Editable                | Method    |
| ------- | ----------------------- | --------- |
| Twitter | Tweets are not editable | Hash      |
| GitHub  | Gists are editable      | Signature |

By hashing or signing the content of the claim data, we can know that its content is genuine, as any change to the underlying data would result in a different hash.

#### Hashing the claim

To hash the claim contents, I chose the [Kekkak-256](https://monerodocs.org/cryptography/keccak-256/) cryptographic hash function, which is [what Ethereum uses](https://monerodocs.org/cryptography/keccak-256/).

Hashing the above Twitter example with Keccak-256 results in the following:

`67f1c93e330422331bffe6f03a7dd3d157f19fe8f96e4bdeba4007a75570387b`

If we took the above Twitter claim data, and changed the domain to `gаlligan.xyz` by swapping the Latin letter `a` to the Cyrillic `a` it would result in a very different hash:

`7c7db469d267e8417a02d4aeb17b3c248ac4c8c21f9777729df15387fbf3e3e7`

What would have otherwise been indistinguishable to people looking at the domain, would be shown to be plainly different in the hash.

#### Signing the claim

To sign the GitHub claim, we use an Ethereum signature, which also uses Keccak-256 and can be easily made with [MyCrypto's Sign Message tool](https://app.mycrypto.com/sign-message).

I signed the above GitHub claim with the same Ethereum account shown as the domain's controller (`0x3B…eE1C`), which resulted in the following:

```json
{
  "address": "0x3B29Ad23f65b5dC3846E6a8CC38F2139fBF6eE1C",
  "msg": "{\n  \"domain\": \"galligan.xyz\",\n  \"controller\": \"0x3b29ad23f65b5dc3846e6a8cc38f2139fbf6ee1c\",\n  \"service\": \"github\",\n  \"id\": \"25037981\",\n  \"username\": \"galligan\"\n}",
  "sig": "0x7b0f670ca32b4828c5c75184a51f5164da47a3407c9585cfebe17186f211232459792379345e8a7d05188660adb39605547709d28078402b3d5f7d94e6e013a400",
  "version": "2"
}
```

You can verify the above signature by pasting it into [MyCrypto's Verify Message tool](https://app.mycrypto.com/verify-message). Here's what that looks like:

![Screenshot of verify message](/static/images/ens-proof-of-control/mycrypto-verify.png)

## Step 3: Recording the Claims

Claims are published on the respective services that they are referring to. An association of a domain and Twitter account would be published to Twitter.

The content of the claims should have some consistency, at least on a per-service basis, so that anyone verifying the claims at a later date may attain the correct information. Presumably, applications could be developed to verify these claims on behalf of a user or service.

### Posting a claim to Twitter

Tweets are immutable in that once they are posted they cannot be edited. (This assumes that if a feature to edit tweets emerges in the future, we would at least be able to see its version history and verify the original easily.)

This immutability makes it easy to establish a claim with no signature required, just a hash.

As an example, [here is the claim](https://twitter.com/mg/status/1526323515149910018) that I published to Twitter:

![Twitter claim](/static/images/ens-proof-of-control/twitter-claim.png)

As mentioned above, you can see the claim hash within the tweet.

### Posting a claim to GitHub

Once the claim in the above example has been signed with the ENS Controller's Ethereum account, it can be [posted as a GitHub Gist](https://gist.github.com/galligan/4e2c1fbad609a82834fa57127b134ee6).

![GitHub claim](/static/images/ens-proof-of-control/github-claim.png)

GitHub Gists are editable, so this is why we rely on the Ethereum signature to prove that the claimer was in control at the time of publishing the claim.

Once the claim has been published, we can now consider this a `proof`.

## Step 4: Adding the proofs to ENS

Now that we have established the proofs on Twitter and GitHub, we can reference them within an ENS text record as the final step.

### Adding proofs as text records

Head to the Details section within the ENS app. Here you'll find the list of current records, and a means to add/edit them.

Since DAuth is an entirely new concept, like DMARC we are going to take advantage of the flexibility of the TXT record to add the proofs into ENS. To do this we will click on the `add record` affordance and set up a new record that looks like one of the following:

| Record | Key                 | Value                                                             |
| ------ | ------------------- | ----------------------------------------------------------------- |
| TXT    | `com.twitter.proof` | https://twitter.com/mg/status/1526323515149910018                 |
| TXT    | `com.github.proof`  | https://gist.github.com/galligan/4e2c1fbad609a82834fa57127b134ee6 |

By adding these records, we have now established a direct link between the ENS domain (`galligan.eth`), the Ethereum account currently set as its controller (`0x3B…eE1C`), and the various proofs (`mg` on Twitter, and `galligan` on GitHub).

### Why is this better than the current ENS social media fields?

ENS allows for controllers to add their Twitter, GitHub, and additional usernames to their domains. However, in doing so there is no verification that the domain controller is also in control of the social accounts, which is what the claims and proofs take care of.

By using the proof method, we're able to know that there is an unforgeable link between all of the various disparate parts of this exploration.

## Making use of the proofs

With the proof records added to the ENS domain, other parties can now read them to reference and verify the data.

### Off-the-shelf verification

The claim/proofs above were nothing too fancy to create, and the goal is that reading them is just as straightforward with only off-the-shelf tools. As mentioned above, it's possible to use [MyCrypto's Verify Message tool](https://app.mycrypto.com/verify-message), but Etherscan's takes it a step further by allowing [publishing of the verification](https://etherscan.io/verifySig/8312) (seen below).

![Claim verification with Etherscan](/static/images/ens-proof-of-control/etherscan-verification.png)

### Indexing the records

As described above, DAuth records within an ENS domain are merely pointers to content elsewhere. An additional useful step would be for a service to also index the content of the proofs, such that it could be quickly referenced and verified. This would be faster and more convenient than always needing to do multiple queries to read the data.

### Search all domains attached to a social account

Presuming the indexer above exists, the DAuth records could be searched to identify all legitimate ENS domains associated with an account. This would be helpful for tools that might try to prevent phishing—there would always be a system of record of knowing what's real vs. fake.

### Browser extensions that help present and verify proofs

One possible expression of these proofs being used is to make a browser extension that can actively present these records on websites, such as Twitter.

Imagine another kind of "verified" badge next to a handle or URL that would indicate a proof of ownership and control. This kind of thing might give users peace of mind that they're interacting with a legitimate identifier or URL.

Similarly, it could actively look for likely spoofed or fraudulent URLs and call them out so as to prevent accidental interaction.

## Extending this solution

The instructions above are merely a proof-of-concept at this point, and while the examples listed are focused on Twitter and GitHub, it's easily conceivable that the idea could extend to other use cases easily.

The easiest addition to see would be supporting multiple social media accounts on the same service. Presumably this would be as simple as just posting more proofs.

Going further, I could see ENS become a hub for **[Decentralized Identifiers](https://www.w3.org/2022/07/pressrelease-did-rec.html.en)** based on a similar spec as described above.

## Conclusion

Experimenting with this kind of self-verification was really eye-opening. It showed me that it's possible for users to independently prove something, which can be easily verified by others, without requiring any special tooling or intermediaries.

In a world where it seems like everything requires third parties to vouch for the authenticity of something, it's really fascinating to see that the tools are already at our disposal to find an alternate path.

Now, I wouldn't at all suspect that most would go through the trouble, or even have the technical background to accomplish the above. But it stands to reason that very simple apps with easy-to-use UI could be built that gets to the same result…and that kind of thing could be powerful.

Should this type of self-verified data become more prolific, the web might end up with a straightforward, credible, and decentralized approach to preventing fraud, scams, and phishing. Now that's something I'd really love to see.å
