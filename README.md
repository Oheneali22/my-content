# Landmark Technology — Maven Web Application (DevOps Class 42)

> A Java web application built with Maven for **DevOps Class 42** by **Landmark Technology**. Runs on port **8081** and serves a styled web page.

## Project Overview

This application starts an embedded HTTP server on port **8081** and serves a web page about Landmark Technology's DevOps Class 42. Built with **Java 17** and **Apache Maven**.

## Project Structure

```
├── pom.xml                                  # Maven build configuration
├── README.md                                # This file
└── src/
    ├── main/java/com/example/
    │   └── Main.java                        # Web server entry point
    └── test/java/com/example/
        └── MainTest.java                    # Unit tests (JUnit 5)
```

---

## Prerequisites

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

---

## Build the Project

```bash
git clone https://github.com/LandmakTechnology/landmark_javaapp.git
cd landmark_javaapp
mvn clean package
```

---

## Run the Application

```bash
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

**Expected terminal output:**
```
Hello from Landmark Technology!
Server started on port 8081
Access the application at http://localhost:8081
```

Then open your browser and go to:
```
http://localhost:8081
```

---

## Run the Tests

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
| `testHtmlPageContainsDevOpsClass42` | Verifies the HTML page includes "DevOps Class 42" |

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

**Step 3 — Clone, build, and run:**
```bash
git clone https://github.com/LandmakTechnology/landmark_javaapp.git
cd landmark_javaapp
mvn clean package
java -jar target/simple-java-app-1.0-SNAPSHOT.jar
```

**Step 4 — Open port 8081 in your Security Group:**

1. Go to **AWS Console → EC2 → Security Groups**
2. Select the Security Group attached to your instance
3. Click **Edit inbound rules → Add rule**
4. Set: **Type:** Custom TCP | **Port:** 8081 | **Source:** 0.0.0.0/0
5. Click **Save rules**

**Step 5 — Access the application in your browser:**
```
http://<your-ec2-public-ip>:8081
```

> **Tip:** To run the application in the background so it stays running after you close SSH:
> ```bash
> nohup java -jar target/simple-java-app-1.0-SNAPSHOT.jar &
> ```

---

*Landmark Technology — Maven Web Application | DevOps Class 42 | Open Source*
Webhook Test
