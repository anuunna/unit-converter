/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function round(num) {
    return Math.round(num * 1000) / 1000
}

convertBtn.addEventListener ("click", function() {
    const value = Number(inputEl.value)
    console.log(value)
    lengthEl.textContent = `${value} meters = ${round(value * 3.281)} feet | 
                            ${value} feet = ${round(value / 3.281)} meters`
    volumeEl.textContent = `${value} liter = ${round(value * 0.264)} gallon | 
                            ${value} gallon = ${round(value / 0.264)} liter`
    massEl.textContent = `${value} kilogram = ${round(value * 2.204)} pound | 
                            ${value} pound = ${round(value / 2.204)} kilogram`
})
