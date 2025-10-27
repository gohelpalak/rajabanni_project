// // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const ExcelJS = require("exceljs");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());


// // console.log();

// const EXCEL_FILE = path.join(__dirname, "contactData.xlsx");

// // POST /save - saves form data to Excel
// app.post("/save", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     const workbook = new ExcelJS.Workbook();
//     let worksheet;

//     // Try to read existing file, otherwise create & set columns
//     try {
//       await workbook.xlsx.readFile(EXCEL_FILE);
//       worksheet = workbook.getWorksheet(1);
//       if (!worksheet) {
//         worksheet = workbook.addWorksheet("Contact Data");
//       }
//     } catch (err) {
//       worksheet = workbook.addWorksheet("Contact Data");
//       worksheet.columns = [
//         { header: "Name", key: "name", width: 30 },
//         { header: "Email", key: "email", width: 30 },
//         { header: "Subject", key: "subject", width: 40 },
//         { header: "Message", key: "message", width: 80 },
//         { header: "Date", key: "date", width: 25 },
//       ];
//     }

//     worksheet.addRow({
//       name: name || "",
//       email: email || "",
//       subject: subject || "",
//       message: message || "",
//       date: new Date().toLocaleString(),
//     });

//     await workbook.xlsx.writeFile(EXCEL_FILE);

//     return res.status(200).json({ success: true, message: "Saved to Excel" });
//   } catch (err) {
//     console.error("Error saving to Excel:", err);
//     return res.status(500).json({ success: false, message: "Failed to save" });
//   }
// });

// // optional health check
// app.get("/", (req, res) => res.send("Backend running"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


// const fs = require("fs");
// const ExcelJS = require("exceljs");
// const path = require("path");
// const app = require("express")();

// const EXCEL_FILE = path.join(__dirname, "contactData.xlsx");

// app.post("/save", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     const workbook = new ExcelJS.Workbook();
//     let worksheet;

//     // ✅ If file exists then read, otherwise create
//     if (fs.existsSync(EXCEL_FILE)) {
//       await workbook.xlsx.readFile(EXCEL_FILE);
//       worksheet = workbook.getWorksheet("Contact Data");
//       if (!worksheet) {
//         worksheet = workbook.addWorksheet("Contact Data");
//       }
//     } else {
//       worksheet = workbook.addWorksheet("Contact Data");
//       worksheet.columns = [
//         { header: "Name", key: "name", width: 30 },
//         { header: "Email", key: "email", width: 30 },
//         { header: "Subject", key: "subject", width: 40 },
//         { header: "Message", key: "message", width: 80 },
//         { header: "Date", key: "date", width: 25 },
//       ];
//     }

//     // ✅ Append Row
//     worksheet.addRow({
//       name,
//       email,
//       subject,
//       message,
//       date: new Date().toLocaleString(),
//     });

//     // ✅ Save file properly
//     await workbook.xlsx.writeFile(EXCEL_FILE);

//     return res.status(200).json({ success: true, message: "Saved to Excel ✅" });
//   } catch (err) {
//     console.error("❌ Excel Save Error:", err.message);
//     return res.status(500).json({
//       success: false,
//       message: "Excel write failed. Check server log.",
//       error: err.message,
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // allow frontend
  methods: ["GET", "POST"],        // allowed HTTP methods
  credentials: true                // optional: allow cookies if needed
}));
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/contactDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Save Contact to DB
app.post("/save", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    return res.status(200).json({ success: true, message: "Saved to Database ✅" });
  } catch (err) {
    console.error("❌ Save Error:", err);
    return res.status(500).json({ success: false, message: "Database Save Failed" });
  }
});

// ✅ Export all contacts to Excel
app.get("/export", async (req, res) => {
  try {
    const contacts = await Contact.find().lean();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contact Data");

    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Subject", key: "subject", width: 40 },
      { header: "Message", key: "message", width: 80 },
      { header: "Date", key: "date", width: 25 },
    ];

    contacts.forEach((item) => {
      worksheet.addRow({
        name: item.name,
        email: item.email,
        subject: item.subject,
        message: item.message,
        date: new Date(item.date).toLocaleString(),
      });
    });

    const filePath = path.join(__dirname, "contactData.xlsx");
    await workbook.xlsx.writeFile(filePath);

    return res.download(filePath, "contactData.xlsx");
  } catch (err) {
    console.error("❌ Excel Export Error:", err);
    return res.status(500).json({ success: false, message: "Export Failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
