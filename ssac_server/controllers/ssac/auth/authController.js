const con = require("../../../modules/mysql");
const boardController = require("../board/boardController");
const authController = {
  signup: (req, res) => {
    const { id, name, password } = req.body;
    sql = "INSERT INTO user (id,name,password) VALUES (?,?,?)";
    sql2 = "select * from user where id =?";
    const params = [id, name, password];
    const paramsId = [id];
    con.query(sql2, paramsId, (err, result) => {
      if (result.length === 0) {
        con.query(sql, params, (err, result) => {
          if (err) {
            res.status(500).json({
              message: "에러가 발생했습니다.",
            });
          }

          res.status(200).json({
            message: "생성이 완료 되었습니다.",

            data: result,
          });
        });
      } else {
        res.status(500).json({
          message: "중복된 아이디가 존재합니다",
          data: result,
        });
      }
    });
  },
  signin: (req, res) => {
    const { id, password } = req.body;
    sql = "select * from user where id =? and password = ?";
    const params = [id, password];

    con.query(sql, params, (err, result) => {
      if (result.length === 0) {
        res.status(400).json({
          message: "일치하는 정보가 없습니다.",
        });
      } else {
        res.status(200).json({
          message: "로그인 되었습니다.",
          data: result,
        });
      }
    });
  },
};

module.exports = authController;
