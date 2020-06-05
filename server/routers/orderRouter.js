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
 * make payment     X
 * check basket     X
 * buy products     X
 */

router.post('/getSubscriptionOrders',/*authCheck,*//*dataCacheCheck,*/async (req,res)=>{
    const phoneNumber = req.body.phoneNumber
    if (!phoneNumber){return res.status(400).json({msg:'Lutfen uygun telefona numarasi giriniz.'})}
    try {
        connection.query('SELECT products FROM orders INNER JOIN subscription ON orders.subscriptionId = subscription.subscriptionId WHERE subscription.phoneNumber="'+phoneNumber+'"',(err,result)=>{
            if (err){throw err}
            if (!result){return res.status(403).json({msg:'Belirtilen telefona ait kayıt bulunamamıştır.'})}
            res.status(200).json({order:result})
        })
    } catch (error) {
        res.status(500).json({msg:'Sunucu hatası. Lütfen tekrar deneyin."'})
    }
})

module.exports = router