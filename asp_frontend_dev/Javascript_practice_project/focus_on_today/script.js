const checkboxList = document.querySelectorAll(".custom-checkbox")
const inputFields = document.querySelectorAll(".goal-input")
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalsFilled = [...inputFields].every((input) => {
      return input.value
    })

    if (allGoalsFilled) {
      checkbox.parentElement.classList.toggle("completed")
      progressValue.style.width = '33.3%'
    } else {
       progressBar.classList.add('show-error')
    }
  })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
       progressBar.classList.remove('show-error')
    })
})