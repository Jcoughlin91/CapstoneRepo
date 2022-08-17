import html from "html-literal";

export default st => html`
  <h3>
    The weather in ${st.weather.city} is ${st.weather.description}. Temperature
    is ${st.weather.temp}F, and it feels like ${st.weather.feelsLike}F.
  </h3>

  <form>
    <div class="bioDiv">
      Are you a time traveler or are interested in dating a time traveler?
      <select name="question1">
        <option value="">select an answer</option>
        <option value="I am a time traveler">I am a time traveler</option>
        <option value="I am interested in dating time travelers"
          >I am interested in dating time travelers</option
        >
      </select>
    </div>
    <div>
      <label for="aboutme"
        >Please describe yourself. Feel free to write as much as you
        need.</label
      >
      <textarea name="aboutme" id="aboutme"></textarea>

      <label for="secretinfo">
        Secret info section. Please share a secret about yourself that will
        allow the time traveler to authenticate himself or herself to you.
      </label>
      <textarea name="secretinfo" id="secretinfo"></textarea>

      <label for="preferences">
        What is your type? Do you have any dating preferences?</label
      >
      <textarea name="preferences" id="preferences"></textarea>

      <label for="timeperiod">
        What time period are you most attracted towards?</label
      >
      <textarea name="timeperiod" id="timeperiod"></textarea>

      <label for="meet">
        How do you want to meet? Describe your location, exact time, clothing
        description etc. Any info on how exactly you would like to meet the time
        traveler?
      </label>
      <textarea name="meet" id="meet"></textarea>
      <input type="submit" name="submit" />
    </div>
  </form>
`;
