/* Import Modual */
const pool = require("../../config/database"),
  bcrypt = require("bcryptjs"),
  saltRound = 10,
  secret = "abdbadfb",
  jwt = require("jsonwebtoken")

/* POST : TEST LOGIN */
exports.login = (req, res) => {
  const param = [req.body.id, req.body.pw]
  pool((sql) => {
    sql.query("select * from tbl_user where id = ?", param[0], (err, row) => {
      err && console.log(err)
      row.length > 0
        ? bcrypt.compare(param[1], row[0].pw, (err, same) => {
            same ? res.send({ result: true }) : res.send({ result: false })
          })
        : res.send({ result: false })
    })
  })
}

/* POST : Register */
exports.register = (req, res) => {
  //Req 데이터 저장
  const param = [req.body.name, req.body.id, req.body.pw]
  //PW 암호화
  bcrypt.hash(param[2], saltRound, (err, hash) => {
    param[2] = hash
    pool((conn) => {
      conn.query("insert into tbl_user value(?,?,?)", param, (err, doc) => {
        if (err) console.log(err)
        res.send({ result: true })
      })
      conn.release()
    })
  })
}

/* JWT */
// exports.jwt = (req, res) => {
//   /* eslint-disable */
//   const jwt = require("jsonwebtoken"),
//     secret = "abdbadfb"

//   exports.check = (req, res, next) => {
//     // read the token from header or url
//     const token = req.cookies.accessToken
//     console.log(token)

//     // token does not exist
//     if (!token) {
//       return res.status(403).json({
//         success: false,
//         message: "not logged in",
//       })
//     }

//     // create a promise that decodes the token
//     const p = new Promise((resolve, reject) => {
//       jwt.verify(token, secret, (err, decoded) => {
//         if (err) reject(err)
//         resolve(decoded)
//       })
//     })

//     // if token is valid, it will respond with its info
//     const respond = (token) => {
//       next()
//     }

//     // if it has failed to verify, it will return an error message
//     const onError = (error) => {
//       res.status(403).json({
//         success: false,
//         message: error.message,
//       })
//     }

//     // process the promise
//     p.then(respond).catch(onError)
//   }
// }

/* POST : Login */
// exports.login = (req, res) => {
//   //Request Data 저장
//   const param = [req.body.id, req.body.pw]

//   //DB Query
//   pool((sql) => {
//     //DB Query가 성공하면 row에 데이터 저장
//     sql.query("select * from user_list where id = ?", param[0], (err, row) => {
//       err && console.log(err)
//       //DB 데이터가 있을 경우
//       row.length > 0
//         ? //Req PW와 DB PW가 같은 지 비교, 같으면 same == true
//           bcrypt.compare(param[1], row[0].pw, (err, same) => {
//             //same이 true면 JWT 발급 후 Cookie 저장
//             same
//               ? //Req ID 정보와 secret를 사용하여 Token을 1D로 생성 후 쿠키에 저장
//                 jwt.sign(
//                   { id: param[0] },
//                   secret,
//                   { expiresIn: "1d" },
//                   (err, token) => {
//                     err && console.log(err)
//                     res.send({ result: true, token: token })
//                   }
//                 )
//               : res.send({ result: false })
//           })
//         : res.send({ result: false })
//     })
//   })
// }
