/**
 * Created by Chris on 17.05.17.
 */
"use strict";
let mainDiv = document.getElementsByTagName('body')[0];
let designSelect = document.getElementById('designSelect');
let oldClass = localStorage.getItem('design');
let allNotes = JSON.parse(localStorage.getItem('allNotes'));
let notes = allNotes;
let noteSortArr = new SimpleSortArray(notes);
let showFinished = false;
const template = Handlebars.templates['list'];
let eleResultList;

if (!oldClass) {
    oldClass = 'design1';
    localStorage.setItem('design', oldClass);
}
$(document).ready(function() {
    eleResultList = $('#resultList');
    designSelect.value = oldClass;
    console.log(allNotes);
    setMainDesign();
    filterFinished();
    sort('targetDate');
    refreshData();
});

function refreshData() {
    eleResultList.empty();
    eleResultList.append(template({notes}));
}

function sort(sortField) {
    notes = noteSortArr.sort(sortField);
    refreshData();
}

function setShowFinished() {
    showFinished = !showFinished;
    filterFinished();
}

function filterFinished() {
    if (showFinished) {
        notes = allNotes;
    } else {
        notes = allNotes.filter((val) => {
            return !val.done;
        })
    }

    noteSortArr.aArray = notes;
    notes = noteSortArr.sort();
    refreshData();
}

function setMainDesign() {
    let aClass = designSelect.options[designSelect.selectedIndex].value;
    let actualClass = mainDiv.attributes.class.value.replace(oldClass, '');
    oldClass = aClass;
    mainDiv.attributes.class.value = actualClass + ' ' + aClass;
    console.log('setMain', actualClass, ' x ', mainDiv.attributes.class.value);
    localStorage.setItem('design', aClass);
}

function setFinished(id) {
    const finished = $('#' + id).find('#finCheck')[0].checked;
    let found = false;
    for (let i = 0;i < allNotes.length && !found; i++) {
        if (allNotes[i].id == id) {
            found = true;
            allNotes[i].done = finished
            if (finished) {
                allNotes[i].finishDate =  moment().format('YYYY-MM-DD');
            } else {
                allNotes[i].finishDate = null;
            }
        }
    }

    localStorage.setItem('allNotes', JSON.stringify(allNotes));
}