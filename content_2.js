const list = document.querySelector('.list'),
    items = document.querySelectorAll('.watch')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId) {
            case 'all':
                items.forEach(item => {
                    if (item.classList.contains('watch')) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
            case 'Patek':
                items.forEach(item => {
                    if (item.classList.contains('Patek')) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
            case 'Hublot':
                items.forEach(item => {
                    if (item.classList.contains('Hublot')) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
            case 'Richard':
                items.forEach(item => {
                    if (item.classList.contains('Richard')) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
            case 'Vacheron':
                items.forEach(item => {
                    if (item.classList.contains('Vacheron')) {
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
        }
    } )
}
filter()