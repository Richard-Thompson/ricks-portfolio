import { createClient } from 'contentful';
const fetchData = (query: object): object => {
  // tslint:disable-next-line:no-any
  let client: any;

  if (
    process.env.REACT_APP_CONTENTFUL_SPACE_ID &&
    process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  ) {
    client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
    });
  }

  return client
    .getEntries(query)
    .then(
      (items: object): object => {
        return items;
      }
    )
    .catch(
      (error: Error): Error => {
        return error;
      }
    );
};

export default fetchData;
