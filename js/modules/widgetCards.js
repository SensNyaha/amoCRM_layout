function bindingWidgetCards() {
    let widgetCards = document.querySelectorAll('.widgets__info');
    let widgetMenuButtons = document.querySelectorAll('.widgets__item');

    function markOffButtons() {
        widgetMenuButtons.forEach(btn => {
            btn.classList.remove('showing')
        })
    }

    function hideAllCards() {
        widgetCards.forEach(card => {
            card.classList.remove('showing')
        })
    }

    function findMyInfocard(trigger) {
        let seek;
        widgetCards.forEach(card => {
            if (card.dataset.what === trigger.dataset.to) {
                console.log(card);
                seek = card;
            }
        })
        return seek;
    }

    widgetMenuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            markOffButtons();
            btn.classList.add('showing');
            hideAllCards()
            findMyInfocard(btn).classList.add('showing');
        })

    })
}

export {bindingWidgetCards};