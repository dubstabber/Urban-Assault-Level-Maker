import { connect } from 'react-redux';
import {
  disableMenu,
  toggleContextMenu,
  setClickedPoints,
  setWindowSize,
} from '../../actions/menuActions';
import { useRef, useEffect, MouseEvent } from 'react';
import { StoreState } from '../../reducers';
import { ContextMenu } from '../Menus/ContextMenu/ContextMenu';

import './Map.css';
import { Hoststation } from '../../UA structures/Hoststation';

const _Map = ({
  map: {
    sectorSize,
    horizontalSectors,
    verticalSectors,
    sectorIndent,
    hostStations,
  },
  menu: { contextMenu },
  disableMenu,
  toggleContextMenu,
  setWindowSize,
  setClickedPoints,
}: any) => {
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

  function draw() {
    if (canvasRef.current && ctx.current) {
      // console.log(hostStations);
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

  function handleLeftClick(e: MouseEvent) {
    e.preventDefault();
    disableMenu();
    toggleContextMenu(false);
  }
  function handleRightClick(e: any) {
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

  return (
    <>
      <div
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
        ref={mapRef}
        className="map"
      >
        <canvas ref={canvasRef}></canvas>
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
})(_Map);
