# Font Awesome Icon Scraper
Compile a JSON array of Font Awesome icons for the fontawesomeSubset script

## Installation
```shell
yarn add https://github.com/cremadesign/fontawesome-scraper
```

## Usage
Run via your favorite task runner:

```js
// Import fontawesome-scraper
import iconScraper from '@cremadesign/fontawesome-scraper';

// Grab icons asynchronously from a list of folders
var icons = await iconScraper({
	folders: [
		'www'
	]
});

// Do something with the final results!
console.log(icons);
```
