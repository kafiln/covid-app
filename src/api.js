const getData = () => fetch(process.env.API_URL).then((res) => res.json());

export { getData };
