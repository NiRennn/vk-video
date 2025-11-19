import { useEffect, useMemo, useRef, useState } from "react";
import "./Bloggers.scss";

import avatar1 from "/bloggers/ava-1.png";
import avatar2 from "/bloggers/ava-2.png";
import avatar3 from "/bloggers/ava-3.png";
import avatar4 from "/bloggers/ava-4.png";
import avatar5 from "/bloggers/ava-5.png";
import avatar6 from "/bloggers/ava-6.png";
import avatar7 from "/bloggers/ava-7.png";
import avatar8 from "/bloggers/ava-8.png";
import avatar9 from "/bloggers/ava-9.png";
import avatar10 from "/bloggers/ava-10.png";
import avatar11 from "/bloggers/ava-11.png";
import avatar12 from "/bloggers/ava-12.png";
import avatar13 from "/bloggers/ava-13.png";
import avatar14 from "/bloggers/ava-14.png";
import avatar15 from "/bloggers/ava-15.png";
import avatar16 from "/bloggers/ava-16.png";
import avatar17 from "/bloggers/ava-17.png";
import avatar18 from "/bloggers/ava-18.png";
import avatar19 from "/bloggers/ava-19.png";
import avatar20 from "/bloggers/ava-20.png";
import avatar21 from "/bloggers/ava-21.png"; 
import avatar22 from "/bloggers/ava-22.png";
import avatar23 from "/bloggers/ava-23.png";
import avatar24 from "/bloggers/ava-24.png";

import label1 from "/labels/ava-1.svg";
import label2 from "/labels/ava-2.svg";
import label3 from "/labels/ava-3.svg";
import label4 from "/labels/ava-4.svg";
import label5 from "/labels/ava-5.svg";
import label6 from "/labels/ava-6.svg";
import label7 from "/labels/ava-7.svg";
import label8 from "/labels/ava-8.svg";
import label9 from "/labels/ava-9.svg";
import label10 from "/labels/ava-10.svg";
import label11 from "/labels/ava-11.svg";
import label12 from "/labels/ava-12.svg";
import label13 from "/labels/ava-13.svg";
import label14 from "/labels/ava-14.svg";
import label15 from "/labels/ava-15.svg";
import label16 from "/labels/ava-16.svg";
import label17 from "/labels/ava-17.svg";
import label18 from "/labels/ava-18.svg";
import label19 from "/labels/ava-19.svg";
import label20 from "/labels/ava-20.svg";
import label21 from "/labels/ava-21.svg";
import label22 from "/labels/ava-22.svg";
import label23 from "/labels/ava-23.svg";
import label24 from "/labels/ava-24.svg";

type Blogger = {
  id: string;
  avatar: string;
  label?: string;
};

const DEFAULT_ITEMS: Blogger[] = [
  { id: "b1", avatar: avatar1, label: label1 },
  { id: "b2", avatar: avatar2, label: label2 },
  { id: "b3", avatar: avatar3, label: label3 },
  { id: "b4", avatar: avatar4, label: label4 },
  { id: "b5", avatar: avatar5, label: label5 },
  { id: "b6", avatar: avatar6, label: label6 },
  { id: "b7", avatar: avatar7, label: label7 },
  { id: "b8", avatar: avatar8, label: label8 },
  { id: "b9", avatar: avatar9, label: label9 },
  { id: "b10", avatar: avatar10, label: label10 },
  { id: "b11", avatar: avatar11, label: label11 },
  { id: "b12", avatar: avatar12, label: label12 },
  { id: "b13", avatar: avatar13, label: label13 },
  { id: "b14", avatar: avatar14, label: label14 },
  { id: "b15", avatar: avatar15, label: label15 },
  { id: "b16", avatar: avatar16, label: label16 },
  { id: "b17", avatar: avatar17, label: label17 },
  { id: "b18", avatar: avatar18, label: label18 },
  { id: "b19", avatar: avatar19, label: label19 },
  { id: "b20", avatar: avatar20, label: label20 },
  { id: "b21", avatar: avatar21, label: label21 },
  { id: "b22", avatar: avatar22, label: label22 },
  { id: "b23", avatar: avatar23, label: label23 },
  { id: "b24", avatar: avatar24, label: label24 },
];

