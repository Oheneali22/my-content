/**
 * Design Philosophy: Clean Enterprise Tech (Swiss International Typographic Style meets modern SaaS)
 * - Deep navy (#0F172A) hero, electric blue (#2563EB) accents, light slate (#F8FAFC) page background
 * - Space Grotesk for headings, Inter for body, JetBrains Mono for code
 * - Left-anchored layout, no excessive centering
 * - Pill-shaped language badges, dark terminal code panels, sticky nav
 */

import { useState } from "react";
import { Copy, Check, Download, ChevronRight, Terminal, BookOpen, Code2, Server } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663310424405/m8KpKqTTxGtW8tYyX7iHME/hero-banner-7trbfrajsQa6SmbWc5yMQ3.webp";
const DOWNLOAD_URL = "/manus-storage/simple-java-app_02c6394b.zip";

const mainJavaCode = `package com.example;

public class Main {
    public static void main(String[] args) {
        System.out.println(
            "Hello from Landmark Technology!"
        );
        System.out.println(
            "Current Time: " + 
            java.time.LocalDateTime.now()
        );
    }
}`;

const pomXml = `<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="...">

  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>simple-java-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-jar-plugin</artifactId>
        <version>3.2.0</version>
        <configuration>
          <archive>
            <manifest>
              <mainClass>com.example.Main</mainClass>
            </manifest>
          </archive>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>`;

