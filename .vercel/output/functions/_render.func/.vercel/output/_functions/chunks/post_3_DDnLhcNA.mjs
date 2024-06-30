import { l as createComponent, m as renderTemplate, o as maybeRenderHead, u as unescapeHTML } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"ingredientes\">Ingredientes:</h3>\n<ul>\n<li>500 g de carne molida de res</li>\n<li>4 rebanadas de queso cheddar</li>\n<li>4 huevos</li>\n<li>1 aguacate, cortado en rodajas</li>\n<li>4 hojas grandes de lechuga, picadas</li>\n<li>Sal y pimienta al gusto</li>\n<li>2 cucharadas de aceite de coco</li>\n</ul>\n<h3 id=\"instrucciones\">Instrucciones:</h3>\n<ol>\n<li>En una sartén grande, calienta el aceite de coco a fuego medio-alto.</li>\n<li>Añade la carne molida de res a la sartén, sazona con sal y pimienta, y cocina hasta que esté completamente dorada y bien cocida, aproximadamente 8-10 minutos.</li>\n<li>Divide la carne cocida en cuatro porciones y coloca una rebanada de queso cheddar sobre cada porción mientras aún está caliente para que se derrita.</li>\n<li>En otra sartén, cocina los huevos a tu gusto (fritos o revueltos).</li>\n<li>Para armar los bowls, coloca una base de lechuga picada en cada bowl.</li>\n<li>Añade una porción de carne molida con queso derretido sobre la lechuga.</li>\n<li>Coloca un huevo cocido sobre la carne.</li>\n<li>Añade rodajas de aguacate alrededor del bowl.</li>\n<li>Sirve los bowls inmediatamente y disfruta de un delicioso y nutritivo plato cetogénico.</li>\n</ol>";

				const frontmatter = {"title":"Bowl Cetogénico de Carne Molida con Huevo y Queso ","pubDate":"Jul 01 2022","heroImage":"/assets/bowldeCarne.png","tags":["Carne","Huevos","Queso"],"description":""};
				const file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/content/blog/post_3.md";
				const url = undefined;
				function rawContent() {
					return "\r\n### Ingredientes:\r\n- 500 g de carne molida de res\r\n- 4 rebanadas de queso cheddar\r\n- 4 huevos\r\n- 1 aguacate, cortado en rodajas\r\n- 4 hojas grandes de lechuga, picadas\r\n- Sal y pimienta al gusto\r\n- 2 cucharadas de aceite de coco\r\n\r\n### Instrucciones:\r\n1. En una sartén grande, calienta el aceite de coco a fuego medio-alto.\r\n2. Añade la carne molida de res a la sartén, sazona con sal y pimienta, y cocina hasta que esté completamente dorada y bien cocida, aproximadamente 8-10 minutos.\r\n3. Divide la carne cocida en cuatro porciones y coloca una rebanada de queso cheddar sobre cada porción mientras aún está caliente para que se derrita.\r\n4. En otra sartén, cocina los huevos a tu gusto (fritos o revueltos).\r\n5. Para armar los bowls, coloca una base de lechuga picada en cada bowl.\r\n6. Añade una porción de carne molida con queso derretido sobre la lechuga.\r\n7. Coloca un huevo cocido sobre la carne.\r\n8. Añade rodajas de aguacate alrededor del bowl.\r\n9. Sirve los bowls inmediatamente y disfruta de un delicioso y nutritivo plato cetogénico.";
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
