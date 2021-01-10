import React from "react";


function Skills() {
    return (
        <section class="container">
            <h2 className="top-title">Skills</h2>
            <p class="mt-5">
                <a href="www.linkedin.com/in/damarisccampos">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn"></img>
                </a>
            </p>
            <a href="https://github.com/DCampos07/damaris-profile/blob/master/src/assets/Damaris_Campos_Resume.pdf"
                class="link">Download my Resume
            </a>

            <hr></hr>

            <div>
                <div class="mt-5">
                    <h2 className="top-title">Damaris Campos</h2>
                    <ul>
                        <li>
                            My drive to always learn something new, to be open minded, to know that
                            there are many ways to do something, and to keep in mind that we never
                            stop growing are my professional pillars.

                    </li>
                    </ul>
                </div>
            </div>

            <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills
