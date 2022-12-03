import { Tweet } from '@/components/Tweet/Tweet'
import { getFromLocalStorage } from '@/utils/getFromLocalStorage'
import { v4 as uuid } from 'uuid'

export const Timeline = () => {
  const value = getFromLocalStorage('tweets')

  return (
    <>
      {value &&
        value.map(({ username, name, tweet }) => (
          <Tweet key={uuid()} username={username} name={name} tweet={tweet} />
        ))}
    </>
  )
}
