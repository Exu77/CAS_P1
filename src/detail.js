"use strict";

let template = Handlebars.templates['detail'];

let detailObj = {
    title: 'blup title',
    bla: 'bla value',
    finDate: moment().format('YYYY-MM-DD')
};

$('#details').append(template(detailObj));
console.log(detailObj)

function save() {
    console.log('saving it');
    console.log(detailObj);
    console.log(template);
}
