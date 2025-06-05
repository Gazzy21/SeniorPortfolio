const content = {
    overview: `
      <h1>Overview</h1>
      <hr>
      <ul>
        <li>I'm a high school student with over 3 years of experience in various coding and web development technologies.</li>
            <li>I'm all about learning code and software to make a difference.</li>
            <li>I've worked on real-use websites in my school and am experienced in collaborative environments.</li>
            <li>I'm always curious and eager to keep learning, and love solving complex challenges.</li>
      </ul>
    `,
    education: `
      <h1>Education</h1>
      <hr>
      <ul>
        <li>Graduated from Marlboro High School in 2025.</li>
        <li>Attending The College of New Jersey (Class of 2029) majoring in Computer Science.</li>
        <li>Completed multiple AP courses in STEM areas and participated in coding web design based internship.</li>
        <li>Educated in HTML, CSS, JavaScript, and Java through courses in High School.</li>
      </ul>
    `,
    goals: `
      <h1>Goals</h1>
      <hr>
      <ul>
        <li>Graduate with a strong GPA and real-world coding experience.</li>
        <li>Intern at a top tech company to learn professional software development practices.</li>
        <li>Build applications that solve real problems in my community and beyond.</li>
        <li>Never stop learning and improving as a programmer and problem solver.</li>
      </ul>
    `
};

document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const contentBox = document.getElementById('infoContent');
        if (radio.id === 'btnradio1') {
            contentBox.innerHTML = content.overview;
        } else if (radio.id === 'btnradio2') {
            contentBox.innerHTML = content.education;
        } else if (radio.id === 'btnradio3') {
            contentBox.innerHTML = content.goals;
        }
    });
});