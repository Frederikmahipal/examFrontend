import { renderTemplate, setActive, showPage } from "./utils.js"


import {CyclistHandler, getCyclists, deleteCyclist} from "./js-for-pages/cyclists.js"


function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)
  switch (id) {
    case "page-cyclists": {
      CyclistHandler()
      getCyclists()
      break
    }
    }
  }

document.getElementById("menu").onclick = renderMenuItems;

showPage("page-about")