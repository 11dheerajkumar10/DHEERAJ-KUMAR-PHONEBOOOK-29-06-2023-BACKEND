const { connection } = require("../modal/db");

const contactDataShow = async (request, response) => {
  try {
    const sqlQuery = "SELECT * FROM contact ";

    await connection.query(sqlQuery, (error, result) => {
      if (error) {
        response.send({
          status: 400,
          Error: error.sqlMessage,
        });
      } else {
        response.send({
          status: 200,
          response: result,
        });
      }
    });
  } catch (error) {
    response.send({ Error: error.sqlMessage });
  }
};

const addContact = async (req, res) => {
  console.log(req.body, "BODY");
  try {
    const data = req.body;
    console.log(data, "DATA");
    const sqlQuery = "INSERT INTO contact SET ?";
    await connection.query(sqlQuery, data, (error, result) => {
      console.log(result, "result");
      if (error) {
        res.send({ status: 400, Error: error.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (error) {
    res.send({ Error: error.sqlMessage });
  }
};

const updateContact = async (req, res) => {
  try {
    let data = req.body;
    let uid = req.params.phone_number;
    let sqlQuery = "UPDATE contact SET ? where phone_number = ?";
    await connection.query(sqlQuery, [data, uid], (error, result) => {
      if (error) {
        res.send({ status: 400, Error: error.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ Error: err.sqlMessage });
  }
};

const contactView = async (req, res) => {
  console.log(req);
  let data = req.params.phone_number;
  console.log(data, "DATA");

  let sql = "SELECT * FROM contact WHERE phone_number = ?";
  await connection.query(sql, [data], function (error, result) {
    if (error) {
      console.log(error.sqlMessage);
    } else {
      res.send(result);
    }
  });
};

module.exports = { contactDataShow, addContact, updateContact, contactView };
