const { Router } = require('express');

const { userGet,
        userPut,
        userPost,
        userDelete,
        userPath } = require('../controllers/user');

const router = Router();

router.get('/', userGet );

router.put('/', userPut );

router.post('/', userPost );

router.delete('/', userDelete );

router.patch('/', userPath );

module.exports = router;

