const pool = require("../../config/database")

exports.new = (req, res) => {
  const b = req.body
  const param = [req.cookies.title, b.content, b.id]
  console.log(param)
  pool((conn) => {
    conn.query("insert into board value(?,?,?)", param, (err, doc) => {
      if (err) console.log(err)
      res.send({ result: true })
    })
    conn.release()
  })
}

exports.result = (req, res) => {
  const keyword = req.body.keyword
  console.log(keyword)
  pool((conn) => {
    conn.query(
      "select * from board where title = ?",
      keyword,
      (err, result) => {
        if (err) console.log(err)
        //console.log(result)
        res.send({ result: result })
      }
    )
  })
}

exports.update = (req, res) => {
  const id = req.body.id
  pool((coon) => {
    conn.query("select * from board where id = ?", id, (err, result) => {
      if (err) console.log(err)
      res.send({ result: true })
    })
  })
}
