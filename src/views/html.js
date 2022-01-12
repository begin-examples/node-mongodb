const arc = require('@architect/functions')
const arcStatic = href => arc.static(href, { stagePath: false })

const Head = require('./head')
const Symbols = require('./symbols')

module.exports = function html() {
    return `
    <!DOCTYPE html>
    <html lang="en">

    ${Head()}

    <body class="
        height-100
        background
        overflow-y-scroll
        overflow-x-hidden
      ">
      ${Symbols()}
      <div class="
          min-height-100vh
          max-width-tablet
          margin-top-60vw
          margin-top-0-tablet
          margin-left-auto-tablet
          padding-right-24
          padding-left-24
          padding-right-72-tablet
          padding-left-72-tablet
          padding-bottom-16
          background-white
        ">
        <div class="
            position-sticky
            top-0
            margin-bottom-64
            padding-top-80
            padding-top-128-tablet
            background-white
          ">
          <div class="
              display-flex
              align-items-center
            ">
            <h1 class="
                color-grey
                font-size-3
                font-size-4-tablet
              ">
              Todos
            </h1>
          </div>
          <form action="/todos" method="POST" class="
              display-flex
              align-items-center
              background-white
            ">
            <h2 class="
                margin-right-1
                font-weight-normal
                color-grey
              ">
              +
            </h2>
            <input name="text" type="text" autofocus="autofocus" class="
                flex-grow-1
                font-size-1
                color-royal
                border-none
                line-height-64
                focus-outline-0
              " />
          </form>
          <hr class="height-1 background-grey border-none" />
        </div>
        <div id="js-message" class="
            max-width-192
            margin-auto
            text-align-center
            color-grey
          ">
        </div>
        <ul class="margin-bottom-32 list-style-none" id="js-todos">
        </ul>
        <h2 id="js-done-title" class="
            margin-bottom-16
            color-grey
            display-none
          ">
          Done
        </h2>
        <ul class="list-style-none" id="js-completed">
        </ul>
      </div>
      <div class="
          position-absolute
          top-16
          left-16
          display-flex
          align-items-center
          background-royal
          border-radius-pill
          cursor-pointer
        ">
        <a class="
            display-inline-flex
            padding-top-8
            padding-right-24
            padding-bottom-8
            padding-left-24
          " href="https://begin.com" target="_blank">
          <img src="${arcStatic('begin-lockup.svg')}" alt="Begin logo">
        </a>
      </div>
      <script type="text/javascript" src="${arcStatic('index.js')}"></script>
    </body>

    </html>
    `
}
