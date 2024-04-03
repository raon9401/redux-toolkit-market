import React from 'react'
import { MENU_ARR } from '../const/ConstArr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileSideMenu = ({ setSideMenu }) => {
    const menuArr = [...MENU_ARR];


    return (
        <div className='side-menu-box only-mobile'>
            <div className='close-btn-wrap'>
                <button onClick={() => setSideMenu(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div className='side-menu-wrap'>
                {menuArr.map((item, index) =>
                    <button className='mobile-menu-btn' key={index}>
                        {item}
                    </button>
                )}

            </div>
        </div>
    )
}

export default MobileSideMenu