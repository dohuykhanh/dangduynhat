const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://khanh:khanhdieuanh@cluster0.bih1rvn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "QuanLyCHYTE"
const db = {}

async function connectToDb() {
    await client.connect();
    console.log('Connected successfully to Database');
    const database = client.db(dbName);

    db.TaiKhoan = database.collection("TaiKhoan");
    db.NhanVien = database.collection("NhanVien");
    db.VatTu = database.collection("VatTu");

    return 'done.';
}

module.exports = { connectToDb, db }