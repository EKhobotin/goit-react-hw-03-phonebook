export function saveToLs(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function loadFromLs() {
  const loadFromLs = localStorage.getItem('contacts');
  return JSON.parse(loadFromLs);
}
