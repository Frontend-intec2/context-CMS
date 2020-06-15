import React, { Component } from "react";

class Personen extends Component {
  render() {
    const { personen } = this.props;
    const persoonslijst = personen.map((persoon) => {
      return (
        <div className="persoon">
          key={persoon.id}
          <div>name: {persoon.name}</div>
          <div>age: {persoon.age}</div>
          <div>nationaliteit: {persoon.nationaliteit}</div>
        </div>
      );
    });
    return <div className="persoons-lijst">{persoonslijst}</div>;
  }
}

export default Personen;
