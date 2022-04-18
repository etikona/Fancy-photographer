import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <h1>Check Out your products</h1>
            <form>
          <p>
              name: <input type="text" />
          </p>
          <br />
          Email
          <input type="email"  id="" />
          <br />
          phone no:
          <input type="number"  id="" />
          <br />
          date
          <input type="datetime-local"  id="" />
            </form>
            <h5>Thanks for purchasing , Stay with us..!</h5>
        </div>
    );
};

export default CheckOut;