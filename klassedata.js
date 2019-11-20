'use strict';
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

//Event handler for fortune button - tests responseText
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("./modules/example3.json", txtHandler);
}

//ajax load event puts received text onto the dom into the dom
let txtHandler = function(e) {
    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    //loop that prints the data from example3.json into table in HTML
    for (let i = 0; i < obj.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let id = document.createTextNode(`${obj[i].id}`);
    td1.appendChild(id);
    let td2 = document.createElement("td");
    let fName = document.createTextNode(`${obj[i].fName}`);
    td2.appendChild(fName);
    let td3 = document.createElement("td");
    let lName = document.createTextNode(`${obj[i].lName}`);
    td3.appendChild(lName);
    let td4 = document.createElement("td");
    let email = document.createTextNode(`${obj[i].email}`);
    td4.appendChild(email);
    let td5 = document.createElement("td");
    let Birthday = document.createTextNode(`${obj[i].Birthday}`);
    td5.appendChild(Birthday);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    $("data").appendChild(tr);
    }
                                                
};                                               

//Click button
let showStarter = function () {
    $("getData").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);
