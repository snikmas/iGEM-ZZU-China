package com.utils;

public class YearReport {
    byte year;
    long profit;
    long total;
    double averageOutcome;
    double averageExpense;

    public YearReport(byte year, long profit, long total, long averageOutcome, long averageExpense) {
        this.year = year;
        this.profit = profit;
        this.total = total;
        this.averageOutcome = averageOutcome;
        this.averageExpense = averageExpense;
    }
}
