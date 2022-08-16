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
    <label for="about-me"
      >Please describe yourself. Feel free to write as much as you need.</label
    >
    <textarea name="about-me" id="about-me"></textarea>

    <label for="about-me">
      Secret info section. Please share a secret about yourself that will allow
      the time traveler to authenticate himself or herself to you.
    </label>
    <textarea name="about-me" id="about-me"></textarea>

    <label for="preferences">
      What is your type? Do you have any dating preferences?</label
    >
    <textarea name="about-me" id="about-me"></textarea>

    <label for="time period">
      What time period are you most attracted towards?</label
    >
    <textarea name="about-me" id="about-me"></textarea>

    <label for="How do you want to meet?">
      How do you want to meet? Describe your location, exact time, clothing
      description etc. Any info on how exactly you would like to meet the time
      traveler?
    </label>
    <textarea name="about-me" id="about-me"></textarea>
    <input type="submit" name="submit" />
  </form>
`;
