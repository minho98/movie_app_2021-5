import PropTypes from 'prop-types'

function Movie({id, title, year, summary, poster}) {
    return (
        <div>
            <h3>{title}</h3>
            <h5>{year}</h5>
            <p>{summary}</p>
            
            <h4>{title}</h4>
        </div>
        
    )
}

Movie.propTypes = {
 id: PropTypes.number.isRequired,
 year: PropTypes.string.isRequired,
 title: PropTypes.string.isRequired,
 summary: PropTypes.string.isRequired,
 poster: PropTypes.string.isRequired
}

export default Movie