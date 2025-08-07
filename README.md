# cryptonoise.org website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

## Deployment

The site is hosted on the same server as the Chatmail Relay. Rsync the build directory to /var/www/html.