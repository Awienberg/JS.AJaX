'use strict';
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

//Event handler for fortune button - tests responseText
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("./modules/example2.json", txtHandler);
}

//ajax load event puts received text onto the dom into the dom
let txtHandler = function(e) {
    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    //loop that prints the data from example2.json into table in HTML
    for (let i = 0; i < obj.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let id = document.createTextNode(`${obj[i].id}`);
    td1.appendChild(id);
    let td2 = document.createElement("td");
    let city = document.createTextNode(`${obj[i].name}`);
    td2.appendChild(city);
    let td3 = document.createElement("td");
    let population = document.createTextNode(`${obj[i].population}`);
    td3.appendChild(population);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    $("new").appendChild(tr);
    }
                                                
};                                               

//Click button
let showStarter = function () {
    $("button").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);
