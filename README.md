#  Smart Traffic AI

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![Machine Learning](https://img.shields.io/badge/Machine%20Learning-AI-orange)
![Status](https://img.shields.io/badge/Status-Completed-success)

### **AI-Powered Traffic Congestion Prediction, Route Optimization & Travel Risk Analysis**

An intelligent web application that predicts traffic congestion, estimates travel time, analyzes accident risk, and recommends the safest and fastest route using Artificial Intelligence, Machine Learning, live weather data, and route optimization.

</div>

---

#  Table of Contents

- Project Overview
- Problem Statement
- Proposed Solution
- Key Features
- Technology Stack
- System Architecture
- AI Prediction Workflow
- Project Screenshots
- Folder Structure
- Installation
- Environment Variables
- APIs Used
- Database
- Machine Learning
- Future Scope
- Team Members
- License

---

#  Project Overview

Urban traffic congestion is one of the major challenges faced by commuters every day. It results in increased travel time, fuel wastage, higher accident risks, and environmental pollution.

**Smart Traffic AI** is an AI-powered web application designed to help users make smarter travel decisions before starting their journey. The system predicts traffic congestion, estimates travel time, analyzes accident risk, compares multiple routes, and recommends the most efficient route using Machine Learning and real-time weather information.

---

#  Problem Statement

Traditional navigation systems mainly react to current traffic conditions and often fail to provide predictive insights. Users require a system that can:

- Predict future traffic congestion
- Estimate travel time accurately
- Analyze accident risk
- Compare multiple routes
- Recommend the safest and fastest route

---

#  Proposed Solution

Smart Traffic AI integrates Machine Learning, Weather APIs, and Route Optimization techniques to provide intelligent travel recommendations.

The system automatically:

- Predicts traffic congestion
- Estimates travel time
- Analyzes accident risk
- Compares alternative routes
- Suggests the optimal route
- Displays AI-powered analytics on an interactive dashboard

---

#  Key Features

##  Authentication

- Secure User Registration
- Login
- JWT Authentication
- Forgot Password using OTP
- Email Verification

---

##  Journey Prediction

- Source & Destination Selection
- Date & Time Selection
- Intelligent Route Generation

---

##  Weather Integration

- Temperature
- Weather Condition
- Humidity
- Wind Speed
- Visibility

---

##  AI Prediction

- Traffic Congestion Prediction
- Travel Time Estimation
- Accident Risk Prediction

---

##  Route Optimization

- Alternative Route Comparison
- Best Route Recommendation
- Distance Analysis
- Fuel Consumption Estimation

---

##  Interactive Dashboard

- Traffic Intelligence Report
- Route Map
- Travel Score
- Traffic Trend Graph
- AI Decision Center
- Route Comparison

---

##  Analytics

- Traffic Trend Visualization
- Congestion Analysis
- Route Performance
- Travel Statistics

---

#  Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Axios
- React Router

---

## Backend

- FastAPI
- Python

---

## Machine Learning

- Scikit-learn
- Pandas
- NumPy

---

## Database

- PostgreSQL

---

## Authentication

- JWT Authentication
- Email OTP Verification

---

## APIs

- OpenStreetMap API
- Weather API

---

## Data Visualization

- Recharts
- Leaflet Maps

---

#  System Architecture

```
                    User

                      │

                      ▼

             React Frontend

                      │

                      ▼

              FastAPI Backend

        ┌────────────┼─────────────┐
        │            │             │
        ▼            ▼             ▼

 Authentication   Weather API   Route API

        │            │             │

        └────────────┼─────────────┘
                     │

                     ▼

        Machine Learning Prediction

                     │

                     ▼

        AI Recommendation Engine

                     │

                     ▼

              PostgreSQL Database

                     │

                     ▼

          Traffic Intelligence Dashboard
```

---

#  AI Prediction Workflow

```
User Login

      │

      ▼

Enter Journey Details

      │

      ▼

Validate Input

      │

      ▼

Generate Route

      │

      ▼

Fetch Weather Data

      │

      ▼

Feature Engineering

      │

      ▼

Machine Learning Prediction

      │

      ▼

Traffic Analysis

      │

      ▼

Risk Analysis

      │

      ▼

Compare Alternative Routes

      │

      ▼

Recommend Best Route

      │

      ▼

Display Dashboard
```

---

#  Project Screenshots

## Landing Page

> Add Screenshot

---

## Login

> Add Screenshot

---

## Signup

> Add Screenshot

---

## Dashboard

> Add Screenshot

---

## Route Map

> Add Screenshot

---

## AI Decision Center

> Add Screenshot

---

## Traffic Trend

> Add Screenshot

---

## Route Comparison

> Add Screenshot

---

#  Folder Structure

```
Traffic-AI/

│

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── auth/

│ ├── routes/

│ ├── services/

│ ├── database/

│ ├── models/

│ ├── utils/

│ ├── main.py

│ └── requirements.txt

│

├── screenshots/

│

└── README.md
```

---

#  Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Traffic-AI.git
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

#  Environment Variables

Create a `.env` file inside the backend folder.

```env
EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_app_password

SECRET_KEY=your_secret_key

DATABASE_URL=your_database_url
```

---

#  APIs Used

- OpenStreetMap API
- Weather API

---

#  Database

The project uses PostgreSQL to store:

- User Information
- Login Credentials
- OTP Verification
- Prediction History

---

#  Machine Learning

The AI model predicts:

- Traffic Congestion
- Travel Time
- Accident Risk

using various route and weather-related features.

---

#  Output

The application generates:

- Traffic Level
- Travel Time
- Accident Risk
- AI Recommendation
- Route Comparison
- Travel Score
- Traffic Dashboard

---

#  Future Scope

- Live CCTV Traffic Analysis
- Deep Learning Models
- IoT Traffic Sensors
- Smart Traffic Signal Integration
- Android Application
- Voice Assistant
- Push Notifications
- Smart City Integration
- Reinforcement Learning
- Multi-City Deployment

---

#  Team Members

- Aayushi 
- Team Member 2 Madhur Kumar

---

# 🎯 Conclusion

Smart Traffic AI provides an intelligent solution for predicting traffic congestion and recommending optimized travel routes. By combining Machine Learning, weather analysis, and route optimization, the system enables safer, faster, and more efficient travel experiences.

---

# 📜 License

This project is developed for academic purposes under **Bennett University**.

---

<div align="center">

###  If you like this project, don't forget to star the repository!

</div>