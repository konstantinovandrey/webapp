<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <!-- Предотвращаем автоматическую инициализацию CMS -->
    <script>
        window.CMS_MANUAL_INIT = true;
    </script>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </head>
  <body>
    <script>
      const client_id = 'Ov23li65cxt7PrjSn1r2';  
      CMS.init({
        config: {
          backend: {
            name: 'github',
            repo: 'konstantinovandrey/webapp',
            branch: 'v4',
            auth_type: 'implicit',
            app_id: client_id
          },
          // Остальные настройки из вашего config.yml
          media_folder: 'assets/uploads',
          public_folder: '/assets/uploads',
          collections: [
            // Ваши коллекции
          ]
        }
      });
    </script>
  </body>
</html>
