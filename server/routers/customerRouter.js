const connection = require('../dbconfig/config')
const express = require('express')
const router = express.Router()

/**
 *  MIDDLEWARE FUNCTIONS
 * 
 * authCheck -> Bu middleware function kullanici ile alakali gelen api sorgusunda jsonwebtoken ile olusturulmus
 * ve database'e kaydedilmis token kontrolu ile authentication check yapilir.
 * 
 * dataCacheCheck -> Bumiddleware function kullanici ile gelen api sorgusunda redis ile expiration olmamis data'yi
 * database'e sorgu atmadan daha onceden cekilmis ise kullaniciya geri vermek icin yapiliyor.
 */


/**
 *  BU KISIM SORUNUN ICINDE OLMADIGI ICIN EKLENMEDI
 * 
 * log in               X 
 * register             X create and send account   X
 * log out              X
 * update_profile       X
 * delete_profile       X delete account    X
 * delete_other_users   X
 * authentication_check X
 */

router.get('/getCustomerInfo/:phoneNumber',/*authCheck,*//*dataCacheCheck,*/async (req,res)=>{
    const phoneNumber = req.params.phoneNumber
    if (!phoneNumber){return res.status(400).json({msg:'Lutfen uygun telefona numarasi giriniz.'})}
    try {
        connection.query('SELECT * FROM subscription WHERE phoneNumber="'+phoneNumber+'"',(err,result)=>{
            if (err){throw err}
            if (!result){return res.status(403).json({msg:'Belirtilen telefona ait kayıt bulunamamıştır.'})}
            res.status(200).json({sublist:result})
        })
    } catch (error) {
        res.status(500).json({msg:'Sunucu hatası. Lütfen tekrar deneyin."'})
    }
})

module.exports = router