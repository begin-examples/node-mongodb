const arc = require('@architect/functions')
const arcStatic = href => arc.static(href, { stagePath: false })

module.exports = function Head() {
    return `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <meta name="theme-color" content="#132865">
      <meta name="msapplication-TileColor" content="#132865">
      <link rel="stylesheet" type="text/css" href="${arcStatic('stylesheet.css')}">
      <title>Todos</title>
    </head>
    `
}
