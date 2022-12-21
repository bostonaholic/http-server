# http-server

A simple HTTP server for accepting incoming requests

## Status

[![CircleCI](https://circleci.com/gh/bostonaholic/http-server.svg?style=svg)](https://circleci.com/gh/bostonaholic/http-server)

## Development

Bootstrap the service:

```
$ ./script/bootstrapp
```

Start the server:

```
$ ./script/server
```

## Usage

The `/` route will return a [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) response.

The `/respondWith/*` route will return whichever status code you pass. For example, `/respondWith/418` will return a [418 I'm a teapot](https://tools.ietf.org/html/rfc2324#section-2.3.2) response.

All HTTP methods are supported.

Pairs well with [ngrok](https://ngrok.com)

```
$ ngrok http 3000
```
