/**
 * Created by Chris on 17.05.17.
 */
"use strict";
let mainDiv = document.getElementById('main');
let designSelect = document.getElementById('designSelect');
let oldClass = '';

console.log('I am here')
function sort(sortField) {
    console.log('sort the', sortField);
}

function setMainDesign() {
    let aClass = designSelect.options[designSelect.selectedIndex].value;
    mainDiv.attributes.class.value.replace(oldClass, aClass);
    oldClass = aClass;
    mainDiv.attributes.class.value += ' ' + aClass;
    console.log(mainDiv.attributes.class.value);
}

setMainDesign();
