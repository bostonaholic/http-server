# http-server

A simple HTTP server for accepting incoming requests

## Status

[![Node.js CI](https://github.com/bostonaholic/http-server/actions/workflows/node.js.yml/badge.svg)](https://github.com/bostonaholic/http-server/actions/workflows/node.js.yml)

## Development

Create local environment file:

```
$ cp .env.sample .env
```

Set up the service:

```
$ ./script/setup
```

Start the server:

```
$ ./script/server
```

## Usage

The `/` route will return a [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) response.

```
➜  ~ curl -I http://127.0.0.1:3000
HTTP/1.1 200 OK
X-Powered-By: Express
X-Request-Id: c30eb231-ad27-4bac-a8ac-68f2810ba491
Date: Thu, 30 Nov 2023 06:00:01 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

The `/respondWith/*` route will return whichever status code you pass. For example, `/respondWith/418` will return a [418 I'm a teapot](https://tools.ietf.org/html/rfc2324#section-2.3.2) response.

```
➜  ~ curl -I http://127.0.0.1:3000/respondWith/418
HTTP/1.1 418 I'm a Teapot
X-Powered-By: Express
X-Request-Id: ee15ee05-ff42-4dcd-8d3f-9504218c9ca9
Date: Thu, 30 Nov 2023 06:00:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

All HTTP methods are supported.

```
➜  ~ curl -I -X POST http://127.0.0.1:3000/respondWith/201
HTTP/1.1 201 Created
X-Powered-By: Express
X-Request-Id: 8eaf6a94-bd3a-4a35-8647-ce8d7b039914
Date: Thu, 30 Nov 2023 06:01:56 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

Pairs well with [ngrok](https://ngrok.com)

```
$ ngrok http 3000
```
