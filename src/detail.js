"use strict";

let template = Handlebars.templates['detail'];

let detailObj = {
    id: moment().format('x'),
    title: '',
    importance: 0,
    targetDate: moment().format('YYYY-MM-DD'),
    createDate: moment().format('YYYY-MM-DD')
};


$( document ).ready(function() {
    setBoltClass('active', detailObj.importance);
    document.getElementsByTagName('body')[0].attributes.class.value += ' ' + localStorage.getItem('design');
});

$('#details').append(template(detailObj));
console.log(detailObj)

var eleTitle = document.getElementsByClassName('detail-title');
eleTitle[0].onchange = setTitle;
function setTitle() {
    console.log('set title ' + this.value)
    detailObj.title = (this.value);
}

var eleContent = document.getElementsByClassName('detail-content');
eleContent[0].onchange = setContent;
function setContent() {
    console.log('set content ' + this.value)
    detailObj.content = (this.value);
}

var eleTarget = document.getElementsByClassName('detail-target-date');
eleTarget[0].onchange = setTargetDate;
function setTargetDate() {
    detailObj.targetDate = (this.value);
}

function setBoltClass(aClass, idx) {
    console.log('settingBoltClsss', aClass, idx )
    let bolts = $('.detail-importance').find('i');
    bolts.removeClass(aClass);
    for (let i = 0; i <= idx; i++) {
        $(bolts[i]).addClass(aClass);
    }

    if (aClass === 'active') {
        detailObj.importance = idx;
    }

}

function checkEntries() {
    let fieldNames = [];
    if (!detailObj.title) {
        fieldNames.push('Title');
    }
    if (!detailObj.content) {
        fieldNames.push('Beschreibung');
    }

    if (!detailObj.targetDate) {
        fieldNames.push('Erledigt bis');
    }

    if (fieldNames.length > 0) {
        const fldTxt = fieldNames.toString();
        const musstFieldError = `Bitte fülle die folgenden Felder aus: ${fldTxt}`;
        window.alert(musstFieldError);
        return false;
    }

    return true;
}

function save() {
    console.log('checking it');
    console.log(detailObj);
    if (!checkEntries()) return;

    // Retrieve the object from storage
    var allNotes = JSON.parse(localStorage.getItem('allNotes'));
    if(!allNotes) {
        console.log('init all Notes')
        allNotes = []
    }

    console.log('allNotes')
    console.log(allNotes)
    allNotes.push(detailObj);


    // Put the object into storage
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    location.href='index.html';
}
