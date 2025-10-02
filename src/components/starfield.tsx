"use client";

export default function Starfield() {
  return (
    <div className="absolute inset-0 z-0">
      <div id="stars1" className="absolute"></div>
      <div id="stars2" className="absolute"></div>
      <div id="stars3" className="absolute"></div>
      <style jsx>{`
        @function random_range($min, $max) {
          $rand: random();
          $random_range: $min + floor($rand * ($max - $min + 1));
          @return $random_range;
        }

        #stars1, #stars2, #stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        #stars1 {
          background: transparent url('/stars.png') repeat top center;
          z-index: 0;
          animation: move-twink-back 200s linear infinite;
        }
        #stars2 {
          background: transparent url('/twinkling.png') repeat top center;
          z-index: 1;
          animation: move-twink-back 150s linear infinite;
        }
        #stars3 {
           background: transparent url('/clouds.png') repeat top center;
           z-index: 2;
           animation: move-clouds-back 200s linear infinite;
        }

        @keyframes move-twink-back {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -10000px, 0);
          }
        }
        
        @keyframes move-clouds-back {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 10000px 0;
          }
        }
      `}</style>
    </div>
  );
}
