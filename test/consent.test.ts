import {User} from "../src/user";
import {Processor} from "../src/processor";

describe('Test for consent', () =>{
    let user:User
    let processor: Processor
    beforeEach(() => {
        user = new User("Jack", "Donald",19, "+3723343535", "Tallinn")
        processor = new Processor()
    })
    test("Initially have undefined consent", () => {
        expect(user.consentGiven).toBeUndefined()
    })
    test("Processor can give consent to user", () => {
        processor.giveConsent(user)
        expect(user.consentGiven).toBe(true)
    })
    test("Verify fail consent when it is not given", () => {
        expect(processor.checkConsent(user)).toBe(false)
    })
    test("Verify consent is not given if user age is below 18 years ", () => {
            user.age = 14
            expect(processor.checkUserAge(user)).toBe(false)
    })
    test("Verify consent is  given if user age is above 18 years ", () => {
        user.age = 28
        expect(processor.checkUserAge(user)).toBe(true)
    })
    test("Revoke given consent", () => {
        processor.giveConsent(user);
        expect(user.consentGiven).toBe(true);

        processor.revokeConsent(user);
        expect(user.consentGiven).toBe(false);
    });
})