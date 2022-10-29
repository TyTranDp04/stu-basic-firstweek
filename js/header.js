
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const rightMenu = $(".right__menu")
const buttonPopup = $$(".button__popup")
const mainNav = $('.main__nav')
const toggleListOption = $$('.option__toggle--active')
const listOption = $('.sub__menu-option')
const iconUp = $('.icon__up')
const iconDown = $('.icon__down')
const toggleRightMenu = $$('.right__menu--active')
const toggleHeader = $(".header")
const modal = $('.modal')
const albumImage = $$('.album__img')

let modalActive = ""
let modalFigure = ""
let imgModal = ""
let modalPreviousButton = ""
let modalNextButton = ""
let closeModal = ""



this.window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 20) {
    toggleHeader.classList.add('header--active')
  } else {
    toggleHeader.classList.remove('header--active')
  }
})

function changeModalWidth() {
  if (rightMenu.classList[1] === 'right__menu--active') {
  } else {
    modal.classList.remove('modal__active')
  }
}
toggleRightMenu.forEach(button => {
  button.onclick = function () {
    rightMenu.classList.toggle('right__menu--active')
    mainNav.classList.toggle('main__nav--active')
    changeModalWidth()
    modalContainer.remove()

  }
})
iconUp.style.display = "none";
toggleListOption.forEach(button => {
  button.onclick = function () {
    listOption.classList.toggle('option--active')
    iconDown.style.display = "none"
    if (listOption.classList[1] === "option--active") {

      iconUp.style.display = "block"
      iconDown.style.display = "none"
    } else {
      iconUp.style.display = "none"
      iconDown.style.display = "block"
    }
  }
})
// console.log(albumImage)


function animationImgModal() {
  modalFigure.style.display = "none"
  setTimeout(function () { modalFigure.style.display = "flex" }, 100);

}
function changeShowImage(currentIndex) {
  animationImgModal()
  albumImage.forEach((tab, index) => {
    if (currentIndex === index) {
      imgModal.src = tab.children[0].currentSrc
    }

  })
}

let html = ``
buttonPopup.forEach((tab, index) => {
  tab.onclick = function () {
    let currentIndex = index;
    function changeImage(option) {
      if (option === "next") {
        currentIndex++;
        if (currentIndex === 6) {
          currentIndex = 0
        }
      } else {
        currentIndex--;
        if (currentIndex === -1) {
          currentIndex = 5
        }
      }
      changeShowImage(currentIndex)

    }
    modal.classList.add("modal__active")
    html = setShowImage(tab.children[0].currentSrc, index)
    modal.innerHTML = html
    if (modal.classList[1] === "modal__active") {

      modalFigure = $(".modal__figure")
      modalActive = $(".modal__active")
      modalContainer = $('.modal__container')
      imgModal = $(".modal__img-item")
      closeModal = $(".modal__close")
      modalPreviousButton = $('.modal__arrow--previous')
      modalNextButton = $('.modal__arrow--next')
      closeModal.onclick = function () {
        modal.classList.remove('modal__active')
        modalContainer.remove()
        // modalContainer.style.display="none!important"
        // rightMenu.classList.toggle('right__menu--active')
      }
      modalPreviousButton.onclick = function () {
        changeImage("previous")
      }
      modalNextButton.onclick = function () {
        changeImage("next")
      }
      modalFigure.onclick = function () {
        changeImage("next")
      }
    } else {

    }

  }

})




function setShowImage(src, index) {
  console.log(src)
  return ` 
        
            <div class="modal__container">
          <div class="modal__content">
            <div class="modal__arrow modal__arrow--previous">
                <div class="previous__button"></div>
            </div>
            <div class="modal__figure">
                    <button class="modal__close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                <div class="modal__img button__popup">
                    <img class="modal__img-item" alt="" src="${src}" style="max-height: 722px"/>
                    <div>
                        <div class="modal__bottom-bar">
                            <div class="modal__title"></div>
                            <div class="modal__counter">${1 + index} of 6</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal__arrow modal__arrow--next">
                <div class="next__button"></div>
            </div>
          </div>         
      
        </div>
        `
}

