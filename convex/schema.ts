import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
    creationTime: v.optional(v.number()), // Make creationTime optional
  }),
  likes: defineTable({
    liker: v.string(),
    messageId: v.id("messages"),
  }).index("byMessageId", ["messageId"]),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
});
