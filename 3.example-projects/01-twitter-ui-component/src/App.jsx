import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'astrodotbuild',
    name: 'Astro',
    initialIsFollowing: true
  },
  {
    userName: 'reactjs',
    name: 'React',
    initialIsFollowing: false
  },
  {
    userName: 'angular',
    name: 'Angular',
    initialIsFollowing: false
  }
]

export default function App () {
  return (
    <section className='App'>
      {
        users.map(u => {
          const { userName, name, initialIsFollowing } = u

          // Cuando renderizamos de forma dinámica, por ejemplo desde un array como aquí, debemos pasarle a React una clave (key) con la que identificar al componente de forma única. Lo ideal sería hacerlo por una ID de la BBDD pero el userName nos sirve porque, en teoría, es único.
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={initialIsFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

// https://unavatar.io/reactjs
// https://unavatar.io/angular
