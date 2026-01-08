import fs from 'fs';
import path from 'path';

// Definir rutas
const srcDir = './src';
const modulesDir = path.join(srcDir, 'modules');
const authDir = path.join(modulesDir, 'auth');

// 1. Crear estructura de módulos si no existe
const subDirs = ['components', 'views', 'store', 'services', 'router'];

if (!fs.existsSync(modulesDir)) fs.mkdirSync(modulesDir);
if (!fs.existsSync(authDir)) fs.mkdirSync(authDir);

subDirs.forEach(dir => {
    const fullPath = path.join(authDir, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✅ Creada: ${fullPath}`);
    }
});

// 2. Mover carpetas si quedaron en la raíz de src por error
// (Agrega aquí lógica similar si quieres mover carpetas existentes automáticamente)

console.log('🚀 ¡Estructura modular lista!');