export default function Bloggers({
  items = DEFAULT_ITEMS,
  speed = 100,
  gap = 1,
}: {
  items?: Blogger[];
  speed?: number;
  gap?: number;
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [, setMounted] = useState(false);

  const FOCUS_START = 0.7;
  const MAX_SCALE_ADD = 0.85;

  const loopItems = useMemo(() => items, [items]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    track.style.gap = `${gap}px`;

    const nodes = Array.from(track.children) as HTMLElement[];

    nodes.forEach((el) => {
      el.style.setProperty("--scale", "1");
      el.style.setProperty("--glow", "0");
      el.style.setProperty("--labelOpacity", "0");
      el.style.setProperty("--extraGap", "0px");
    });

    const waitImages = () =>
      Promise.all(
        Array.from(track.querySelectorAll("img")).map((img) =>
          (img as HTMLImageElement).complete
            ? Promise.resolve()
            : new Promise<void>((res) => {
                img.addEventListener("load", () => res(), { once: true });
                img.addEventListener("error", () => res(), { once: true });
              })
        )
      );

    const firstWidth = () => {
      const el = track.firstElementChild as HTMLElement | null;
      if (!el) return 0;
      const style = window.getComputedStyle(el);
      const ml = parseFloat(style.marginLeft) || 0;
      const mr = parseFloat(style.marginRight) || 0;
      return el.offsetWidth + ml + mr + gap;
    };

    const lastWidth = () => {
      const el = track.lastElementChild as HTMLElement | null;
      if (!el) return 0;
      const style = window.getComputedStyle(el);
      const ml = parseFloat(style.marginLeft) || 0;
      const mr = parseFloat(style.marginRight) || 0;
      return el.offsetWidth + ml + mr + gap;
    };

    const easeOutCubic = (u: number) => 1 - Math.pow(1 - u, 3);
    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    let raf = 0;
    let x = 0;
    let last = performance.now();

    const onResize = () => {
      x = 0;
      track.style.transform = "translate3d(0,0,0)";
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(viewport);

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile =
      window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

    const currentSpeed = prefersReduced
      ? 0
      : isMobile
      ? speed * 0.4
      : speed;

    const tick = (now: number) => {
      const dt = Math.min(32, now - last);
      last = now;

      x -= (currentSpeed * dt) / 1000;

      if (speed >= 0) {
        let fw = firstWidth();
        while (fw && -x >= fw) {
          const first = track.firstElementChild!;
          track.appendChild(first);
          x += fw;
          fw = firstWidth();
        }
      } else {
        let lw = lastWidth();
        while (lw && x > 0) {
          const lastEl = track.lastElementChild!;
          track.insertBefore(lastEl, track.firstChild);
          x -= lw;
          lw = lastWidth();
        }
      }

      track.style.transform = `translate3d(${x}px,0,0)`;

      const vpRect = viewport.getBoundingClientRect();
      const trackLeft = track.getBoundingClientRect().left;

      const vpCenter = vpRect.left + vpRect.width / 2;
      const influence = vpRect.width * 0.6;

      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];

        const cx = trackLeft + el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(vpCenter - cx);
        const t = clamp01(1 - dist / influence);

        const focusRaw = (t - FOCUS_START) / (1 - FOCUS_START);
        const focus = clamp01(easeOutCubic(focusRaw));

        const scale = 1 + focus * MAX_SCALE_ADD;
        const glow = focus > 0.28 ? focus : 0;

        const extraGap = focus * 32;

        el.style.setProperty("--scale", scale.toFixed(3));
        el.style.setProperty("--glow", glow.toFixed(3));
        el.style.setProperty("--labelOpacity", focus.toFixed(3));
        el.style.setProperty("--extraGap", `${extraGap}px`);
      }

      raf = requestAnimationFrame(tick);
    };

    (async () => {
      await waitImages();
      raf = requestAnimationFrame((t) => {
        last = t;
        tick(t);
      });
    })();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [items, speed, gap]);

  return (
    <section className="Bloggers">
      <h1 className="Bloggers__header">
        Более 100 000 блогеров уже в VK&nbsp;Видео
      </h1>
      <div className="bloggers__viewport" ref={viewportRef}>
        <ul className="bloggers__track" ref={trackRef}>
          {loopItems.map((b, i) => (
            <li className="bloggers__item" key={`${b.id}-${i}`}>
              <div className="bloggers__avatarWrap">
                <img className="bloggers__avatar" src={b.avatar} alt="" />
              </div>
              {b.label && (
                <img
                  className="bloggers__label"
                  src={b.label}
                  alt=""
                  draggable={false}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
