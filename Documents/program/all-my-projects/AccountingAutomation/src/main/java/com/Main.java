package com;

import java.util.Scanner;
import static com.utils.MenuOperations.*;


public class Main {
    public static void main(String[] args) {
        // interface for managing a prorgam
        // convert mounts/year info from files to objects
        // check months -> year
        // output

        // we get .csv files
        // MonthlyReport, YearReport

        // m.YYYYMM.txt -> m -> a monthly report
        // y.2021.csv - year 2021 report
        // item_name, is_expense +/-, quantity, sum_of_one - month
        // month, amount, is_expense -> 01,1000,true

        // implement:
        // 1. calculate all mounth reports
        // 2. calculate year report
        // 3. check reports
        // 4. shows all info all mounth reports
        // 5. shows info year report

        // 1. Menu
        // 2. function to open file -> get data -> process it -> save it -> output it -> return to the menu
        boolean running = true;
        final String[] menu = {
                "Menu:",
                "[1] Calculate Monthly Reports",
                "[2] Calculate Year Report",
                "[3] Reconcile reports",
                "[4] Display all monthly report",
                "[5] Display all yearly report",
                "[0] Exit"
        };


        System.out.println("Welcome To Account Automation App!");


        int option = -1;
        Scanner scanner = new Scanner(System.in);
        while(running){
            for(String menuItem : menu) System.out.println(menuItem);
            option = scanner.nextInt();
            switch(option){

                // idea: put montly/year in one functions with choices 1 / 2
                case 0:
                    running = false;
                    break;
                case 1:
                    calcMonthlyReport();
                    break;
                case 2:
                    calcYearlyReport();
                    break;
                case 3:
                    reconcileReports();
                    break;
                case 4:
                    displayReportsMonthly();
                    break;
                case 5:
                    displayReportsYearly();
                    break;
            }


        }

    }
}