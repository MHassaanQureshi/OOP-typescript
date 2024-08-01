#! /usr/bin/env node
import inquirer from "inquirer";

class Person {
    private personality: string = "";

    constructor() {
        this.personality = "mystery";
    }

    public question(answer: string): string {
        if (answer === "1") {
            this.personality = "introvert";
        } else if (answer === "2") {
            this.personality = "extrovert";
        } else {
            console.log("choose 1 or 2");
        }
        return this.personality;
    }

    public async answerfunc(): Promise<string> {
        const { answer } = await inquirer.prompt([
            {
                type: "input",
                name: "answer",
                message: "enter a number 1 or 2",
            },
        ]);

        const personality = this.question(answer);
        return personality;
    }
}

class Program extends Person {
    constructor() {
        super();
        this.answerfunc().then(personality => {
            console.log(`Your personality is: ${personality}`);
        });
    }
}

class ExtendedProgram extends Person {
    constructor() {
        super();
        this.getNameAndPersonality();
    }

    private async getNameAndPersonality(): Promise<void> {
        const { name } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?",
            },
        ]);

        const personality = await this.answerfunc();
        console.log(`Name: ${name}, Personality: ${personality}`);
    }
}


new ExtendedProgram();
