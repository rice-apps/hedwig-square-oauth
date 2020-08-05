# Front-end onboarding of Hedwig vendors

This is the frontend which directs Hedwig vendors to the Square OAuth access page per the Square OAuth guidelines.

## Basic workflow

The vendor will click on the Square OAuth link on the `/onboard` route. They are then asked to approve our permission
access, and is redirected to the `/receive` route which is provided with the access code to request refresh token
for the merchant.

## Getting started

Clone this repository.

```
$ git clone <REPO URL>
```

Install dependencies using `yarn`.

```
$ cd <REPO DIRECTORY>
$ yarn install
```

Obtain a copy of the `.env` file from the Hedwig team leads. Make sure the Cloudflare Worker is running, and start the application.

```
$ yarn start
```

Please create a feature branch. Do not push your code to master, which will be used for production and emergency bugfixes.
