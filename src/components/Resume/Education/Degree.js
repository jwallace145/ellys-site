import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.graduation}</p>
      <p className="school">Concentration: {data.concentration}</p>
    </header>
    <div>
      <ul className="points">
        {data.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
    concentration: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Degree;
