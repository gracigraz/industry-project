import './CruiseList.scss'
import cruiseList from '../../data/cruise-list.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function CruiseList() {
    const [selectedCruises, setSelectedCruises] = useState();

    function handleCompareClick () {
        let selectedButton = document.querySelectorAll('.cruise-list__compare-button')  

        if(selectedButton[0].innerHTML === 'COMPARE') {
            selectedButton[0].innerHTML = 'SELECT CRUISES TO COMPARE'
        }

        if(selectedButton[0].innerHTML === 'SELECT CRUISES TO COMPARE' && selectedCruises != null ) {
            console.log(selectedCruises);
        }
    }

    function handleSelectCruise (cruiseClick) {
        console.log(cruiseClick);
        let selectedButton = document.querySelectorAll('.cruise-list__compare-button')  

        if(selectedButton[0].innerHTML === 'COMPARE') {
            window.location.replace('/cruise-details/' + cruiseClick)
        }
        if(selectedButton[0].innerHTML === 'SELECT CRUISES TO COMPARE') {
            setSelectedCruises(selectedCruises.append(cruiseClick))
        }
    }

    return (
        <div className='cruise-list'>
            <h1 className='cruise-list__h1'>Cruise List</h1>
            <section className='cruise-list__compare-container'>
            <button className='cruise-list__compare-button' onClick={handleCompareClick}>COMPARE</button>
            </section>
            {cruiseList.map((cruiseIteration) => {
                return (
                    <div key={cruiseIteration.id} >
                    <section onClick={() => {handleSelectCruise(cruiseIteration.id)}} className='cruise-list__section'>
                        <div className='cruise-list__top-container'>
                            <img className='cruise-list__cruise-photo' src={`http://192.168.3.71:8080/images/bahamas-${cruiseIteration.id}`} alt='test' />
                        </div>
                        <div className='cruise-list__bottom-container'>
                            <h3 className='cruise-list__h3'><span className='cruise-list__bold'>Boat name:</span> {cruiseIteration.boat_name}</h3>
                            <h3 className='cruise-list__h3'><span className='cruise-list__bold'>Kids & family friendly:</span> {cruiseIteration.family_friendly}</h3>
                            <h3 className='cruise-list__h3'><span className='cruise-list__bold'>Next departure:</span> {cruiseIteration.next_departure}</h3>
                            <h3 className='cruise-list__h3'><span className='cruise-list__bold'>Port:</span> {cruiseIteration.port}</h3>
                        </div>
                    </section>
                    </div>
                )
            })}
        </div>
    )
}

export default CruiseList;
