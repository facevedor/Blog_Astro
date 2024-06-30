/* empty css                          */
import { k as createAstro, l as createComponent, m as renderTemplate, n as renderComponent } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_B7Ui1quC.mjs';
import { $ as $$Article, a as $$ArticleList } from './Article_nGtQF97J.mjs';
import { g as getSession } from './server_B_KaX6OF.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  console.log(posts);
  function redirect(url) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: url
      }
    });
  }
  if (!session) {
    return redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "ArticleList", $$ArticleList, {}, { "default": ($$result2) => renderTemplate`${posts.map((post) => renderTemplate`${renderComponent($$result2, "Article", $$Article, { ...post.data, "slug": post.slug })}`)}` })}`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
