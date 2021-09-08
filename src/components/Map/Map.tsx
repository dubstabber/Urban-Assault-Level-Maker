import { connect } from 'react-redux';
import { disableMenu } from '../../actions/menuActions';
import { useRef, useEffect } from 'react';
import { StoreState } from '../../reducers';

import './Map.css';

const _Map = ({
  map: { sectorSize, horizontalSectors, verticalSectors },
  disableMenu,
}: any) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, [canvasRef]);

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
              sectorX * sectorSize,
              sectorY * sectorSize,
              sectorSize,
              sectorSize
            );
          }
        }
      }
      ctx.current.stroke();
    }
  }

  useEffect(() => {
    if (canvasRef.current && horizontalSectors && verticalSectors) {
      canvasRef.current.width = horizontalSectors * sectorSize + sectorSize * 2;
      canvasRef.current.height = verticalSectors * sectorSize + sectorSize * 2;
      draw();
    }
  });

  return (
    <div onClick={disableMenu} className="map">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  map: state.map,
});

export const Map = connect(mapStateToProps, { disableMenu })(_Map);
