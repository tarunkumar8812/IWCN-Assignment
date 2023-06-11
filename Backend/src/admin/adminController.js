
// // for table creation just like schema of mongoDB 
// const pool = require("./db.js")
// const EventEmitter = require('events')
// const fs = require('fs')
// const stream = require('stream')



// // ----------------------------- creating Author table -----------------------------
// const createAuthorTable = async (req, res) => {
//     try {
//         const result = await pool.query(`
//         CREATE TABLE authors (
//             id int auto_increment NOT NULL primary key ,
//             authorId varchar(255) unique NOT NULL ,
//             title ENUM('Mr', 'Mrs', 'Miss', 'Others') ,
//             fName varchar(255) NOT NULL ,
//             lName varchar(255) NOT NULL ,
//             email varchar(255) NOT NULL unique ,
//             phone varchar(255) NOT NULL unique ,
//             password varchar(255) NOT NULL ,
//             age int CHECK (age>12)NOT NULL ,
//             street varchar(255) NOT NULL ,
//             city varchar(255) NOT NULL ,
//             pincode varchar(10) NOT NULL , 
//             isDeleted int DEFAULT 0 ,
//             isAdmin int DEFAULT 0 ,
//             profilePhoto varchar(255) ,
//             createdAt TIMESTAMP DEFAULT now() NOT NULL ,
//             updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 
//         )
//     `)

//         // console.log(result);
//         return res.status(201).json({ status: true, message: "authors Table created Successfully " })

//     } catch (err) {
//         return res.status(500).send({ status: false, message: err.message });
//     }
// }


// // ----------------------------- creating Book table -----------------------------

// const createBookTable = async (req, res) => {
//     const result = await pool.query(`
//         CREATE TABLE books (
//             id int auto_increment NOT NULL primary key ,
//             bookId varchar(255) unique NOT NULL ,
//             title varchar(255) unique NOT NULL ,
//             pages int NOT NULL ,
//             price int NOT NULL , 
//             genre SET ()
//             isDeleted int DEFAULT 0 ,
//             bookPhoto varchar(255) ,
//             aId int NOT NULL,
//             FOREIGN KEY (aId) REFERENCES authors (id) ,
//             createdAt TIMESTAMP DEFAULT now() NOT NULL ,
//             updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 
//         )
//     `)

//     // const result = await pool.query(`
//     //     CREATE TABLE books (
//     //         bookId int auto_increment primary key,
//     //         title varchar(255) unique,
//     //         pages int,
//     //         price int, 
//     //         author varchar(255),
//     //         userId int NOT NULL,
//     //         FOREIGN KEY (bookId) REFERENCES user (id)
//     //     )
//     // `)


//     // console.log(result);
//     return res
//         .status(201)
//         .json({ status: true, message: "books Table created Successfully " })
// }


// // ----------------------------- creating User table -----------------------------

// const createUserTable = async (req, res) => {
//     const result = await pool.query(`
//         CREATE TABLE books (
//             id int auto_increment NOT NULL primary key ,
//             userId varchar(255) unique NOT NULL ,
//             title ENUM('Mr', 'Mrs', 'Miss', 'Others') ,
//             fName varchar(255) NOT NULL ,
//             lName varchar(255) NOT NULL ,
//             email varchar(255) NOT NULL unique ,
//             phone varchar(255) NOT NULL unique ,
//             password varchar(255) NOT NULL ,
//             street varchar(255) NOT NULL ,
//             city varchar(255) NOT NULL ,
//             pincode varchar(10) NOT NULL , 
//             isDeleted int DEFAULT 0 ,
//             profilePhoto varchar(255) ,
//             createdAt TIMESTAMP DEFAULT now() NOT NULL ,
//             updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 
//         )
//     `)

//     // console.log(result);
//     return res
//         .status(201)
//         .json({ status: true, message: "books Table created Successfully " })
// }


// // ----------------------------- modify a table -----------------------------

// const alterAuthorTable = async (req, res) => {
//     const result = await pool.query(`
//         ALTER TABLE users
//         ADD COLUMN timeStamp date AFTER isDeleted;
//     `)

//     console.log(result);
//     return res.json({ msg: "hello world", data: result })
// }
// // ----------------------------- modify a table -----------------------------

// const addColumn = async (req, res) => {
//     const result = await pool.query(`
//         ALTER TABLE authors
//         ADD COLUMN age int AFTER password;
//     `)

//     console.log(result);
//     return res.json({ msg: "hello world", data: result })
// }



// // ----------------------------- delete a table -----------------------------

// const dropTable = async (req, res) => {
//     const result = await pool.query(`
//         DROP TABLE TABLE_NAME
//         `)

//     console.log(result);
//     return res.json({ msg: "hello world", data: result })
// }




// // ----------------------------- get all Authors -----------------------------

