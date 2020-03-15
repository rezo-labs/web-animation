import {
    validateProject,
} from '../new-project/validate';

describe('Test new-project functions', () => {
    it('validateProject should work as expected', () => {
        const { message } = validateProject;
        expect(validateProject('abc')).toBe(true);
        expect(validateProject('ABC')).toBe(true);
        expect(validateProject('Abc')).toBe(true);
        expect(validateProject('abc123')).toBe(true);
        expect(validateProject('abc-123')).toBe(true);
        expect(validateProject('123-abc')).toBe(true);

        expect(validateProject('abc.')).toBe(message);
        expect(validateProject('.abc')).toBe(message);
        expect(validateProject('a?1')).toBe(message);
        expect(validateProject('a;bc')).toBe(message);
        expect(validateProject('a@bc')).toBe(message);
        expect(validateProject('abc!')).toBe(message);
    });
});
