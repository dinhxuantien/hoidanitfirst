import userService from "../services/userService";

let handleLogin = async (req, res) => {

    let email = req.body.email;/// api transfer sang
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parametter!'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    console.log(userData)
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
let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //all, signle
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []

        }
        )
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}
let handleCreateNewUsers = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
}
let handleEditUsers = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(req.body);
    return res.status(200).json(message);
}
let handleDeleteUsers = async (req, res) => {
    if (!req.body.id) {  // ! khac null
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing required parameter!'
        })
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUsers: handleCreateNewUsers,
    handleEditUsers: handleEditUsers,
    handleDeleteUsers: handleDeleteUsers,

}