import PropTypes from 'prop-types';
import { Component } from 'react';
import { theme } from 'constants/theme';
import {
  FilterContainer,
  FilterField,
  FilterIcon,
} from './ContactFilter.styled';

export class ContactFilter extends Component {
  state = {
    filterValue: '',
  };

  updateRootState = filterValue => {
    this.props.onFilterChange(filterValue);
  };

  setFilterValue = incoming => {
    let value = null;

    switch (typeof incoming) {
      case 'object':
        value = incoming.currentTarget.value;
        break;

      case 'string':
        value = incoming;
        break;

      default:
        return;
    }

    this.setState({ filterValue: value });
    this.updateRootState(value);
  };

  onEscPress = ({ code }) => {
    if (code !== 'Escape') return;

    this.setFilterValue('');
  };

  addEscListener = () => {
    if (onkeydown && onkeydown !== this.onEscPress) return;
    if (onkeydown && onkeydown === this.onEscPress && this.state.filterValue)
      return;
    if (!this.state.filterValue) return (onkeydown = null);

    onkeydown = this.onEscPress;
  };

  render() {
    this.addEscListener();

    return (
      <FilterContainer>
        <FilterField
          type="text"
          name="filter"
          aria-label="Phonebook filter"
          placeholder="Filtered Search"
          value={this.state.filterValue}
          onChange={this.setFilterValue}
        />
        <FilterIcon size={theme.sizes.filterFieldIcon} />
      </FilterContainer>
    );
  }
}

ContactFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
