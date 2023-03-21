const { rejects } = require('assert')
var fs = require('fs')
const { resolve } = require('path')

const readUser = async (data) => {
    let existData = await readUserData()

    if (existData === "null")
        dumpUser([data])
    else
        dumpUser([...existData,data])

}

const dumpUser = async (data) => {
    fs.writeFile('dummy.json', JSON.stringify(data), 'utf8', (err) => {
        console.log("added user")
    })
}

const readUserData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('dummy.json', 'utf8', (err, data) => {
            if (err)
                return reject(err)
            
            if (data === "")
                return resolve("null")
            else
                return resolve(JSON.parse(data))
        })
    })
}

const veryfyUser = async (email, username, password) => {
    let checked = false
    let data = await readUserData().then((arr)=>{
        return arr
    })
    data.forEach(arr => {
        if ( (arr['email'] === email || arr['username'] === username) && arr['password'] === password ){
            checked = true
        }
    })
    return checked
}

const checkUser = async (email) => {
    let checked = false
    let data = await readUserData().then((arr)=>{
        return arr
    })
    data.forEach(arr => {
        if ( arr['email'] === email ){
            checked = true
        }
    })
    console.log(checked)
    return checked
}

module.exports = {
    readUser,
    readUserData,
    veryfyUser,
    checkUser
}