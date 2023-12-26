import { type Dropdown } from "@/types/common-types";
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Image prompt is required!!" }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export type FromValuesType = z.infer<typeof formSchema>;
export const amountOptions: Dropdown<number>[] = [1, 2, 3, 4, 5].map(
  (item) => ({ lable: `${item} Photo${item > 1 && "s"}`, value: item })
);

export const resolutionOptions: Dropdown<string>[] = [
  "256x256",
  "512x512",
  "1024x1024",
].map((item) => ({ lable: `${item}`, value: item }));
