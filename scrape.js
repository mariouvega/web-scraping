const request = require('request');
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		// here we used a $ as the var to make it seem like its jQuery
		const $ = cheerio.load(html)

		// here we are targetting an element with the class of site-heading
		const siteHeading = $('.site-heading')

		// console.log(siteHeading.html()) // will get ust the html and the tags as well
		// console.log(siteHeading.text()) // this will get us the text inside the element

		// this will look for an h1 tag and pull out the text within it. the two on top get the same thing.
		// const output = siteHeading.find('h1').text()
		// const output = siteHeading.children('h1').text()
		// const output = siteHeading.children('h1').next().text() // this will give us the following element because of the .next()
		// const output = siteHeading.children('h1').parent().text() // pretty much all jQuery stuff nothing new
		// console.log(output)

		
	}
});
