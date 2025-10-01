package com.utils;
import com.utils.Data.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Year;
import java.util.HashMap;
import java.util.Scanner;

public class MenuOperations {

    static Path pathToData = Paths.get("C:\\Users\\Админ\\Documents\\program\\all-my-projects\\AccountingAutomation\\src\\main\\resources\\");
    static Path recordPath;
    static Scanner scanner = new Scanner(System.in);
    static int month = 1;
    static int year = 1;

    public static void calculateData(String content, String option){
        // here for CONTENT OF THE FILE, ONE MONTH

        String lines[] = content.split("\\n");

        if(option.equals("monthly")) {
            MonthReport report = new MonthReport();
            long expense = 0;
            long income = 0;

            for (int i = 1; i < lines.length; i++) {
                String dataInLine[] = lines[i].trim().split(",");
                // item - isWhat - quantity - SumOfOne
                report.month = month;

                if (dataInLine[1].equals("TRUE")) {
                    expense += Long.parseLong(dataInLine[2]) * Long.parseLong(dataInLine[3]);
                    report.expense += expense;
                    if (report.topExpense < expense) {
                        report.topExpense = expense;
                        report.topExpenseName = dataInLine[0];
                    }
                } else if (dataInLine[1].equals("FALSE")) {
                    income += Long.parseLong(dataInLine[2]) * Long.parseLong(dataInLine[3]);
                    report.income += income;
                    if (report.topIncome < income) {
                        report.topIncome = income;
                        report.topIncomeName = dataInLine[0];
                    }
                }
                expense = 0;
                income = 0;
            }

            report.total = report.expense - report.income;

            Data.monthReports.add(report);
            month++;

        } else if (option.equals("yearly")) {
            YearReport report = new YearReport();
            long expense = 0;
            long income = 0;

            for(int i = 1; i < lines.length; i++) {
                String dataInLine[] = lines[i].trim().split(",");
                report.year = year;
                if (dataInLine[2].equals("TRUE")) {
                    expense = Long.parseLong(dataInLine[1]);
                    if(expense > report.maxExpensiveMonth){
                        report.maxExpensiveMonth = Integer.parseInt(dataInLine[0]);
                        report.maxExpense = expense;
                    }
                    report.averageExpense += expense;
                } else if (dataInLine[2].equals("FALSE")) {
                    income = Long.parseLong(dataInLine[1]);
                    if(income > report.maxIncome){
                        report.maxIncome = income;
                        report.maxIncomeMonth = Integer.parseInt(dataInLine[0]);
                    }
                    report.averageIncome += income;
                }
            }

            report.total = report.averageExpense - report.averageIncome;
            report.averageExpense /= lines.length - 1;
            report.averageIncome /= lines.length - 1;

            Data.yearReports.add(report);

        }

    }

    // how to get file?
    public static void calcMonthlyReport()  {

        recordPath = pathToData.resolve("monthlyReports");
        File[] files = recordPath.toFile().listFiles();


        if (files == null) return;
        for(File file : files){ // all files file01 - file02 - file03
            if(!file.isFile()) continue;
            try {
                String content = Files.readString(file.toPath());
                calculateData(content, "monthly");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Calculated!\nClosing...");

        try {
            // 200 minutes = 200 * 60 * 1000 milliseconds
            Thread.sleep(1 * 1000); // closing
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public static void calcYearlyReport() {
        recordPath = pathToData.resolve("yearlyReports");
        File[] files = recordPath.toFile().listFiles();

        for(File file : files){
            if(!file.isFile()) continue;
            try {
                String content = Files.readString(file.toPath());
                calculateData(content, "yearly");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        System.out.println("Calculated!\nClosing...");

        try {
            Thread.sleep(1 * 1000); // closing
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public static void reconcileReports() {

        int year = 0;
        long totalIncome = 0;
        long totalExpense = 0;
        for (MonthReport report : Data.monthReports) {
            totalIncome += report.income;
            totalExpense += report.expense;
        }

        long total = totalIncome - totalIncome;

        if(totalIncome == total) System.out.println("Reports reconciled! No errors!");
        else {
            System.out.println("Reports have errors!\nTotal From Months: " + total + "\nTotal for Year: " + Data.yearReports.get(0).total);
        }
    }

    public static void displayReportsMonthly() {
        for(MonthReport report : Data.monthReports) {
            System.out.println("Report for #" + report.month + " month:\n");
            System.out.println("Total Income: " + report.income);
            System.out.println("Total Expense: " + (report.income - report.total));
            System.out.println("Total: " + report.total);
            System.out.println("Top Expense is " + report.topExpenseName + ", " + report.topExpense);
            System.out.println("Top Income is " + report.topIncomeName + ", " + report.topIncome + "\n");
        }

        System.out.println("Calculated!\nClosing...");

        try {
            // 200 minutes = 200 * 60 * 1000 milliseconds
            Thread.sleep(1 * 1000); // closing
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

    }

    public static void displayReportsYearly() {
        for(YearReport report : Data.yearReports) {
            System.out.println("Report for #" + report.year + " year:\n");
            System.out.println("Total Profit: " + report.profit);
            System.out.println("Average Expense: " + report.averageExpense);
            System.out.println("Average Income: " + report.averageIncome);
            System.out.println("Total: " + report.total);
            System.out.println("The most expensive month is " + report.maxExpensiveMonth + ", " + report.maxExpense);
        }

        System.out.println("Calculated!\nClosing...");

        try {
            // 200 minutes = 200 * 60 * 1000 milliseconds
            Thread.sleep(1 * 1000); // closing
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

