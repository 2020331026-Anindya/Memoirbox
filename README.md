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
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Scripts](#scripts)
6. [Usage](#usage)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [License](#license)

---

## Introduction

MemoirBox is an experimental platform for creating digital "memory capsules" that unlock based on time, location, or even face recognition. The repository currently contains a minimal full-stack setup using React and Express written in TypeScript. Future iterations aim to bring the full vision to life.

---

## Project Structure

```plaintext
backend/   # Express server written in TypeScript
frontend/  # React application bootstrapped with Vite
.github/   # CI workflow configuration
.env.example  # Sample environment variables
```

---

## Tech Stack

| Layer         | Technology                  |
|---------------|-----------------------------|
| **Frontend**  | React, Vite, TypeScript     |
| **Backend**   | Node.js, Express, TypeScript|
| **Database**  | PostgreSQL (or SQLite)      |
| **Auth & Sec**| JWT, AES Encryption         |
| **CI/CD**     | GitHub Actions              |

---

## Installation

Clone the repository and install dependencies for both the frontend and backend:

```bash
git clone git@github.com:2020331026-Anindya/MemoirBox.git
cd MemoirBox
npm install
cp .env.example .env   # configure environment variables
```

Start the development servers for both apps in parallel:

```bash
npm run dev
```

The frontend will be available on `http://localhost:5173` and the backend on `http://localhost:3000` by default.

---

## Scripts

- `npm run dev` – run frontend and backend in development mode
- `npm --workspace backend run build` – build the backend
- `npm --workspace frontend run build` – build the frontend

Each workspace also exposes its own `dev` script that can be run individually.

---

## Usage

With the servers running, visit the frontend URL in your browser to see the placeholder React interface. The backend exposes a root endpoint (`/`) that returns `"MemoirBox Backend"`.

---

## Roadmap

- **Phase 1:** Basic project skeleton and CI setup *(current)*
- **Phase 2:** Implement timed and geolocation unlock features
- **Phase 3:** Collaboration tools, notifications and machine learning integration
- **Future:** Mobile app and public sharing options

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for guidelines.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

