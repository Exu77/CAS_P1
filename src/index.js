/**
 * Created by Chris on 17.05.17.
 */
"use strict";
let mainDiv = document.getElementsByTagName('body')[0];
let designSelect = document.getElementById('designSelect');
let oldClass = localStorage.getItem('design');
console.log('design at start ' + oldClass)
if (!oldClass) {
    oldClass = 'design2';
    console.log('settingStorage')
    localStorage.setItem('design', oldClass);
}
$(document).ready(function() {
    designSelect.value = oldClass;
    console.log( "ready!", designSelect.selectedIndex, oldClass, ' :: ', designSelect.value);
    setMainDesign();
});

console.log('I am here')
function sort(sortField) {
    console.log('sort the', sortField);
}

function setMainDesign() {
    let aClass = designSelect.options[designSelect.selectedIndex].value;
    let actualClass = mainDiv.attributes.class.value.replace(oldClass, '');
    oldClass = aClass;
    mainDiv.attributes.class.value = actualClass + ' ' + aClass;
    console.log('setMain', actualClass, ' x ', mainDiv.attributes.class.value);
    localStorage.setItem('design', aClass);
}