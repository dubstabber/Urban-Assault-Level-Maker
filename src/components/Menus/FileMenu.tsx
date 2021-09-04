import React from 'react'
import './FileMenu.css'

const FileMenu = () => {
    return (
        <div className="menu">
            <span className="menu__title">File</span>
            <ul className="menu__list">
                <li className="menu__item" id="newMap">New map</li>
                <li className="menu__item" id="openMap">Open map</li>
                <li className="menu__item" id="saveMap">Save</li>
                <li className="menu__item" id="saveAsMap">Save As...</li>
                <li className="menu__item" id="closeMap">Close current map</li>
                <li className="menu__item" id="exit">Exit</li>
            </ul>
        </div>
    )
}

export default FileMenu
