/**
 * Created by Chris on 14.06.17.
 */
class ExuUtils {
    static getUrlParams() {
        let result = {};
        const params = location.search.substr(1).split('&');
        for (let idx in params) {
            let pair = params[idx].split('=');
            result[pair[0]] = pair[1]
        }

        return result;
    }

    static getEndOfDayMoment(aMoment) {
        const result =  moment(aMoment).endOf('day');
        console.log(result.format('DD-MM-YYYY HH:mm:ss'));
        return result;
    }
}
