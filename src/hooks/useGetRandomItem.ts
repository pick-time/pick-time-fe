function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function getRandomItem<T>(array: T[]): T | null {
  if (array.length === 0) {
    return null;
  }
  const shuffledArray = shuffleArray(array);
  return shuffledArray[0];
}
