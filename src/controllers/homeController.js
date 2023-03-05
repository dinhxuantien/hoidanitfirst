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
// Object:{
//     key: '',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}