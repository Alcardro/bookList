test-tecnico-t1/
├── 📁 app/                          # Directorio principal de la aplicación
│   ├── layout.tsx                   # Layout raíz con metadatos y estructura HTML
│   ├── page.tsx                     # Página principal que renderiza el componente BooksList
│   ├── globals.css                  # Estilos globales y variables CSS
│   └── 📁 components/               # (Opcional) Carpeta para componentes reutilizables
│       └──BooksList.tsx             # Componente princial Next.js donde se trabaja lista de libros
├── 📁 .next/                        # Build generado por Next.js (no versionado)
├── 📁 out/                          # Export estático para GitHub Pages (no versionado)
├── 📁 node_modules/                 # Dependencias (no versionado)
├── next.config.js                   # Configuración de Next.js para export estático
├── package.json                     # Dependencias y scripts del proyecto
├── package-lock.json               # Lock file de dependencias
├── tsconfig.json                   # Configuración de TypeScript
├── tailwind.config.js              # Configuración de Tailwind CSS
├── postcss.config.js               # Configuración de PostCSS
├── .gitignore                      # Archivos y carpetas ignorados por Git
└── README.md                       # Documentación del proyecto


Flujo de Trabajo de los datos

API Gutendex (https://gutendex.com/books/) ---   API
        ↓
Fetch en useEffect (Client Component)  ---  Ejecuta el codigo
        ↓
Estado React (useState)     ---   Para agregar estados de componentes
        ↓
Renderizado Condicional     ---    Muestra feedback a los usuarios
        ↓
Interfaz de Usuario         ---  Donde se visualizan los datos





Para poder ejecutar el programa

-Descargar ZIP
-Extraer archivo en carpeta
-Abrir Vscode
-Abrir carpeta en vscode
-Dar clic en los 3 puntitos en la parte superior derecha buscar "TERMINAL"
-una vez abierta la terminal
-Asegurarse que la ruta este en  C:\Users\i5\Desktop\test-tecnico-t1>
-En este punto digitar " npm run dev"  y ejecutar
-Dar clic en  ---------  - Local:         http://localhost:3000
-Se podra visualizar la lista en el navegador