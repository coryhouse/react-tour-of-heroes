import React, {PropTypes} from 'react';

class HeroDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  onHeroNameChange(e) {
    this.props.actions.changeName(this.props.hero.id, e.target.value);
  }

  render() {
    let hero = this.props.hero;

    return (
      <div>
        <h2>{hero.name} details!</h2>
        <div><label>id:</label> {hero.id}</div>
        <div>
          <label>name: </label>
          <input value={hero.name} onChange={this.onHeroNameChange.bind(this)} placeholder="name" />
        </div>
      </div>
    );
  }
}

HeroDetail.propTypes = {
  hero: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default HeroDetail;
