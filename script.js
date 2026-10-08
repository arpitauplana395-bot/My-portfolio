const glow=document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", e=>{ glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px"; });
} else if (glow) glow.style.display="none";

const revealTargets=document.querySelectorAll(".section,.marquee,.service-card,.project-card,.flow>div,.toolkit>div,.credential-row,.achievement-box");
revealTargets.forEach(el=>el.classList.add("reveal"));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.10, rootMargin:"0px 0px -40px 0px"});
revealTargets.forEach(el=>observer.observe(el));

// Small stagger for cards entering the viewport.
document.querySelectorAll(".service-grid,.project-grid,.flow").forEach(grid=>{
  [...grid.children].forEach((card,i)=>card.style.transitionDelay=`${Math.min(i*70,350)}ms`);
});
