'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { createPayment, updatePayment } from '@/server/payment';
import { Switch } from '@/components/ui/switch';
import { Payment } from '@/constants/data';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  isAvailable: z.boolean()
});

export default function PaymentForm(data: Partial<Payment>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
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
      const response = await createPayment(values);
      if (response.id) {
        router.push('/dashboard/payment');
        router.refresh();
        setIsLoading(false);
        return toast({
          title: 'Payment added successfully',
          description: 'Payment has been added to the database'
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
        const response = await updatePayment(data.id, values);
        if (response.id) {
          router.push('/dashboard/payment');
          router.refresh();
          setIsLoading(false);
          return toast({
            title: 'Payment updated successfully',
            description: 'Payment has been updated in the database'
          });
        }
      } else {
        throw new Error('Payment ID is missing');
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
        <CardTitle className="text-left text-2xl font-bold">Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(!data ? onSubmit : onUpdate)} className="space-y-8">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                disabled={isLoading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter payment name" {...field} />
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
