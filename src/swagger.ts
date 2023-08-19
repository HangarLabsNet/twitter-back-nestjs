import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, DocumentBuilder, SwaggerModule, getSchemaPath } from "@nestjs/swagger";
import { PageDto } from "./common.dto";


export const setupSwagger = function(app) {
  if (process.env.SWAGGER_PATH) {
    const config = new DocumentBuilder()
      .setTitle("Twitter API")
      .setDescription("The Twitter API description")
      .setVersion("1.0")
      .build();
  
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
