"use strict";

let template = Handlebars.templates['detail'];

let detailObj = {
    id: null,
    title: '',
    importance: 0,
    targetDate: moment().format('YYYY-MM-DD'),
    createDate: moment().format('YYYY-MM-DD')
};


$( document ).ready(function() {
    const urlId = ExuUtils.getUrlParams()['id'];
    if (urlId) {
        const tempItem = TodoStorage.get(urlId);
        if (tempItem) {
            detailObj = tempItem;
        }
    }
    console.log(ExuUtils.getUrlParams())
    document.getElementsByTagName('body')[0].attributes.class.value += ' ' + localStorage.getItem('design');
    console.log(detailObj);
    initAll();
});

function setTitle() {
    console.log('set title ' + this.value)
    detailObj.title = (this.value);
}

function setContent() {
    console.log('set content ' + this.value)
    detailObj.content = (this.value);
}

function setBoltClass(aClass, idx) {
    console.log('settingBoltClsss', aClass, idx)
    let bolts = $('.detail-importance').find('i');
    bolts.removeClass(aClass);
    for (let i = 0; i <= idx; i++) {
        $(bolts[i]).addClass(aClass);
    }

    if (aClass === 'active') {
        detailObj.importance = idx;
    }

}

function setTargetDate() {
    detailObj.targetDate = (this.value);
}

function initAll() {
    $('#details').append(template(detailObj));

    var eleTitle = document.getElementsByClassName('detail-title');
    eleTitle[0].onchange = setTitle;


    var eleContent = document.getElementsByClassName('detail-content');
    eleContent[0].onchange = setContent;


    var eleTarget = document.getElementsByClassName('detail-target-date');
    eleTarget[0].onchange = setTargetDate;

    setBoltClass('active', detailObj.importance);
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

    TodoStorage.store(detailObj);
    //location.href='index.html';
}
