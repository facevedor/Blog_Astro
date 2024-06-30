import { l as createComponent, m as renderTemplate, o as maybeRenderHead, u as unescapeHTML } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"ingredientes\">Ingredientes:</h3>\n<ul>\n<li>2 filetes de salmón</li>\n<li>1 manojo de espárragos, recortados</li>\n<li>2 cucharadas de aceite de oliva</li>\n<li>2 dientes de ajo, picados</li>\n<li>Jugo de 1 limón</li>\n<li>Sal y pimienta al gusto</li>\n</ul>\n<h3 id=\"instrucciones\">Instrucciones:</h3>\n<ol>\n<li>Precalienta el horno a 200°C (400°F).</li>\n<li>Coloca los filetes de salmón y los espárragos en una bandeja para hornear.</li>\n<li>Rocía con el aceite de oliva y el jugo de limón, y espolvorea con ajo, sal y pimienta.</li>\n<li>Hornea durante 12-15 minutos, o hasta que el salmón esté cocido y los espárragos estén tiernos.</li>\n<li>Sirve caliente y disfruta de esta combinación deliciosa y nutritiva.</li>\n</ol>";

				const frontmatter = {"title":"Salmón al Horno con Espárragos","pubDate":"Jul 01 2022","heroImage":"/assets/salmonEsparragos.png","tags":["Salmon","Esparragos"],"description":""};
				const file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/second-post.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Ingredientes:\r\n- 2 filetes de salmón\r\n- 1 manojo de espárragos, recortados\r\n- 2 cucharadas de aceite de oliva\r\n- 2 dientes de ajo, picados\r\n- Jugo de 1 limón\r\n- Sal y pimienta al gusto\r\n\r\n### Instrucciones:\r\n1. Precalienta el horno a 200°C (400°F).\r\n2. Coloca los filetes de salmón y los espárragos en una bandeja para hornear.\r\n3. Rocía con el aceite de oliva y el jugo de limón, y espolvorea con ajo, sal y pimienta.\r\n4. Hornea durante 12-15 minutos, o hasta que el salmón esté cocido y los espárragos estén tiernos.\r\n5. Sirve caliente y disfruta de esta combinación deliciosa y nutritiva.";
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
