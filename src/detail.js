"use strict";

let template = Handlebars.templates['detail'];

let detailObj = {
    title: 'blup title',
    importance: 0,
    finDate: moment().format('YYYY-MM-DD')
};

$('#details').append(template(detailObj));
console.log(detailObj)

function save() {
    console.log('saving it');
    console.log(detailObj);
    console.log(template);
}

function setBoltClass(aClass, idx) {
    let bolts = $('.detail-importance').find('i');
    bolts.removeClass(aClass);
    for (let i = 0; i <= idx; i++) {
        $(bolts[i]).addClass(aClass);
    }

    if (aClass === 'active') {
        detailObj.importance = idx;
    }

}
