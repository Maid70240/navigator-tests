# 🚀 navigator-tests

This repository contains end-to-end (E2E) tests written using [Cypress](https://www.cypress.io/).  
The purpose of this project is to automate UI testing for web applications.
The tests are organized into two categories: **API smoke tests** and **Frontend smoke tests**.


## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (comes bundled with Node.js)


## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/navigator-tests.git
cd navigator-tests
npm install

🚀 Running Tests

📂 Open Cypress Test Runner (GUI)
npx cypress open

🧪 Run Tests Headlessly (in terminal)
npx cypress run
npx cypress run --spec "cypress/e2e/smoke_api_tests.cy.js"
npx cypress run --spec "cypress/e2e/smoke_frontend_tests.cy.js"


This project includes two main test files:

🔹 smoke_api_tests.cy.js
Focuses on API smoke testing.

Ensures that the most critical API endpoints are reachable and responding correctly.

Useful for validating basic backend health and readiness before running more detailed tests.

🔹 smoke_frontend_tests.cy.js
Covers core frontend functionality.

Validates that essential user-facing workflows (e.g., page loads, key UI elements, interactions) are operational.

Provides fast feedback on frontend integrity after deployments.

These tests are designed to execute quickly and provide immediate insights into system stability.