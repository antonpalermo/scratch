import { z } from "zod";

const noteSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Note name is required."
  }),
  description: z.optional(z.string().trim())
});

export default noteSchema;
