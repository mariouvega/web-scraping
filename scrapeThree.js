const request = require('request');
const cheerio = require('cheerio');

const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// WRITE HEADERS
writeStream.write(`Title,Link,Date \n`);

request('https://www.webscraper.io/test-sites/e-commerce/allinone', (error, response, html) => {
	
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html)

		const jumbotron = $('.jumbotron')
		// console.log(jumbotron.html())
		// console.log(jumbotron.text())

		const heading = jumbotron.find('h1').text()
		const headingTwo = jumbotron.find('h1').next().text()
		const paragraph = jumbotron.children('p').text()
		console.log(heading)
		console.log(headingTwo)
		console.log(paragraph)

		// 	const title = $(el).find('.post-title').text().replace(/\s\s+/g, '')
		// 	const link = $(el).find('a').attr('href')
		// 	const date = $(el).find('.post-date').text().replace(/,/, '')
			
		// 	// WRITE ROW TO CSV
		// 	writeStream.write(`${title}, ${link}, ${date} \n`)
		// 	console.log('Scraping Complete...')

	}

});
