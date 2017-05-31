Handlebars.registerHelper("getBoltClass", (importance, idx) => {
    if (importance < idx) {
        return '';
    } else {
        return 'active';
    }
});