import './CruiseList.scss'
import cocoCay from '../../assets/images/coco-cay.jpg'
import cruiseList from '../../data/cruise-list.json'


function CruiseList () {
    return (
        <div className='cruise-list'>
            <img className='cruise-list__img' src={cocoCay}></img>
            <h1 className='cruise-list__h1'>Cruise List</h1>
            {cruiseList.map((selectedCruise) => {
                return (<section className='cruise-list__section'>
                <div className='cruise-list__left-container'>
                    <img className='cruise-list__cruise-photo' src={cocoCay} alt='test' />
                </div>
                <div className='cruise-list__right-container'>
                <h3 className='cruise-list__h3'>Boat name: {selectedCruise.boat_name}</h3>
                <h3 className='cruise-list__h3'>Kids & family friendly: {selectedCruise.family_friendly}</h3>
                <h3 className='cruise-list__h3'>Next departure: {selectedCruise.next_departure}</h3>
                <h3 className='cruise-list__h3'>Port: {selectedCruise.port}</h3>
                </div>
            </section>)
            })}
        </div>
    )
}

export default CruiseList;