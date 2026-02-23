
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



function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  tabJobCount();
}


function tabJobCount() {
  const countElement = document.querySelector(
    ".flex.justify-between p.text-gray-500"
  );

  const totalJobs = allCardSection.children.length;

  if (allTabBtn.classList.contains("bg-[#3B82F6]")) {
    countElement.innerText = totalJobs + " jobs";
  } 
  else if (interviewTabBtn.classList.contains("bg-[#3B82F6]")) {
    countElement.innerText = interviewList.length + " of " + totalJobs + " jobs";
  } 
  else if (rejectedTabBtn.classList.contains("bg-[#3B82F6]")) {
    countElement.innerText = rejectedList.length + " of " + totalJobs + " jobs";
  }
}