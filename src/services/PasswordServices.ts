export interface PasswordOptions {
    length: number;
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

export const MIN_LENGTH = 4;
export const MAX_LENGTH = 64;

const CHARSETS = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%&*?-_+=',
};

type CharsetKey = keyof typeof CHARSETS;

function randomChar(set: string): string {
    return set.charAt(Math.floor(Math.random() * set.length));
}

export default function generatePass(options: PasswordOptions): string {
    const selectedSets = (Object.keys(CHARSETS) as CharsetKey[])
        .filter((key) => options[key])
        .map((key) => CHARSETS[key]);

    if (selectedSets.length === 0) {
        return '';
    }

    const allChars = selectedSets.join('');

    const chars: string[] = selectedSets.map(randomChar);

    while (chars.length < options.length) {
        chars.push(randomChar(allChars));
    }

    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    return chars.join('');
}
