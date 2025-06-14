<p align="center">
  <!-- Project Logo -->
  <img src="assets/logo.png" alt="MemoirBox Logo" width="200" />
</p>

# MemoirBox  
> Transforming Memory Preservation into a Timeless Digital Experience

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](CHANGELOG.md)  
[![CI](https://github.com/2020331026-Anindya/MemoirBox/actions/workflows/ci.yml/badge.svg)](https://github.com/2020331026-Anindya/MemoirBox/actions/workflows/ci.yml)

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [UI Preview](#ui-preview)  
7. [Roadmap](#roadmap)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Introduction

In a world where moments pass in the blink of an eye, MemoirBox offers a secure, creative platform to build multimedia “memory capsules” that unlock on dates, at locations, or via face recognition—bringing your past vividly to life.

---

## Features

- **Timed Unlocking**  
- **Geolocation Triggers**  
- **Collaborative Capsules**  
- **Face Recognition Access**  
- **Countdown Timers**  
- **Timeline View**  
- **Downloadable Memories**  
- **Notifications & Reminders**  
- **Search & Filter**  
- **Drag-and-Drop Upload**

---

## Tech Stack

| Layer         | Technology                        |
|---------------|-----------------------------------|
| **Frontend**  | React.js, Material-UI, CSS3       |
| **Backend**   | Node.js, Express.js               |
| **Database**  | PostgreSQL (or SQLite)            |
| **Auth & Sec**| JWT, AES Encryption               |
| **Hosting**   | Vercel / Heroku                   |
| **ML**        | OpenCV / TensorFlow               |

---

## Installation

```bash
git clone git@github.com:2020331026-Anindya/MemoirBox.git
cd MemoirBox
npm install           # or yarn install
cp .env.example .env  # set environment variables
npm run dev           # spin up frontend + backend
```

---

## Usage

1. Sign up or log in  
2. Create a new “Memory Capsule”  
3. Upload text, images, video or audio  
4. Configure unlock trigger (date/location/face)  
5. Invite collaborators or enjoy solo  

---

## UI Preview

Place your screenshots under `docs/ui/`:

```plaintext
MemoirBox/
└── docs/
    └── ui/
        ├── landing-page.png
        ├── login.png
        ├── signup.png
        ├── reset-password.png
        ├── capsule-create.png
        ├── timeline-view.png
        ├── map-unlock.png
        ├── countdown.png
        └── face-login.png
```

<p align="center">
  <!-- Landing page -->
  <img src="docs/ui/landing-page.png" alt="Landing Page" width="800"/>
</p>

<p align="center">
  <!-- Auth screens -->
  <img src="docs/ui/login.png" alt="Login Screen" width="350"/>
  <img src="docs/ui/signup.png" alt="Signup Screen" width="350"/>
  <img src="docs/ui/reset-password.png" alt="Reset Password Screen" width="350"/>
</p>

<p align="center">
  <!-- Core feature screens -->
  <img src="docs/ui/capsule-create.png" alt="Capsule Creation Form" width="350"/>
  <img src="docs/ui/timeline-view.png" alt="Timeline View" width="350"/>
  <img src="docs/ui/map-unlock.png" alt="Geolocation Unlock Map" width="350"/>
  <img src="docs/ui/countdown.png" alt="Countdown Timer" width="350"/>
</p>

<p align="center">
  <!-- Face recognition -->
  <img src="docs/ui/face-login.png" alt="Face Recognition Login" width="350"/>
</p>

---

## Roadmap

- **Phase 1 (M1):** UI/UX mockups, auth setup, DB schema  
- **Phase 2 (M2):** Core features (timed & geo unlock, uploads)  
- **Phase 3 (M3):** Collaboration, search, notifications, ML tuning  
- **Future:** Mobile app, analytics, shareable public pages  

---

## Contributing

1. Fork the repo  
2. Create a branch (`git checkout -b feature/XYZ`)  
3. Commit your changes (`git commit -m "Add XYZ"`)  
4. Push (`git push origin feature/XYZ`)  
5. Open a Pull Request  

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
