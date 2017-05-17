/**
 * Created by Chris on 17.05.17.
 */
"use strict";
var mainDiv = document.getElementById('main');
var designSelect = document.getElementById('designSelect');
var oldClass = '';
console.log('I am here')
function sort(sortField) {
    console.log('sort the', sortField);
}

function setMainDesign() {
    var aClass = designSelect.options[designSelect.selectedIndex].value;
    mainDiv.attributes.class.value.replace(oldClass, aClass);
    oldClass = aClass;
    mainDiv.attributes.class.value += ' ' + aClass;
    console.log(mainDiv.attributes.class.value);
}

setMainDesign();
