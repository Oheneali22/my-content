package com.example;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {

    public static String getGreeting() {
        return "Hello from Landmark Technology!";
    }

    public static String getFormattedTime(LocalDateTime dateTime) {
        return "Current Time: " + dateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public static String getHtmlPage() {
        String currentTime = getFormattedTime(LocalDateTime.now());
        return """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Landmark Technology — DevOps Class 42</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background: #0f172a;
                            color: #e2e8f0;
                            min-height: 100vh;
                        }
                        .navbar {
                            background: #1e293b;
                            padding: 1rem 2rem;
                            border-bottom: 2px solid #2563eb;
                            display: flex;
                            align-items: center;
                            gap: 12px;
                        }
                        .navbar .logo {
                            width: 36px; height: 36px;
                            background: #2563eb;
                            border-radius: 8px;
                            display: flex; align-items: center; justify-content: center;
                            font-weight: bold; color: white; font-size: 18px;
                        }
                        .navbar h1 { font-size: 1.2rem; color: #fff; }
                        .hero {
                            background: linear-gradient(135deg, #1e293b 0%%, #0f172a 100%%);
                            padding: 4rem 2rem;
                            text-align: center;
                            border-bottom: 1px solid #334155;
                        }
                        .hero h2 {
                            font-size: 2.5rem;
                            color: #fff;
                            margin-bottom: 0.5rem;
                        }
                        .hero h2 span { color: #3b82f6; }
                        .hero p {
                            font-size: 1.1rem;
                            color: #94a3b8;
                            max-width: 700px;
                            margin: 0 auto;
                            line-height: 1.7;
                        }
                        .badge-row {
                            display: flex;
                            gap: 10px;
                            justify-content: center;
                            margin: 1.5rem 0;
                            flex-wrap: wrap;
                        }
                        .badge {
                            padding: 6px 16px;
                            border-radius: 20px;
                            font-size: 0.8rem;
                            font-weight: 600;
                            border: 1px solid;
                        }
                        .badge-java { color: #fdba74; border-color: #f97316; background: rgba(249,115,22,0.1); }
                        .badge-maven { color: #fca5a5; border-color: #ef4444; background: rgba(239,68,68,0.1); }
                        .badge-devops { color: #93c5fd; border-color: #3b82f6; background: rgba(59,130,246,0.1); }
                        .badge-aws { color: #fde68a; border-color: #f59e0b; background: rgba(245,158,11,0.1); }
                        .container { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; }
                        .grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                            gap: 1.5rem;
                            margin-bottom: 3rem;
                        }
                        .card {
                            background: #1e293b;
                            border: 1px solid #334155;
                            border-radius: 12px;
                            padding: 1.5rem;
                            transition: border-color 0.2s;
                        }
                        .card:hover { border-color: #3b82f6; }
                        .card h3 { color: #fff; margin-bottom: 0.5rem; font-size: 1.1rem; }
                        .card p { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }
                        .card-icon {
                            width: 40px; height: 40px;
                            border-radius: 8px;
                            display: flex; align-items: center; justify-content: center;
                            margin-bottom: 1rem;
                            font-size: 1.2rem;
                        }
                        .icon-blue { background: #1e3a5f; color: #60a5fa; }
                        .icon-green { background: #14532d; color: #4ade80; }
                        .icon-orange { background: #431407; color: #fb923c; }
                        .section-title {
                            font-size: 1.5rem;
                            color: #fff;
                            margin-bottom: 0.5rem;
                        }
                        .section-subtitle {
                            color: #94a3b8;
                            margin-bottom: 2rem;
                        }
                        .code-block {
                            background: #0f172a;
                            border: 1px solid #334155;
                            border-radius: 10px;
                            overflow: hidden;
                            margin-bottom: 1.5rem;
                        }
                        .code-header {
                            background: #1e293b;
                            padding: 0.6rem 1rem;
                            border-bottom: 1px solid #334155;
                            font-size: 0.8rem;
                            color: #64748b;
                            font-family: monospace;
                        }
                        .code-body {
                            padding: 1rem;
                            font-family: 'Courier New', monospace;
                            font-size: 0.85rem;
                            color: #86efac;
                            line-height: 1.6;
                            overflow-x: auto;
                        }
                        .code-body .prompt { color: #60a5fa; }
                        .status-bar {
                            background: #1e293b;
                            border: 1px solid #334155;
                            border-radius: 10px;
                            padding: 1.5rem;
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            gap: 1rem;
                            margin-top: 2rem;
                        }
                        .status-item { text-align: center; }
                        .status-item .label { color: #64748b; font-size: 0.8rem; }
                        .status-item .value { color: #4ade80; font-size: 1rem; font-weight: 600; }
                        footer {
                            background: #0f172a;
                            border-top: 1px solid #334155;
                            padding: 2rem;
                            text-align: center;
                            color: #475569;
                            font-size: 0.85rem;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar">
                        <div class="logo">L</div>
                        <h1>Landmark Technology</h1>
                    </nav>

                    <section class="hero">
                        <div class="badge-row">
                            <span class="badge badge-java">Java 17</span>
                            <span class="badge badge-maven">Maven</span>
                            <span class="badge badge-devops">DevOps Class 42</span>
                            <span class="badge badge-aws">Amazon Linux</span>
                        </div>
                        <h2>Maven Web Application<br><span>DevOps Class 42</span></h2>
                        <p>
                            Welcome to the Landmark Technology Maven Web Application built for
                            DevOps Class 42. This project demonstrates how to build, test, and
                            deploy a Java application using Maven on AWS EC2 instances.
                        </p>
                    </section>

                    <div class="container">
                        <h2 class="section-title">What You Will Learn</h2>
                        <p class="section-subtitle">Key DevOps concepts covered in Class 42</p>
                        <div class="grid">
                            <div class="card">
                                <div class="card-icon icon-blue">&#9881;</div>
                                <h3>Maven Build Lifecycle</h3>
                                <p>Understand how Maven compiles, tests, and packages Java applications
                                   into deployable JAR artifacts using the standard build lifecycle.</p>
                            </div>
                            <div class="card">
                                <div class="card-icon icon-green">&#10003;</div>
                                <h3>Automated Testing with JUnit 5</h3>
                                <p>Write and run unit tests using JUnit 5 and the Maven Surefire plugin.
                                   Ensure code quality before every deployment.</p>
                            </div>
                            <div class="card">
                                <div class="card-icon icon-orange">&#9729;</div>
                                <h3>EC2 Deployment</h3>
                                <p>Deploy the application on Amazon Linux EC2 instances. Install Java,
                                   Maven, build the project, and serve it on a custom port.</p>
                            </div>
                        </div>

                        <h2 class="section-title">Quick Start Commands</h2>
                        <p class="section-subtitle">Run these on your Amazon Linux EC2 instance</p>

                        <div class="code-block">
                            <div class="code-header">bash — Install Java & Maven</div>
                            <div class="code-body">
                                <span class="prompt">$</span> sudo yum update -y<br>
                                <span class="prompt">$</span> sudo yum install java-17-amazon-corretto-devel -y<br>
                                <span class="prompt">$</span> sudo yum install maven -y
                            </div>
                        </div>

                        <div class="code-block">
                            <div class="code-header">bash — Clone, Build & Run</div>
                            <div class="code-body">
                                <span class="prompt">$</span> git clone https://github.com/LandmakTechnology/landmark_javaapp.git<br>
                                <span class="prompt">$</span> cd landmark_javaapp<br>
                                <span class="prompt">$</span> mvn clean package<br>
                                <span class="prompt">$</span> java -jar target/simple-java-app-1.0-SNAPSHOT.jar
                            </div>
                        </div>

                        <div class="code-block">
                            <div class="code-header">bash — Run Tests</div>
                            <div class="code-body">
                                <span class="prompt">$</span> mvn test<br><br>
                                [INFO] Tests run: 8, Failures: 0, Errors: 0, Skipped: 0<br>
                                [INFO] BUILD SUCCESS
                            </div>
                        </div>

                        <div class="status-bar">
                            <div class="status-item">
                                <div class="label">Status</div>
                                <div class="value">&#9679; Running</div>
                            </div>
                            <div class="status-item">
                                <div class="label">Port</div>
                                <div class="value">8081</div>
                            </div>
                            <div class="status-item">
                                <div class="label">Java</div>
                                <div class="value">17</div>
                            </div>
                            <div class="status-item">
                                <div class="label">Server Time</div>
                                <div class="value">""" + currentTime + """
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="label">Class</div>
                                <div class="value">DevOps 42</div>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <p>Landmark Technology — Maven Web Application | DevOps Class 42 | Open Source</p>
                    </footer>
                </body>
                </html>
                """;
    }

    public static void main(String[] args) throws IOException {
        int port = 8081;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        server.createContext("/", exchange -> handleRequest(exchange));

        server.setExecutor(null);
        server.start();
        System.out.println(getGreeting());
        System.out.println("Server started on port " + port);
        System.out.println("Access the application at http://localhost:" + port);
    }

    static void handleRequest(HttpExchange exchange) throws IOException {
        String response = getHtmlPage();
        exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
        exchange.sendResponseHeaders(200, response.getBytes().length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes());
        }
    }
}
