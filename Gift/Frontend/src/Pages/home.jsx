import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

function Home() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/py03W7HNzFKw5EFL/scene.splinecode');
  }, []);

  return (
    <canvas id="canvas3d"  />
  );
}

export default Home;
