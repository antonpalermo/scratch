import { z } from "zod";

const leafSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Note name is required."
  }),
  noteId: z.optional(z.string())
});

export default leafSchema;
