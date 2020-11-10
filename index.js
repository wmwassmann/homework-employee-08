const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const render = require("./lib/html");
// output pathways to the output folder and to the html display.
const OUTPUT_DIR = path.resolve(__dirname,'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// Arrays for our crew.
const team000 = [];
const id000 = [];


function menu000() {
    // 000 tag signifies globalized functions, and variables. 
    // 001 tag signifies management status
    // 002 tag signifies employee status
    // 003 tag signifies intern status
    // This system helps me see at a glance what section I'm working with as it takes a little bit longer for me read the words and comprehend what I'm seeing 
    // vs knowing that a 1, 2, or a 3, marks a position in the heirarchy. In general the number system helps me too. 
    
    
   
    
    // function to add or create a manager
    function create001() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name001',
            message: 'Please input your manager\'s name',
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please input your manager\'s name';
            }

        },
        {
            type: 'input',
            name: 'id001',
            message: 'Please input your manager\'s id.',
            validate: answer => {
                const success = answer.match(
                    /^[1-9]\d*$/
                );
                if (success) {
                    return true;
                }
                return 'Your manager\'s id cannot be a value less than zero. Please input a number greater than zero.';           
            }
        },
        {
            type: "input",
            name: "email001",
            message: "Please input you manager's email.",
            validate: answer => {
              const success = answer.match(
                /\S+@\S+\.\S+/
              );
              if (success) {
                return true;
              }
              return "Field empty or invalid. Please input a valid email address.";
            }
          },
          {
            type: "input",
            name: "office001",
            message: "What is your manager\'s office number?",
            validate: answer => {
              const success = answer.match(
                /^[1-9]\d*$/
              );
              if (success) {
                return true;
              }
              return "Your manager\'s id cannot be a value less than zero. Please input a number greater than zero.";
            }
          }
        ]).then(answers => {
          const manager = new Manager(answers.name001, answers.id001, answers.email001, answers.office001);
          team000.push(manager);
          id000.push(answers.id000);
          create000();
        });
      }

      async function create000() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name002',
            message: 'Please input which type of team member you would like to add to the roster.',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
                    'Go back'
                ]
            }  
        ]).then(roster000 => {
            switch(roster000.team000) {
                case 'Manager':
                    // if there is no manager, allows to call function create001 to create a manager
                    await create001();
                    break
                case 'Engineer':
                    // Calls add002 function and adds the engineer team member
                    await add002();
                    break
                case 'Intern':
                    // calls 003 function and adds the inter team member
                    await add003();
                    break;
                default:
                    build000();    

            }
        });
      } 
    //function to add an engineer to the roster
    function add002() {
        inquirer.prompt([
       {
            type: 'input',
            name: 'name002',
            message: 'Please input your new engineer\'s name',
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please input your engineer\'s name';
            }

        },              
        {
            type: 'input',
            name: 'id002',
            message: 'Please input your engineer\'s id.',
            validate: answer => {
                const success = answer.match(
                    /^[1-9]\d*$/
                );
                if (success) {
                    if (id001.includes(answer)) {
                        return 'This employee id already exists. Please input a different number.'
                    } else {
                        return true;
                    }                    
                }
                return 'Your engineer\'s id cannot be a value less than zero. Please input a number greater than zero.';           
            }
        },
        {
            type: "input",
            name: "email002",
            message: "Please input your engineer\'s email.",
            validate: answer => {
              const success = answer.match(
                /\S+@\S+\.\S+/
              );
              if (success) {
                return true;
              }
              return "Field empty or invalid. Please input a valid email address.";
            }
          },
          {
            type: "input",
            name: "github002",
            message: "Please input your engineer\'s GitHub account username.",
            validate: answer => {
              if (answer !== '') {
                return true;
              } 
              return 'Your engineer\'s GitHub username cannot be empty. Please input a value in this field.'
            }
          }
        ]).then(answers => {
          const engineer = new Engineer(answers.name002, answers.id002, answers.email002, answers.github002);
          team000.push(engineer);
          id000.push(answers.id000);
          create000();
        });
      }


      function add003() {
        inquirer.prompt([
       {
            type: 'input',
            name: 'name003',
            message: 'Please input your new intern\'s name',
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please input your intern\'s name';
            }

        },              
        {
            type: 'input',
            name: 'id003',
            message: 'Please input your intern\'s id.',
            validate: answer => {
                const success = answer.match(
                    /^[1-9]\d*$/
                );
                if (success) {
                    if (id000.includes(answer)) {
                        return 'This employee id already exists. Please input a different number.'
                    } else {
                        return true;
                    }                    
                }
                return 'Your intern\'s id cannot be a value less than zero. Please input a number greater than zero.';           
            }
        },
        {
            type: "input",
            name: "email003",
            message: "Please input your intern\'s email.",
            validate: answer => {
              const success = answer.match(
                /\S+@\S+\.\S+/
              );
              if (success) {
                return true;
              }
              return "Field empty or invalid. Please input a valid email address.";
            }
          },
          {
            type: "input",
            name: "github003",
            message: "Please input your intern\'s GitHub account username.",
            validate: answer => {
              if (answer !== '') {
                return true;
              } 
              return 'Your intern\'s GitHub username cannot be empty. Please input a value in this field.'
            }
          },
          {
            type: "input",
            name: "school003",
            message: "Please input your intern\'s school.",
            validate: answer => {
              if (answer !== '') {
                return true;
              } 
              return 'Your intern\'s school cannot be empty. Please input a value in this field.'
            }
          },
          {
            type: "input",
            name: "edu003",
            message: "Please input your intern\'s level of education.",
            validate: answer => {
              if (answer !== '') {
                return true;
              } 
              return 'Your intern\'s level of education cannot be empty. Please input a value in this field.'
            }
          }
        ]).then(answers => {
          const intern = new Intern(answers.name003, answers.id003, answers.email003, answers.github003, answers.school003, answers.edu003);
          team000.push(intern);
          id000.push(answers.id000);
          create000();
        });
      }
        
  function build000() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team000), "utf-8");
  }

  create001();

}

menu000();