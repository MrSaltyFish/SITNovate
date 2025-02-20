import PropTypes from "prop-types";

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-white font-medium">{label}</label>}
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string, // Optional, must be a string
  placeholder: PropTypes.string, // Optional, must be a string
  value: PropTypes.string.isRequired, // Required, must be a string
  onChange: PropTypes.func.isRequired, // Required, must be a function
};

export default TextInput;
