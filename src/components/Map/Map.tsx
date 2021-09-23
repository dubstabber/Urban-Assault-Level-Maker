import { connect } from 'react-redux';
import {
  disableMenu,
  toggleContextMenu,
  setClickedPoints,
  setWindowSize,
} from '../../actions/menuActions';
import { selectUnit } from '../../actions/mapActions';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { StoreState } from '../../reducers';
import { ContextMenu } from '../Menus/ContextMenu/ContextMenu';

import './Map.css';
import { Hoststation } from '../../UA structures/Hoststation';
import { Unit } from '../../UA structures/Unit';

const _Map = ({
  map: {
    sectorSize,
    horizontalSectors,
    verticalSectors,
    sectorIndent,
    selectedUnit,
    hostStations,
  },
  menu: { contextMenu },
  disableMenu,
  toggleContextMenu,
  setWindowSize,
  setClickedPoints,
  selectUnit,
}: any) => {
  const [draggable, setDraggable] = useState(false);
  const diffX = useRef(0);
  const diffY = useRef(0);
  let canvasRef = useRef<HTMLCanvasElement>(null);
  let mapRef = useRef<HTMLDivElement>(null);
  let ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, [canvasRef]);

  useEffect(() => {
    if (mapRef.current) {
      setWindowSize(mapRef.current.offsetWidth, mapRef.current.offsetHeight);
    }
  }, [mapRef, setWindowSize]);

  useEffect(() => {
    if (canvasRef.current && horizontalSectors && verticalSectors) {
      canvasRef.current.width =
        horizontalSectors * (sectorSize + sectorIndent) +
        (sectorSize + sectorIndent) * 2;
      canvasRef.current.height =
        verticalSectors * (sectorSize + sectorIndent) +
        (sectorSize + sectorIndent) * 2;
    }
  }, [horizontalSectors, verticalSectors, sectorSize, sectorIndent]);

  useEffect(() => {
    draw();
  });

  function draw(): void {
    if (canvasRef.current && ctx.current) {
      ctx.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      ctx.current.beginPath();
      for (let sectorY = 0; sectorY <= verticalSectors; sectorY++) {
        for (let sectorX = 0; sectorX <= horizontalSectors; sectorX++) {
          if (sectorY > 0 && sectorX > 0) {
            ctx.current.rect(
              sectorX * (sectorSize + sectorIndent),
              sectorY * (sectorSize + sectorIndent),
              sectorSize,
              sectorSize
            );
          }
        }
      }
      ctx.current.stroke();

      const hsSize = sectorSize * 0.5;
      hostStations.forEach((hs: Hoststation) => {
        if (hs.image) {
          ctx.current?.drawImage(
            hs.image,
            hs.pos_x - hsSize / 2,
            hs.pos_y - hsSize / 2,
            hsSize,
            hsSize
          );
        }
      });
    }
  }

  function handleLeftClick(e: MouseEvent): void {
    e.preventDefault();
    disableMenu();
    toggleContextMenu(false);
  }
  function handleRightClick(e: any): void {
    e.preventDefault();
    disableMenu();
    if (mapRef.current) {
      const windowX =
        e.pageX - Math.round(mapRef.current.getBoundingClientRect().left);
      const windowY =
        e.pageY - Math.round(mapRef.current.getBoundingClientRect().top);
      setClickedPoints(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY,
        windowX,
        windowY
      );
    }
    toggleContextMenu(true);
  }

  function handleSelection(e: any): void {
    if (canvasRef.current) {
      setDraggable(true);
      const clickedX =
        e.pageX - Math.round(canvasRef.current.getBoundingClientRect().left);
      const clickedY =
        e.pageY - Math.round(canvasRef.current.getBoundingClientRect().top);
      diffX.current = clickedX;
      diffY.current = clickedY;
      let selectedUnit: Unit | null = null;

      const hsSize = sectorSize * 0.5;
      hostStations.every((hs: Unit): boolean => {
        const topCorner = hs.pos_y - hsSize / 2;
        const rightCorner = hs.pos_x + hsSize / 2;
        const bottomCorner = hs.pos_y + hsSize / 2;
        const leftCorner = hs.pos_x - hsSize / 2;
        if (
          topCorner < clickedY &&
          rightCorner > clickedX &&
          bottomCorner > clickedY &&
          leftCorner < clickedX
        ) {
          selectedUnit = hs;
          return false;
        } else {
          return true;
        }
      });
      selectUnit(selectedUnit);
    }
  }

  function drag(e: any): void {
    if (draggable && selectedUnit && canvasRef.current) {
      const draggedX =
        e.pageX - Math.round(canvasRef.current.getBoundingClientRect().left);
      const draggedY =
        e.pageY - Math.round(canvasRef.current.getBoundingClientRect().top);

      diffX.current = draggedX - diffX.current;
      diffY.current = draggedY - diffY.current;

      selectedUnit.pos_x += diffX.current;
      selectedUnit.pos_y += diffY.current;

      diffX.current = draggedX;
      diffY.current = draggedY;
      draw();
    }
  }

  return (
    <>
      <div
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
        ref={mapRef}
        className="map"
      >
        <canvas
          onMouseDown={handleSelection}
          onMouseUp={() => setDraggable(false)}
          onMouseMove={drag}
          ref={canvasRef}
        ></canvas>
        {contextMenu && <ContextMenu />}
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  map: state.map,
  menu: state.menu,
});

export const Map = connect(mapStateToProps, {
  disableMenu,
  toggleContextMenu,
  setClickedPoints,
  setWindowSize,
  selectUnit,
})(_Map);
