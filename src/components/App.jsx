import { Component } from 'react';
import { Notify } from 'notiflix';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { theme } from 'constants/theme';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Section, Container } from 'components/Shared';
import {
  HeaderContainer,
  AddContactButton,
  AddContactIcon,
  AddContactTitle,
  Backdrop,
  SectionTitle,
} from 'components/App.styled';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { DeleteContactPrompt } from 'components/DeleteContactPrompt/DeleteContactPrompt';

Notify.init({
  position: 'right-bottom',
  distance: '20px',
  borderRadius: '8px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
  success: {
    background: '#2c9403',
  },
  failure: {
    background: '#db1212',
  },
});

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Dudka Volodymyr', number: '+38(066) 33-445-99' },
    ],
    filter: '',

    currentShown: null,
    shouldBackdropShown: false,
    shouldAddFormShown: false,
    shouldDeletePromptShown: false,
  };

  openModal = ({ currentTarget }) => {
    const target = currentTarget.dataset.target;

    if (!target) return;

    onkeydown = this.onEscPress;

    this.toggleAriaExpanded(currentTarget);

    this.setState({
      currentShown: currentTarget,
      shouldBackdropShown: true,
    });

    setTimeout(() => {
      this.setState({
        [`should${target}Shown`]: true,
      });
    }, 0);
  };

  closeModal = () => {
    onkeydown = null;

    this.toggleAriaExpanded(this.state.currentShown);

    this.setState({
      currentShown: null,
      shouldBackdropShown: false,
      shouldAddFormShown: false,
      shouldDeletePromptShown: false,
    });
  };

  toggleAriaExpanded = target => {
    if (target.ariaExpanded === 'false') return (target.ariaExpanded = true);
    if (target.ariaExpanded === 'true') target.ariaExpanded = false;
  };

  onBackdropClick = ({ currentTarget, target }) =>
    currentTarget === target && this.closeModal();

  onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    this.closeModal();
  };

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.closeModal();
    Notify.success(`New contact was successfully added`);
  };

  deleteContact = () => {
    this.setState(prevState => {
      const cuttedContacts = [];

      prevState.contacts.forEach(
        contact =>
          contact.id !== prevState.currentShown.value &&
          cuttedContacts.push(contact)
      );

      return { contacts: cuttedContacts };
    });

    this.closeModal();
    Notify.success(`Contact was successfully deleted`);
  };

  changeFilterValue = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    return (
      <>
        <GlobalStyles />

        <header>
          <HeaderContainer>
            <ContactFilter onFilterChange={this.changeFilterValue} />
            <AddContactButton
              type="button"
              aria-label="Add new contact"
              aria-controls="AddForm"
              aria-expanded={false}
              data-target="AddForm"
              onClick={this.openModal}
            >
              <AddContactIcon size={theme.sizes.addContactIcon} />
              <AddContactTitle>Add contact</AddContactTitle>
            </AddContactButton>
          </HeaderContainer>

          <Backdrop
            shouldShown={this.state.shouldBackdropShown}
            onClick={this.onBackdropClick}
          >
            <AddContactForm
              id="AddForm"
              contacts={this.state.contacts}
              shouldShown={this.state.shouldAddFormShown}
              onNewContactAdd={this.addNewContact}
              onClose={this.closeModal}
            />
            <DeleteContactPrompt
              id="DeletePrompt"
              contacts={this.state.contacts}
              delettingTarget={this.state.currentShown}
              shouldShown={this.state.shouldDeletePromptShown}
              onContactDelete={this.deleteContact}
              onClose={this.closeModal}
            />
          </Backdrop>
        </header>

        <main>
          <PageTitle title="My awesome phonebook" />
          <Section>
            <Container>
              <SectionTitle>Phonebook</SectionTitle>
              <ContactsList
                contacts={this.state.contacts}
                filter={this.state.filter}
                onContactDelete={this.openModal}
              />
            </Container>
          </Section>
        </main>
      </>
    );
  }
}
