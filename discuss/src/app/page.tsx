import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <>
      <h1>Hello NextUI</h1>
      <div>
        <p>NextUI is a React UI library with a simple API.</p>
        <p>It is built on top of Next.js and Tailwind CSS.</p>
      </div>
      <div className='container flex flex-col gap-4'>
      <Button>Click me</Button>
      <Button>Open Modal</Button>
      <Button>Login</Button>

      </div>
    </>
  )
}
