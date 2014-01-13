# Craft Base

Boilerplate for development of Craft powered website. Designed to have a development area automated with Grunt that compiles to Craft's `public` folder.

## How to
1. Download Craft Base
2. [Download Craft](http://buildwithcraft.com/)
3. [Install Craft](http://buildwithcraft.com/docs/installing) inside this project
4. Ready for development!

__Optional:__ add [Base12](http://cballenar.github.io/base12/) by replacing the `sass` folder in `dev/source/`

At this point we do not handle the PHP side with Grunt — not sure if it's even possible — so you will need to run MAMP, or your preferred server software, to work with Craft.

Your project folder should look as follows after installation:

```
project/
	craft/
	dev/
	public/
	Gruntfile.js
	package.json
```


## Features
- Development area automated with [Grunt](gruntjs.com)
	- `grunt default` compiles files and fires up a server under `dev/build/` for testing of static pages
	- `grunt build` compiles files to `dev/build` and copies them to `public/assets/` for use in Craft
	- Compiles SASS for development and production
	- Compiles JADE for testing of static pages in server
	- Javascript minification
	- Concatenates files under `js/plugins/*.js` to `js/plugins.js`
	- Development server watches for file file changes and autoreloads
- Craft's `db.php` and `general.php` configured fol multiple environments. These don't copy automatically.
