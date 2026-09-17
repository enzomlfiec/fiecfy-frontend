/* eslint-disable no-unused-vars */
function localStorageData(action,key = "",content= "") {
    if(action.toLowerCase() == "read" || action.toLowerCase() == "r"){
        return localStorage.getItem(key)
    }
    localStorage.setItem(key, content)
}