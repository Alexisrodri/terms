import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h1>
      <p className=" mb-2 text-center"><strong>Armony</strong></p>
      <p className="mb-4"><strong>Fecha de entrada en vigor:</strong> 28-12-2024</p>
      <p className="mb-6">
        Queremos que disfrutes de nuestra aplicación con total tranquilidad. Esta política de privacidad
        explica cómo manejamos tus datos, o más específicamente, cómo no recopilamos, almacenamos ni
        compartimos información personal.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Datos que NO recopilamos</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Armony no recopila ninguna información personal, como tu nombre, correo electrónico, ubicación, historial de uso, ni cualquier otro dato relacionado contigo o con tu dispositivo.</li>
        <li>No accedemos de forma remota a datos de tu dispositivo, como contactos, fotos, archivos u otra información almacenada localmente.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Uso de la aplicación</h2>
      <p className="text-gray-700 mb-6">
        Armony es una aplicación diseñada únicamente para reproducir música. Todo el contenido se maneja
        dentro de la app sin necesidad de acceder a internet ni a datos externos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Seguridad</h2>
      <p className="text-gray-700 mb-6">
        Dado que no recopilamos información personal, no almacenamos ni procesamos ningún dato que deba ser protegido. Aun así, trabajamos para garantizar que la experiencia dentro de la app sea segura y libre de riesgos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Privacidad de menores</h2>
      <p className="text-gray-700 mb-6">
        Nuestra app está diseñada para todo tipo de usuarios y no recopila datos de menores ni de adultos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cambios en esta política</h2>
      <p className="text-gray-700 mb-6">
        Aunque no recopilamos datos, nos reservamos el derecho de actualizar esta política en caso de que las funcionalidades de la app cambien en el futuro. Cualquier cambio será notificado dentro de la aplicación.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
      <p className="text-gray-700">
        Si tienes preguntas o inquietudes sobre esta política, puedes contactarnos en:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:Niter_alex@hotmail.com" className="text-blue-500 hover:underline">
            Niter_alex@hotmail.com
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong> 0981210886
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;