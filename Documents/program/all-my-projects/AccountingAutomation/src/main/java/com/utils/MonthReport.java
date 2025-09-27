package com.utils;

public class MonthReport {
    int month;
    long income;
    long expense;
    long total;
    long topExpense;
    String topExpenseName;

    long topIncome;
    String topIncomeName;


    public MonthReport() {
        this.month = 0;
        this.income = 0;
        this.expense = 0;
        this.total = 0;
        this.topExpense = 0;
        this.topExpenseName = "";
        this.topIncome = 0;
        this.topIncomeName = "";
    }
}
