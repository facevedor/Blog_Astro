src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {

  const posts = await getCollection('blog');
  return rss({
    // `<title>` field in output xml
    title: 'Mi blog',
    // `<description>` field in output xml
    description: 'Mi blog con astro',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map(post => ({
        ...post.data,
        link: `/blog/${post.slug}`}
    )) 
  });
}