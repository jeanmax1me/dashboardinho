import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Mancinelli",
        image: personsImgs.person_four,
        date: "23/08/16",
        amount: 1200
    },
    {
        id: 12, 
        name: "Adrian Clark",
        image: personsImgs.person_three,
        date: "23/08/18",
        amount: 650
    },
    {
        id: 13, 
        name: "John Krasinki",
        image: personsImgs.person_one,
        date: "23/08/19",
        amount: 420
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 30,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 65,
        value2: 33
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 19,
        value2: 38
    },
    {
        id: 18,
        month: "May",
        value1: 42,
        value2: 90
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 220
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 890
    },
    {
        id: 21, 
        title: "Groceries",
        type: "Manual",
        amount: 500
    },
    {
        id: 22, 
        title: "Housing",
        type: "Automated",
        amount: 1000
    },
    {
        id: 23, 
        title: "Others",
        type: "Manual",
        amount: 600
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "Netflix",
        due_date: "23/09/04",
        amount: 17.99
    },
    {
        id: 25,
        title: "Internet",
        due_date: "23/09/05",
        amount: 44.99
    },
    {
        id: 26,
        title: "Electricity",
        due_date: "23/09/07",
        amount: 64
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.besties,
        saving_amount: 4000,
        title: "Summer Holidays with besties",
        date_before: "Mid 2024",
        amount_left: 720
    }
];

export const loans = [
    {
        id: 28,
        total_due_amount: 69420,
        progress: 42696
    }
]