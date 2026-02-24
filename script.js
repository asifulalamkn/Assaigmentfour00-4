// Job data list
let jobList = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile apps using React Native for global users.",
    status: "not"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create modern websites with clean UI and smooth user experience.",
    status: "not"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Convert complex data into visual dashboards using charts and graphs.",
    status: "not"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Develop scalable backend APIs and manage cloud based systems.",
    status: "not"
  },
  {
    id: 5,
    company: "AI Labs",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description: "Work on machine learning models and AI powered applications.",
    status: "not"
  },
  {
    id: 6,
    company: "Pixel Studio",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    salary: "$70,000 - $100,000",
    description: "Design user friendly interfaces for mobile and web platforms.",
    status: "not"
  },
  {
    id: 7,
    company: "CyberSecure Ltd",
    position: "Security Analyst",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Analyze system security and protect applications from threats.",
    status: "not"
  },
  {
    id: 8,
    company: "DevOps Hub",
    position: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$120,000 - $170,000",
    description: "Maintain CI/CD pipeline and automate deployment workflow.",
    status: "not"
  }
];

let currentTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCountText = document.getElementById("jobCountText");

// tab
let tabs = document.querySelectorAll(".tab");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    // remove active class
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }
    this.classList.add("active");
    currentTab = this.dataset.tab;
    showJobs();
  });
}

//  dashboard 
function updateDashboard() {
  totalCount.innerText = jobList.length;

  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < jobList.length; i++) {
    if (jobList[i].status === "interview") {
      interview++;
    }
    if (jobList[i].status === "rejected") {
      rejected++;
    }
  }

  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

// jobs
function showJobs() {
  jobsContainer.innerHTML = "";

  let filteredJobs = [];

  for (let i = 0; i < jobList.length; i++) {
    if (currentTab === "all") {
      filteredJobs.push(jobList[i]);
    } else if (jobList[i].status === currentTab) {
      filteredJobs.push(jobList[i]);
    }
  }

  jobCountText.innerText = filteredJobs.length + " jobs";

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  for (let i = 0; i < filteredJobs.length; i++) {
    let job = filteredJobs[i];

    let statusText = "NOT APPLIED";
    if (job.status === "interview") statusText = "INTERVIEW";
    if (job.status === "rejected") statusText = "REJECTED";

    let card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <img src="assest/delete.png" class="delete-btn" data-id="${job.id}" />
      <div class="company">${job.company}</div>
      <div class="position">${job.position}</div>
      <div class="meta">${job.location} • ${job.type} • ${job.salary}</div>
      <div class="status">${statusText}</div>
      <div class="desc">${job.description}</div>
      <div class="actions">
        <button class="btn btn-interview" data-id="${job.id}">Interview</button>
        <button class="btn btn-rejected" data-id="${job.id}">Rejected</button>
      </div>
    `;

    jobsContainer.appendChild(card);
  }

  updateDashboard();
}

// btn action
jobsContainer.addEventListener("click", function (e) {
  let id = parseInt(e.target.dataset.id);

  // interview
  if (e.target.classList.contains("btn-interview")) {
    for (let i = 0; i < jobList.length; i++) {
      if (jobList[i].id === id) {
        jobList[i].status = "interview";
      }
    }
    showJobs();
  }

  // rejected 
  if (e.target.classList.contains("btn-rejected")) {
    for (let i = 0; i < jobList.length; i++) {
      if (jobList[i].id === id) {
        jobList[i].status = "rejected";
      }
    }
    showJobs();
  }

  // delete
  if (e.target.classList.contains("delete-btn")) {
    let newList = [];
    for (let i = 0; i < jobList.length; i++) {
      if (jobList[i].id !== id) {
        newList.push(jobList[i]);
      }
    }
    jobList = newList;
    showJobs();
  }
});

// first load
showJobs();