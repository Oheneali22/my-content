package com.example;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    void testGreetingMessage() {
        assertEquals("Hello from Landmark Technology!", Main.getGreeting());
    }

    @Test
    void testGreetingIsNotNull() {
        assertNotNull(Main.getGreeting());
    }

    @Test
    void testGreetingIsNotEmpty() {
        assertFalse(Main.getGreeting().isEmpty());
    }

    @Test
    void testGreetingContainsLandmark() {
        assertTrue(Main.getGreeting().contains("Landmark"));
    }

    @Test
    void testFormattedTimeContainsPrefix() {
        LocalDateTime dateTime = LocalDateTime.of(2026, 4, 26, 12, 0, 0);
        assertTrue(Main.getFormattedTime(dateTime).startsWith("Current Time: "));
    }

    @Test
    void testFormattedTimeContainsDate() {
        LocalDateTime dateTime = LocalDateTime.of(2026, 4, 26, 12, 0, 0);
        assertTrue(Main.getFormattedTime(dateTime).contains("2026-04-26"));
    }

    @Test
    void testFormattedTimeExactMatch() {
        LocalDateTime dateTime = LocalDateTime.of(2025, 1, 15, 8, 30, 45);
        assertEquals("Current Time: 2025-01-15T08:30:45", Main.getFormattedTime(dateTime));
    }

    @Test
    void testHtmlPageContainsDevOpsClass42() {
        String html = Main.getHtmlPage();
        assertTrue(html.contains("DevOps Class 42"));
    }
}
