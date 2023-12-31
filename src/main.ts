import { createApp } from "./app";

async function bootstrap() {
  const { app } = await createApp()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
