const DISTANCE = 100;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('表锅,窝出来了喔!');
      const animation: Animation = map.get(entry.target);
      animation && animation.play();
      ob.unobserve(entry.target);
    }
  });
});
const isBelowViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
};
export default {
  mounted(el: HTMLElement) {
    if (!isBelowViewport(el)) return;
    const animation = el.animate(
      [
        { transform: `translateY(${DISTANCE}px)`, opacity: 0.5 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      {
        duration: DURATION,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
    animation.onfinish = () => {
      ob.unobserve(el);
    };
    animation.pause();
    ob.observe(el);
    map.set(el, animation);
  },
  unmounted(el: HTMLElement) {
    ob.unobserve(el);
  }
};
