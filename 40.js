// objects inside array
//very useful in real world application

const info = [
    {userid:12121, username: "khushal", gender: "male"},
    {userid:12122, username: "dharmi", gender: "female"},
    {userid:12123, username: "ved", gender: "male"}
]


console.log(info.length)

    console.log(info);

    let user = 1;
    while( user < info.length){
        console.log(info[user])
        
        break;
    }

for(let user of info){
    console.log(user)
}