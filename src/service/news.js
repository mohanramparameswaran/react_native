import {
  articles_url,
  _api_key,
  category,
  country_code,
} from '../config/rest_config';

export async function getArticles(country_code = 'us') {
  let status = '';
  try {
    status = 'before api call';
    let articles = await fetch(
      `${articles_url}?country=${country_code}&
        category=${category}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );
    status = 'after api call';
    let result = await articles.json();
    status = 'after json';
    articles = null;
    status = 'after null';
    return result.articles;
  } catch (error) {
    throw error;
  }
}
