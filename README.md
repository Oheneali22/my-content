# Landmark Technology — Simple Java Application

> A minimal, production-ready Java starter project built and maintained by **Landmark Technology**.

## Project Overview

A simple console application that prints a greeting and the current server time, built with **Java 17** and **Apache Maven**.

## Project Structure

```
├── pom.xml                                  # Maven build configuration
├── README.md                                # This file
└── src/
    ├── main/java/com/example/
    │   └── Main.java                        # Application entry point
    └── test/java/com/example/
        └── MainTest.java                    # Unit tests (JUnit 5)
```

---

## Prerequisites

The application requires **Java 17** and **Apache Maven**.

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

### Verify Maven Is Working

```bash
mvn -version
```

Expected output (versions may vary):
```
Apache Maven 3.x.x
Maven home: /usr/share/maven
Java version: 17.x.x, vendor: Amazon.com Inc.
```

You can also verify Maven can resolve dependencies:
```bash
mvn dependency:resolve
```

---

## Build the Project

Clone the repository and run the Maven build:

```bash
git clone https://github.com/LandmakTechnology/landmark_javaapp.git
cd landmark_javaapp
mvn clean package
```

Maven will compile the source code, run the tests, and produce a runnable JAR file at:

```
target/simple-java-app-1.0-SNAPSHOT.jar
```

---

## Run the Application

```bash
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

**Expected Output:**
```
Hello from Landmark Technology!
Current Time: 2026-04-26T12:00:00.000
```

---

## Run the Tests

This project includes **JUnit 5** unit tests in `src/test/java/com/example/MainTest.java`.

**Run all tests:**
```bash
mvn test
```

**Expected output:**
```
[INFO] Tests run: 8, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
```

### Test Cases

| Test | Description |
| :--- | :--- |
| `testGreetingMessage` | Verifies the greeting returns the exact expected string |
| `testGreetingIsNotNull` | Ensures the greeting is never null |
| `testGreetingIsNotEmpty` | Ensures the greeting is not an empty string |
| `testGreetingContainsLandmark` | Verifies the greeting mentions "Landmark" |
| `testFormattedTimeContainsPrefix` | Checks output starts with "Current Time: " |
| `testFormattedTimeContainsDate` | Verifies the date appears in the output |
| `testFormattedTimeExactMatch` | Validates exact output for a known date/time |
| `testMainRunsWithoutException` | Ensures the main method executes without errors |

---

## Deploy on an EC2 Instance

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

**Step 3 — Clone, build, test, and run:**
```bash
git clone https://github.com/LandmakTechnology/landmark_javaapp.git
cd landmark_javaapp
mvn clean package
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

> **Note:** This is a console application — output displays directly in your terminal. No Security Group inbound rules are needed.

---

*Landmark Technology — Simple Java Application | Open Source*
