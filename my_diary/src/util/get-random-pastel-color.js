const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360); // 0 ~ 359
  const saturation = 70 + Math.random() * 10; // 70 ~ 80%
  const lightness = 85 + Math.random() * 10; // 80 ~ 90%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default getRandomPastelColor;
