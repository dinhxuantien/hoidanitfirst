let getHomePage = (req, res) => {
    // return res.send("Hello wourld from controller");
    return res.render('homepage.ejs');
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
// Object:{
//     key: '',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}