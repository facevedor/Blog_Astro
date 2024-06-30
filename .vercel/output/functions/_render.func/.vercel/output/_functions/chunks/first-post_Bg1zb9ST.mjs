import { l as createComponent, m as renderTemplate, o as maybeRenderHead, u as unescapeHTML } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"ingredientes\">Ingredientes:</h3>\n<ul>\n<li>2 pechugas de pollo cocidas y desmenuzadas</li>\n<li>1 aguacate grande, cortado en cubos</li>\n<li>1 taza de espinacas frescas</li>\n<li>1/2 taza de tomates cherry, cortados a la mitad</li>\n<li>1/4 taza de cebolla roja, finamente picada</li>\n<li>2 cucharadas de aceite de oliva extra virgen</li>\n<li>Jugo de 1 limón</li>\n<li>Sal y pimienta al gusto</li>\n</ul>\n<h3 id=\"instrucciones\">Instrucciones:</h3>\n<ol>\n<li>En un tazón grande, mezcla el pollo desmenuzado, el aguacate, las espinacas, los tomates cherry y la cebolla roja.</li>\n<li>En un tazón pequeño, mezcla el aceite de oliva, el jugo de limón, la sal y la pimienta.</li>\n<li>Vierte el aderezo sobre la ensalada y mezcla bien.</li>\n<li>Sirve inmediatamente y disfruta de una ensalada fresca y saludable.</li>\n</ol>";

				const frontmatter = {"title":"Ensalada de Pollo con Aguacate","pubDate":"Jul 08 2022","heroImage":"/assets/ensaladaAguacate.png","tags":["Pollo","Palta"],"description":""};
				const file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/first-post.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Ingredientes:\r\n- 2 pechugas de pollo cocidas y desmenuzadas\r\n- 1 aguacate grande, cortado en cubos\r\n- 1 taza de espinacas frescas\r\n- 1/2 taza de tomates cherry, cortados a la mitad\r\n- 1/4 taza de cebolla roja, finamente picada\r\n- 2 cucharadas de aceite de oliva extra virgen\r\n- Jugo de 1 limón\r\n- Sal y pimienta al gusto\r\n\r\n### Instrucciones:\r\n1. En un tazón grande, mezcla el pollo desmenuzado, el aguacate, las espinacas, los tomates cherry y la cebolla roja.\r\n2. En un tazón pequeño, mezcla el aceite de oliva, el jugo de limón, la sal y la pimienta.\r\n3. Vierte el aderezo sobre la ensalada y mezcla bien.\r\n4. Sirve inmediatamente y disfruta de una ensalada fresca y saludable.";
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
