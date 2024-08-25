'use server'
import {z} from 'zod';
import { auth } from '@/auth';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {message: 'name must be lowercase or dashes'}),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: String[],
    description?: String[],
    _form?: String[];
  }
}

export async function createTopic(formState:CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState>{

  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),

  });

  if (!result.success){
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth();

  if (!session || !session.user){
    errors:{
      _form: ['You must be signed in to create a topic']
    }
  }

  return {
    errors: {}
  }

}