'use server'
import {z} from 'zod';
import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import  { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';
import { error } from 'console';

interface CreatePostFormState {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[],
  }
}
const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState>{ 
  // TODO: revalidate topicShow page
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success){
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  return {
    errors: {}
  }
}