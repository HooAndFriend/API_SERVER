const mysql = require("mysql"),
  db_info = {
    host: "db-codename.cbpzexyay3ip.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "qwer1595",
    database: "codeName",
  },
  pool = mysql.createPool(db_info)

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}
