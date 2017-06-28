/**
 * Created by Chris on 17.05.17.
 */
"use strict";
let mainDiv = document.getElementsByTagName('body')[0];
let designSelect = document.getElementById('designSelect');
let oldClass = localStorage.getItem('design');
let allNotes = null;
let notes = allNotes;
let noteSorter = null;
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
    NotesStorage.getAll().then((data) => {
        allNotes = data;
        notes = allNotes;
        noteSorter = new SimpleSortWithTrigFilter(allNotes, (val) => {return !val.done}, true);
        sort('targetDate');
        refreshData();
    });
});

function setListButton() {

}

function refreshData() {
    notes = noteSorter.sort();
    eleResultList.empty();
    eleResultList.append(template({notes}));
    setListButton();
}

function sort(sortField) {
    notes = noteSorter.sort(sortField);
    refreshData();
}

function setShowFinished() {
    noteSorter.useFilter = !noteSorter.useFilter;
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
            NotesStorage.store(allNotes[i])
        }
    }

    refreshData();
}

function modifyNote(id, e) {
    console.log('modify ' + id)
    location.href='detail.html?id=' + id;
}


