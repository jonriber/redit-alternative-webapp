import { Button } from '@nextui-org/button'
import * as actions from '@/actions';

export default function Home() {
  return (
    <div className='container flex flex-row gap-4'>
      <form action={actions.signIn}>
        <Button type='submit'>Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type='submit'>Sign Out</Button>
      </form>
    </div>
  )
}
