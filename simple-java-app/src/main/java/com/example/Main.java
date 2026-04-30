package com.example;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {

    public static String getGreeting() {
        return "Hello from Landmark Technology!";
    }

    public static String getFormattedTime(LocalDateTime dateTime) {
        return "Current Time: " + dateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public static void main(String[] args) {
        System.out.println(getGreeting());
        System.out.println(getFormattedTime(LocalDateTime.now()));
    }
}
