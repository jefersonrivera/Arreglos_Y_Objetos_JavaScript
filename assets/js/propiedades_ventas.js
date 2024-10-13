const propiedades = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: 5000,
    fumar: false,
    mascotas: no se permiten mascotas,
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    tipo: "venta",
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: 1200,
    fumar: true,
    mascotas: true,
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    tipo: "venta",
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 4500,
    fumar: false,
    mascotas: true,
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    tipo: "venta",
  },
];
function mostrarPropiedades() {
  const seccionVenta = document.getElementById("venta").querySelector(".row");
  const seccionAlquiler = document
    .getElementById("alquiler")
    .querySelector(".row");

  propiedades.forEach((propiedad) => {
    const propiedadHtml = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.titulo}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  ${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${propiedad.fumar}
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> ${propiedad.mascotas}
                </p>
              </div>
            </div>
          </div>
        `;

    if (propiedad.tipo === "venta") {
      seccionVenta.innerHTML += propiedadHtml;
    } else {
      seccionAlquiler.innerHTML += propiedadHtml;
    }
  });
}

document.addEventListener("DOMContentLoaded", mostrarPropiedades);
