import html from "html-literal";

export default state => html`
  <div class="background">
    <div class="starinfo">
      <table class="tableline">
        <tr class="tableline">
          <td><b>Name of Planet</b></td>
          <td><b>Constellation</b></td>
          <td><b>Distance from Earth</b></td>
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
  </div>
`;
