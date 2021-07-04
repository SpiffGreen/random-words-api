## Random-Words-API

### Description
Get random words of any length using this api

### API
`/data`: This endpoint simply returns a random string

`/data?number=n`: Using the number parameter will return an array of random words of n length, where n is an integer.

`/all`: This endpoint returns all the documents data in the shop.


### Sample Response
```js
fetch("/data?number=3")
    .then(res => res.json())
    .then(data => console.log(data));
```
Possible Output:
```json
["profuse","deranged","bomb"]
```
### Installation
Run
```sh
$ npm install
```
### License
MIT