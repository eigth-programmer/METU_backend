const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { TaxController } = require('../entities/tax/infraestructure/tax-controller');

const router = express.Router();
const controller = new TaxController();

// @TODO sanitize parameters
router.post('/', checkAuth, roleAuth, (req, res) => {
    controller.create({
        name: req.body.name,
        amount: req.body.amount
    })
        .then(tax =>{
            return res.status(200).json({tax: tax});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register tax'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(taxes => {
            if(taxes.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({taxes: taxes});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

router.delete('/:id', checkAuth, roleAuth, (req, res)=>{
    controller
        .delete()
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete tax'});
        });
});

module.exports = router;