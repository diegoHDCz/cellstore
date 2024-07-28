export function containsSimilarWord(text: string, word: string): boolean {
  const regex = new RegExp(`\\b${word}(s|ing)?\\b`, 'i');
  return regex.test(text);
}