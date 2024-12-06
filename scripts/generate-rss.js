const fs = require('fs')
const path = require('path')
const { generateRssFeed } = require('../lib/feed')

async function generate() {
  const feed = await generateRssFeed()
  
  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

generate() 