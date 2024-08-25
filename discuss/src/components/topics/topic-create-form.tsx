import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';

import { createTopic } from '@/actions';

export default function TopicCreateForm(){
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary' variant='flat'>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create a Topic</h3>
            <Input name='name' label='name' labelPlacement='outside' placeholder='Name' />

            <Textarea name='description' label='description' labelPlacement='outside' placeholder='Describe your topic' />

            <Button type='submit' color='primary' variant='flat'>Create</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}