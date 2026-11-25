function login(username, passwd){
    const userDB = [
        {id:"admin", pw: "1234"},
        {id:"user1", pw: "5678"},
        {id:"user2", pw: "91011"},
        {id:"user3", pw: "12131415"}
    ];

    const user = userDB.find(u=>u.id === username);

    if(user === undefined){
        throw new Error("유저가 존재하지 않습니다.");
    }
    if(passwd !== user.pw){
        throw new Error("비밀번호가 다릅니다.");
    }

    return `${username}님 로그인 성공!`

}

try {
        console.log(login("admin", "1234"));
        console.log(login("user1", "5678"));
        //console.log(login("ab","1234"));
        console.log(login("user2","1234"));
    } catch (error) {
        console.log(`로그인실패:${error.message}`);
    }