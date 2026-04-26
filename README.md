# Landmark Technology — Simple Java Application

> A minimal, production-ready Java starter project with a dedicated website, built and maintained by **Landmark Technology**. This repository contains both the Java application source code and the website that hosts it.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Part 1: Building and Running the Java Application](#part-1-building-and-running-the-java-application)
   - [Prerequisites](#prerequisites)
   - [Build Steps](#build-steps)
   - [Running the Application](#running-the-application)
   - [Expected Output](#expected-output)
4. [Part 2: Running the Website Locally](#part-2-running-the-website-locally)
   - [Prerequisites](#prerequisites-1)
   - [Install Dependencies](#install-dependencies)
   - [Start the Development Server](#start-the-development-server)
   - [Access the Website](#access-the-website)
5. [Deployment on Amazon Linux (EC2)](#deployment-on-amazon-linux-ec2)

---

## Project Overview

This project consists of two components:

| Component | Description | Technology |
| :--- | :--- | :--- |
| **Java Application** | A simple console application that prints a greeting and the current server time. | Java 17, Apache Maven |
| **Website** | A branded project page that lets users browse the source code, read the build guide, and download the project. | React, TypeScript, Vite, Tailwind CSS |

---

## Repository Structure

```
java-app-site/                  ← Website root (React/Vite project)
├── README.md                   ← This file
├── package.json                ← Node.js dependencies for the website
├── vite.config.ts              ← Vite build configuration
├── client/
│   └── src/
│       ├── pages/
│       │   └── Home.tsx        ← Main website page
│       └── index.css           ← Global styles
└── ...

simple-java-app/                ← Java application (separate directory)
├── README.md                   ← Java-specific deployment guide
├── pom.xml                     ← Maven build configuration
└── src/
    └── main/
        └── java/
            └── com/example/
                └── Main.java   ← Application entry point
```

---

## Part 1: Building and Running the Java Application

### Prerequisites

The Java application requires **Java 17** and **Apache Maven** to be installed on your machine or server.

**On Amazon Linux (EC2):**
```bash
sudo yum update -y
sudo yum install java-17-amazon-corretto-devel -y
sudo yum install maven -y
```

**Verify installations:**
```bash
java -version
mvn -version
```

### Build Steps

Navigate into the Java application directory and run the Maven build command:

```bash
cd simple-java-app
mvn clean package
```

Maven will resolve all dependencies declared in `pom.xml`, compile the source code, and produce a runnable JAR file at:

```
simple-java-app/target/simple-java-app-1.0-SNAPSHOT.jar
```

### Running the Application

Execute the packaged JAR using the `java` command:

```bash
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

### Expected Output

```
Hello from Landmark Technology!
Current Time: 2026-04-26T12:00:00.000
```

---

## Part 2: Running the Website Locally

The website is a **React + Vite** static application. It requires **Node.js** and **pnpm**.

### Prerequisites

| Tool | Minimum Version | Install |
| :--- | :--- | :--- |
| Node.js | v18+ | https://nodejs.org |
| pnpm | v8+ | `npm install -g pnpm` |

### Install Dependencies

From the website root directory (`java-app-site/`), install all Node.js dependencies:

```bash
cd java-app-site
pnpm install
```

### Start the Development Server

```bash
pnpm dev
```

Vite will start a local development server. The terminal will display the local URL:

```
  ➜  Local:   http://localhost:3000/
  ➜  Network: http://<your-ip>:3000/
```

### Access the Website

Open your browser and navigate to:

```
http://localhost:3000
```

The website will display the Landmark Technology project page with the source code viewer, build guide, and download button.

---

## Deployment on Amazon Linux (EC2)

To run the website on an Amazon Linux EC2 instance, follow these steps.

**Step 1 — Install Node.js and pnpm on the server:**
```bash
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
npm install -g pnpm
```

**Step 2 — Clone or upload the project to the server, then install dependencies:**
```bash
cd java-app-site
pnpm install
```

**Step 3 — Build the website for production:**
```bash
pnpm build
```

This generates a static `dist/public/` folder containing all HTML, CSS, and JavaScript assets.

**Step 4 — Serve the production build:**

You can serve the built files using any static file server. A simple option is `serve`:
```bash
npm install -g serve
serve dist/public -l 8080
```

**Step 5 — Access the website:**

Open your browser and navigate to your EC2 instance's public IP or domain on port `8080`:
```
http://<your-ec2-public-ip>:8080
```

> **Note:** Ensure that your EC2 Security Group allows inbound traffic on port `8080` (or whichever port you choose).

---

*Landmark Technology — Simple Java Application | Open Source*
