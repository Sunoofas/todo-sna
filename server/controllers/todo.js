const db = require("../database/todoDb");
//To add data to db
const putTask = async (req, res) => {
  console.log("insideputTask :>> ");
  console.log("req.body", req.body);
  console.log("inside putTask");
  try {
    const query = "INSERT INTO todos(task) VALUES ($1)";
    const values = [req.body.tasks];
    const result = await db.query(query, values);
    console.log("Data inserted successfully");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send("Error" + err);
  }
};

const getTask = async (req, res) => {
  console.log("Inside get todo :>> ");
  try {
    const result = await db.query("SELECT * FROM todos");

    res.send(result);
    console.log("result", result);
  } catch (err) {
    console.log(err);
    res.send("Error" + err);
  }
};
// const deleteTask = async (req, res) => {
//   const taskId = req.params.id;
//   console.log("taskId to be deleted:", taskId);
//   try {
//     const query= "DELETE FROM todos WHERE id=$1";
//     const value = [taskId];
//     const output = await db.query(query, value);
//     console.log('Data deleted ');
//     res.send(output);

//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// };
 const deleteTask = async (req, res) => {
  const { id } = req.params;
  await db
    .result("DELETE FROM todos WHERE id = $1 RETURNING *", [id])
    .then((data) => {
      if (data.rowCount > 0) {
        res.json({ message: `Deleted todo with id ${id}` });
      } else {
        res.status(404).json({ message: `Todo with id ${id} not found` });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error deleting todo" });
    });
};

// const deleteTask = async (req, res) => {
//   console.log("deletedvalue :>> ");
//   console.log('req.body');
//   try {
//     const query= " DELETE FROM todos  VALUES";
//     const value = [req.body];
//     const output = await db.query(query, value);
//     console.log('Data deleted ');
//     res.send(output);
//     // console.log('output', output);
//     //  [
//     //   req.body,
//     // ]);

//     // console.log("removedValue :>> ", result);
//     // res.send(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = {
  putTask,
  getTask,
  deleteTask,
};
