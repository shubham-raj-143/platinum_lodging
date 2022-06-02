import React from 'react';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import FavouriteIcon from '@material-ui/icons/Favorite'
import NavigationIcon from '@material-ui/icons/Navigation'
import {Routes, Route, useNavigate} from 'react-router-dom';
import ImageGallery from "../Pages/ImageGallery"

function DisplayImage() {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/imageGallery', {replace: true});
    };
    return(
        <div>
             <div onClick={navigateTo} className="DisplayImage" style={{float:"right",marginBottom:"0.5em"}}>
                <Fab color='dark' aria-label='add' variant='extended'>
                    <AddIcon /> See all photos
                </Fab>
            </div>
            <Routes>
          <Route path="/imageGallery" element={<ImageGallery />} />
        </Routes>
        </div>
       
    );
}
export default DisplayImage;