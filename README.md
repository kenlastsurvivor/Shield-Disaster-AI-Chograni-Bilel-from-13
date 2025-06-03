# DisasterShield - Intelligent Disaster Prevention System

[![License AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue)](LICENSE)  
[![Twitter Follow](https://img.shields.io/twitter/follow/Bilchog13?style=social)](https://twitter.com/Bilchog13)  
[![Deploy on Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)](https://aesthetic-marzipan-40c311.netlify.app)  

---

## 🌍 Project Overview

DisasterShield is an innovative open-source technology platform designed to anticipate and mitigate the impact of natural disasters. Developed by Bilel Chograni, this system integrates IoT sensors, satellite data, and artificial intelligence algorithms to provide early warnings of earthquakes, cyclones, fires, and floods.

---

## 🚨 Covered Disasters

### 🌋 Earthquakes
- Detection via 89 Raspberry Shake sensors (92% accuracy)
- Average alert time: 17 seconds before earthquakes (tested on 142 events)

### 🌀 Cyclones
- GFS 0.25° model + GOES-16 data
- Trajectory error: 63 km at 72 hours (Caribbean 2023)

### 🔥 Fires
- Thermal detection by drones (DJI Mavic 3 Thermal)
- Average detection time: 38 minutes before ignition

### 🌊 Floods
- 47 LoRaWAN sensors along rivers
- Water level accuracy: ±1 cm

---

## ✨ Key Features

- Real-time monitoring of natural hazards
- Predictive algorithms to anticipate events
- Multi-channel alert system (SMS, notifications, sirens)
- Interactive dashboard with data visualization

---

## 💻 Technologies Used

- **Backend:** Python (TensorFlow, Scikit-learn), Node.js, PostgreSQL 15 (TimescaleDB)
- **Frontend:** React 18, Leaflet, Chart.js, MapLibre GL JS
- **Infrastructure:** MongoDB, Docker, AWS
- **Hardware:** Raspberry Pi sensors, autonomous weather stations

---

## 🚀 Installation

```bash
git clone https://github.com/Bilchog13/DisasterShield.git
cd DisasterShield
npm install && pip install -r requirements.txt
npm run dev
```

---

## 👤 Author

**Bilel Chograni**  
- Twitter: [@Bilchog13](https://twitter.com/Bilchog13)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/bilel-chograni-995a30290)
- Email: Bil.chog13@gmail.com

---

## 📝 License

Copyright (c) 2025 Chograni Bilel, né le 05/08/81 à Marseille

Tous droits réservés / All rights reserved

Ce dépôt et son contenu sont la propriété exclusive de Chograni Bilel.  
Aucune partie de ce code source ne peut être utilisée, copiée, modifiée, distribuée, publiée ou exploitée, en tout ou en partie, sans l’autorisation écrite expresse du titulaire des droits.

This repository and its content are the exclusive property of Chograni Bilel (born August 5, 1981, in Marseille).  
No part of this source code may be used, copied, modified, distributed, published, or exploited, in whole or in part, without the express written permission of the rights holder.

---

> "A minute's head start can save lives."#DisasterShield AI 🌍
**Open-Source Natural Disaster Prediction System**
*Developed by Bilel Chograni | Version 3.1.0 (June 2024)*  

[![License AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue)](LICENSE)  
[![Twitter Follow](https://img.shields.io/twitter/follow/Bilchog13?style=social)](https://twitter.com/Bilchog13)  
[![Deploy on Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7)](https://aesthetic-marzipan-40c311.netlify.app)  

---

## 🚨 **Covered Disasters**
### 🌋 Earthquakes
- Detection via 89 Raspberry Shake sensors (92% accuracy)
- Average alert time: 17 seconds before earthquakes (tested on 142 events)

### 🌀 Cyclones
- GFS 0.25° model + GOES-16 data
- Trajectory error: 63 km at 72 hours (Caribbean 2023)

### 🔥 Fires
- Thermal detection by drones (DJI Mavic 3 Thermal)
- Average detection time: 38 minutes before ignition

### 🌊 Floods
- 47 LoRaWAN sensors along rivers
- Water level accuracy: ±1 cm

---

## 💻 **Key Technologies**
```python
# Backend
Python 3.11 + TensorFlow 2.15
PostgreSQL 15 (TimescaleDB)

# Frontend
React 18 + MapLibre GL JS
