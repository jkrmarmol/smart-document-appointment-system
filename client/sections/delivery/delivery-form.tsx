'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { createDelivery, updateDelivery } from '@/server/delivery';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { Delivery } from '@/constants/data';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  isAvailable: z.boolean()
});

export default function DeliveryForm(data: Partial<Delivery>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name || '',
      isAvailable: data.isAvailable || false
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await createDelivery(values);
      if (response.id) {
        setIsLoading(false);
        router.push('/dashboard/delivery');
        router.refresh();
        return toast({
          title: 'Delivery options added successfully',
          description: 'Delivery options has been added to the database'
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        return toast({
          title: 'Something went wrong',
          description: err.message,
          variant: 'destructive'
        });
      }
    }
  }

  async function onUpdate(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      if (data.id) {
        const response = await updateDelivery(data.id, values);
        if (response.id) {
          setIsLoading(false);
          router.push('/dashboard/delivery');
          router.refresh();
          return toast({
            title: 'Delivery options updated successfully',
            description: 'Delivery options has been updated in the database'
          });
        }
      } else {
        throw new Error('Delivery ID is missing');
      }
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        return toast({
          title: 'Something went wrong',
          description: err.message,
          variant: 'destructive'
        });
      }
    }
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">Delivery Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(!data ? onSubmit : onUpdate)} className="space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter delivery name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isAvailable"
                disabled={isLoading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability Status</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          onBlur={field.onBlur}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">{!data ? 'Submit' : 'Update'}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
