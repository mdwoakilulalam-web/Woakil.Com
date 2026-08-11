import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_446677',
        'template_hjxy8yy',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        {
          publicKey: '8W5HCNx5qQ9bfCYsq',
        }
      );

      toast.success('Message sent successfully!');

      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);

      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Name */}
      <div>
        <Label
          htmlFor="name"
          className="text-sm font-medium mb-2 block"
        >
          Name
        </Label>

        <Input
          id="name"
          {...register('name')}
          placeholder="Your name"
          className="w-full text-foreground"
        />

        {errors.name && (
          <p className="text-sm text-destructive mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label
          htmlFor="email"
          className="text-sm font-medium mb-2 block"
        >
          Email
        </Label>

        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your.email@example.com"
          className="w-full text-foreground"
        />

        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label
          htmlFor="message"
          className="text-sm font-medium mb-2 block"
        >
          Message
        </Label>

        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell me about your project..."
          rows={6}
          className="w-full resize-none text-foreground"
        />

        {errors.message && (
          <p className="text-sm text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send message
          </>
        )}
      </Button>

    </form>
  );
};

export default ContactForm;