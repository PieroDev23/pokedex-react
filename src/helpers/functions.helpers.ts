export function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function formatSDSA(statName: string) {
  const sdsa: { [key: string]: string } = {
    "special-attack": "SA",
    "special-defense": "SD",
  };
  return sdsa[statName] || statName;
}
