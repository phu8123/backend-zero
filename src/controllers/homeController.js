const connection = require('../config/database');
const { use } = require('../routes/web');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results = await getAllUsers();

    return res.render('home.ejs', { listUsers: results });

}

const getPhamPhu = (req, res) => {
    res.render('sample.ejs')
}

const postCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    console.log("email", email, "myname", myname, "city", city);
    /* connection.query(
        `INSERT INTO Users(email,name,city)
    VALUES (?,?,?)`,
        [email, myname, city],
        function (err, results) {

            res.send('succeed')
        }
    ); */
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email,name,city) VALUES (?,?,?)`, [email, myname, city]);
    res.send('Create user succeed !')
}


const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);

    res.render('edit.ejs', { userEdit: user });
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let myname = req.body.myname;
    let city = req.body.city;
    let userID = req.body.userID;

    await updateUserById(email, myname, city, userID);

    // res.send('Updated user succeed !')
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('delete.ejs', { userEdit: user });
}

const postHandleDestroyUser = async (req, res) => {
    const id = req.body.userID;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    getHomepage, getPhamPhu, postCreateNewUser, getCreatePage,
    getUpdatePage, postUpdateUser, postDeleteUser, postHandleDestroyUser
}