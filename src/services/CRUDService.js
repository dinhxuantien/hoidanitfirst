import bcrypt from 'bcryptjs';
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPaswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPaswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phonenumber: data.phonenumber,
            })
            resolve('oke create a new user succed')
        } catch (e) {
            reject(e);
        }
    })

    // console.log('data from service')
    // console.log(data)
    // console.log(hashPaswordFromBcrypt)
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPasword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPasword);
        } catch (e) {
            reject(e);
        }


    })
}

module.exports = {
    createNewUser: createNewUser
}