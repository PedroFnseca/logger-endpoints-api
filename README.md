<div align="center">

[![npm version](https://img.shields.io/npm/v/logger-endpoints-api.svg?style=plastic&logo=npm)](https://www.npmjs.org/package/logger-endpoints-api)
[![Npm package total downloads](https://badgen.net/npm/dt/logger-endpoints-api)](https://npmjs.com/package/logger-endpoints-api)
[![Npm package monthly downloads](https://badgen.net/npm/dm/logger-endpoints-api)](https://npmjs.com/package/logger-endpoints-api)
[![GitHub stars](https://img.shields.io/github/stars/PedroFnseca/logger-endpoints-api?style=social)](https://github.com/PedroFnseca/logger-endpoints-api/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/PedroFnseca/logger-endpoints-api)](https://github.com/PedroFnseca/logger-endpoints-api/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/PedroFnseca/logger-endpoints-api)](https://github.com/PedroFnseca/logger-endpoints-api/commits/main)

</div>

# Logger Endpoints API - Logging Middleware for Express

> A lightweight and efficient package for automatically logging requests and responses in Express applications, providing valuable insights into API performance and activity.

<br>

## Installation

To install the package, run the following command:

```sh
npm install logger-endpoints-api
```

## Usage

Basic integration with an Express server:

```js
const express = require('express');
const logger = require('logger-endpoints-api');

const app = express();

// Add the logger middleware before defining routes
app.use(logger);

// Route definition
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```


---

## Output Example

<p align="center">
  <img src="https://github.com/PedroFnseca/logger-endpoints-api/assets/97262778/4d4f22a9-29fa-412c-a4ed-2734cb1e6ddf">
</p>

> **Note:** The actual output may vary depending on the application's requests and responses.

## Key Benefits

- [x] Automatic logging of requests and responses
- [x] Easy integration with Express applications
- [x] Detailed insights into API activity
- [x] Lightweight and high-performance code
- [x] Enhanced transparency in API monitoring

Maintain full visibility over your APIs with **Logger Endpoints API**.
