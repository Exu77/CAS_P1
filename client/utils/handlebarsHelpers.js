'use strict';

Handlebars.registerHelper("getBoltClass", (importance, idx) => {
    if (importance < idx) {
        return '';
    } else {
        return 'active';
    }
});

Handlebars.registerHelper("fromNow", (aDate) => {
    return moment(aDate).fromNow();
});

Handlebars.registerHelper("inputDate", (aDate) => {
    return moment(aDate).format('YYYY-MM-DDTHH:mm:ss');
});