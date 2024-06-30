import { l as createComponent, m as renderTemplate, o as maybeRenderHead, u as unescapeHTML } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"ingredientes\">Ingredientes:</h3>\n<ul>\n<li>2 bistecs de ribeye (aproximadamente 250 g cada uno)</li>\n<li>2 cucharadas de mantequilla</li>\n<li>2 dientes de ajo, finamente picados</li>\n<li>200 g de espinacas frescas</li>\n<li>1/2 taza de crema espesa</li>\n<li>4 huevos</li>\n<li>Sal y pimienta al gusto</li>\n</ul>\n<h3 id=\"instrucciones\">Instrucciones:</h3>\n<ol>\n<li>Sazona los bistecs con sal y pimienta por ambos lados.</li>\n<li>En una sartén grande, derrite 1 cucharada de mantequilla a fuego medio-alto. Cocina los bistecs durante 3-4 minutos por cada lado para un término medio, o ajusta el tiempo según tu preferencia. Retira los bistecs y mantenlos calientes.</li>\n<li>En la misma sartén, derrite la otra cucharada de mantequilla. Añade el ajo picado y cocina por 1-2 minutos hasta que esté fragante.</li>\n<li>Añade las espinacas y cocina hasta que se marchiten. Agrega la crema espesa y cocina a fuego lento hasta que la mezcla espese.</li>\n<li>En otra sartén, cocina los huevos a tu gusto (fritos o revueltos).</li>\n<li>Sirve los bistecs con las espinacas a la crema y los huevos.</li>\n</ol>";

				const frontmatter = {"title":"Bistec con Espinacas a la Crema y Huevos","pubDate":"Jul 08 2022","heroImage":"/assets/bistecEspinacas.png","tags":["Carne","Huevos"],"description":""};
				const file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/hkj.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Ingredientes:\r\n- 2 bistecs de ribeye (aproximadamente 250 g cada uno)\r\n- 2 cucharadas de mantequilla\r\n- 2 dientes de ajo, finamente picados\r\n- 200 g de espinacas frescas\r\n- 1/2 taza de crema espesa\r\n- 4 huevos\r\n- Sal y pimienta al gusto\r\n\r\n### Instrucciones:\r\n1. Sazona los bistecs con sal y pimienta por ambos lados.\r\n2. En una sartén grande, derrite 1 cucharada de mantequilla a fuego medio-alto. Cocina los bistecs durante 3-4 minutos por cada lado para un término medio, o ajusta el tiempo según tu preferencia. Retira los bistecs y mantenlos calientes.\r\n3. En la misma sartén, derrite la otra cucharada de mantequilla. Añade el ajo picado y cocina por 1-2 minutos hasta que esté fragante.\r\n4. Añade las espinacas y cocina hasta que se marchiten. Agrega la crema espesa y cocina a fuego lento hasta que la mezcla espese.\r\n5. En otra sartén, cocina los huevos a tu gusto (fritos o revueltos).\r\n6. Sirve los bistecs con las espinacas a la crema y los huevos.";
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
