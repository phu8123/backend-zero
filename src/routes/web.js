const express = require('express');
const { getHomepage, getPhamPhu, postCreateNewUser, getCreatePage, getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleDestroyUser
} = require('../controllers/homeController');

const router = express.Router();

router.get('/', getHomepage);

router.get('/phamphu', getPhamPhu);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateNewUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postHandleDestroyUser);

module.exports = router;