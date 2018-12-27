# clear ip node library

client library for clear ip

## Installation

```bash
yarn add clearip
```

## usage

Get ip info:

```javascript
const Clearip = require("./package/dist/index");

const main = async () => {
  const clearIpClient = new Clearip.Client("api key here");

  const response = await clearIpClient.Ipinfo.getIpInfo("ip here");
  console.log(response);
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
