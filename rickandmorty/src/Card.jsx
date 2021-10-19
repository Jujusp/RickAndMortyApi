import 'bootstrap/dist/css/bootstrap.css'

function Card(props) {
    return (
        <div className='col' style={{ width: '18rem' }}>
            <div className='card'>
                <img
                    src={props.src}
                    className='card-img-top'
                    alt='rick and mnorty character'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{props.name}</h5>
                    <ul>
                        <li>Gender: {props.gender} </li>
                        <li>Status: {props.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
