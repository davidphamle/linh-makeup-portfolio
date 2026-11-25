'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Lightweight Three.js hero: soft floating shimmer particles in blush,
// gold and cream. Client-only, slow drift + gentle mouse parallax.
// Respects prefers-reduced-motion (one static frame) and falls back to
// the CSS gradient behind it if WebGL is unavailable. No models, no CDN.
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let renderer: THREE.WebGLRenderer | null = null;
    let raf = 0;
    let disposed = false;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      return; // CSS gradient fallback shows through
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parent = canvas.parentElement;
    const w = parent?.clientWidth ?? 800;
    const h = parent?.clientHeight ?? 600;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.z = 9;

    // ~320 particles, warm blush / gold / cream
    const N = 320;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const palette = [
      new THREE.Color('#e8b4a0'),
      new THREE.Color('#d4b08a'),
      new THREE.Color('#f3c2cb'),
      new THREE.Color('#fdf8f3'),
      new THREE.Color('#bc8d60'),
    ];
    const seeds = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      const c = palette[i % palette.length];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      seeds[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.14, vertexColors: true, transparent: true, opacity: 0.75,
      sizeAttenuation: true, depthWrite: false,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // A few large soft blobs (flattened spheres, very transparent)
    const blobMat = new THREE.MeshBasicMaterial({ color: '#f3c2cb', transparent: true, opacity: 0.16, depthWrite: false });
    const blobs: THREE.Mesh[] = [];
    [[-4, 1.5, -2, 2.4], [4, -1, -1, 2.0], [0, 2.5, -3, 1.6]].forEach(([x, y, z, r]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 24), blobMat.clone());
      m.position.set(x, y, z);
      m.scale.set(1.4, 0.7, 1);
      scene.add(m);
      blobs.push(m);
    });

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const onResize = () => {
      const pw = parent?.clientWidth ?? 800;
      const ph = parent?.clientHeight ?? 600;
      camera.aspect = pw / ph;
      camera.updateProjectionMatrix();
      renderer?.setSize(pw, ph, false);
    };
    window.addEventListener('resize', onResize);

    const start = performance.now();
    const tick = (now: number) => {
      if (disposed) return;
      const t = (now - start) / 1000;
      points.rotation.y = t * 0.02;
      points.rotation.x = Math.sin(t * 0.05) * 0.05;
      const p = geo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < N; i++) {
        p.array[i * 3 + 1] += Math.sin(t * 0.4 + seeds[i]) * 0.0006;
      }
      p.needsUpdate = true;
      blobs.forEach((b, i) => { b.position.y += Math.sin(t * 0.3 + i * 2) * 0.0008; });
      mx += (tx - mx) * 0.03;
      my += (ty - my) * 0.03;
      camera.position.x = mx;
      camera.position.y = -my;
      camera.lookAt(0, 0, 0);
      renderer?.render(scene, camera);
      if (!reduced) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose(); mat.dispose();
      blobs.forEach((b) => { b.geometry.dispose(); (b.material as THREE.Material).dispose(); });
      renderer?.dispose();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
