![Build Status](https://img.shields.io/github/actions/workflow/status/brandon-beach-23/plaid-finance-tracker/ci.yml?branch=main)
![License](https://img.shields.io/github/license/brandon-beach-23/plaid-finance-tracker)
![Issues](https://img.shields.io/github/issues/brandon-beach-23/plaid-finance-tracker)
![Phase 1: Setup & Security](https://img.shields.io/badge/Phase%201-Complete-brightgreen)
![Phase 2: CI%2FCD](https://img.shields.io/badge/Phase%202-Complete-brightgreen)
![Phase 3: Authentication Module](https://img.shields.io/badge/Phase%203-In%20Progress-yellow)

---

## 📌 Roadmap
- [x] **Phase 1: Setup & Security Hardening** ✅ (Initial Repo, Config, BFG Cleanup)
- [x] **Phase 2: CI/CD & Deployment** 🚢 (Implement GitHub Actions, AWS S3/Beanstalk Setup, Green Build)
- [ ] **Phase 3: Authentication Module** 🔐 (Login/Registration, JWT Generation, Interceptors, All Tests)
- [ ] **Phase 4: Data Foundation (Plaid Integration)** 🔗 (Plaid Link flow, Access Token Exchange, DB Schema Implementation)
- [ ] **Phase 5: Expense Management** 💸 (Main Dashboard, Filtering, Categorization UI)
- [ ] **Phase 6: Budget & Net Worth Tracking** 📊 (Aggregation Logic, Visualization)
- [ ] **Phase 7: Debt Payoff Simulator** 💰 (Debt Snowball/Avalanche Calculation Logic)
- [ ] **Phase 8: Documentation & Polish** 📖 (OpenAPI/Swagger Docs, Final Styling, Readme Complete)

---

## 🛠️ Tech Stack & Architecture

### Backend & API
- **Language:** Java 17
- **Framework:** Spring Boot 3
- **Database:** MySQL (AWS RDS)
- **Security:** JWT (JSON Web Tokens)
- **API Integration:** Plaid API

### Frontend & UI
- **Framework:** Angular 17+ (Standalone Components)
- **Styling:** SCSS/Raw CSS (For learning/repetition)

### Deployment & CI/CD
- **Version Control:** Git / GitHub
- **Continuous Integration:** GitHub Actions (for Maven & Angular Builds)
- **Deployment:** AWS Elastic Beanstalk (Backend), AWS S3 + CloudFront (Frontend)

## ⚙️ Setup Instructions
### Security Note
- **DO NOT** commit credentials. Use environment variables or local `.env` files for secrets (Plaid Keys, DB Passwords).
### Backend
```bash
cd backend/plaid-finance-tracker-backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend/plaid-finance-tracker-frontend
npm install
ng serve
```

## Database
- MySQL Workbench setup required
- Configure credential in application.properties

## 📖 Documentation
- 📝 Initial README.md
- 📚 API Reference (coming soon)

## 🧪 Testing
- ✅ Unit tests
- 🧪 Integration tests
- 🔍 End-to-end login flow