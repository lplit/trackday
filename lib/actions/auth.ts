'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

interface AuthState {
  error?: string;
  success: boolean;
  message?: string;
}

export async function signIn(prevState: AuthState | null, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return {
      error: 'Email and password are required',
      success: false
    };
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        error: error.message,
        success: false
      };
    }

    revalidatePath('/');
    redirect('/protected');
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false
    };
  }
}

export async function signUp(prevState: AuthState | null, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const repeatPassword = formData.get('repeatPassword') as string;

  if (!email || !password || !repeatPassword) {
    return {
      error: 'All fields are required',
      success: false
    };
  }

  if (password !== repeatPassword) {
    return {
      error: 'Passwords do not match',
      success: false
    };
  }

  if (password.length < 6) {
    return {
      error: 'Password must be at least 6 characters long',
      success: false
    };
  }

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/protected`,
      },
    });

    if (error) {
      return {
        error: error.message,
        success: false
      };
    }

    redirect('/auth/sign-up-success');
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false
    };
  }
}

export async function resetPassword(prevState: AuthState | null, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  
  const email = formData.get('email') as string;

  if (!email) {
    return {
      error: 'Email is required',
      success: false
    };
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/update-password`,
    });

    if (error) {
      return {
        error: error.message,
        success: false
      };
    }

    return {
      success: true,
      message: 'Password reset link sent to your email'
    };
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false
    };
  }
}

export async function updatePassword(prevState: AuthState | null, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!password || !confirmPassword) {
    return {
      error: 'Both password fields are required',
      success: false
    };
  }

  if (password !== confirmPassword) {
    return {
      error: 'Passwords do not match',
      success: false
    };
  }

  if (password.length < 6) {
    return {
      error: 'Password must be at least 6 characters long',
      success: false
    };
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      return {
        error: error.message,
        success: false
      };
    }

    revalidatePath('/');
    redirect('/protected');
  } catch (error: unknown) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false
    };
  }
}

export async function signOut() {
  const supabase = await createClient();
  
  try {
    await supabase.auth.signOut();
    revalidatePath('/');
    redirect('/auth/login');
  } catch {
    // Handle error silently or redirect to error page
    redirect('/auth/login');
  }
}
