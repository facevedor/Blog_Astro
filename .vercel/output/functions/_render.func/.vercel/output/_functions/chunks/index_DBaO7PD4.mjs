/* empty css                          */
import { l as createComponent, m as renderTemplate, n as renderComponent, o as maybeRenderHead } from './astro/server_KoqgSCIg.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_BVxI9xAL.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-4"> <div class="flex flex-wrap -mx-4"> <!-- Tarjeta 1 --> <div class="w-full md:w-1/3 p-4"> <div class="bg-white rounded-lg overflow-hidden shadow-md opacity-75 "> <img src="/assets/imagenI1.png" alt="Imagen 1" class="w-full h-48 object-cover object-center"> <div class="p-4"> <h2 class="text-xl font-semibold mb-2">Transforma tu cuerpo con la cetosis</h2> </div> </div> </div> <!-- Tarjeta 2 --> <div class="w-full md:w-1/3 p-4"> <div class="bg-white rounded-lg overflow-hidden shadow-md opacity-75"> <img src="/assets/corazon.png" alt="Imagen 2" class="w-full h-48 object-cover object-center"> <div class="p-4"> <h2 class="text-xl font-semibold mb-2">Deliciosas recetas para una vida saludable</h2> </div> </div> </div> <!-- Tarjeta 3 --> <div class="w-full md:w-1/3 p-4"> <div class="bg-white rounded-lg overflow-hidden shadow-md opacity-75"> <img src="/assets/informativo2.png" alt="Imagen 3" class="w-full h-48 object-cover object-center"> <div class="p-4"> <h2 class="text-xl font-semibold mb-2 ">Recetario Dinamico</h2> </div> </div> </div> </div> <footer class="p-4 text-center text-white text-sm">
Encuentra inspiración en nuestro recetario nutritivo
</footer> </section> ` })}`;
}, "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/fabio/Desktop/Institucion3/pw/Blog_Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
