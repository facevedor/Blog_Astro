import { l as createComponent, m as renderTemplate, o as maybeRenderHead, u as unescapeHTML } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"ingredientes\">Ingredientes:</h3>\n<ul>\n<li>2 bistecs de ribeye (aproximadamente 250 g cada uno)</li>\n<li>4 cucharadas de mantequilla</li>\n<li>2 dientes de ajo, finamente picados</li>\n<li>1 cucharada de perejil fresco, picado</li>\n<li>1 cucharada de romero fresco, picado</li>\n<li>Sal y pimienta al gusto</li>\n</ul>\n<h3 id=\"instrucciones\">Instrucciones:</h3>\n<ol>\n<li>Sazona los bistecs con sal y pimienta por ambos lados.</li>\n<li>En una sartén grande, derrite 2 cucharadas de mantequilla a fuego medio-alto.</li>\n<li>Cocina los bistecs durante 3-4 minutos por cada lado para un término medio, o ajusta el tiempo según tu preferencia.</li>\n<li>En una sartén pequeña, derrite las otras 2 cucharadas de mantequilla a fuego medio. Añade el ajo picado, el perejil y el romero picados, y cocina por 1-2 minutos hasta que el ajo esté fragante.</li>\n<li>Vierte la mantequilla de ajo y hierbas sobre los bistecs antes de servir.</li>\n</ol>";

				const frontmatter = {"title":"Bistec con Mantequilla de Ajo y Hierbas","pubDate":"Jul 01 2022","heroImage":"/assets/bistecMantequilla.png","tags":["Carne","Mantequilla"],"description":"This is a brief description of my first post."};
				const file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post4.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Ingredientes:\r\n- 2 bistecs de ribeye (aproximadamente 250 g cada uno)\r\n- 4 cucharadas de mantequilla\r\n- 2 dientes de ajo, finamente picados\r\n- 1 cucharada de perejil fresco, picado\r\n- 1 cucharada de romero fresco, picado\r\n- Sal y pimienta al gusto\r\n\r\n### Instrucciones:\r\n1. Sazona los bistecs con sal y pimienta por ambos lados.\r\n2. En una sartén grande, derrite 2 cucharadas de mantequilla a fuego medio-alto.\r\n3. Cocina los bistecs durante 3-4 minutos por cada lado para un término medio, o ajusta el tiempo según tu preferencia.\r\n4. En una sartén pequeña, derrite las otras 2 cucharadas de mantequilla a fuego medio. Añade el ajo picado, el perejil y el romero picados, y cocina por 1-2 minutos hasta que el ajo esté fragante.\r\n5. Vierte la mantequilla de ajo y hierbas sobre los bistecs antes de servir.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"ingredientes","text":"Ingredientes:"},{"depth":3,"slug":"instrucciones","text":"Instrucciones:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
