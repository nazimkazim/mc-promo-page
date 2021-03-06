import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersey from '../../../Resources/images/jersey.jpg';

const PromotionAnimation = () => {
  return (
    <Zoom>
      <div className="promotion_animation">
        <div className="left">
          <Zoom>
            <div>
              <span>Win a</span>
              <span>Jersey</span>
            </div>
          </Zoom>
        </div>
        <div className="right">
          <Zoom>
            <div style={{ background: `URL(${Jersey}) no-repeat` }} />
          </Zoom>
        </div>
      </div>
    </Zoom>
  );
};

export default PromotionAnimation;
