# Gridsome Starter Sanity Akarui

Akarui is a Gridsome starter that helps you get up and running with Sanity.io.

The design was inspired by [Fabrx's Bright kit](https://fabrx.co/brightkit/).

## Overview

Akarui features the following:

- Sanity.io GraphQL data fetching via gridsome-source-sanity plugin
- Tailwind CSS
- Local images downloaded from Sanity via @noxify/gridsome-plugin-remote-image (temporary solution)
- Dark and light theme (saved in local storage and auto detected on first load)

## Installation

The following instructions assume you already have [Yarn](https://classic.yarnpkg.com/en/), [Sanity](https://www.sanity.io/docs/getting-started-with-sanity-cli), and the [Gridsome CLI](https://gridsome.org/docs/#how-to-install) installed.

1. Clone the repo or click on the ["Use this template" button](https://github.com/arturoalviar/gridsome-starter-sanity-akarui/generate) then install dependencies

```
git clone https://github.com/arturoalviar/gridsome-starter-sanity-akarui.git

cd gridsome-starter-sanity-akarui

yarn

```

2. Setup Sanity Studio Akarui

```
cd sanity-studio-akarui

yarn

sanity init

# Select project to use: Create new project
# Your project name: Whatever you like!
# Use the default dataset configuration? Y
```

After that, you should see a success message. If you take a look at your sanity.json file, you will notice the newly added api property that contains your projectId and dataset values.

Next, you should deploy your graphQL schema (this is done from the akarui-sanity directory):

```
sanity graphql deploy

# feel free to enable the graphQL playground
```

Your graphQL schema should now be deployed. After that, you can now log into your studio and fiddle around with your CMS.

```
# this is done from the akarui-sanity directory

sanity start
```

You should see the message

```
Content Studio successfully compiled! Go to http://localhost:3333
```

Click on the link and log into your studio. Once logged in, you should be routed to the desk page where you can start creating content.

If you want to have your studio hosted on Sanity, you can deploy your Sanity instance with the following:

```
sanity deploy
```

**Every time you update your Sanity schema, make sure to run `sanity deploy` followed by `sanity graphql deploy`, otherwise your newly added documents will not be fetched. **

### Configuring Akarui and your Sanity project

Rename the `.env-example` file to `.env` and set SANITY_PROJECT_ID to be your projectId and SANITY_DATASET to be your production value.

##### Optional

If you want your dataset to be private or if you want to enable drafts, you will need a token. The token can be generated in your Sanity dashboard under Settings > API > Tokens.

After you generate the token, set SANITY_TOKEN to the token in your .env file.

## Start developing

After setting up, you can start developing!

```
yarn start
```

#### Sanity watchMode

By default, `watchMode` is enabled during development via the [gridsome-source-sanity plugin](https://gridsome.org/plugins/gridsome-source-sanity). This allows you to make live edits in your Sanity studio and have them immediately updated locally without the need to restart your local server. Images will also be updated but they will be tempoaraly sourced from the Sanity CDN rather than locally. Once you restart your local server, the images will be avaiable locally.
