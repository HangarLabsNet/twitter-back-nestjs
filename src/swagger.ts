import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export const setupSwagger = function(app) {
  if (process.env.SWAGGER_PATH) {
    const config = new DocumentBuilder()
      .setTitle("Twitter API")
      .setDescription("The Twitter API description")
      .setVersion("1.0")
      .addTag("posts")
      .build();
  
      SwaggerModule.setup(
        process.env.SWAGGER_PATH, 
        app, 
        SwaggerModule.createDocument(app, config)
      );
    }
}
