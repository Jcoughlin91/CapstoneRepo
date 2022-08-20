import html from "html-literal";

export default state => html`
<div class = "background">

<div class="starinfo">
  <table>

    <tr>
      <td>name</td>
      <td>constellation</td>
      <td>distance</td>
    </tr>
    ${state.bodies.map(
      body => html`
        <tr>
          <td>${body.name}</td>
          <td>${body.position}</td>
          <td>${body.distance}</td>
        </tr>
      `
    )}

  </table>
  </div>
  </tr>

  </div>
`;
