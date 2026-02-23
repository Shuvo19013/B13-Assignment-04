
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



function toggleStyle(id) {

  // Reset all buttons
  [allTabBtn, interviewTabBtn, rejectedTabBtn].forEach(btn => {
    btn.classList.add("bg-base-100", "text-gray-500");
    btn.classList.remove("bg-[#3B82F6]", "text-white");
  });

  // Activate selected button
  const selected = document.getElementById(id);
  selected.classList.remove("bg-base-100", "text-gray-500");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  // Show/Hide sections
  if (id === "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
    noJobAvailable.classList.add("hidden");
  } 
  else if (id === "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderJobs(interviewList);
  } 
  else if (id === "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderJobs(rejectedList);
  }

  tabJobCount();
}



mainContainer.addEventListener("click", function (event) {

  
  if (event.target.classList.contains("btn-success")) {
    handleJobAction(event, "INTERVIEW");
  }

  else if (event.target.classList.contains("btn-error")) {
    handleJobAction(event, "REJECTED");
  }

  
  else if (event.target.closest(".btn.rounded-full")) {
    handleDelete(event);
  }

  calculateCount();
});



function handleJobAction(event, status) {

  const parentNode = event.target.parentNode.parentNode;

  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const location = parentNode.querySelector(".location").innerText;
  const type = parentNode.querySelector(".type").innerText;
  const salary = parentNode.querySelector(".salary").innerText;
  const description = parentNode.querySelector(".description").innerText;

  
  interviewList = interviewList.filter(job =>
    !(job.companyName === companyName && job.position === position)
  );

  rejectedList = rejectedList.filter(job =>
    !(job.companyName === companyName && job.position === position)
  );

  
  const statusElement = parentNode.querySelector(".jobStatus");
  statusElement.innerText = status;
  statusElement.className = getStatusClass(status);

  const jobData = {
    companyName,
    position,
    location,
    type,
    salary,
    jobStatus: status,
    description,
  };

  if (status === "INTERVIEW") {
    interviewList.push(jobData);
  } else {
    rejectedList.push(jobData);
  }

  // Re-render if needed
  if (interviewTabBtn.classList.contains("bg-[#3B82F6]")) {
    renderJobs(interviewList);
  }

  if (rejectedTabBtn.classList.contains("bg-[#3B82F6]")) {
    renderJobs(rejectedList);
  }
}


function handleDelete(event) {
  const card = event.target.closest(".cardContainer");

  const companyName = card.querySelector(".companyName").innerText;
  const position = card.querySelector(".position").innerText;

  card.remove();

  interviewList = interviewList.filter(
    job => job.companyName !== companyName || job.position !== position
  );

  rejectedList = rejectedList.filter(
    job => job.companyName !== companyName || job.position !== position
  );
}


function getStatusClass(status) {
  return status === "INTERVIEW"
    ? "jobStatus px-3 py-2 text-[14px] rounded border bg-green-100 text-green-500 border-green-400 font-[600]"
    : "jobStatus px-3 py-2 text-[14px] rounded border bg-red-100 text-red-500 border-red-400 font-[600]";
}

// =====================
// Part 9: Render Jobs (Reusable)
// =====================

function renderJobs(jobList) {

  filterSection.innerHTML = "";

  if (jobList.length === 0) {
    noJobAvailable.classList.remove("hidden");
    return;
  } else {
    noJobAvailable.classList.add("hidden");
  }

  for (let job of jobList) {

    let div = document.createElement("div");
    div.className =
      "cardSection flex flex-col gap-10 md:flex-row justify-between bg-base-100 p-6 rounded-lg mb-5 mt-7 cardContainer";

    div.innerHTML = `
      <div>
        <h2 class="companyName text-[#002C5C] text-[18px] font-semibold">
          ${job.companyName}
        </h2>
        <p class="position text-[16px] text-gray-500">
          ${job.position}
        </p>

        <div class="text-gray-500 my-5 flex flex-col gap-4 md:flex-row md:gap-2">
          <p class="location">${job.location}</p>
          <p class="type">${job.type}</p>
          <p class="salary">${job.salary}</p>
        </div>

        <div>
          <span class="${getStatusClass(job.jobStatus)}">
            ${job.jobStatus}
          </span>
        </div>

        <p class="description text-[#323B49] text-[14px] mt-3">
          ${job.description}
        </p>

        <div class="mt-5 flex gap-2">
          <button class="btn btn-sm btn-outline btn-success">INTERVIEW</button>
          <button class="btn btn-sm btn-outline btn-error">REJECTED</button>
        </div>
      </div>

      <div>
        <button class="btn rounded-full">
          <img src="./image/Trash.png" alt="" />
        </button>
      </div>
    `;

    filterSection.appendChild(div);
  }
}

calculateCount();