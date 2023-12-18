import Image from 'next/image'
import StopWatch from './components/stopwatch/stopWatch'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center items-center h-96 text-5xl '>
      <div className='bg-cyan-600 px-10 py-10 rounded-full text-white'><StopWatch/></div>
      </div>
    </div>
  )
}
