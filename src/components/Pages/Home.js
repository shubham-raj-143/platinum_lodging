import React from 'react';
import Slider from '../inc/Slider';
import ReadMoreReact from 'read-more-react';
import ReactToPrint from 'react-to-print';
import TableComponent from './TableComponent';
import pdf from "../files/Apartment.pdf";
import "./home.css"
// class Print extends React.Component{
//     render(){
//         return(
//             <div>

//            <TableComponent ref={(response) => (this.componentRef = response)} />

//            <ReactToPrint
//              content={() => this.componentRef}
//              trigger={() => <button class="btn btn-outline-dark "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
//              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
//              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
//              </svg> &nbsp; Download (.pdf)</button>}
//            />
//          </div>
//        );
//      }
//  }
function Home() {

    return (
        <div>

            <div>
                <div className="card mb-2">
                    <div className="card-body">
                        <h2>Villa David Chipperfield Nord</h2>
                        <p>Gardone Riviera, Lombardia, Italy &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                            </svg>
                            {/* <Print/> */}
                            <a href={pdf} target="_blank" rel="noreferrer">
                                <button class="btn btn-outline-dark "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> &nbsp; Download (.pdf)</button>
                            </a>

                        </p>
                    </div>
                </div>
            </div>

            <Slider />


            <div className="container">
                <div className="card mt-4">
                    <div className="card-body">
                        <h2>Luxury stay in Gardone Riviera, Lombardia, Italy</h2>
                        <p>&nbsp; 8 guests . 4 bedrooms . 4 beds . 4.5 bathrooms</p>
                        <hr class="mt-2 mb-3" />
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                            </svg>
                            &nbsp; Designed by

                        </h6>
                        <p>
                            &nbsp;   David Chipperfield
                        </p>
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-bar-graph-fill" viewBox="0 0 16 16">
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                            </svg>
                            &nbsp; Featured in
                        </h6>
                        <p>
                            &nbsp;   Dezeen, August 2015
                            <br />
                            &nbsp;   Designboom, July 2015

                        </p>


                    </div>
                </div>
            </div>


            <div className="container">
                <div className="card mt-2">
                    <div className="card-body">
                        <DemoClass />
                        <hr class="mt-2 mb-3" />
                        <h6>BEDROOM & BATHROOM</h6>
                        <ul>
                            <li>
                                Bedroom 1 - Master: King size bed, Ensuite bathroom with stand-alone rain shower, Television, Kitchenette, Lounge area, Terrace
                            </li>
                            <li>
                                Bedroom 2: Queen size bed, Ensuite bathroom with stand-alone rain shower, Television
                            </li>
                            <li>
                                Bedroom 3: Queen size bed, Ensuite bathroom with stand-alone rain shower, Television
                            </li>
                            <li>
                                Bedroom 4: Queen size bed, Jack & Jill bathroom with Exercise room, Stand-alone rain shower & bathtub, Bidet, Dual vanity, Television, Desk, Balcony

                            </li>

                        </ul>
                        <hr class="mt-2 mb-3" />
                        <h6>FEATURES & AMENITIES</h6>
                        <ul>
                            <li>
                                Fully equipped kitchen with breakfast bar
                            </li>
                            <li>
                                Formal dining area with seating for 10
                            </li>
                            <li>
                                Ice maker
                            </li>
                            <li>
                                Dishwasher
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
class DemoClass extends React.Component {

    render() {
        return (
            <ReadMoreReact text={"Architect David Chipperfield designed the airy interiors of this classic pergola-style house to celebrate the breathtaking surroundings of Lake Garda. From this prestigious position on the Eden Luxury Resort, you’ll enjoy endless views of the lake, as well as easy access to walking and biking trails. After a day on the lake, cool off in the pool or grab a drink at Eden's gourmet restaurant.Architect David Chipperfield designed the airy interiors of this classic pergola-style house to celebrate the breathtaking surroundings of Lake Garda. From this prestigious position on the Eden Luxury Resort, you’ll enjoy endless views of the lake, as well as easy access to walking and biking trails. After a day on the lake, cool off in the pool or grab a drink at Eden’s gourmet restaurant. Copyright © Luxury Retreats. All rights reserved."}
                min={100}
                ideal={125}
                max={1000}
                readMoreText="read more" />
        )
    }
}
export default Home;