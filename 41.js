//nested destucturing


const info = [
    {userid:12121, username: "khushal", gender: "male"},
    {userid:12122, username: "dharmi", gender: "female"},
    {userid:12123, username: "ved", gender: "male"}
]

const [{userid : firstuserid} , ,{username : name}] = info
console.log(firstuserid)
console.log(name)


