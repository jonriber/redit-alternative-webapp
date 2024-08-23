import { Button } from '@nextui-org/button'
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';
export default async function Home() {

  const session = await auth();

  return (
    <div className='container flex flex-row gap-4'>
      <Profile />
    </div>
  )
}
