5. Use useEffect to fetch data from an API when the component mounts. Include error handling and a loading state.

If the input is empty ("") or invalid (NaN), parseInt will return NaN (Not a Number).
The ---> || '' part ensures that instead of NaN, it sets an empty string (''), preventing errors.

So if we have no values entered, this parseInt will not throw Nan. Instead, it shows us empty string as we gave ---> || ''


