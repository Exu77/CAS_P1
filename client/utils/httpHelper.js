/**
 * Created by Chris on 23.06.17.
 */
class HttpHelper {
    static get(url) {
        return HttpHelper.ajax('GET', url, null, null);
    }

    static post(url, data) {
        return HttpHelper.ajax('POST', url, data, null);
    }

    static delete(url) {
        return HttpHelper.ajax('DELETE', url, null, null);
    }

    static ajax(metod, url, data, headers) {
        const httpObj = {
            dataType: "json",
            contentType: "application/json",
            headers: headers,
            method: metod,
            url: url
        };

        if (data) {
            httpObj['data'] =  JSON.stringify(data);
        }

        console.log('http Req')
        console.log(httpObj)

        return $.ajax(httpObj);
    }
}
