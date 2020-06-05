const mysql = require('mysql')


const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Dededede1-",
    database:'bisu'
    
})

connection.connect((err)=>{
    if (err){
        console.log('NOT Connected!')
        throw err
    }
 

const subtable = `CREATE TABLE IF NOT EXISTS subscription (
    subscriptionId INT AUTO_INCREMENT NOT NULL,
    fullName VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    locationName VARCHAR(30) NOT NULL,
    subCityName VARCHAR(20) NOT NULL,
    cityName VARCHAR(30) NOT NULL,
    brand VARCHAR(20) NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    distributorNumber VARCHAR(30) NOT NULL,
    PRIMARY KEY (subscriptionId)
);`

const ordertable = `CREATE TABLE IF NOT EXISTS orders (
    orderId INT AUTO_INCREMENT NOT NULL,
    subscriptionId INT NOT NULL,
    deliveryDate DATETIME NOT NULL,
    paymentMethod VARCHAR(30) NOT NULL,
    products  JSON DEFAULT NULL,
    totalAmount DOUBLE NOT NULL,
    status VARCHAR(20) NOT NULL,
    PRIMARY KEY (orderId),
    FOREIGN KEY (subscriptionId) REFERENCES subscription(subscriptionId)
);`

connection.query(subtable,(err)={
    if (err){throw err}
})

connection.query(ordertable,(err)={
    if (err){throw err}
})
console.log('Coneected!')
})



module.exports = connection