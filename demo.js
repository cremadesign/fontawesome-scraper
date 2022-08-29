import { fontawesomeSubset } from "fontawesome-subset";
import iconScraper from './index.js';

var icons = await iconScraper({
	folders: [
		'www'
	]
});

console.log(icons);

fontawesomeSubset(icons, 'www/webfonts');
