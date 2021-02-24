export function debounce(func, wait, immediate) {
  let timeout

  return function () {
    let context = this,
      args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`
  return formattedDate
}

export function formatCategories(categories) {
  let formatted = ""
  for (let i = 0; i < categories.length; i++) {
    let seperator = categories[i + 1] ? ", " : ""
    formatted += `${categories[i]}${seperator}`
  }
  return formatted
}
