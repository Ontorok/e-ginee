"use client";
import { BotAvatar } from "@/components/BotAvatar";
import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import { UserAvatar } from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { FromValuesType, formSchema } from "./constants";

const CodePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<FromValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: FromValuesType) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      console.log(response.data);

      setMessages((prev) => [...prev, userMessage, response.data]);

      form.reset();
    } catch (error) {
      console.log(error);
      // TODO: Open Pro Model
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate Code using decriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10 "
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isSubmitting}
                        placeholder="Simple toggle button using react hooks."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isSubmitting}
                type="submit"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isSubmitting && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isSubmitting && (
            <div>
              <Empty label="No Conversation Started" />
            </div>
          )}
          <div className="flex flex-col gap-4">
            {messages.map(({ content, role }) => (
              <div
                key={content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-l">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
