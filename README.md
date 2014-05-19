# Craft Base

Boilerplate for the development of Craft powered websites. Designed to have a development area automated with Grunt that compiles to Craft's `public` folder.

## How To Use It
1. Download __craft-base__
2. [Download Craft](http://buildwithcraft.com/)
3. [Install Craft](http://buildwithcraft.com/docs/installing) inside this project
4. Ready for development!

Your project folder should look as follows after installation:

```
project/
	craft/
	dev/
	public/
	Gruntfile.js
	package.json
```

### Optional add [Base12](http://cballenar.github.io/base12/)
If you'd like to try my SASS starter kit, just replace the `sass` folder in `dev/source/`.

## Features
- Development area automated with [Grunt](gruntjs.com)
	- `grunt default` compiles files and fires up a server under `build/` for testing static pages compiled from the `.jade` files
	- `grunt build` compiles and copies files to `public/` for use in Craft
	- Compiles SASS for development and production
	- Compiles JADE for testing static pages in grunt server
	- Javascript minification
	- Concatenates files under `js/plugins/*.js` to `js/plugins.js`
	- Development server watches for file changes and autoreloads them
- Includes Craft's `db.php` and `general.php` configured for multiple environments inside `dev/php/`. These don't copy automatically.

## Notes
At this point we do not handle any PHP with Grunt — not sure if it's even possible — so you will need to run MAMP, or your preferred server software, to work with Craft.