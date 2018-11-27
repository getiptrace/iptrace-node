# clear ip node library

client library for clear ip

## Installation

```bash
yarn add clearip
```

## usage

```javascript
const { getIpInfo } = require("clearip");

const main = async () => {
  
  const response = await getIpInfo("ip address here", "api key here");

  console.log(response);
  
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
