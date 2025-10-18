// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ExcelJS = require("exceljs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


// console.log();

const EXCEL_FILE = path.join(__dirname, "contactData.xlsx");

// POST /save - saves form data to Excel
app.post("/save", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const workbook = new ExcelJS.Workbook();
    let worksheet;

    // Try to read existing file, otherwise create & set columns
    try {
      await workbook.xlsx.readFile(EXCEL_FILE);
      worksheet = workbook.getWorksheet(1);
      if (!worksheet) {
        worksheet = workbook.addWorksheet("Contact Data");
      }
    } catch (err) {
      worksheet = workbook.addWorksheet("Contact Data");
      worksheet.columns = [
        { header: "Name", key: "name", width: 30 },
        { header: "Email", key: "email", width: 30 },
        { header: "Subject", key: "subject", width: 40 },
        { header: "Message", key: "message", width: 80 },
        { header: "Date", key: "date", width: 25 },
      ];
    }

    worksheet.addRow({
      name: name || "",
      email: email || "",
      subject: subject || "",
      message: message || "",
      date: new Date().toLocaleString(),
    });

    await workbook.xlsx.writeFile(EXCEL_FILE);

    return res.status(200).json({ success: true, message: "Saved to Excel" });
  } catch (err) {
    console.error("Error saving to Excel:", err);
    return res.status(500).json({ success: false, message: "Failed to save" });
  }
});

// optional health check
app.get("/", (req, res) => res.send("Backend running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
