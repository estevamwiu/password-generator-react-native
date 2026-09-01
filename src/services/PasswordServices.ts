export default function generatePass () {
    let password: string = '';
    let characters: string = 'aeiou';

    let passwordLength: number = 10;
    for (let index = 0; index < passwordLength; index++) {
        let randomIndex: number = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}