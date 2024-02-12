const fs = require("fs");
const path = require("path");
const data = {
  users: [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      contactNumber: "1234567890",
      address: "123 Main St",
      role: "Admin",
      createdAt: "2024-02-12T08:00:00Z",
      updatedAt: "2024-02-12T08:00:00Z",
      isActive: true,
    },
  ],
  roles: [
    {
      name: "Admin",
      createdAt: "2024-02-12T08:00:00Z",
      updatedAt: "2024-02-12T08:00:00Z",
      isActive: true,
    },
  ],
  countries: [
    {
      name: "USA",
      createdAt: "2024-02-12T08:00:00Z",
      updatedAt: "2024-02-12T08:00:00Z",
      isActive: true,
    },
  ],
  states: [
    {
      name: "California",
      createdAt: "2024-02-12T08:00:00Z",
      updatedAt: "2024-02-12T08:00:00Z",
      isActive: true,
    },
  ],
  apartments: [
    {
      name: "Apartment 1",
      createdAt: "2024-02-12T08:00:00Z",
      updatedAt: "2024-02-12T08:00:00Z",
      isActive: true,
    },
  ],
};

const jsonData = JSON.stringify(data, null, 2);

const outputPath = path.join(__dirname, "staticData", "data.json");

fs.writeFile(outputPath, jsonData, (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been created successfully!");
  }
});
