const data = [{
    title: "Personal websites",
    hover: "Check out Tea's CV page as an example",
    url: "https://comsci.ml/Tea",
    classes: "highlight",
    width: 2,
    height: 1
  },
  {
    title: "JavaScript basics",
    hover: "Click here for installation instructions",
    url: "https://github.com/milestone-computer-science-society/js-practice",
    classes: "highlight",
    width: 1,
    height: 2
  },
  {
    title: "Join our Discord server",
    hover: "We help you with any programming question here",
    url: "https://discordapp.com/invite/9kehjGs",
    width: 2,
    height: 2,
    image: "assets/images/discord.png"
  },
  {
    title: "Join our Facebook group",
    hover: "Weekly events are announced here",
    url: "https://www.facebook.com/groups/577979165976152/",
    width: 1,
    height: 2,
    image: "assets/images/facebook.png"
  },
  {
    title: "Freecodecamp",
    hover: "Great free coding resources",
    url: "https://freecodecamp.org",
    width: 2,
    height: 1,
    image: ""
  },
  {
    title: "Hackernoon",
    hover: "Great programming-related articles",
    url: "https://hackernoon.com",
    width: 1,
    height: 1,
    image: ""
  },
  {
    title: "Our GitHub",
    hover: "All repositories are hosted here",
    url: "https://github.com/milestone-computer-science-society",
    width: 2,
    height: 2,
    image: "assets/images/github.png"
  },
  {
    title: "Arduino projects",
    hover: "All projects with code and schematics",
    url: "https://github.com/milestone-computer-science-society/arduino-projects",
    width: 2,
    height: 2,
    image: "assets/images/github.png"
  },
  {
    title: "Javascript examples",
    hover: "Example codes to learn the basics of JS and NodeJS",
    url: "https://github.com/milestone-computer-science-society/sessions",
    width: 2,
    height: 2,
    image: "assets/images/github.png"
  },
  {
    title: "Chat App",
    hover: "Available 24/7 - Send us a message!",
    url: "https://chat.comsci.ml",
    classes: "highlight",
    width: 2,
    height: 2,
    image: ""
  },
  {
    title: "Easy-polls",
    hover: "Create polls quickly",
    url: "https://polls.comsci.ml",
    classes: "highlight",
    width: 1,
    height: 1,
    image: "assets/images/easy-polls.png"
  },
  {
    title: "Download Atom",
    hover: "An open-source IDE",
    url: "https://atom.io",
    width: 1,
    height: 1,
    image: "assets/images/atom.png"
  },
  {
    title: "Download Node.JS",
    hover: "Runtime for JavaScript based on V8",
    url: "https://nodejs.org",
    width: 1,
    height: 1,
    image: "assets/images/nodejs.png"
  },
  {
    title: "Download MongoDB",
    hover: "An open-source IDE",
    url: "https://mongodb.com",
    width: 1,
    height: 1,
    image: "assets/images/mongodb.png"
  },
  {
    title: "Download Arduino IDE",
    hover: "An open-source IDE for working with Arduino boards",
    url: "https://arduino.cc",
    width: 1,
    height: 1,
    image: "assets/images/arduino.png"
  },
  {
    title: "Add ESP8266 to Arduino",
    hover: "Espressif's boards with WiFi and many other cool features",
    url: "https://github.com/esp8266/Arduino",
    width: 1,
    height: 1
  },
  {
    title: "Download Trello",
    hover: "Free (or paid) task management tool",
    url: "https://trello.com",
    width: 1,
    height: 1,
    image: "assets/images/trello.png"
  },
  {
    title: "Download GitHub Desktop",
    hover: "A graphical git client",
    url: "https://desktop.github.com",
    width: 1,
    height: 1,
    image: "assets/images/github_desktop.png"
  },
  {
    title: "DuckDuckGo",
    hover: "Has many productivity features, like !bangs",
    url: "https://duckduckgo.om",
    width: 1,
    height: 1,
    image: "assets/images/duckduckgo.png"
  },
  {
    title: "easydice",
    hover: "Dani's project on npm",
    url: "https://www.npmjs.com/package/easydice",
    width: 1,
    height: 1,
  },
  {
    title: "youcancontact.me",
    hover: "Create contact forms in a minute",
    url: "https://youcancontact.me",
    classes: "small",
    width: 1,
    height: 1,
  },
  {
    title: "President: Dániel Földi",
    hover: "LinkedIn",
    url: "https://www.linkedin.com/in/daniel-foldi/",
    classes: "dark",
    width: 1,
    height: 1
  },
  {
    title: "Vice-President: Tea Tóth",
    hover: "LinkedIn",
    url: "https://www.linkedin.com/in/tea-toth/",
    classes: "dark",
    width: 1,
    height: 1
  },
  {
    title: "Secretary: Hajnalka Kosztolányi",
    hover: "Facebook",
    url: "https://facebook.com/profile.php?id=100009033587475",
    classes: "dark",
    width: 1,
    height: 1
  }
]

$(() => {
  for (let item of data) {
    const css = {}
    if (item.image) {
      css.backgroundImage = `url(${item.image})`
      css.backgroundRepeat = 'no-repeat'
      css.backgroundSize = 'contain'
      css.backgroundPosition = 'center'
    }
    $("#rectangles")
      .append(
        $("<div>")
        .append($("<h2>").text(item.title))
        .attr("data-hover", item.hover).append($("<span>").addClass("background").css(css))
        .addClass("rectangle")
        .addClass(item.classes)
        .addClass(`w-${item.width}`)
        .addClass(`h-${item.height}`)
        .click(() => {
          open(item.url)
        })
      )
  }
})
