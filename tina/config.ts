import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "nutrition",
        label: "Питание для восстановления",
        path: "content/",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/recovery-nutrition`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок страницы",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Описание страницы",
            required: true,
          },
          {
            type: "object",
            name: "hero",
            label: "Главный раздел",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Заголовок",
              },
              {
                type: "string",
                name: "subheadline",
                label: "Подзаголовок",
              }
            ],
          },
          {
            type: "object",
            list: true,
            name: "features",
            label: "Особенности питания",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Заголовок",
              },
              {
                type: "string",
                name: "description",
                label: "Описание",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "color",
                label: "Цвет плитки",
                options: [
                  {
                    label: "Синий",
                    value: "blue",
                  },
                  {
                    label: "Оранжевый",
                    value: "orange",
                  }
                ]
              }
            ],
          },
          {
            type: "object",
            list: true,
            name: "nutritionStages",
            label: "Этапы питания",
            ui: {
              itemProps: (item) => {
                return { label: item?.stageName };
              },
            },
            fields: [
              {
                type: "string",
                name: "stageName",
                label: "Название этапа",
              },
              {
                type: "string",
                name: "description",
                label: "Описание",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                list: true,
                name: "foods",
                label: "Рекомендуемые продукты",
              }
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Основной контент",
            isBody: true,
          },
        ],
      },
    ],
  },
});
