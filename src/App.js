import React from 'react'
import { Header, Main, Search} from './Component'
import { UserContext, user } from './Context'
import { theme, ThemeContext } from './Context'


const App = () => {
  

  return (
    <ThemeContext.Provider value={theme}> 
      <UserContext.Provider value={user}>
      <div>
        <Header />
        <Main />
        <Search />
      </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App