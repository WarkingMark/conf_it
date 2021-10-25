let animItems = document.querySelectorAll('.anim-item');
if(animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll(params){
        for (let index = 0; index < animItems.length; index++) {
            const anim_item = animItems[index];
            const anim_item_height = anim_item.offsetHeight;
            const anim_off_set = offSet(anim_item).top;
            const anim_start = 4;

            let anim_item_point = window.innerHeight - anim_item_height / anim_start;

            if(anim_item_height > window.innerHeight) {
                anim_item_point = window.innerHeight - window.innerHeight / anim_start;
            }
            
            if((pageYOffset > anim_off_set - anim_item_point) && pageYOffset < (anim_off_set + anim_item_height)) {
                anim_item.classList.add('active')
            } else {
                anim_item.classList.remove('active')
            }
        }
    }

    function offSet(el) {
        const rect = el.getBoundingClientRect();
        let scroll_left = window.pageXOffset || document.documentElement.scrollLeft;
        let scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scroll_top, left: rect.left + scroll_left}
    }
}
setTimeout(()=> {
    animScroll();
}, 1000)
