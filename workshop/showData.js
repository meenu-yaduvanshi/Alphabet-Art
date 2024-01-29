const url = window.location.href;
const paramString = url.split("?")[1]
const queryString = new URLSearchParams(paramString)
let queryObj = {};
for (let pair of queryString.entries()) {
    queryObj[pair[0]] = pair[1]
}

const dataDate = document.querySelector(".date")
const dataType = document.querySelector(".type")
const dataFees = document.querySelector(".fees")

dataDate.innerHTML = `${queryObj.date}`
dataType.innerHTML = `${queryObj.type}`
dataFees.innerHTML = `Fees:- &#8377; ${queryObj.fees}`

