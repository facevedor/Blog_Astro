import rss from '@astrojs/rss';
import { g as getCollection } from './_astro_content_B7Ui1quC.mjs';

src/pages/rss.xml.js;
async function GET(context) {

  const posts = await getCollection('blog');
  return rss({
    // `<title>` field in output xml
    title: 'Mi Recetario',
    // `<description>` field in output xml
    description: 'Recetario Cetogenico',
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

export { GET };
