import React from 'react';

const index = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default index
