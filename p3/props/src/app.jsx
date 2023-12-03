import './app.css'
import Cards from './components/cards'
export function App() {

  return (
    <>
    <h1 className='bg-red-400 rounded-xl'> TAILWIND TEST</h1>
    {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://up.yimg.com/ib/th?id=OIP.YEe7jjvj3XtaZgPXX7JJ7QHaE8&%3Bpid=Api&rs=1&c=1&qlt=95&w=173&h=115" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
<Cards userName ="chinki" btn="click"/>
<Cards userName="Minki" btn ="smash"/>
    </>
  )
}
   