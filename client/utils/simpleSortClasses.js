'use strict'
class SimpleSort {
    constructor(aArray) {
        this.aArray = aArray;
        this.lastSortField = null;
        this.lastIsAsc = true;

    }

    /**
     * sorts an array after a value of the fieldName, first tiem ascending next time descending
     * @param sortField name of the value to sort, if it is empty the last search will repeated
     * @returns the sorted array
     */
    sort (sortField) {
        let isAsc = true;
        if (sortField == null) {
            if (this.lastSortField == null) {
                return this.aArray;
            } else {
                sortField = this.lastSortField;
                isAsc = this.lastIsAsc;
            }
        } else {
            // Ändert die sortierrichtung
            if (this.lastSortField === sortField) {
                isAsc = !this.lastIsAsc;
            }
            this.lastSortField = sortField;
            this.lastIsAsc = isAsc;
        }

        return this.aArray.sort((a,b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];
            let result = 0;
            if (aVal < bVal || (aVal != null && bVal == null)) {
                result = -1;
            } else if (aVal > bVal || (bVal != null && aVal == null)) {
                result = 1;
            }

            if (!isAsc) {
                result *= -1;
            };

            return result;
        });
    }
}

class SimpleSortWithTrigFilter extends SimpleSort {
    constructor (origArray, filterFunc, useFilter) {
        super(origArray);
        this.useFilter = useFilter;
        this.filterFunc = filterFunc;
        this.origArray = origArray;
    }

    filter() {
        if(this.useFilter) {
            return this.origArray.filter(this.filterFunc);
        } else {
            return this.origArray;
        }
    }

    sort(sortField) {
        super.aArray = this.filter();
        return super.sort(sortField);
    }
}