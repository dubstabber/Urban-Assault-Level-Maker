import { connect } from 'react-redux';
import { disableMenu } from '../../actions/menuActions';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { StoreState } from '../../reducers';
import ContextMenu from '../Menus/ContextMenu';

import './Map.css';

const _Map = ({
  map: { sectorSize, horizontalSectors, verticalSectors, sectorIndent },
  disableMenu,
}: any) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, [canvasRef]);

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
    }
  }

  function handleLeftClick(e: MouseEvent) {
    e.preventDefault();
    disableMenu();
    setContextMenu(false);
  }
  function handleRightClick(e: MouseEvent) {
    e.preventDefault();
    disableMenu();
    setAnchorPoint({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    setContextMenu(true);
  }

  return (
    <>
      <div
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
        className="map"
      >
        <canvas ref={canvasRef}></canvas>
        {contextMenu && (
          <ContextMenu posX={anchorPoint.x} posY={anchorPoint.y} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  map: state.map,
});

export const Map = connect(mapStateToProps, { disableMenu })(_Map);
