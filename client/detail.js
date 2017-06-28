"use strict";

class Note {
    constructor(id, title, importance, targetDate, createDate) {
        this.id = id || null;
        this.title = title || '';
        this.importance = importance || 0;
        this.targetDate = targetDate || ExuUtils.getEndOfDayMoment();
        this.createDate = createDate || moment();
    }
}

class DetailView {
    constructor() {
        this.template = Handlebars.templates['detail'];
        $( document ).ready(() => {
            this.eleTitle = document.getElementsByClassName('detail-title');
            this.eleContent = document.getElementsByClassName('detail-content');
            this.eleTarget = document.getElementsByClassName('detail-target-date');
        });
    };

    initAll(detailObj) {
        $('#details').append(this.template(detailObj));
        this.setBoltClass('active', detailObj.importance);
    }

    getTitle() {
        return this.eleTitle[0].value;
    }

    getContent() {
        return this.eleContent[0].value;
    }

    getTargetDate() {
        return this.eleTarget[0].value;
    }

    getImportance() {
        return this.importance;
    }

    setBoltClass(aClass, idx) {
        let bolts = $('.detail-importance').find('i');
        bolts.removeClass(aClass);
        for (let i = 0; i <= idx; i++) {
            $(bolts[i]).addClass(aClass);
        }

        if (aClass === 'active') {
            this.importance = idx;
        }
    }
}

class DetailCtrl  {
    constructor(detailView) {
        this.detailView = detailView;
        this.detailObj = new Note();

        $( document ).ready(() => {
            const urlId = ExuUtils.getUrlParams()['id'];
            document.getElementsByTagName('body')[0].attributes.class.value += ' ' + localStorage.getItem('design');
            if (urlId) {
                NotesStorage.get(urlId).then((data) => {
                    if (data) {
                        this.detailObj = data;
                    }
                    this.detailView.initAll(this.detailObj);
                });
            } else {
                this.detailView.initAll(this.detailObj);
            }
        });
    }




    checkEntries() {
        let fieldNames = [];
        if (!this.detailObj.title) {
            fieldNames.push('Title');
        }
        if (!this.detailObj.content) {
            fieldNames.push('Beschreibung');
        }

        if (!this.detailObj.targetDate) {
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

    updateObjFromView () {
        this.detailObj.title      = this.detailView.getTitle();
        this.detailObj.content    = this.detailView.getContent();
        this.detailObj.targetDate = this.detailView.getTargetDate();
        this.detailObj.importance = this.detailView.getImportance();
    }

    save() {
        this.updateObjFromView();
        if (!this.checkEntries()) return;

        NotesStorage.store(this.detailObj);
        location.href='index.html';
    }
}

const detailView = new DetailView();
const detailCtrl = new DetailCtrl(detailView);

