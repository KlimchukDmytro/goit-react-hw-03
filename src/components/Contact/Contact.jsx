import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={s.item}>
    <p className={s.text_name}>
      <FaUser className={s.icon} />
      {name}:
    </p>
    <p className={s.text_number}>
      <FaPhone className={s.icon} />
      {number}
    </p>
    <button className={s.btn} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
