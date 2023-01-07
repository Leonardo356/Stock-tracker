import { MouseEventHandler } from "react";

const rotate = (
     el: HTMLElement | null, 
     x: number, 
     y: number
    ) => {
    let bounds = el!.getBoundingClientRect();
    const mouseX = x - window.scrollX;
    const mouseY = y - window.scrollY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
   el!.style.transform = `
   scale3d(1.07, 1.07, 1.07)
   rotate3d(
     ${center.y / 80},
     ${-(center.x / 80)},
     0,
     ${Math.log(distance)*4}deg
    )
    `;

  el!.style.boxShadow = `${center.x/7}px ${center.y/7}px 10px 2px rgba(20, 21, 20, 20%)`;
    
    let bgHover = el!.querySelector('.cardGlow') as HTMLElement | null;
    bgHover!.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      rgba(255, 255, 255, 40%),
      transparent 60%
   )
    `;
};

export const hoverRotate: MouseEventHandler = e => {
  let x = e.pageX;
  let y = e.pageY;
  let el = e.currentTarget as HTMLElement | null;
  let eventType = e.type;
  
  if(eventType === 'mousemove') rotate(el, x, y);
  else {
    el!.style.transform = '';
    el!.style.boxShadow = '';
    let glow = el!.querySelector('.cardGlow')as HTMLElement | null;
    glow!.style.background = '';
  }
}