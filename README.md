# Logger endpoints API
> Express API Logger: A lightweight npm package for easy integration of request and response logging in Express applications, providing valuable insights into API activity and performance.

<br>

## Installation
You can install the package using npm. Run the following command:

```
npm i logger-endpoints-api
```

<br>

## Usage
basic usage

```js
const express = require('express');
const app = express();
const logger = require('logger-endpoints-api');

// ... Your Express app setup ...

// Add the logger middleware before your routes
app.use(logger);

// ... Your routes and other middleware ...

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

<br>

## Output
Example in Express application

<p align="center">
<img src="https://github.com/PedroFnseca/logger-endpoints-api/assets/97262778/4d4f22a9-29fa-412c-a4ed-2734cb1e6ddf">
</p>

