import PropTypes from "prop-types";

const Filter = ({ filterName, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={filterName}
          placeholder="Enter name for Search"
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
