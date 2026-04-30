# Landmark Technology — Simple Java Application

> A minimal, production-ready Java starter project with a dedicated website, built and maintained by **Landmark Technology**. This repository contains both the Java application source code and the website that hosts it.



## Project Overview

This project consists of two components:

| Component | Description | Technology |
| :--- | :--- | :--- |
| **Java Application** | A simple console application that prints a greeting and the current server time. | Java 17, Apache Maven |
| **Website** | A branded project page that lets users browse the source code, read the build guide, and download the project. | React, TypeScript, Vite, Tailwind CSS |


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

### Verify Maven Is Working

After installing Maven, confirm it is properly configured:

```bash
mvn -version
```

Expected output (versions may vary):
```
Apache Maven 3.x.x
Maven home: /usr/share/maven
Java version: 17.x.x, vendor: Amazon.com Inc.
```

You can also verify Maven can resolve dependencies by running:
```bash
mvn dependency:resolve
```

If this completes without errors, Maven is correctly installed and has network access to download dependencies.

### Testing the Application

After building with `mvn clean package`, run the JAR to test:

```bash
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

**Expected Output:**
```
Hello from Landmark Technology!
Current Time: 2026-04-26T12:00:00.000
```

To run Maven's built-in test phase (executes any unit tests in `src/test/`):
```bash
mvn test
```

A successful test run will show:
```
[INFO] BUILD SUCCESS
```

### Running on an EC2 Instance

To build and run the Java application on an Amazon Linux EC2 instance:

**Step 1 — SSH into your EC2 instance:**
```bash
ssh -i <your-key.pem> ec2-user@<your-ec2-public-ip>
```

**Step 2 — Install Java and Maven:**
```bash
sudo yum update -y
sudo yum install java-17-amazon-corretto-devel -y
sudo yum install maven -y
```

**Step 3 — Clone or upload the project, then build and run:**
```bash
cd simple-java-app
mvn clean package
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

> **Note:** Since this is a console application, the output will display directly in your SSH terminal. No inbound Security Group rules are needed for the Java app itself — it does not start a network server.

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

### Troubleshooting EC2 Access

If you cannot reach the website from your browser:

1. Confirm the server is running: `curl http://localhost:8080` from the EC2 instance itself.
2. Check your **Security Group** has an inbound rule allowing TCP on port `8080` from `0.0.0.0/0` (or your IP).
3. If using a VPC with a private subnet, ensure a proper route through a NAT Gateway or bastion host.
4. Verify the instance has a **public IP** or **Elastic IP** assigned.

---

*Landmark Technology — Simple Java Application | Open Source*
