# LogViewerAPI

**LogViewerAPI** is an Express-based API that allows you to deploy it on servers or any hosting environment of your choice. It is designed to help you retrieve and view `.log` files, making it a valuable tool for monitoring, debugging, and analyzing log data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieve and view `.log` files remotely through a RESTful API.
- Flexible deployment options to suit your server or hosting environment.
- Supports various log file formats and sizes.
- Access control and security features to protect log data.
- Easy integration with existing monitoring and analysis tools.

## Installation

To deploy LogViewerAPI, follow these steps:

1. Clone this repository on your server or hosting environment.

```bash
git clone https://github.com//logViewerAPI.git
```

2. Navigate to the project directory.

```bash
cd logViewerAPI
```

3. Install the required dependencies (make sure you have Node.js and npm installed).

```bash
npm install
```

4. Configure API settings as needed (e.g., log file directory, access control).

 ```
    #PORT API
    PORT=3000
    #Path of files .log
    PATHLOG=/var/log/tomcat/
 ```

5. Start the API server.

```bash
npm start
```

The API should now be running on your specified server or hosting environment.

## Usage

Once LogViewerAPI is deployed, you can start using it to access `.log` files. Here's a basic example of how to retrieve log data using a GET request:

```http
GET /  ==> show all files .log on that path
GET /download/:name ==> Send file 
```

This request will return the contents of the `mylog.log` file in the specified log file directory.

## Examples

Here's an example of how to use LogViewerAPI to retrieve log data in Node.js:

```javascript
const axios = require("axios");

// Specify the API endpoint and log file name
const apiEndpoint = "https://your-api-domain.com/";
const logFilename = "mylog.log";

// Send a GET request to retrieve log data
axios
  .get(`${apiEndpoint}`)
  .then((response) => {
    if (response.status === 200) {
      const logData = response.data;
      console.log(logData);
    } else {
      console.error(`Failed to retrieve log data. Status code: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error("Error making the request:", error);
  });


//GET request to download file log data
axios
  .get(`${apiEndpoint}?filename=${logFilename}`)
  .then((response) => {
    if (response.status === 200) {
      const logData = response.data;
      console.log(logData);
    } else {
      console.error(`Failed to retrieve log data. Status code: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error("Error making the request:", error);
  });
```

## Contributing

We welcome contributions from the community. If you have ideas, improvements, or bug fixes, please open an issue or create a pull request on our [GitHub repository](https://github.com/your-username/logViewerAPI).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.