// Register
let stepMenuOne = document.querySelector('.formbold-step-menu1')
        let stepMenuTwo = document.querySelector('.formbold-step-menu2')
        let stepMenuThree = document.querySelector('.formbold-step-menu3')
      
        let stepOne = document.querySelector('.formbold-form-step-1')
        let stepTwo = document.querySelector('.formbold-form-step-2')
        let stepThree = document.querySelector('.formbold-form-step-3')
      
        let formBackBtn = document.querySelector('.formbold-back-btn')
        let formNextBtn = document.querySelector('formbold-next-btn')
        
        formNextBtn.addEventListener("click", function(event){
          event.preventDefault()
          if(stepMenuOne.className == 'formbold-step-menu1 active') {
              event.preventDefault()
      
              stepMenuOne.classList.remove('active')
              stepMenuTwo.classList.add('active')
      
              stepOne.classList.remove('active')
              stepTwo.classList.add('active')
      
              formBackBtn.classList.add('active')
              formNextBtn.classList.add('active')
              formBackBtn.addEventListener("click", function (event) {
                event.preventDefault()
      
                stepMenuOne.classList.add('active')
                stepMenuTwo.classList.remove('active')
      
                stepOne.classList.add('active')
                stepTwo.classList.remove('active')
      
                formBackBtn.classList.remove('active')
              })
      
            } else if(stepMenuTwo.className == 'formbold-step-menu2 active') {
              event.preventDefault()
      
              stepMenuTwo.classList.remove('active')
              stepMenuThree.classList.add('active')
      
              stepTwo.classList.remove('active')
              stepThree.classList.add('active')
      
              formBackBtn.classList.remove('active')
              formSubmitBtn.textContent = 'Submit'
            } else if(stepMenuThree.className == 'formbold-step-menu3 active') {
              document.querySelector('form').submit()
            }
        })


        // let stepMenuOne = document.querySelector('.formbold-step-menu1')
//   let stepMenuTwo = document.querySelector('.formbold-step-menu2')
//   let stepMenuThree = document.querySelector('.formbold-step-menu3')

//   let stepOne = document.querySelector('.formbold-form-step-1')
//   let stepTwo = document.querySelector('.formbold-form-step-2')
//   let stepThree = document.querySelector('.formbold-form-step-3')

//   let formSubmitBtn = document.querySelector('.formbold-btn')
//   let formBackBtn = document.querySelector('.formbold-back-btn')

//   formSubmitBtn.addEventListener("click", function(event){
//     event.preventDefault()
//     if(stepMenuOne.className == 'formbold-step-menu1 active') {
//         event.preventDefault()

//         stepMenuOne.classList.remove('active')
//         stepMenuTwo.classList.add('active')

//         stepOne.classList.remove('active')
//         stepTwo.classList.add('active')

//         formBackBtn.classList.add('active')
//         formBackBtn.addEventListener("click", function (event) {
//           event.preventDefault()

//           stepMenuOne.classList.add('active')
//           stepMenuTwo.classList.remove('active')

//           stepOne.classList.add('active')
//           stepTwo.classList.remove('active')

//           formBackBtn.classList.remove('active')

//         })

//       } else if(stepMenuTwo.className == 'formbold-step-menu2 active') {
//         event.preventDefault()

//         stepMenuTwo.classList.remove('active')
//         stepMenuThree.classList.add('active')

//         stepTwo.classList.remove('active')
//         stepThree.classList.add('active')

//         formBackBtn.classList.remove('active')
//         formSubmitBtn.textContent = 'Submit'
//       } else if(stepMenuThree.className == 'formbold-step-menu3 active') {
//         document.querySelector('form').submit()
//       }
//   })
