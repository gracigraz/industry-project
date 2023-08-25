import './CruiseDetails.scss'
import cruiseList from '../../data/cruise-list.json'
import { useParams } from "react-router-dom";
import cruisePhoto from '../../assets/images/cruises.jpg'





function CruiseDetails() {
    const { id } = useParams();
    let selectedCruise;

    for (let i = 0; i < cruiseList.length; i++) {
        if (cruiseList[i].id === id) {
            selectedCruise = cruiseList[i]
        }
    }

    if (selectedCruise == null) {
        return (<>
            <h1>Loading...</h1>
        </>)
    }
    else {
        return (
            <main className='cruise-details'>
                <img className='cruise-details__hero' src={cruisePhoto} alt='Cruise ship you are seeing the details for' />
                <h1 className='cruise-details__h1'>Cruise details</h1>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Destination:</span> {selectedCruise.destination}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Boat name: </span> {selectedCruise.boat_name}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Days at sea:</span> {selectedCruise.days_at_sea}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Capacity:</span> {selectedCruise.capacity}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Kids & family friendly:</span> {selectedCruise.family_friendly}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Last cruise reparation:</span> {selectedCruise.last_cruise_reparation}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Next departure:</span> {selectedCruise.next_departure}</h3>
                <h3 className='cruise-details__h3'><span className='cruise-details__bold'>Port:</span> {selectedCruise.port}</h3>
            </main>
        )
    }
}

export default CruiseDetails;