import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Text is required!" }),
});

export type FromValuesType = z.infer<typeof formSchema>;