const buildSteps = [
  {
    step: "01",
    title: "Update & Install JDK",
    icon: <Server size={18} />,
    commands: [
      "sudo yum update -y",
      "sudo yum install java-17-amazon-corretto-devel -y",
      "java -version",
    ],
    description: "Update your Amazon Linux instance and install Amazon Corretto 17 (OpenJDK 17).",
  },
  {
    step: "02",
    title: "Install Maven",
    icon: <Terminal size={18} />,
    commands: ["sudo yum install maven -y", "mvn -version"],
    description: "Install Apache Maven, the build tool used to compile and package the application.",
  },
  {
    step: "03",
    title: "Build the Project",
    icon: <Code2 size={18} />,
    commands: ["cd simple-java-app", "mvn clean package"],
    description: "Navigate into the project directory and run the Maven build. This produces a JAR file inside the target/ directory.",
  },
  {
    step: "04",
    title: "Run the Application",
    icon: <Terminal size={18} />,
    commands: ["java -jar target/simple-java-app-1.0-SNAPSHOT.jar"],
    description: "Execute the packaged JAR file. The application will print a greeting and the current server time.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors px-2 py-1 rounded border border-slate-700 hover:border-blue-500"
    >
      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-slate-400 font-mono">{language}</span>
        </div>
        <CopyButton text={code} />
      </div>
      <pre className="bg-slate-900 p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="text-slate-200 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${color}`}>
      {label}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"main" | "pom">("main");

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ── Sticky Navigation ── */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Landmark Technology
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#code" className="hover:text-white transition-colors">Source Code</a>
            <a href="#build" className="hover:text-white transition-colors">Build Guide</a>
            <a
              href={DOWNLOAD_URL}
              download="simple-java-app.zip"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[520px] flex items-center overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge label="Java 17" color="text-orange-300 border-orange-500/40 bg-orange-500/10" />
              <Badge label="Maven" color="text-red-300 border-red-500/40 bg-red-500/10" />
              <Badge label="Amazon Linux" color="text-yellow-300 border-yellow-500/40 bg-yellow-500/10" />
              <Badge label="Open Source" color="text-green-300 border-green-500/40 bg-green-500/10" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Simple Java
              <span className="text-blue-400"> Application</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A minimal, production-ready Java starter project by Landmark Technology. Built with Maven, deployable on Amazon Linux in minutes. Download the source, build it, and run it.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={DOWNLOAD_URL}
                download="simple-java-app.zip"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all font-semibold shadow-lg shadow-blue-900/40"
              >
                <Download size={18} />
                Download Source (.zip)
              </a>
              <a
                href="#build"
                className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition-all font-semibold"
              >
                <BookOpen size={18} />
                Build Guide
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section id="overview" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Clean Source Code</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A single-class Java application with a clear entry point. Ideal as a starter template or learning reference.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Terminal size={20} className="text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Maven Build System</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Uses Apache Maven for dependency management and packaging. One command builds a runnable JAR artifact.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Server size={20} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Amazon Linux Ready</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Step-by-step guide to install Java and Maven on Amazon Linux and run the application on an EC2 instance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Structure ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Project Structure
          </h2>
          <p className="text-slate-500 mb-8">The project follows the standard Maven directory layout.</p>
          <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 font-mono text-sm">
            <div className="text-slate-400 space-y-1 leading-relaxed">
              <div><span className="text-blue-400">simple-java-app/</span></div>
              <div className="pl-4"><span className="text-yellow-400">├── pom.xml</span><span className="text-slate-600 ml-4"># Maven build configuration</span></div>
              <div className="pl-4"><span className="text-slate-300">├── README.md</span><span className="text-slate-600 ml-4"># Deployment guide</span></div>
              <div className="pl-4"><span className="text-blue-400">└── src/</span></div>
              <div className="pl-8"><span className="text-blue-400">└── main/</span></div>
              <div className="pl-12"><span className="text-blue-400">└── java/</span></div>
              <div className="pl-16"><span className="text-blue-400">└── com/example/</span></div>
              <div className="pl-20"><span className="text-green-400">└── Main.java</span><span className="text-slate-600 ml-4"># Application entry point</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Source Code Section ── */}
      <section id="code" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Source Code
            </h2>
            <a
              href={DOWNLOAD_URL}
              download="simple-java-app.zip"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
            >
              <Download size={14} />
              Download all files
            </a>
          </div>
          <p className="text-slate-500 mb-6">Browse the two core files that make up the application.</p>

          {/* Tab Switcher */}
          <div className="flex gap-1 mb-4 bg-slate-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab("main")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "main"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Main.java
            </button>
            <button
              onClick={() => setActiveTab("pom")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "pom"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              pom.xml
            </button>
          </div>

          {activeTab === "main" && (
            <CodeBlock code={mainJavaCode} language="Main.java — com/example/Main.java" />
          )}
          {activeTab === "pom" && (
            <CodeBlock code={pomXml} language="pom.xml — Maven Build Configuration" />
          )}
        </div>
      </section>

      {/* ── Build Guide Section ── */}
      <section id="build" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Build &amp; Deploy on Amazon Linux
          </h2>
          <p className="text-slate-500 mb-10">Follow these four steps to get the application running on an Amazon Linux EC2 instance.</p>

          <div className="space-y-6">
            {buildSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-blue-500 font-bold">STEP {s.step}</span>
                      <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">{s.description}</p>
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <span className="text-xs text-slate-400 font-mono">bash</span>
                        <CopyButton text={s.commands.join("\n")} />
                      </div>
                      <pre className="p-4 text-sm font-mono">
                        {s.commands.map((cmd, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 select-none">$</span>
                            <span className="text-green-300">{cmd}</span>
                          </div>
                        ))}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expected Output */}
          <div className="mt-10 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 bg-slate-800 border-b border-slate-700">
              <Terminal size={14} className="text-green-400" />
              <span className="text-xs text-slate-400 font-mono">Expected Output</span>
            </div>
            <pre className="p-5 font-mono text-sm text-green-300 leading-relaxed">
{`Hello from Landmark Technology!
Current Time: 2026-04-26T12:00:00.000`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to get started?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Download the complete project source code as a ZIP archive and follow the build guide above to deploy it on your server.
          </p>
          <a
            href={DOWNLOAD_URL}
            download="simple-java-app.zip"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl transition-all font-bold text-lg shadow-xl shadow-blue-900/40"
          >
            <Download size={22} />
            Download simple-java-app.zip
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Code2 size={12} className="text-white" />
            </div>
            <span className="text-slate-400 text-sm font-medium">Landmark Technology</span>
          </div>
          <p className="text-slate-600 text-sm">Simple Java Application — Open Source Project</p>
        </div>
      </footer>
    </div>
  );
}
