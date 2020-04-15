const getData = () =>
  fetch(process.env.REACT_APP_API_URL).then((res) => res.json());

export { getData };
