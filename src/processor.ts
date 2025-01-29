import {User} from "./user";

export class Processor{

    giveConsent(userInput: User): void{

        userInput.consentGiven = true
    }

    checkConsent (userInput:User):boolean{
        return userInput.consentGiven === true
    }

    checkUserAge(userInput:User): boolean{
        if (userInput.age < 18) {
            return userInput.consentGiven = false
        }
        else {
            return userInput.consentGiven = true
        }
    }
    revokeConsent (userInput:User): void{
         userInput.consentGiven = false
    }
}