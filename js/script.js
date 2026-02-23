
let interviewList = [];
let rejectedList = [];

// Count elements
let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// Filter buttons
const allTabBtn = document.getElementById("all-filter-btn");
const interviewTabBtn = document.getElementById("interview-filter-btn");
const rejectedTabBtn = document.getElementById("rejected-filter-btn");

// Sections
const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");
const noJobAvailable = document.getElementById("no-job-available");