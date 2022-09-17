import React from 'react'
import data from './data'
import List from './List'


const birthdayComp = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}> clear all</button>
      </section>
    </main>
  )
}

export default birthdayComp