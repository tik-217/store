export function setLSData(key: string, value: any) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}
