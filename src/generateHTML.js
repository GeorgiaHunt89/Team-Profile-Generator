// Function to Generate HTML page
const createStaffPage = teamMemberCards => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma-rtl.min.css">
    <link rel='stylesheet' href='./style.css'>
    <title>Team Profile Generator</title>
</head>
<body>
    <!-- Hero header section -->
    <header>
        <section class="hero is-primary">
            <div class="hero-body">
              <p class="title">
                Team Profile Generator
              </p>
              <p class="subtitle">
                A summary of current team members.
              </p>
            </div>
          </section>
    </header>
    <div>
    <!-- Team Member cards -->
    ${teamMemberCards}
    </div>
</body>  
</html>
    `
}

// Function to create Manager Card
const createManager = manager => {
    return `
    <div class="card team-card manager-card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
            <img src="Images/placeimg_1.png" alt="Placeholder image">
        </div>
        <div class="media-content">
          <p class="title is-4 manager-name">${manager.name}</p>
          <p class="subtitle is-6 manager-title">Manager</p>
        </div>
      </div>
      <div class="content">
        <p class='id'>ID: ${manager.id}</p>
        <p class='officeNumber'>Office Number: ${manager.officeNumber}</p>
        <p class='email'>Email: <a href="mailto:${manager.email}">${manager.email}</p>
      </div>
    </div>
  </div> 
  `
}

// Function to create Engineer Card
const createEngineer = engineer => {
  return `
  <div class="card team-card engineer-card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
          <img src="Images/placeimg_2.png" alt="Placeholder image">
      </div>
      <div class="media-content">
        <p class="title is-4 engineer-name">${engineer.name}</p>
        <p class="subtitle is-6 engineer-title">Engineer</p>
      </div>
    </div>
    <div class="content">
      <p class='id'>ID: ${engineer.id}</p>
      <p class='gitHub'>GitHub: ${engineer.gitHub}</p>
      <p class='email'>Email: <a href="mailto:${engineer.email}">${manager.email}</p>
    </div>
  </div>
</div> 
`
}

// Function to create Employee Card
const createEmployee = employee => {
  return `
  <div class="card team-card employee-card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
          <img src="Images/placeimg_4.png" alt="Placeholder image">
      </div>
      <div class="media-content">
        <p class="title is-4 employee-name">${employee.name}</p>
        <p class="subtitle is-6 employee-title">Employee</p>
      </div>
    </div>
    <div class="content">
      <p class='id'>ID: ${employee.id}</p>
      <p class='email'>Email: <a href="mailto:${employee.email}">${manager.email}</p>
    </div>
  </div>
</div> 
`
}

// Function to create Intern Card
const createIntern = intern => {
  return `
  <div class="card team-card intern-card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
          <img src="Images/placeimg_3.png" alt="Placeholder image">
      </div>
      <div class="media-content">
        <p class="title is-4 intern-name">${intern.name}</p>
        <p class="subtitle is-6 intern-title">Intern</p>
      </div>
    </div>
    <div class="content">
      <p class='id'>ID: ${intern.id}</p>
      <p class='school'>School: ${intern.school}</p>
      <p class='email'>Email: <a href="mailto:${intern.email}">${manager.email}</p>
    </div>
  </div>
</div> 
`
}