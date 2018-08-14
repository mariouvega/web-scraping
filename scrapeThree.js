const request = require('request');
const cheerio = require('cheerio');

const fs = require('fs');
const writeStream = fs.createWriteStream('postTwo.csv');

// WRITE HEADERS
// writeStream.write(`Name,Price,Rating \n`);

request('https://www.webscraper.io/test-sites/e-commerce/allinone/computers/tablets', (error, response, html) => {
	
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html)

		const jumbotron = $('.jumbotron')
		// console.log(jumbotron.html())
		// console.log(jumbotron.text())

		const heading = jumbotron.find('h1').text()
		const paragraph = jumbotron.children('p').text()
		// console.log(heading)
		// console.log(paragraph)



		$('.thumbnail').each((i,el) => {
			const name = $(el).find('.title').text()
			const price = $(el).find('.price').text().replace(/\$/, '')
			const rating = $(el).find('p').attr('rating')
			console.log(name, price, rating)

			// WRITE ROW TO CSV
			// writeStream.write(`${name}, ${price}, ${rating} \n`)
		})
			console.log('Scraping Complete...')



		// $('.title').each((i,el) => {
		// 	const name = $(el).text()
		// 	const link = $(el).attr('href')
		// 	console.log(name, link)
		// })

		// $('.price').each((i,el) => {
		// 	const price = $(el).text().replace(/\$/, '')
		// 	console.log(price)
		// })

		// 	const title = $(el).find('.post-title').text().replace(/\s\s+/g, '')
		// 	const link = $(el).find('a').attr('href')
		// 	const date = $(el).find('.post-date').text().replace(/,/, '')
			
		// 	// WRITE ROW TO CSV
		// 	writeStream.write(`${title}, ${link}, ${date} \n`)
		// 	console.log('Scraping Complete...')

	}

});
