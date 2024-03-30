"use strict"

// Slide
let list = document.querySelector(".slide .list")
let items = document.querySelectorAll(".slide .list .item")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const submitBtn = document.getElementById("submitBtn")

let active = 0
let lengthItems = items.length - 1

if (submitBtn) {
  let stepMenuOne = document.querySelector(".formbold-step-menu1")
  let stepMenuTwo = document.querySelector(".formbold-step-menu2")
  let stepMenuThree = document.querySelector(".formbold-step-menu3")

  let stepOne = document.querySelector(".formbold-form-step-1")
  let stepTwo = document.querySelector(".formbold-form-step-2")
  let stepThree = document.querySelector(".formbold-form-step-3")

  let formSubmitBtn = document.querySelector(".formbold-btn")
  let formBackBtn = document.querySelector(".formbold-back-btn")

  formSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (stepMenuOne.className == "formbold-step-menu1 active") {
      event.preventDefault()

      stepMenuOne.classList.remove("active")
      stepMenuTwo.classList.add("active")

      stepOne.classList.remove("active")
      stepTwo.classList.add("active")

      formBackBtn.classList.add("active")
      formBackBtn.addEventListener("click", function (event) {
        event.preventDefault()

        stepMenuOne.classList.add("active")
        stepMenuTwo.classList.remove("active")

        stepOne.classList.add("active")
        stepTwo.classList.remove("active")

        formBackBtn.classList.remove("active")
      })
    } else if (stepMenuTwo.className == "formbold-step-menu2 active") {
      event.preventDefault()

      stepMenuTwo.classList.remove("active")
      stepMenuThree.classList.add("active")

      stepTwo.classList.remove("active")
      stepThree.classList.add("active")

      formBackBtn.classList.remove("active")
      formSubmitBtn.textContent = "Submit"
    } else if (stepMenuThree.className == "formbold-step-menu3 active") {
      document.querySelector("form").submit()
    }
  })
}

next.onclick = function () {
  console.log("Next")
  if (active + 1 > lengthItems) {
    active = 0
  } else {
    active = active + 1
  }
  reloadSlide()
}

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems
  } else {
    active = active - 1
  }
  reloadSlide()
}

let refreshSlide = setInterval(() => {
  next.click()
}, 5000)
function reloadSlide() {
  console.log("It runs in slider")

  let checkLeft = items[active].offsetLeft
  list.style.left = -checkLeft + "px"
  clearInterval(refreshSlide)
  refreshSlide = setInterval(() => {
    next.click()
  }, 5000)
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let selector = ".nav__link"
    let elems = Array.from(document.querySelectorAll(selector))
    let navigation = document.querySelector("nav")

    function makeActive(evt) {
      let target = evt.target

      if (!target || !target.matches(selector)) {
        return
      }

      elems.forEach((elem) => elem.classList.remove("active"))

      evt.target.classList.add("active")
    }

    navigation.addEventListener("mousedown", makeActive)
  },
  true
)