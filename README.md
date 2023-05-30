<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

---

1. Clonar proyecto
2. `pnpm install`
3. Clonar el archivo `.env.template` y renombralo a `.env`
4. Cambiar las variables de entorno
5. levantar la base de datos

   ```bash
   docker compose up -d
   ```

6. Levantar la aplicacion: `pnpm start:dev`

7. Ejecutar SEED

   ```text
   http://localhost:3000/api/seed
   ```

8. Produccion en render

   pnpm i; pnpm build
