# Para seedear la base de datos:

**Desde la carpeta /api ejecutar el comando:**
**Para seedear toda la db completa**
//$ npx sequelize-cli db:seed:all

**para seedear una tabla en particular**
//$ npx sequelize-cli db:seed --seed (nombreDeArchivoParaSeedear)

# Base URL para images

baseURL = https://images.igdb.com/igdb/image/upload/t_720p/
url = baseURL + urlId + ".jpg"

Ex: https://images.igdb.com/igdb/image/upload/t_720p/co2su2.jpg

**DISTINTOS FORMATOS DE IMAGEN**
**REEMPLAZAR "720p" en baseURL por:**

Name------------Size------------Extra
cover_small-----90 x 128--------Fit
screenshot_med--569 x 320-------Lfill, Center gravity
cover_big-------264 x 374-------Fit
logo_med--------284 x 160-------Fit
screenshot_big--889 x 500-------Lfill, Center gravity
screenshot_huge-1280 x 720------Lfill, Center gravity
thumb-----------90 x 90---------Thumb, Center gravity
micro-----------5 x 35----------Thumb, Center gravity
720p------------1280 x 720------Fit, Center gravity
1080p-----------1920 x 1080-----Fit, Center gravity
