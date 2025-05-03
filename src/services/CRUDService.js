const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query(`select * from users`);

    return results;
}

const getUserById = async (userID) => {
    let [results, fields] = await connection.query(`select * from users where id = ?`, [userID]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserById = async (email, myname, city, userID) => {
    let [results, fields] = await connection.query(
        `UPDATE users SET email = ?,name = ? ,city =? WHERE id = ?`, [email, myname, city, userID]);
}
const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM users WHERE id = ?`, [id]);
}

module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById

}