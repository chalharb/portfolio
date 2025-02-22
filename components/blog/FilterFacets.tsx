"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";

const items = [
  {
    id: "react",
    label: "React",
  },
  {
    id: "sitecore",
    label: "Sitecore XP/XM",
  },
  {
    id: "jss",
    label: "JSS",
  },
  {
    id: "nextjs",
    label: "Next.js",
  },
  {
    id: "docker",
    label: "Docker",
  },
] as const;

const formSchema = z.object({
  search: z.string(),
  tags: z.array(z.string()),
});

export function FilterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardHeader className="mb-0 pb-3">
            <CardTitle>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Filter Posts
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="mb-0">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
                      Search
                    </h4>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Blog posts" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel className="text-base">
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        Tags
                      </h4>
                    </FormLabel>
                  </div>
                  {items.map((tag) => (
                    <FormField
                      key={tag.id}
                      control={form.control}
                      name="tags"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={tag.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(tag.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, tag.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== tag.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {tag.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
