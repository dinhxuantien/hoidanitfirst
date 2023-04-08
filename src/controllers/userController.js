import userService from "../services/userService";

let handleLogin = async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parametter!'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    //check email exist
    //compare password
    //return user info
    //access token-jwt json token web
    return res.status(200).json({
        // message: 'hello world',
        // yourEmail: email,
        // yourPassword: password,
        // test: 'test'
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin
}