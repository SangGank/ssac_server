const con = require("../../../modules/mysql");

const boardController = {
  choiceBoard: (req, res) => {
    const { idx } = req.params;
    sql = "select from board where boardIdx = ?";
    const params = [idx];

    con.query(sql, params, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "조회 실패",
        });
      }
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    });
  },
  readBoard: (req, res) => {
    const sql = "select * from board";
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "조회 실패",
        });
      }
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    });
  },
  uploadBoard: (req, res) => {
    const { title, content, boardPw, writer } = req.body;
    const params = [writer, title, content, boardPw, new Date()];
    sql =
      "INSERT INTO board ( writer, title, content, boardPw, writerTime) values (?,?,?,?,?)";

    con.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "에러가 발생했습니다.",
        });
      }

      res.status(200).json({
        message: "생성이 완료 되었습니다.",

        data: result,
      });
    });
  },
  deleteBoard: (req, res) => {
    const { idx } = req.params;
    sql = "delete from board where boardIdx = ?";
    const params = [idx];

    con.query(sql, params, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "데이터를 잘 못 입력하였습니다.",
        });
      }
      res.status(200).json({
        message: "데이터를 삭제했습니다.",
        data: result,
      });
    });
  },
};

module.exports = boardController;