// const getAllAuthors = async (req, res) => {
//     try {
//         // fs.writeFile("./src/nodeCoreModules/async/pdf.pdf", "hello ny is tarun", (err) => {
//         //     if (err) {
//         //         console.log(err);
//         //     } else {
//         //         console.log("file created");
//         //     }
//         // })


//         // const event = new EventEmitter()
//         // event.on('sayMyName', () => {
//         //     console.log('my name is tarun');

//         // })
//         // event.on('sayYourName', () => {
//         //     console.log('your name is gulshan');

//         // })
//         // // event.emit("sayMyName")
//         // event.emit("sayYourName")


//         // ---------------------- to read file ----------------------
//         // fs.readFile("./src/nodeCoreModules/async/pdf.pdf", "utf8", (err, data) => {
//         //     if (err) {
//         //         console.log(err);
//         //     } else {
//         //         console.log(data);
//         //     }
//         // })

//         // ---------------------- to read file using stream ---- read in chunks-------------------
//         // 2nd way
//         // const readStream = fs.createReadStream('./src/nodeCoreModules/streams/input.txt')

//         // readStream.on('data', (chunkData) => {
//         //     console.log(chunkData.toString())
//         // })
//         // readStream.on('end', () => {
//         //     console.log('end');

//         // })
//         // readStream.on('error', (err) => {
//         //     console.log(err);
//         // })

//         // 3rd way
//         const readStream = fs.createReadStream('./src/nodeCoreModules/streams/input.txt')
//         const write = fs.createWriteStream('./src/nodeCoreModules/async/copy.txt')
//         readStream.pipe(write)


//         // this is for SELECT
//         const column_name = `*`
//         const select_Min = `MIN (id) AS lowest`
//         const select_Max = `MAX (id) AS highest`
//         const select_Count = `COUNT(id)`
//         const select_Avg = `AVG(id)`
//         const select_Sum = `SUM(id)`

//         //    this is for table_name
//         const table_name = `authors`

//         // this is for WHERE
//         const condition1 = `price > 50`
//         const condition2 = `name = "car"`

//         const key_words = ["ut", "ra", "de", "kar"]
//         const regex_search = key_words.join("|")
//         console.log(regex_search);


//         // this is for DB call 
//         const result = await pool.query(`
//         SELECT id, age
//         FROM ${table_name}
//         LIMIT 3, 3
//         `)


//         // -------------- this are SELECT --------------
//         // SELECT AVG(age) AS averageAge, SUM(age) AS totalAge, COUNT(age) AS totalCount
//         // SELECT MAX(age) AS greatestAge
//         // SELECT COUNT(age) AS totalCount
//         // SELECT AVG(age) AS averageAge
//         // SELECT SUM(age) AS totalAge


//         // ================================= this are WHERE ============================

//         // -------------- VERY IMPORTANT FOR SORTING --------------
//         // ORDER BY fName ASC , email DESC


//         // -------------- VERY IMPORTANT FOR PAGINATION --------------
//         // LIMIT 10, 50   ->  first value '10' is OFFSET and second value '50' is LIMIT


//         // -------------- VERY IMPORTANT FOR KEY WORD SEARCHES --------------
//         // WHERE city REGEXP '${regex_search}'
//         // WHERE city REGEXP 'pattern'  may be like-  WHERE city REGEXP 'delhi|haryana|anything' for multiple search
//         // WHERE city IN ('haryana', 'punjab');  <- this is for exact match/value


//         // -------------- VERY IMPORTANT RANGE SEARCHES --------------
//         // WHERE age BETWEEN 20 AND 35   <-  VALUES CAN BE DATES


//         // console.log(result[0]);
//         return res.json({ msg: "successfull", count: result[0].length, data: result[0] }
//         )
//     } catch (err) {
//         return res.status(500).send({ status: false, message: err.message });
//     }
// }

// // ----------------------------- get all Users -----------------------------

// const getAllUsers = async (req, res) => {
//     // this is for SELECT
//     const column_name = `*`
//     const select_Min = `MIN (id) AS lowest`
//     const select_Max = `MAX (id) AS highest`
//     const select_Count = `COUNT(id)`
//     const select_Avg = `AVG(id)`
//     const select_Sum = `SUM(id)`

//     //    this is for table_name
//     const table_name = `authors`

//     // this is for WHERE
//     const condition1 = `price > 50`
//     const condition2 = `name = "car"`


//     // this is for DB call 
//     const result = await pool.query(`
//         SELECT * 
//         FROM ${table_name}
   
//     `)

//     // WHERE id > 0 
//     // ORDER BY id DESC
//     // LIMIT 50
//     // WHERE ${condition1} AND id != 1  

//     // console.log(result[0]);
//     return res.json({ msg: "successfull", count: result[0].length, data: result[0] })
// }

// module.exports = { createAuthorTable, createBookTable, createUserTable, getAllAuthors, alterAuthorTable, addColumn, dropTable, getAllUsers }