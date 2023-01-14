const info = {
    name: 'abc',
    age: 18
}


type Method = 'GET' | 'POST'
function request(url: string, method: Method) {

}


// type RequestType = {
//     url: string,
//     method: Method
// }
// const options: RequestType = {
//     url: 'wwww',
//     method: 'POST'
// }


// const options = {
//     url: 'wwww',
//     method: 'POST'
// }

const options = {
    url: 'wwww',
    method: 'POST'
} as const

// request(options.url, options.method)
// request(options.url, options.method as Method)
request(options.url, options.method)