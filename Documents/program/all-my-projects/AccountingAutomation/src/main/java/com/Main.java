package com;

import java.util.Scanner;
import static com.utils.MenuOperations.*;


public class Main {
    public static void main(String[] args) {

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