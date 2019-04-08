import uniqueId from 'lodash/uniqueId';
import React from 'react';
import ReactDOM from 'react-dom';
import Sortable from 'react-sortablejs';

class Test extends React.Component {
    state = {
        items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    };

    render() {
        const items = this.state.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));

        return (
          <div>
              <Sortable
                  tag="ul" // Defaults to "div"
                  onChange={(order, sortable, evt) => {
                      this.setState({ items: order });
                  }}
              >
                  {items}
              </Sortable>
          </div>
        );
    }
}

export default Test
