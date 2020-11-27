let requester = new XMLHttpRequest()

requester.open('GET', 'http://127.0.0.1:5500/data/datas.json')
requester.responseType = 'json'
requester.send()

requester.onload = () => {console.log(requester.response)}