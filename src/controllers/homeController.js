import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    // return res.send("Hello wourld from controller");
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs',
            { data: JSON.stringify(data) });

    } catch (e) {

        console.log(e);
    }

}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('CRUD.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------------');
    console.log(data);
    console.log('----------------------');
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoBodyId(userId);
        //Check user data not found
        console.log('------------------------')
        console.log(userData)
        console.log('------------------------')
        return res.render('editCRUD.ejs', {
            user: userData
            // user: bien cua view
        });

    } else {
        return res.send('User not found');
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;// lay data from editCRUD
    let allUsers = await CRUDService.updateUserData(data);
    // return res.send('update Done!');
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('delete the User Succeed')
    } else {
        return res.send('User not found')
    }

}
// Object:{
//     key: '',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}