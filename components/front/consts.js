var consts = {
  mainNav: [
    {
      to: "home", text: "Lobby"
    },
    {
      to: "exhibition", text: "Exhibition"
    },
    {
      dropdown: true, text: "Info", links: [
      {
        to: "about", text: "Who are we"
      },
      {
        to: "news", text: "News"
      },
      {
        to: "legal", text: "Legal"
      },
      {
        to: "links", text: "Links"
      }
    ]},
    {
      dropdown: true, text: "Contact", links: [
      {
        to: "feedback", text: "Feedback"
      },
      {
        to: "register", text: "Register a company"
      }
    ]}
  ]
};

module.exports = consts;


