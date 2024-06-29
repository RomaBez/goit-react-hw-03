import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div>
      <div>
        <FaUser />
        <p>{name}</p>
      </div>
      <div>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
