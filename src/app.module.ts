import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Chemin absolu vers le répertoire des fichiers statiques
      serveRoot: '/static', // URL de base pour les fichiers statiques
    }),
    // Autres modules de votre application
  ],
  // Autres configurations et exports de votre module
})
export class AppModule {}