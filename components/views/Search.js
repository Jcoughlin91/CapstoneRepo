import html from "html-literal";

export default st => html`


<section id="timetraveldating">
    <table id="searchtable">
      <tr>
        <th>Time traveler status</th>
        <th>Bio</th>
        <th>Secret info</th>
        <th>Preferences</th>
        <th>Time period</th>
        <th>Meeting info</th>
      </tr>
        ${st.searchdata
          .map(data => {
            return `<tr><td>${data.question1}</td><td>${data.aboutme}</td><td>${data.secretinfo}</td><td>${data.preferences}</td><td>${data.timeperiod}</td><td>${data.meet}</td></tr>`;
          })
          .join("")}
      </table>
    </table>
  </section>
`;
