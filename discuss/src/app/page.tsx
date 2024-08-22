import { Button } from '@nextui-org/button'
import * as actions from '@/actions';
import { auth } from '@/auth';

export default async function Home() {

  const session = await auth();

  return (
    <div className='container flex flex-row gap-4'>
      <form action={actions.signIn}>
        <Button type='submit'>Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type='submit'>Sign Out</Button>
      </form>

      {session?.user ? 
        <div>Signed In</div>
        :
        <div>Signed Out</div>
      }
    </div>
  )
}
