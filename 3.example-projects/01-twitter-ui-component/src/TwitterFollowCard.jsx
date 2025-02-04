import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({ children, userName = 'unknown', initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="Astro's avatar"
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-follow'>{text}</span>
          <span className='tw-followCard-unfollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
