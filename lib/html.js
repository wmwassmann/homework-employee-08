const path = require("path");
const fs = require("fs");
// temp000
const temp000 = path.resolve(__dirname, "../temp");

const render = employees000 => {
  const html = [];
  // plural can be tough for me. small "e" and small "s" oddly look similar, so I miss "s" at the end of words.
  // 000 and 001 help me differentiate. The three digit system really helps. 
  html.push(...employees000
    .filter(employee001 => employee001.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees000
    .filter(employee001 => employee001.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees000
    .filter(employee001 => employee001.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let temp001 = fs.readFileSync(path.resolve(temp000, "manager.html"), "utf8");
  temp001 = replacePlaceholders(temp001, "name", manager.getName());
  temp001 = replacePlaceholders(temp001, "role", manager.getRole());
  temp001 = replacePlaceholders(temp001, "email", manager.getEmail());
  temp001 = replacePlaceholders(temp001, "id", manager.getId());
  temp001 = replacePlaceholders(temp001, "officeNumber", manager.getOfficeNumber());
  return temp001;
};

const renderEngineer = engineer => {
  let temp001 = fs.readFileSync(path.resolve(temp000, "engineer.html"), "utf8");
  temp001 = replacePlaceholders(temp001, "name", engineer.getName());
  temp001 = replacePlaceholders(temp001, "role", engineer.getRole());
  temp001 = replacePlaceholders(temp001, "email", engineer.getEmail());
  temp001 = replacePlaceholders(temp001, "id", engineer.getId());
  temp001 = replacePlaceholders(temp001, "github", engineer.getGithub());
  return temp001;
};

const renderIntern = intern => {
  let temp001 = fs.readFileSync(path.resolve(temp000, "intern.html"), "utf8");
  temp001 = replacePlaceholders(temp001, "name", intern.getName());
  temp001 = replacePlaceholders(temp001, "role", intern.getRole());
  temp001 = replacePlaceholders(temp001, "email", intern.getEmail());
  temp001 = replacePlaceholders(temp001, "id", intern.getId());
  temp001 = replacePlaceholders(temp001, "school", intern.getSchool());
  return temp001;
};

const renderMain = html => {
  const temp001 = fs.readFileSync(path.resolve(temp000, "index.html"), "utf8");
  return replacePlaceholders(temp001, "team", html);
};

const replacePlaceholders = (temp001, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return temp001.replace(pattern, value);
};

module.exports = render;
