import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={s.wraper}>
    <label className={s.label}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default SearchBox;
