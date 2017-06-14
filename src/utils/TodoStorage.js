"use strict"

class TodoStorage {

    static getAllItems() {
        return JSON.parse(localStorage.getItem('allNotes'));
    }

    static setAllItems(allNotes) {
        localStorage.setItem('allNotes', JSON.stringify(allNotes));
    }

    static getItem(id) {
        let allNotes = this.getAllItems();
        if(!allNotes) {
            return null;
        }

        for (let idx in allNotes) {
            if (allNotes[idx].id === id) {
                return allNotes[idx];
            }
        }

        return null;
    }

    static addItem(aItem) {
        let allNotes = this.getAllItems();
        let found = false;
        if(!allNotes) {
            allNotes = []
        }

        for (let idx in allNotes) {
            if (allNotes[idx].id === aItem.id) {
                found = true;
                allNotes[idx] = aItem;
            }
        }

        if (!found) allNotes.push(detailObj);

        this.setAllItems(allNotes);
    }
}
