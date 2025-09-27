package com.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Scanner;

public class MenuOperations {

    static Path pathToData = Paths.get("C:\\Users\\Админ\\Documents\\program\\all-my-projects\\AccountingAutomation\\src\\main\\resources\\");
    static Path recordPath;
    static Scanner scanner = new Scanner(System.in);
    static int month = 1;

    public static void calculateData(String content, String option){
        // here for CONTENT OF THE FILE, ONE MONTH

        String lines[] = content.split("\\n");



        if(option.equals("monthly")) {
            MonthReport report = new MonthReport();
            long expense = 0;
            long income = 0;

            for (int i = 1; i < lines.length; i++) {
                String dataInLine[] = lines[i].split(",");
                // item - isWhat - quantity - SumOfOne
                report.month = month;

                if (dataInLine[1].equals("TRUE")) {
                    expense += Long.parseLong(dataInLine[2]) * Long.parseLong(dataInLine[3]);
                    report.total += expense;
                    if (report.topExpense < expense) {
                        report.topExpense = expense;
                        report.topExpenseName = dataInLine[0];
                    }
                } else if (dataInLine[1].equals("FALSE")) {
                    income += Long.parseLong(dataInLine[2]) * Long.parseLong(dataInLine[3]);
                    report.total += income;
                    if (report.topIncome < income) {
                        report.topIncome = income;
                        report.topIncomeName = dataInLine[0];
                    }
                }
                expense = 0;
                income = 0;
            }

            report.total = report.expense - report.income;

            System.out.println("OUTPUT RESULTS");
            System.out.println(
              "Total expense: " + report.total
            + "\nTotal income: " + report.income
            + "\nmotnh: " + report.month
            + "\nTotal: " + report.total
            + "\ntopExpense: " + report.topExpense
            + "\nStringExpenseName: " + report.topExpenseName
            + "\nTopIncome: " + report.topIncome
            + "\nIncomeName: " + report.topIncomeName

            );

        } else if (option.equals("yearly")) {
            System.out.println("next . . .");
        }

        System.out.println("Back to menu?\n1/0");
        int user = 0;

        while(user != 1){
            user = scanner.nextInt();
        }
    }

    // how to get file?
    public static void calcMonthlyReport()  {
        // read a file -> save data -> calculate it. calculated! (output info)
//        here, read and iterate
        //
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
    }

    public static void calcYearlyReport() {
        recordPath = pathToData.resolve("yearlyReports");
        File[] files = recordPath.toFile().listFiles();

        for(File file : files){
            if(!file.isFile()) continue;


        }
    }

    public static void reconcileReports() {

    }

    public static void displayReportsMonthly() {

    }

    public static void displayReportsYearly() {}
}

