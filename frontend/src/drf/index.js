export default class DRFApi {
    constructor (address) {
        this.address = address
        this.headers = {'Content-Type': 'application/json'}
        this.receivers = [];
        this.getReceivers();
    }
    addReceiver (name, address) {
        this.makeRequest(
            'POST',
            'add',
            {
                'name': name,
                'address': address
            }
        )
        this.getReceivers();
    }
    sendMessage (subject, body) {
        this.makeRequest(
            'POST',
            'send',
            {
                'subject': subject,
                'body': body
            }
        )
    }
    getReceivers () {
        fetch(
            this.address + 'receivers',
            {
                method: 'GET',
                headers: this.headers
            }
        ).then(response => response.json()).then(data => this.receivers = data)
    }
    makeRequest (method, url, body = null) {
        let opt = {
            method: method,
            headers: this.headers
        }
        if (body !== null) {
            opt['body'] = JSON.stringify(body)
        }
        fetch(this.address + url, opt)
            .then(response => response.json())
            .then(data => { return data; })
    }
}