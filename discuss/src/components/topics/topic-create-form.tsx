'use client';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';
import { createTopic } from '@/actions';

export default function TopicCreateForm(){
  const [formState, action] = useFormState(createTopic, {
    errors: {}
  });
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary' variant='flat'>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create a Topic</h3>
            <Input 
              name='name' 
              label='name' 
              labelPlacement='outside' 
              placeholder='Name' 
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />

            <Textarea 
              name='description' 
              label='description' 
              labelPlacement='outside' 
              placeholder='Describe your topic' 
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form ? 
              <div className='p-2 bg-red-200 border border-red-400 rounded'>
                {formState.errors._form.join(', ')}
              </div> 
              : 
              null
            }
            <FormButton>Save</FormButton>
            {/* <Button type='submit' color='primary' variant='flat'>Create</Button> */}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}