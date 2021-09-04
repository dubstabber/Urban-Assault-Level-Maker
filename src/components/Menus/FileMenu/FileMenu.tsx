const FileMenu = () => {
    return (
        <>
            <span className="menu__title">File</span>
            <ul className="menu__list--disabled" id="fileMenu">
                <li className="menu__item" id="newMap">New map</li>
                <li className="menu__item" id="openMap">Open map</li>
                <li className="menu__item" id="saveMap">Save</li>
                <li className="menu__item" id="saveAsMap">Save As...</li>
                <li className="menu__item" id="closeMap">Close current map</li>
                <li className="menu__item" id="exit">Exit</li>
            </ul>
        </>
    )
}

export default FileMenu
