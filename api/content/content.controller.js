const pool = require("../../config/database")

/* POST : Create Content */
exports.new = (req, res) => {
  const param = [0, req.body.title, req.body.text, req.body.id]
  console.log(param)
  pool((conn) => {
    conn.query("insert into tbl_board value(?,?,?,?)", param, (err, doc) => {
      if (err) console.log(err)
      res.send({ result: true })
    })
    conn.release()
  })
}

/* GET : Get Content  */
exports.list = (req, res) => {
  const num = /^\/([0-9]+)$/.exec(req.url)[1]
  pool((sql) => {
    sql.query("select * from tbl_board where num = ?", num, (err, row) => {
      err && console.log(err)
      res.send({ block: row })
    })
  })
}

/* POST : Get Search Result */
exports.result = (req, res) => {
  pool((sql) => {
    sql.query(
      "select * from tbl_board where title = ?",
      req.body.keyword,
      (err, result) => {
        err && console.log(Err)
        res.send({ result: result })
      }
    )
  })
}
