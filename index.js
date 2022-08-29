/*/
	Font Awesome Icon Scraper
	Stephen Ginn at Crema Design Studio
/*/

import extend from 'extend';
import { exec } from 'child_process';

export default async function iconScraper(options) {
	var settings = extend(true, {
		regex: 'fa[A-z]{0,1},? .?fa-[A-z-]+',
		mapping: {
			fa: 'solid',
			fas: 'solid',
			far: 'regular',
			fal: 'light',
			fad: 'duotone',
			fab: 'brands'
		},
		folders: [
			'./'
		]
	}, options);

	var folders = settings.folders.map(dir => `"${dir}"`).join(' '),
		icons = {},
		cmd = `egrep -roh "${settings.regex}" ${folders} | sort -u`;

	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				reject(error);
				return;
			}

			var output = stdout.trim().replace(/,|\./g, ''),
				lines = output.split('\n').map(line => line.split(' '));

			// Add icons to respective keys
			lines.forEach(([key, val], i) => {
				var style = settings.mapping[key],
					val = val.replace('fa-', '');

				if (! icons[style]) icons[style] = [];

				icons[style] = [].concat(icons[style], val).sort();
			});

			// Delete empty items
			for (const key in icons) {
				if (icons[key].length == 0) delete icons[key];
			}

			resolve(icons);
		});
	});
}
