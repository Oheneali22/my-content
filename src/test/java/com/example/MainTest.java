package com.example;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    void testGreetingMessage() {
        String greeting = Main.getGreeting();
        assertEquals("Hello from Landmark Technology!", greeting);
    }

    @Test
    void testGreetingIsNotNull() {
        assertNotNull(Main.getGreeting());
    }

    @Test
    void testFormattedTimeContainsPrefix() {
        LocalDateTime now = LocalDateTime.of(2026, 4, 26, 12, 0, 0);
        String result = Main.getFormattedTime(now);
        assertTrue(result.startsWith("Current Time: "));
    }

    @Test
    void testFormattedTimeContainsDate() {
        LocalDateTime dateTime = LocalDateTime.of(2026, 4, 26, 12, 0, 0);
        String result = Main.getFormattedTime(dateTime);
        assertTrue(result.contains("2026-04-26"));
    }

    @Test
    void testFormattedTimeWithDifferentDate() {
        LocalDateTime dateTime = LocalDateTime.of(2025, 1, 15, 8, 30, 45);
        String result = Main.getFormattedTime(dateTime);
        assertEquals("Current Time: 2025-01-15T08:30:45", result);
    }

    @Test
    void testMainRunsWithoutException() {
        assertDoesNotThrow(() -> Main.main(new String[]{}));
    }
}
