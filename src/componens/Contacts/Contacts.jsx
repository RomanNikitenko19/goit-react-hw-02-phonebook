import PropTypes from "prop-types";
import Title from "../Title";
import ContactsList from "../ContactsList";
const Contacts = ({ filterContacts, handleChange, filter, deleteContacts }) => {
  return (
    <>
      <Title title={"Contacts"} />
      <label>
        Find contact by name
        <input onChange={handleChange} value={filter} type="text" name="filter" />
      </label>
      <ContactsList filterContacts={filterContacts} deleteContacts={deleteContacts} />
    </>
  );
};
Contacts.propTypes = {
  filterContacts: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Contacts;
