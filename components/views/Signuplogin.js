import html from "html-literal";

export default () => html`
  <div>
    <select name="question1">
      <option value="">select an answer</option>
      <option value="I am a time traveler">I am a time traveler</option>
      <option value="I am interested in dating time travelers"
        >I am interested in dating time travelers</option
      >
    </select>
  </div>
`;
