import { Component } from 'react';
import { nanoid } from 'nanoid';
import { List, ListItem, Span } from './ContactList.styled';

export class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    // console.log(contacts);
    return (
      <List>
        {contacts.map(
          el => (
            <ListItem key={nanoid()}>
              {el.name}: <Span>{el.number}</Span>
              <button type="button" onClick={() => this.props.delete(el.id)}>
                X
              </button>
            </ListItem>
          )

          // { console.log(el); }
        )}
      </List>
    );
  }
}
