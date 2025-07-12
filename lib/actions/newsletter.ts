'use server';

import { revalidatePath } from 'next/cache';

interface NewsletterState {
  error?: string;
  success: boolean;
  message?: string;
}

export async function subscribeToNewsletter(prevState: NewsletterState | null, formData: FormData): Promise<NewsletterState> {
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  
  if (!email || !firstName) {
    return {
      error: 'Email and first name are required',
      success: false
    };
  }

  if (!email.includes('@')) {
    return {
      error: 'Please enter a valid email address',
      success: false
    };
  }

  try {
    // Simulate API call - in real implementation, connect to your newsletter service
    // await newsletterService.subscribe({ email, firstName });
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    revalidatePath('/');
    
    return {
      success: true,
      message: 'Successfully subscribed! Check your email for exclusive updates and early access.'
    };
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false
    };
  }
}
