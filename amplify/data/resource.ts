import { type ClientSchema, defineData, a } from "@aws-amplify/backend";

const schema = a.schema({

  // ─────────────────────────
  // Customer
  // ─────────────────────────
  BlogPost: a
      .model({
        title: a.string().required(),
        slug: a.string().required(),
        content: a.string().required(),
        seoKeyword: a.string(),
        published: a.boolean().default(false),
        createdAt: a.datetime(),
      })
      .authorization((allow) => [
        allow.guest().to(['read']),              // anyone can read
        allow.authenticated().to(['create', 'update', 'delete']),
      ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});