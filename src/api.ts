const fetchData = async () => {
    const res = await fetch('https://front-test.beta.aviasales.ru/search');
    const { searchId } = await res.json();
    const data = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

    return await data.json();
};

export default fetchData;