import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const setupSwagger = function(app) {
  if (process.env.SWAGGER_PATH) {
    const builder = new DocumentBuilder()
      .setTitle("Twitter API")
      .setDescription("The Twitter API description")
      .addBearerAuth()
      .setVersion("1.0");
    
    if (process.env.SWAGGER_API_BASE_PATH) {
      builder.addServer(process.env.SWAGGER_API_BASE_PATH)
    }
    
    const config = builder.build();
  
    SwaggerModule.setup(
      process.env.SWAGGER_PATH, 
      app, 
      SwaggerModule.createDocument(app, config)
    );
  }
}

// https://pietrzakadrian.com/blog/how-to-create-pagination-in-nestjs-with-typeorm-swagger
//
// export const ApiPaginatedResponse = <TModel extends Type<any>>(
//   model: TModel
// ) => {
//   return applyDecorators(
//     ApiExtraModels(PageDto),
//     ApiOkResponse({
//       description: "Successfully received model list",
//       schema: {
//         allOf: [
//           { $ref: getSchemaPath(PageDto) },
//           {
//             properties: {
//               data: {
//                 type: "array",
//                 items: { $ref: getSchemaPath(model) },
//               },
//             },
//           },
//         ],
//       },
//     })
//   );
// };
