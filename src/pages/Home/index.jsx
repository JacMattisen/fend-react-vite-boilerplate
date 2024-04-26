import React from 'react';

const index = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
      </nav>

      <Route path="/home" exact component={App} />
      <Route path="/exercises" component={About} />
    </div>
  )
}

export default index;
