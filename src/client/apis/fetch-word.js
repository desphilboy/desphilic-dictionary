
export const fetchWordApi = word => fetch(`http://localhost:9090/perso-arabic/${word}`, {
  method: 'GET'
});